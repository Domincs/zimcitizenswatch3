import { Button } from "../components/button";

export function HeroContainer({country, description, link}) {
    return(
        <div className="grid min-h-[50vh] h-full grid-cols-2 content-end items-end container m-auto relative mb-[3em] pb-[3em]">
            <div>
                <h1 className="text-[106px] leading-none font-medium">{country}</h1>
                <h1 className="text-[106px] leading-none font-medium">Citizens</h1>
                <h1 className="text-[106px] leading-none font-medium">Watch</h1>
            </div>
            <div className="flex flex-col gap-4 py-6 items-end">
                <span className="flex flex-col items-start gap-6 max-w-md">
                    {description}
                    {
                        link !== undefined ?
                        <Button>
                            <span className="flex flex-row gap-4 items-end"><span>READ MORE</span><img src="/icons/down-arrow.svg" /></span>
                        </Button> 
                        :
                        <span />
                    }
                </span>
            </div>
        </div>
    )
}