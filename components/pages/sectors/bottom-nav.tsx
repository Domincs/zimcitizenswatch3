import { Box } from "components/wrappers/box";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const BottomNav = () => {
    return (
        <Box className=" bg-gray-light w-full py-8">
            <Box className="w-full container m-auto grid grid-cols-2">
                <Box className="flex flex-row">
                    <IoIosArrowBack className="text-[7em] text-green-light" />
                    <Box className="grid grid-col">
                        <span className="uppercase">Previous Cluster</span>
                        <h2>Social Services</h2>
                    </Box>
                </Box>
                <Box className="flex flex-row-reverse">
                    <IoIosArrowForward className="text-[7em] text-green-light" />
                    <Box className="grid grid-col">
                        <span className="uppercase">Next Cluster</span>
                        <h2>Social Services</h2>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

