import Link from 'next/link'

export function Breadcrumb({link}) {
    
    return (
        <a href={link} className="bg-gray-normal cursor-pointer rounded-[20px] tracking-[0.1em] px-4 py-1 flex flex-row gap-3">
            <img src="/icons/left-arrow-black.svg" />
            <span className="font-serif text-[10px] font-normal uppercase">return to tracker</span>
        </a>
    )
}