import { FilterBadge } from "../components/filter-badge";
import { PromiseItemContainer } from "./promise-item";
import moment from 'moment';

export function SectorPromisesContainer ({ keyNodes, promises, path }) {

    return (
        <div className="md:grid flex flex-col-reverse md:grid-cols-3">
            <div className="col-span-1 md:col-span-2 bg-gray-light py-6 rounded-r-[40px] ">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-6">
                     <h2 className="text-[32px] my-8">Arranged in order of latest update</h2>
                    {
                        promises.map((item, idx) => {
                            let color = `status-${item.promise_state}`
                            
                            return (<PromiseItemContainer 
                                key={idx} 
                                status={item.promise_state} 
                                promise={item.promise_title} 
                                color={color} 
                                icon="/icons/implemented.svg"
                                date={moment(item.source_date).format('DD-MMMM-YYYY')}
                                link={`${path}/${slug}`}
                                />)
                        })
                    }
                    
                </div>
            </div>
            <div className="flex flex-wrap h-fit gap-2 pl-6">
                {
                    keyNodes.map((item, idx) => (
                        <FilterBadge key={idx} active={item.active} text={item.text} /> 
                    ))
                }
            </div>
        </div>
    )
}