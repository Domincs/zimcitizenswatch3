import { Tabs } from "./tabs";
import { useState } from "react"
import { TabContent } from "../containers/tab-content";

export const PromisesAreaContainer = ({ country, economy, governance, corruption, climate_change, social_service }) => {
    const total = economy.all + governance.all + corruption.all + climate_change.all + social_service.all

    let econPer = ((economy.all/total)*100).toFixed(0)
    let econComp = (economy.implemented/economy.all*100).toFixed(0)
    let govPer = ((governance.all/total)*100).toFixed(0)
    let govComp = (governance.implemented/governance.all*100).toFixed(0)
    let corrPer = ((corruption.all/total)*100).toFixed(0)
    let corrComp = (corruption.implemented/corruption.all*100).toFixed(0)
    let climPer = ((climate_change.all/total)*100).toFixed(0)
    let climComp = (climate_change.implemented/climate_change.all*100).toFixed(0)
    let socPer = ((social_service.all/total)*100).toFixed(0)
    let socComp = (social_service.implemented/social_service.all*100).toFixed(0)

    const [tabsList, updateActiveTab] = useState([
        {label: "Economy", active: true, content: <TabContent content={`Economy constitutes ${econPer}% of the total promises made. ${econComp}% of these promises have been completed to date.`} link={`${country}/economy`} summary={economy} sector="Economy" />},
        {label: "Governance", active: false, content: <TabContent content={`Governance constitutes ${govPer}% of the total promises made. ${govComp}% of these promises have been completed to date.`} link={`${country}/governance`} summary={governance} sector="Governance" />},
        {label: "Corruption", active: false, content: <TabContent content={`Corruption constitutes ${corrPer}% of the total promises made. ${corrComp}% of these promises have been completed to date.`} link={`${country}/corruption`} summary={corruption} sector="Corruption" />},
        {label: "Climate Change", active: false, content: <TabContent content={`Climate Change constitutes ${climPer}% of the total promises made. ${climComp}% of these promises have been completed to date.`} link={`${country}/climate_change`} summary={climate_change} sector="Climate Change" />},
        {label: "Social Service", active: false, content: <TabContent content={`Social Service constitutes ${socPer}% of the total promises made. ${socComp}% of these promises have been completed to date.`} link={`${country}/social_service`} summary={social_service} sector="Social Service" />},
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
            <h2 className="text-[32px] md:text-[56px] my-4">Promise Area</h2>
            <Tabs tabs={tabsList} updateTab={updateTab} />

        </div>
    )
}