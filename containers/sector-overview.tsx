import { Button } from "../components/button";
import { Tabs } from "../components/tabs";
import { useState } from "react";
import { ButtonLink } from "../components/button-link";

export const SectorOverview = () => {
    const [tabsList, updateActiveTab] = useState([
        {
            label: "Economy",
            active: true,
            content: <SectorsContent sectors={["job creation", "price stabilisation", "improving industry", "debt resolution", "mining", "domestic resolution"]} />
        },
        {
            label: "Governance",
            active: false,
            content: <SectorsContent sectors={["job creation", "price stabilisation", "improving industry", "debt resolution", "mining", "domestic resolution"]} />
        },
        {
            label: "Social Service",
            active: false,
            content: <SectorsContent sectors={["job creation", "price stabilisation", "improving industry", "debt resolution", "mining", "domestic resolution"]} />
        },
        {
            label: "Rural Development",
            active: false,
            content: <SectorsContent sectors={["job creation", "price stabilisation", "improving industry", "debt resolution", "mining", "domestic resolution"]} />
        },
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
        <div className="py-32 w-full bg-gray-light min-h-screen">
            <div className="container m-auto flex flex-col gap-12">
                <h2 className="leading-2 pb-20">Sectors Overview</h2>

                <div className="max-w-4xl">
                    <p>Under the 4 clusters (Economy, Governance, Social Services and Rural Development), ZIMCITIZENSWATCH assesses 14 priority areas. Each area is assessed based on the policy actions that government has taken, the state of legislation, the adequacy of budget allocation as well as a progress performance indicator. The SIVIO Institute is committed to assessing each area quarterly and is reliant on online updates through various digital news sources, press briefings and other official government statements to provide evidence.</p>
                </div>

                <Tabs tabs={tabsList} updateTab={updateTab} />
            </div>
        </div>
    )
}

const SectorsContent = ({ sectors }) => {

    return (
        <div className="py-8">
            <h3 className="my-8">Sub-sectors</h3>
            <div className="flex flex-row gap-8">
                <div className="w-2/3 flex flex-wrap gap-8">
                    {sectors.map((sector, key) => (
                        <Button key={key} variation="outline">
                            {sector}
                        </Button>
                    ))}


                </div>
                <div className="w-1/3 grid grid-cols-1 gap-8 content-end">
                    <ButtonLink href={'/'}>
                        Explore The Data
                    </ButtonLink>
                    <ButtonLink href={'/'}>
                        view nds1 promises on Economy
                    </ButtonLink>

                </div>
            </div>
        </div>
    )
}