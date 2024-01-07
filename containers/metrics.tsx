import { Box } from '../components/wrappers/box'

export const Metrics = () => {
    return (
        <Box className="border-2 border-gray-light2 rounded-lg grid grid-cols-3 divide-x-2 divide-gray-light2">
            <Box className='flex flex-col divide-y-2 divide-gray-light2'>
                <Box className='flex flex-row gap-4 items-center px-5 py-2'>
                    <div className='bg-red rounded-[50%] w-6 h-6' />
                    <span>Red</span>
                </Box>
                <p className='px-5 py-3'>
                    Metrics in red indicated that no progress or effort has been made towards addressing this sub-sector. This is still an area of concern
                </p>
            </Box>
            <Box className='flex flex-col divide-y-2 divide-gray-light2'>
                <Box className='flex flex-row gap-4 items-center px-5 py-2'>
                    <div className='bg-orange rounded-[50%] w-6 h-6' />
                    <span>Orange</span>
                </Box>
                <p className='px-5 py-3'>
                    Metrics in orange are where efforts being implemented need to be enhanced and strengthened to
                    truly address the concern
                </p>
            </Box>
            <Box className='flex flex-col divide-y-2 divide-gray-light2'>
                <Box className='flex flex-row gap-4 items-center px-5 py-2'>
                    <div className='bg-green-darker rounded-[50%] w-6 h-6' />
                    <span>Green</span>
                </Box>
                <p className='px-5 py-3'>
                    Metrics in green are heading in the right direction as policy actions are working to address and
                    mitigate the issues that citizens highlighted
                </p>
            </Box>
        </Box>
    )
}