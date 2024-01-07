import { ButtonLink } from "./button-link"
import { Box } from "./wrappers/box"

export const GetInvolved = () => {
    return (
        <Box className="w-full bg-green-light text-white py-12 flex flex-col gap-12">
            <div className='inline-grid w-fit '>
                <h3>Get Involved</h3>
                <span className='w-full h-1 bg-white rounded-md' />
            </div>

            <p>
                ZIMCITIZENSWATCH is a citizen-centric accountability tool for citizens to utilise in holding their elected government to the priorities that they see as necessary for the development of Zimbabwe. We would love to hear from you on how ZIMCITIZENSWATCH aids in your advocacy work, please contact us at info@sivioinstitute.org
            </p>
            <p>
                You can also TRACK with us by sharing content using the hashtag #zimcitizenswatch on social media or submit actions using the button below:
            </p>
            <ButtonLink href={"/"} variant='white' classNames='text-base'>
                submit a policy action
            </ButtonLink>

        </Box>
    )
}