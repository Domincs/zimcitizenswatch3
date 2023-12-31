import { Button } from "../components/button"

export function CountriesContainer({ anchorClick }) {


    const countries = [
        {country: "Malawi", link:"/malawi", flag: "flags/mw.svg", map: "maps/mw.svg", target:"_self"},
        {country: "Zambia", link:"/zambia", flag: "flags/zm.svg", map: "maps/zm.svg", target:"_self"},
        {country: "Zimbabwe", link:"https://zimcitizenswatch.org", flag: "flags/zw.svg", map: "maps/zw.svg", target:"_blank"}
    ]
    return(
        <div className="relative grid grid-cols-3 divide-x divide-gray-divider box-shadow container border-radius m-auto z-10 bg-white countries-container flex flex-nowrap">
            {
                countries.map((item, idx) => (
                    <span className={`grid grid-cols-2 place-content-center justify-items-center gap-4 py-6`} key={idx}>
                        <span className="text-[10px] md:text-[20px]">{item.country}</span>
                        <span>
                        <img src={item.flag} alt="flag" className="h-4 md:h-6 drop-shadow-2xl"/>
                        </span>
                        <span className="col-span-2 mt-0 md:mt-[5em]">
                            <img src={item.map} alt="map" className="h-[3em] md:h-[6em]"/>
                        </span>
                        <span className="col-span-2">
                            <Button>
                                <a className="flex flex-row gap-4 text-[10px] mx-2 md:px-8 py-1 md:py-2" href={`#${item.country}`} onClick={(e)=> anchorClick(e, `#${item.country}`)}>
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