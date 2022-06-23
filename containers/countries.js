import { Button } from "../components/button"
import Link from 'next/link'

export function CountriesContainer() {
    const countries = [
        {country: "Malawi", link:"/malawi", flag: "flags/mw.svg", map: "maps/mw.svg"},
        {country: "Zambia", link:"/zambia", flag: "flags/zm.svg", map: "maps/zm.svg"},
        {country: "Zimbabwe", link:"/zimbabwe", flag: "flags/zw.svg", map: "maps/zw.svg"}
    ]
    return(
        <div className="relative grid grid-cols-3 divide-x divide-gray-divider box-shadow container border-radius m-auto z-10 bg-white">
            {
                countries.map ((item, idx) => (
                    <span className="grid grid-cols-2 place-content-center justify-items-center gap-4 py-6" key={idx}>
                        <span>{item.country}</span>
                        <span>
                        <img src={item.flag} alt="flag" className="h-6 drop-shadow-2xl"/>
                        </span>
                        <span className="col-span-2">
                            <img src={item.map} alt="map" className="h-[6em]"/>
                        </span>
                        <span className="col-span-2">
                            <Link href={item.link}>
                                <Button>
                                    <span className="flex flex-row gap-4 items-end">VIEW SUMMARY</span>
                                </Button>
                            </Link>
                        </span>
                    </span>
                ))
            }

        </div>

    )
}