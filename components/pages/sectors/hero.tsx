import { Box } from "components/wrappers/box";
import { LeftBox } from "components/wrappers/left-box";
import { capitalize } from "lib/capitalize"
import { normalize } from 'lib/normalize';
import Image from "next/image"

type Props = {
    image: string,
    sector: string
}
export const Hero = (
    { image, sector }: Props
) => {
    return (
        <div className="relative min-h-[50vh] flex items-center">
            <LeftBox>
                <h1 className="text-[56px] relative z-40 md:text-[106px] leading-none">{capitalize(normalize(sector))}</h1>
            </LeftBox>
            
            <Box className="w-full absolute z-20 h-full right-0 top-0" style={{ background: "linear-gradient(270deg, rgba(255, 255, 255, 0.00) -19.74%, #FFF 50%)" }}>

            </Box>
            <Image src={image} layout={"fill"} className="absolute z-10 right-0 top-0" objectFit={"contain"} objectPosition={"right"} alt="" />
            
        </div>
    )
}