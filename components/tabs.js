

export function Tabs({tabs, updateTab, ...rest}) {

    return (
        <div className="w-full my-6" {...rest}>
            <ul className="flex flex-row justify-between border-b border-[#0000001a]">
                {
                    tabs.map((item, idx) => (
                        <li key={idx} >
                            <a className="flex flex-col uppercase tracking-[0.24em]" href="#" onClick={(e)=>{
                                e.preventDefault()
                                updateTab(idx)
                                }}>
                                <span className="mb-2">{item.label}</span>
                                {
                                    item.active && <span className="rounded h-[6px] w-full bg-green-light" />
                                }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="w-full">
                {tabs.map((item, idx) => (
                    <div key={idx} className={`w-full ${(!item.active && `hidden`)}`}>
                        {item.content}
                    </div>
                ))}
            </div>

        </div>
    )
}
