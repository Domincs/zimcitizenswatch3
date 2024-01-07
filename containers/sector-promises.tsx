import { Box } from "components/wrappers/box";
import { FilterBadge } from "../components/filter-badge";
import { PromiseItemContainer } from "./promise-item";
import moment from 'moment';
import { RightBox } from "components/wrappers/right-box";
import { GetInvolved } from "components/get-involved";
import { Assessments } from "components/pages/sectors/assessments";
import { BottomNav } from "components/pages/sectors/bottom-nav";
import { Button } from "components/button";
import { FaArrowDown } from "react-icons/fa";
import { LeftBox } from "components/wrappers/left-box";
import { ActionStatus } from "./action-status";

export function SectorPromisesContainer({ keyNodes, promises, currentNode, path, currentStatus, filterKeyNode }) {
    const promises1 = [
        {
            promise_title: "iufbvis uisubvisbdvibsivusivbi",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae non minus aliquid quaerat, quis modi libero facere ullam? Maxime excepturi adipisci nisi, explicabo molestias inventore ipsam minima! Eligendi, est!",
            submitted: "2023-10-10",
            sources: [{ name: "Herald", link: "https://herald.com" }, { name: "NewsDay", link: "https://herald.com" }]
        },
        {
            promise_title: "iufbvis uisubvisbdvibsivusivbi",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae non minus aliquid quaerat, quis modi libero facere ullam? Maxime excepturi adipisci nisi, explicabo molestias inventore ipsam minima! Eligendi, est!",
            submitted: "2023-10-10",
            sources: [{ name: "Herald", link: "https://herald.com" }, { name: "NewsDay", link: "https://herald.com" }]
        }
    ]

    return (
        <>
            <Box className="md:grid flex flex-col md:grid-cols-3 gap-8">
                <Box className="col-span-1 flex flex-col md:col-span-2 bg-gray-light py-6 rounded-0 md:rounded-r-[40px] justify-end gap-6">
                    <LeftBox primary={false} full className="pr-6 flex flex-col gap-6 w-full max-w-5xl">
                        <span className="w-max">
                            <h2 className="text-[20px] md:text-[32px] my-8">Arranged in order of latest update</h2>
                        </span>

                        {
                            promises1?.map((item, idx) => {

                                return (<PromiseItemContainer
                                    key={idx}
                                    promise={item.promise_title}
                                    description={item.description}
                                    submitted={item.submitted && moment(item.submitted).format('DD-MMMM-YYYY')}
                                    sources={item.sources}
                                />)
                            })
                        }

                        <ActionStatus promise="gshbsfhb sgwsgbxgs gg rgb " />

                    </LeftBox>
                    <LeftBox primary={false} full className="w-full justify-start container mx-auto">
                        <Button variation="outline" className="w-fit flex flex-row gap-3 text-base">
                            <span>Read More</span> <FaArrowDown />
                        </Button>
                    </LeftBox>
                </Box>
                <Box className="flex flex-col gap-8">
                    <Box className="flex flex-wrap h-fit gap-2 pl-0 md:pl-6 pd-6 max-w-sm">
                        {
                            keyNodes.map((item, idx) => (
                                <FilterBadge key={idx} active={item.active} text={item.text} filterKeyNode={filterKeyNode} />
                            ))
                        }
                    </Box>
                    <RightBox full={true} className="py-12 pl-12" >
                        <GetInvolved />
                    </RightBox>

                </Box>
            </Box>
            <Box className="w-full">
                <Assessments />
            </Box>
            <BottomNav />
        </>
    )
}