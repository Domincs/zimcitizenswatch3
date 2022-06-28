import { ButtonLink } from "../components/button-link";

export function TabContent({content, link}) {
    return(
        <div className="flex flex-col md:flex-row gap-4">
            <div className="basis-full md:basis-2/5 py-6 flex flex-col justify-around">
                <span>{content}</span>
                <ButtonLink link={link}>
                    <div className="border-b-[1.5px] text-green-light border-green-light flex flex-row gap-4">
                    <span>Explore the Data</span> <img src="/icons/right-arrow-green.svg" />
                    </div>
                </ButtonLink>
            </div>
            <div className="basis-full md:basis-3/5 py-6 px-4">
                <img src="/icons/placeholder.svg" className="w-full max-w-md" />
            </div>
        </div>
    )
}