import { Box } from "components/wrappers/box";
import { ButtonLink } from "../components/button-link";


type Props = {
    promise: string;
    description: string;
    sources: { name: string, link: string }[];
    submitted: string;
}

export function PromiseItemContainer({ promise, description, sources, submitted }: Props) {

    return (
        <Box className="grid grid-cols-1 md:grid-cols-4 py-8 px-12 box-shadow Boxide-x-2 Boxide-gray-light2 border-radius min-h-[168px] bg-white gap-6">
            <Box className="col-span-3 flex flex-col gap-8">
                <h4>{promise}</h4>
                <p>{description}</p>
                <Box className="flex flex-row gap-12">
                    <span className="uppercase font-sans text-sm">Source</span>
                    <Box className="flex flex-row gap-6">
                        {sources.map((item, key) => (
                            <ButtonLink classNames="text-sm" variant={"classic"} key={key} href={item.link}>
                                {item.name}
                            </ButtonLink>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box className="col-span-1 flex items-start">
                <span className="uppercase font-sans text-gray-darker">{submitted}</span>
            </Box>
        </Box>
    )
}