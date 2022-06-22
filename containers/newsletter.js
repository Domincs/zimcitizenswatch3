export function Newsletter() {
    return (
        <div className="flex flex-col gap-6 py-10 items-stretch">
            <div className="flex flex-row items-end">
                <img src="/icons/letter.svg" className="h-[67.3px]"/>
                <h5 className="uppercase font-normal tracking-[0.24em]">Newsletter</h5>
            </div>
            
            <h4 className="font-medium font-[32px]">Data delivered to your inbox</h4>
            <p>Stay in the loop with our latest updates.</p>
            <div className="flex flex-row gap-4">
                <input type="email" name="email" placeholder="Enter your email" className="bg-gray-normal ring-0 active:ring-0 active:ring-offset-0 outline-0 border-b grow placeholder:italic placeholder:leading-none placeholder:text-black" />
                <img src="/icons/orange-arrow.svg" className="h-[48px]" />
            </div>
            
            
        </div>
    )
} 