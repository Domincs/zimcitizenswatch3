import { Tabs } from "components/tabs"
import { Box } from "components/wrappers/box"
import { useState } from "react"

export const ActionsTaken = () => {
    const [tabsList, updateActiveTab] = useState([
        {
            label: "NDS 1 Promises",
            active: true,
            content: ""
        },
        {
            label: "Actions and Assessment",
            active: false,
            content: ""
        },
        {
            label: "Legislation",
            active: false,
            content: ""
        },
        {
            label: "Budget",
            active: false,
            content: ""
        },
        {
            label: "Performance",
            active: false,
            content: ""
        }
    ])
    return (
        <Box className="w-full bg-gray-light">
            <Tabs className="container mx-auto pt-5" tabs={tabsList} updateTab={() => { }} />
        </Box>
    )
}