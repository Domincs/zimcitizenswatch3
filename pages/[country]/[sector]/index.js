import { useEffect, useState } from 'react';
import { SEO } from '../../../components/seo';
import { NavbarContainer } from '../../../containers/navbar';
import { SummaryOfPerformanceContainer } from '../../../containers/summary-of-performance';
import { capitalize } from '../../../lib/capitalize';
import moment from 'moment'
import { SectorPromisesContainer } from '../../../containers/sector-promises';
import { useRouter } from "next/router";
import axios from 'axios'
import { normalize } from '../../../lib/normalize';

export default function Home({sector, summary, promises}) {

  const { asPath } = useRouter();
  const [keyNodes, setKeyNodes] = useState([{ active: true, text: "All categories" }])
  const [statuses, updateStatus] = useState([
    {label: "Total Promises", value: summary.all, active: true},
    {label: "Kept", value: summary.kept, active: false},
    {label: "Not Commenced", value: summary.not_commenced, active: false},
    {label: "Modified", value: summary.modified, active: false},
    {label: "Broken", value: summary.broken, active: false},
    {label: "Implemented", value: summary.implemented, active: false}
  ])

  const [currentPromises, setPromises] = useState(promises)

  useEffect(() => {
    const nodes = promises.map(obj => {
      return obj.keynode_name
    })

    let nodesList =  Array.from(new Set(nodes))

    const listItems = nodesList.map((item) => {
      return {active: false, text: item }
    })

    setKeyNodes([...keyNodes, ...listItems])
  },[promises])


  const clickFilter = (id) => {
    const newStatus = statuses.map(obj => {
      if(obj.label === id) {
        return {...obj, active: true}
      }
      return {...obj, active: false}
    })
    updateStatus(newStatus)
    if(id === "Total Promises") {
      setPromises(promises)
    }
    else {
      const filtered = promises.filter(obj => normalize(obj.promise_state).toUpperCase() === id.toUpperCase())
      setPromises(filtered)
    }

  }

  return (
    <div className="static mb-[6em] px-4 md:px-0">
      <SEO title='Sector' />
      <NavbarContainer />
      <main className="">
        <div className="container m-auto my-12">
          <h1 className="text-[56px] md:text-[106px] leading-none">{capitalize(sector)}</h1>
        </div>
        <SummaryOfPerformanceContainer date={moment().format("LL")} statuses={statuses} onClick={clickFilter}/>
        <SectorPromisesContainer keyNodes={keyNodes} promises={currentPromises} path={asPath} />
        
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country, sector } = query
  let apiUrl = ''
  let countFrom = ''
  if(country === 'malawi') {
    apiUrl = process.env.MW_URL
    countFrom = process.env.MW_INAUGURATION
  }
  else if(country === 'zambia') {
    apiUrl = process.env.ZM_URL
    countFrom = process.env.ZM_INAUGURATION
  }

  const summary = (await axios.get(`${apiUrl}/${sector}/summary`)).data

  const promises = (await axios.get(`${apiUrl}/${sector}/promises`)).data

  return { sector, summary, promises }
}



// export async function getStaticPaths() {

//   const paths  = [
//     { params: { hj: 'malawi' }},
//     { params: { hj: 'zambia' }},
//   ]

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     const { hj } = params;

//   return {
//     props: {
//       hj
//     },
//     revalidate: 60,
//   };
// }