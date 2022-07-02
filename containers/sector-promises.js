import { FilterBadge } from "../components/filter-badge";
import { PromiseItemContainer } from "./promise-item";
import moment from 'moment';

export function SectorPromisesContainer ({ keyNodes, promises, path }) {

    return (
        <div className="md:grid flex flex-col-reverse md:grid-cols-3">
            <div className="col-span-1 md:col-span-2 bg-gray-light py-6 rounded-0 md:rounded-r-[40px] ">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-6 flex flex-col gap-6">
                     <h2 className="text-[20px] md:text-[32px] my-8">Arranged in order of latest update</h2>
                    {
                        promises.map((item, idx) => {
                            let color
                            
                            if(item.promise_state === 'implemented') {
                                color = `bg-implemented`
                            }
                            else if(item.promise_state === 'kept') {
                                color = `bg-kept`
                            }
                            else if(item.promise_state === 'not_commenced') {
                                color = `bg-notcommenced`
                            }
                            else if(item.promise_state === 'modified') {
                                color = `bg-modified`
                            }
                            else if(item.promise_state === 'broken') {
                                color = `bg-broken`
                            }
                            
                            return (<PromiseItemContainer 
                                key={idx} 
                                status={item.promise_state} 
                                promise={item.promise_title} 
                                color={color} 
                                icon={`/icons/${item.promise_state}.svg`}
                                date={item.source_date && moment(item.source_date).format('DD-MMMM-YYYY')}
                                link={`${path}/${item.slug}`}
                                />)
                        })
                    }
                    
                </div>
            </div>
            <div className="flex flex-wrap h-fit gap-2 pl-0 md:pl-6 pd-6">
                {
                    keyNodes.map((item, idx) => (
                        <FilterBadge key={idx} active={item.active} text={item.text} /> 
                    ))
                }
            </div>
        </div>
    )
}