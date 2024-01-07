import { TitleIcon } from "components/title-icon";
import { Box } from "components/wrappers/box"

type Props = {
    title: string;
}

export const PageTitle = ({ title }: Props) => {
    return (
        <Box className="flex flex-col gap-2 container mx-auto my-12">
            <h2>{title}</h2>
            <TitleIcon />
        </Box>
    )
}