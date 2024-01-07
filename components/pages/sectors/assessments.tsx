import { Dot } from "components/dot"
import { Box } from "components/wrappers/box"

export const Assessments = () => {
    const rows = [
        "Job Creation", "Resuscitating Industry", "Improving Infrastructure"
    ];

    return (
        <Box className="w-full container mx-auto flex flex-col gap-8">
            <h2>Assessments</h2>
            <Box className="w-full grid grid-cols-4 gap-6">
                <Box className="col-start-2 col-span-3 flex justify-evenly w-full">
                    <TitleSection titles={["LEGISLATION", "budget", "Actions", "performance"]} />
                </Box>
                <Box className="col-span-1 grid grid-col py-6">
                    {
                        rows.map((item, key) => <span className="h-10 flex items-center m-0" key={key}>{item}</span>)
                    }
                </Box>
                <Box className="col-span-3 py-6" style={{ "boxShadow": "0px 10px 45px 0px rgba(55, 76, 91, 0.15)" }}>
                    <Box className="w-full flex justify-evenly h-10 items-center">
                        <Dot variant="green" />
                        <Dot variant="red" />
                        <Dot variant="orange" />
                        <Dot variant="orange" />
                    </Box>
                    <Box className="w-full flex justify-evenly h-10 items-center">
                        <Dot variant="orange" />
                        <Dot variant="green" />
                        <Dot variant="red" />
                        <Dot variant="orange" />
                    </Box>
                    <Box className="w-full flex justify-evenly h-10 items-center">
                        <Dot variant="green" />
                        <Dot variant="red" />
                        <Dot variant="orange" />
                        <Dot variant="orange" />
                    </Box>

                </Box>


            </Box>

        </Box>
    )

}

const TitleSection = ({ titles }) => {
    return (
        <Box className="w-full flex justify-evenly">
            {
                titles.map((item, key) => {
                    return (<span key={key} className="uppercase font-sans">{item}</span>)
                })
            }
        </Box>
    )
}