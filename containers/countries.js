import { Button } from "../components/button"

export function CountriesContainer() {


    const countries = [
        {country: "Malawi", link:"/malawi", flag: "flags/mw.svg", map: "maps/mw.svg", target:"_self"},
        {country: "Zambia", link:"/zambia", flag: "flags/zm.svg", map: "maps/zm.svg", target:"_self"},
        {country: "Zimbabwe", link:"https://zimcitizenswatch.org", flag: "flags/zw.svg", map: "maps/zw.svg", target:"_blank"}
    ]
    return(
        <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x divide-gray-divider box-shadow container border-radius m-auto z-10 bg-white">
            {
                countries.map((item, idx) => (
                    <span className={`grid grid-cols-2 place-content-center justify-items-center gap-4 py-6`} key={idx}>
                        <span>{item.country}</span>
                        <span>
                        <img src={item.flag} alt="flag" className="h-6 drop-shadow-2xl"/>
                        </span>
                        <span className="col-span-2 mt-0 md:mt-[5em]">
                            <img src={item.map} alt="map" className="h-[6em]"/>
                        </span>
                        <span className="col-span-2">
                            <Button>
                                <a className="flex flex-row gap-4 text-[10px]" href={item.link} target={item.target} {...(item.target === '_blank' && { rel: "noreferrer" })}>
                                VIEW SUMMARY
                                </a>
                            </Button>
                        </span>
                    </span>
                ))
            }

        </div>

    )
}