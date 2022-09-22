import { Statuses } from "./constants"
import moment from 'moment'
import { capitalize } from "./capitalize"

export const GraphsData = (data, start, end, promiseArea="all", status="all", source="all") => {
    let treeMapDataObj = []
    let barChartDataObj = [{
        data: []
    }]
    let lineChartDataObj = []

    const statuses = Statuses.map(el => {
        return el.toLowerCase().replace(" ", "_")
    })

    //apply Filters for promise area
    let cleanedData = data
    if(promiseArea !== 'all') {
        cleanedData = Object.keys(data)
        .filter(key => key === promiseArea)
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    }

    const allData = [].concat.apply([], Object.values(cleanedData));

    //filter by status name
    let filteredAllData = allData
    if(status !== 'all') {
        filteredAllData = filteredAllData.filter(el => el.promise_state === status)
    }

    if(source !== 'all') {
        filteredAllData = filteredAllData.filter(el => el.source_name === source)
    }
    


    

    let filteredData = filteredAllData.map(el => {
        const date = new Date(el.source_date)
        return {...el, month: moment(date).format('MMM-YYYY')}
    })

    const startDate = moment(start)

    const endDate = moment(end)

    let currentMonth = startDate
    let dateList = []

    while(endDate > currentMonth) {
        dateList.push(currentMonth.format("MMM-YYYY"))
        currentMonth.add(1, 'months')
    }
    dateList.push(endDate.format("MMM-YYYY"))
    const dateListArray =  [... new Set(dateList)]

    const totalsVal = dateListArray.map(item => {
        const elCount = filteredData.filter(el => el.month === item).length
        return([item, elCount])
    })


    lineChartDataObj.push({ title: "All Categories", data: totalsVal, color: `var(--sivio-blue)`})

    statuses.map(status => {
        const currentObject = filteredData.filter(el => el.promise_state === status)
        const promiseCount = currentObject.length
        treeMapDataObj.push({name: capitalize(status.replace("_", " ")), value: promiseCount, colorValue: promiseCount})
        barChartDataObj[0].data.push({name: capitalize(status.replace("_", " ")), y: promiseCount, color: `var(--sivio-${status.replace("_","-")})`})

        const totalBySector = dateListArray.map(item => {
            const elCount = currentObject.filter(el => el.month === item).length
            return([item, elCount])
        })
    
    
        lineChartDataObj.push({ title:  capitalize(status.replace("_", " ")), color: `var(--sivio-${status.replace("_","-")})`, data: totalBySector})
    })

    //source
    const allSources = filteredData.map(el => {
        return el.source_name
    })
    const sourcesList = [...new Set(allSources)]

    return { treeMapDataObj, barChartDataObj, lineChartDataObj, sourcesList }
}