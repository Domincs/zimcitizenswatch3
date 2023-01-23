import Image from "next/image";
import moment from 'moment'
import { HorizontalBar } from "../charts/horizontal-bar";
import { LineGraph } from "../charts/linegraph";
import { Treemap } from "../charts/treemap";
import { ExpansionFilter } from "../components/expansion-filter";
import { IconButton } from "../components/icon-button";

export function GraphContainer({ updateChartButton, chartButton, reportPeriod, treemapData, barChartData, lineChartData, promiseAreas, statuses, sources }) {
 
 
    return (
        <div className="bg-gray-normal py-[3em]">
            <div className="container m-auto bg-white border-radius p-6 box-shadow flex flex-col">
                <div className="grid grid-cols-10 w-full px-4 gap-12">
                    <div className="grid grid-cols-10 col-span-10">
                        <div className="col-span-10 md:col-span-7">
                            <h4 className="text-[18px] lg:text-[32px]">Explore performance from {moment(reportPeriod[0].startDate).format("ll")} to {moment(reportPeriod[0].endDate).format("ll")}</h4>
                        </div>
                        {/* <div className="col-span-10 md:col-span-3 flex justify-between">
                            <Image src="/icons/filter-icon.svg" width={31.48} height={28.18} className=""/>
                            <h4 className="text-[18px] lg:text-[32px]">Interact with the data</h4>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-10 w-full px-4 gap-12 overflow-scroll">
                    <div className="col-span-7 min-w-[10em]">
                        { chartButton.filter(obj => obj.active === true)[0].name === 'treemap' && <Treemap data={treemapData} /> }
                        {
                        chartButton.filter(obj => obj.active === true)[0].name === 'line-graph' &&
                        <LineGraph 
                            xAxis="Promises"
                            yAxis="Number"
                            series={lineChartData}
                        />
                        }
                        { chartButton.filter(obj => obj.active === true)[0].name === 'horizontal-bar' && <HorizontalBar 
                            data={barChartData}
                            yAxisTitle="Number of Promises" 
                        /> }
                        
                    </div>
                    <div className="col-span-3 flex flex-rows">
                        <img src="/icons/graph-arrow.svg" className="h-full" />
                        <div className="grid grid-columns w-full gap-1">
                            <div className="flex flex-col bg-gray-normal p-6">
                                <span className="tracking-[0.24em] text-[16px]">SELECT CHART</span>
                                <div className="flex justify-start gap-6">
                                    {
                                        chartButton.map((item, idx) => <IconButton key={idx} img={item.icon} active={item.active} onClick={()=> updateChartButton(idx)} disabled={item.disabled} />
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col bg-gray-normal p-6">
                                <span className="tracking-[0.24em] text-[16px]">SELECT DATA</span>
                                <ExpansionFilter label="By status" options={statuses} />
                                <ExpansionFilter label="By promise area" options={promiseAreas} />
                                <ExpansionFilter label="By source" options={sources}/>
                            </div>
                        </div>
                        
                    </div>

                </div>
                

            </div>
        </div>
    )
}