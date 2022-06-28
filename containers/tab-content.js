import { Bar } from "../charts/bar";
import { ButtonLink } from "../components/button-link";

export function TabContent({content, link, sector, summary }) {
    const data = [{
        sector: {sector},
        data: [
          { name: 'Kept', y: summary.kept, color: 'var(--sivio-kept)' },
          { name: 'Not Commenced', y: summary.not_commenced, color: 'var(--sivio-not-commenced)' },
          { name: 'Modified', y: summary.modified, color: 'var(--sivio-modified)' },
          { name: 'Broken', y: summary.broken, color: 'var(--sivio-broken)' },
          { name: 'Implemented', y: summary.implemented, color: 'var(--sivio-implemented)' }
        ],
    }]

    
    return(
        <div className="flex flex-col md:flex-row gap-4">
            <div className="basis-full md:basis-2/5 py-6 flex flex-col justify-around">
                <span>{content}</span>
                <ButtonLink link={link}>
                    <div className="border-b-[1.5px] text-green-light border-green-light flex flex-row gap-4">
                    <span>Explore the Data</span> <img src="/icons/right-arrow-green.svg" />
                    </div>
                </ButtonLink>
            </div>
            <div className="basis-full md:basis-3/5 py-6 px-4">
                <Bar
                    data={data}
                    title={sector}
                    pointWidth={30}
                    yAxisTitle='Total Promises'
                />
            </div>
        </div>
    )
}