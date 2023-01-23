
import { SEO } from '../../components/seo'
import { NavbarContainer } from '../../containers/navbar'
import { capitalize } from '../../lib/capitalize'
import { FooterContainer } from '../../containers/footer'
import { ReportFilterContainer } from '../../containers/report-filter'
import { GraphContainer } from '../../containers/graph-container'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { PromiseAreas, Statuses } from '../../lib/constants'
import axios from 'axios'
import { GraphsData } from '../../lib/data-builder'

export default function Home({ country, allSources, summary, start, end, apiUrl }) {


  const [dateState, setDateState] = useState([
    {
      startDate: new Date(start),
      endDate: new Date(end),
      key: 'selection'
    }
  ])

  const [summaryData, setSummaryData] = useState(summary)
  const [promiseArea, setPromiseArea] = useState([])
  const [statuses, setStatuses] = useState([])
  const [sources, setSources] = useState(allSources)
  const [treemapData, setTreemapData] = useState([])
  const [barChartData, setBarChartData] = useState([])
  const [lineChartData, setLineChartData] = useState([])

  const [currentPromiseArea, setCurrentPromiseArea] = useState('all')
  const [currentStatus, setCurrentStatus] = useState('all')
  const [currentSource, setCurrentSource] = useState('all')

  const [chartButton, setChartButton] = useState([
    { icon: "/icons/treemap-icon.svg", active: true, disabled: false, name: 'treemap' },
    { icon: "/icons/horizontal-bar.svg", active: false, disabled: false, name: 'horizontal-bar' },
    { icon: "/icons/line-graph.svg", active: false, disabled: lineChartData.length > 0 && lineChartData[0].data.length > 1? true: false , name: 'line-graph' }
  ])

  useEffect(() => {
    let areas = [{label: "All", value: "all", active: true}]
    PromiseAreas.map(item => {
      areas.push({label: item, value: item.replace(" ", "_").toLowerCase(), active: false})
    })
    setPromiseArea(areas)

    let statusVals = [{label: "All", value: "all", active: true}]
    Statuses.map(item => {
      statusVals.push({label: item, value: item.replace(" ", "_").toLowerCase(), active: false})
    })
    setStatuses(statusVals)
    toogleChartButton()
    updateCharts()
    
  }, [])

  useEffect(()=> {
    updateSummaryData()
  }, [dateState])

  useEffect(() => {
    updateCharts()
  }, [summaryData])

  useEffect(() => {
    toogleChartButton()
  }, [lineChartData])

  useEffect(()=> {
    const { treeMapDataObj, barChartDataObj, lineChartDataObj } = GraphsData(summary, dateState[0].startDate, dateState[0].endDate, currentPromiseArea, currentStatus, currentSource)

    setTreemapData(treeMapDataObj)
    setBarChartData(barChartDataObj)
    setLineChartData(lineChartDataObj)

  }, [currentPromiseArea,currentStatus,currentSource])

  const updateSummaryData = async() => {
    const data = (await axios.post(`${apiUrl}/detailed-summary`, {
      start: moment(dateState[0].startDate).format("YYYY-MM-DD"), 
      end: moment(dateState[0].endDate).format("YYYY-MM-DD")
    })).data
    setSummaryData(data)
  }
  const toogleChartButton = () => {
    const updated = chartButton.map(item => {
      if(item.name === 'line-graph' && lineChartData.length > 0 && lineChartData[0].data.length > 1) {
        return {...item, disabled: false}
      }
      else if(item.name === 'line-graph') {
        return {...item, disabled: true}
      }
      else {
        return item
      }
    })
    setChartButton(updated)

  }

  const updateCharts = () => {
    const { treeMapDataObj, barChartDataObj, lineChartDataObj, sourcesList } = GraphsData(summaryData, dateState[0].startDate, dateState[0].endDate)

    console.log({ treeMapDataObj, barChartDataObj, lineChartDataObj })

    setTreemapData(treeMapDataObj)
    setBarChartData(barChartDataObj)
    setLineChartData(lineChartDataObj)
    let sourcesVal = [{ label: "All", value: "all", active: true}]
    sourcesList.map(el => 
      sourcesVal.push({label: el, value: el, active: false})
    )
    setSources(sourcesVal)
  }

  const updateChartButton = (id) => {
    let btnCopy = [...chartButton]
    btnCopy.map(a=>a.active=false)
    btnCopy[id].active = true
    setChartButton(btnCopy)
  }

  const updateFilter = (id, name) => {
    if(name === "promise_area") {
      let old = [...promiseArea]
      old.map(a=>a.active=false)
      old[id].active = true
      setCurrentPromiseArea(old[id].value)
      setPromiseArea(old)
    }

    if(name === "status") {
      let old = [...statuses]
      old.map(a=>a.active=false)
      old[id].active = true
      setCurrentStatus(old[id].value)
      setStatuses(old)
    }

    if(name === "source") {
      let old = [...sources]
      old.map(a=>a.active=false)
      old[id].active = true
      setCurrentSource(old[id].value)
      setSources(old)
    }
    
  }


  return (
    <div className="static px-4 md:px-0">
      <SEO title={`${capitalize(country)} Reports`} />
      <NavbarContainer />
      <main className="">
        <div className="container m-auto my-12">
          <h2 className="text-[32px] md:text-[56px] leading-none py-8">Report of Performance</h2>
          <ReportFilterContainer dateState={dateState} setDateState={setDateState} promiseArea={promiseArea} statuses={statuses} sources={sources} updateFilter={updateFilter} />
        </div>
        <GraphContainer
          updateChartButton={updateChartButton}
          chartButton={chartButton}
          reportPeriod={dateState}
          treemapData={treemapData}
          barChartData={barChartData}
          lineChartData={lineChartData}
          promiseAreas={promiseArea}
          statuses={statuses}
          sources={sources}
        />
        <FooterContainer />
        
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country } = query
  let apiUrl = ''
  if(country === 'malawi') {
    apiUrl = process.env.MW_URL
  }
  else if(country === 'zambia') {
    apiUrl = process.env.ZM_URL
  }
  const start = moment().startOf('month').format("YYYY-MM-DD")
  const end = moment().format("YYYY-MM-DD")

  const summary = (await axios.post(`${apiUrl}/detailed-summary`, {start, end})).data



  return { country, summary, start, end, apiUrl }
}
