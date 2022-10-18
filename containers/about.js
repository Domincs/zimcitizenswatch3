import { StatusDescriptionContainer } from "./status-description";

export function AboutContainer() {
    return(
        <div className="bg-gray-light pb-[10em] mt-[5em] md:mt-[10em] relative" id="about-section">
            <div className="container mx-auto">
                <div className="w-full m-auto text-center w-screen left-0 justify-center absolute mt-[-2.5em] px-6 md:px-0">
                    <h2 className="text-center text-[32px] md:text-[56px]">Welcome<br/>
                    to africancitizenswatch.org</h2>
                </div>
                <div className="max-w-2xl m-auto py-[3em] md:py-[7em] text-center px-6 md:px-0">
                    <span className="text-center">
                    One of the important tenets of democracy is the effectiveness of the state. It is against this backdrop that we have developed africancitizenswatch.org. This is a platform seeking to enhance the quality of democracy in different countries across Africa and contribute towards improved state delivery. This online tracking tool provides real-time information about the policy performance of government. Through this process, non-state actors have evidence that can help enhance their participation in public policy processes and provide citizens with meaningful opportunities to identify their needs, and priorities and give feedback on government performance. This is a precondition for inclusive societies.
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 pb-[6em] gap-6 px-6 md:px-0">
                    <div className="box-shadow p-6 rounded-[15px]">
                        Through the tracker we seek to highlight the following about democracy:
                        <ol className="list-decimal list-outside pl-8">
                            <li>Free and fair elections are a necessary but not sufficient condition for democracy</li>
                            <li>Active citizens are essential and play a critical part in nurturing democracy</li>
                            <li>The work of democracy is the work of citizens</li>
                            <li>Officeholders serve at the pleasure of citizens</li>
                        </ol>
                    </div>
                    <div className="box-shadow p-6 rounded-[15px]">
                        The hope in the short term is that the information collected and analysed through the trackers will achieve the following:
                        <ul className="list-disc list-outside pl-8">
                            <li>Enhance government accountability in terms of delivering on its own promises</li>
                            <li>Nurture processes and platforms of learning/hearing from citizens on their expectations</li>
                            <li>Shifting political narratives and discourses beyond personalities to policy issues</li>
                            <li>Encouraged increased participation and engagement of citizens in public policy processes</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col px-6 md:px-0">
                    <h2>Methodology</h2>
                    <h5 className="mb-8">How Do We Track</h5>
                    <div className="max-w-2xl">
                        <span>The promises that we are tracking are derived from the commitments that winning political parties made in their manifestos. We evaluate each promise using the scale below:</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-8">
                        <StatusDescriptionContainer
                            status="Implemented"
                            color="bg-implemented"
                            icon={`/icons/implemented.svg`}
                            description="These are promises that have been acted on and fully completed."
                        />

                        <StatusDescriptionContainer
                            status="In Progress"
                            color="bg-inprogress"
                            icon={`/icons/inprogress.svg`}
                            description="Actions that the government has commenced and is in the process of achieving."
                        />

                        <StatusDescriptionContainer
                            status="Not Commenced"
                            color="bg-notcommenced"
                            icon={`/icons/not_commenced.svg`}
                            description="These are promises that might remain not started and if they remain that way by end of the tracking cycle they will be classified as Unaccomplished."
                        />

                        <StatusDescriptionContainer
                            status="Modified"
                            color="bg-modified"
                            icon={`/icons/modified.svg`}
                            description="These are commitments that will be changed/modified due to some changed circumstances. We will do an analysis to determine how these undertakings compare to what was stated in the ruling party’s manifesto."
                        />

                        {/* <StatusDescriptionContainer
                            status="Incomplete"
                            color="bg-incomplete"
                            icon={`/icons/incomplete.svg`}
                            description="These are actions that are being acted on and not fully complete. This designation will only be applied to a promise if it remains not completed at the end of the tracking cycle."
                        /> */}

                        <StatusDescriptionContainer
                            status="Broken"
                            color="bg-broken"
                            icon={`/icons/broken.svg`}
                            description="These are promises that the government would have not made any action towards achieving or those rendered unachievable owning to contradictory policy positions."
                        />
                    </div>

                    <div className="max-w-2xl py-8">
                        <span className="leading-[26px]">
                        We will continue tracking the implementation of the promises until the final day in office of the elected government. However, beyond just tracking we will also measuring if the actions adopted have contributed to positive change and where possible identify the limitations.
                        </span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}