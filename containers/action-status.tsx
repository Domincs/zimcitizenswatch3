import { HorizontalStepper } from "components/horizontal-stepper";
import { Box } from "components/wrappers/box"

type Props = {
    promise: string;
}
export const ActionStatus = ({ promise }: Props) => {
    const steps = [
        {
            name: "Drafted",
            active: true,
        },
        {
            name: "Presented to Parliament",
            active: true,
        },
        {
            name: "National Assembly",
            active: false,
        },
        {
            name: "Senate",
            active: false,
        },
        {
            name: "President",
            active: false,
        },
        {
            name: "gazetted",
            active: false,
        }
    ];
    const completedSteps = 3; // For example, 3 steps completed
    return (
        <Box className="grid grid-cols-1 py-8 px-12 box-shadow Boxide-x-2 Boxide-gray-light2 border-radius min-h-[168px] bg-white gap-6">
            <h4>{promise}</h4>
            {/* <Timeline steps={steps} completedSteps={completedSteps} /> */}
            <HorizontalStepper items={steps} progress={50} onClick={() => { }} />

        </Box>
    )
}