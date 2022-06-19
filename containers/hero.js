import { Button } from "../components/button";

export function HeroContainer() {
    return(
        <div className="grid min-h-[50vh] h-full grid-cols-2 content-end items-end container m-auto relative">
            <div>
                <h1 className="text-[106px] leading-none font-medium">African</h1>
                <h1 className="text-[106px] leading-none font-medium">Citizens</h1>
                <h1 className="text-[106px] leading-none font-medium">Watch</h1>
            </div>
            <div class="flex flex-col gap-4 py-6 items-baseline">
                <span>
                an independent platform that tracks the performance and effectiveness of of African governments based on the pledges made in the manifesto and other important policy pronouncements.
                </span>
                <Button>
                    <span className="flex flex-row gap-4 items-end"><span>READ MORE</span><img src="icons/down-arrow.svg" /></span>
                </Button>

            </div>
        </div>
    )
}