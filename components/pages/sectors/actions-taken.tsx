import { Tabs } from "components/tabs"
import { Box } from "components/wrappers/box"
import { useState } from "react"

export const ActionsTaken = () => {
    const [tabsList, updateActiveTab] = useState([
        {
            label: "Economy",
            active: true,
            content: ""
        },
        {
            label: "Governance",
            active: false,
            content: ""
        },
        {
            label: "Social Service",
            active: false,
            content: ""
        },
        {
            label: "Rural Development",
            active: false,
            content: "" 
        },
    ])
    return (
        <Box className="w-full">
            <Tabs tabs={tabsList} updateTab={()=>{}} />

        </Box>
    )
}