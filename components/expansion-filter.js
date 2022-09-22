import { useState } from "react";
import Image from "next/image";


export function ExpansionFilter ({ label, options }) {
    const [expanded, setExpanded] = useState(false)
    return(
        <div>
            <button className="text-[16px]" onClick={() => setExpanded(!expanded)}>
                    <Image src={!expanded? '/icons/plus-sign.svg': '/icons/minus-sign.svg'} height={11.5} width={11.5}/> {label}
            </button>
        </div>
    )
}