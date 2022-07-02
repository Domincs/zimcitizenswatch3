
export function PromiseHistory({ title, description, link, source, source_date }) {
    return (
        <div className="flex flex-col gap-4 p-10 bg-white rounded-[20px]">
            <h5 className="font-semibold">{ title }</h5>
            <span dangerouslySetInnerHTML={{__html: description}} />
            {
                link && 
                <div className="bg-gray-normal rounded-[20px] tracking-[0.1em] px-4 py-1 flex flex-row gap-3">
                    <img src="/icons/link.svg" />
                    <a href={link} className="underline font-semibold" target="_blank" rel="noreferrer">
                        { source }
                    </a>
                    <span className="base-font">Published: { source_date }</span>
                    
                </div>
            }
            
        </div>
    )
}