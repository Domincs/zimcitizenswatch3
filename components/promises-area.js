import { Tabs } from "./tabs";
import { useState } from "react"
import { TabContent } from "../containers/tab-content";

export const PromisesAreaContainer = ({ country }) => {

    const [tabsList, updateActiveTab] = useState([
        {label: "Economy", active: true, content: <TabContent content="Economy constitutes one third of the total promises made. `${x}%` of these promises have been completed to date." link={`${country}/economy`} />},
        {label: "Governance", active: false, content: <TabContent content="Governance constitutes one third of the total promises made. `${x}%` of these promises have been completed to date." link={`${country}/governance`} />},
        {label: "Corruption", active: false, content: <TabContent content="Corruption constitutes one third of the total promises made. `${x}%` of these promises have been completed to date." link={`${country}/corruption`} />},
        {label: "Climate Change", active: false, content: <TabContent content="Climate Change constitutes one third of the total promises made. `${x}%` of these promises have been completed to date." link={`${country}/climate_change`} />},
        {label: "Social Service", active: false, content: <TabContent content="Social Service constitutes one third of the total promises made. `${x}%` of these promises have been completed to date." link={`${country}/social_service`} />},
    ])

    const updateTab = (id) => {
        let tempTabs = [...tabsList]
        var currentIndex = tempTabs.findIndex(x => x.active == true)
        let element = tempTabs[id]
        let currentElement = tempTabs[currentIndex]
        currentElement.active = false
        element.active = true
        tempTabs[id] = element
        tempTabs[currentIndex] = currentElement
        updateActiveTab(tempTabs)
    }
    
    return (
        <div className="flex flex-col container m-auto px-6 md:px-0">
            <h2 className="text-[56px] my-4">Promise Area</h2>
            <Tabs tabs={tabsList} updateTab={updateTab} />

        </div>
    )
}