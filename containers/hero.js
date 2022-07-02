import { Button } from "../components/button";

export function HeroContainer({country, description, link, ...rest}) {
    return(
        <div className="grid min-h-[35em] h-full grid-cols-1 md:grid-cols-2 content-center items-end container m-auto relative mb-[3em] pb-[1em] px-6 md:px-0" {...rest}>
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
                            <span className="flex flex-row gap-4 items-end items-between px-3 py-2">
                                <span>READ MORE</span>
                                <img src="/icons/down-arrow.svg" />
                            </span>
                        </Button> 
                        :
                        <span />
                    }
                </span>
            </div>
        </div>
    )
}