import { Tabs } from "./tabs";
import { useState } from "react"

export const PromisesAreaContainer = () => {

    const [tabsList, updateActiveTab] = useState([
        {label: "Economy", active: true, content: ""},
        {label: "Governance", active: false, content: ""},
        {label: "Corruption", active: false, content: ""},
        {label: "Climate Change", active: false, content: ""},
        {label: "Social Service", active: false, content: ""},
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
        <div className="flex flex-col container m-auto">
            <h2 className="text-[56px] my-4">Promise Area</h2>
            <Tabs tabs={tabsList} />

        </div>
    )
}