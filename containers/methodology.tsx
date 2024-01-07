import { LeftBox } from '../components/wrappers/left-box'
import { RightBox } from '../components/wrappers/right-box'
import { Box } from '../components/wrappers/box'
import { Metrics } from './metrics';
import { GetInvolved } from 'components/get-involved';

export const Methodology = () => {
    return (
        <Box className='flex flex-row'>
            <LeftBox className={"py-12 pr-12"}>
                <GetInvolved />
            </LeftBox>
            <RightBox primary={false} className='flex flex-col gap-16 py-12 px-20 max-3xl'>
                <Box>
                    <h2 className="leading-2 pb-4">Methodology</h2>
                    <span className='uppercase font-serif'>How do we track</span>
                </Box>

                <Box className='flex flex-col gap-8'>
                    <p>
                        The methodology is a shift from manifesto-based promises to tracking the policy actions of government against the areas that citizens have highlighted as their priorities. This new ZIMCITIZENSWATCH will track 14 priority areas classified under 4 clusters namely Economy, Social Services, Governance and Rural Development. The tracking will be done quarterly and will incorporate a triangulation of assessment at the legislative level, the budget level and a metric of performance or progress. The method of tracking will continue to capture online updates through various digital news sources, press briefings and other official government statements.
                    </p>
                    <p>
                        The annual CPE surveys have shown that citizens have remained consistent in what they seek to see government prioritizing. Citizens&apos; priorities are also reflected in the government&apos;s own commitments, as aligned with some of the strategies outlined in the National Development Strategy (NDS 1).
                    </p>
                </Box>

                <Metrics />



            </RightBox>

        </Box>
    )
}