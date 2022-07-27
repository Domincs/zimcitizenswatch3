
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export function FooterContainer() {
    gsap.registerPlugin(ScrollToPlugin)

    const scrollToTop = (e) => {
        e.preventDefault();
    
        gsap.to(window, {
            scrollTo: {
                y: 0,
                autoKill: false
            },
            duration: 2
        });
    }
    return(
        <div className="flex flex-col overflow-hidden">
            <button className="bg-blue text-white text-center py-2" onClick={scrollToTop}>
                Back to top
            </button>
            <div className="flex flex-col md:flex-row container m-auto py-4 px-6 md:p-0">
                <div className="shrink max-w-[12em] py-4">
                    <p className="text-[16px] leading-none">
                        This platform was made possible by the generous assistance of our following partners:
                    </p>
                </div>
                <div className="grid grow grid-cols-3 gap-6">
                    <div className={'image-container'}>
                        <img src={"/icons/charter.svg"} className="w-full" />
                    </div>
                    <div className={'image-container'}>
                        <img src={"/icons/european_union.svg"} className="w-full" />
                    </div>
                    <div className={'image-container'}>
                        <img src={"/icons/giz.svg"} className="w-full" />
                    </div>

                </div>
            </div>
            
            <div className="py-6 text-center">
                {new Date().getFullYear()}, SIVIO Institute
            </div>

        </div>
    )
}