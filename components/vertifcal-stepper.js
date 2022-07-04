import Link from "next/link";

export function VerticalStepper ({items, progress}) {

    return (
        <div className="anchor-list-container" data-v-654f459c="">
            <div className="row" data-v-654f459c="">
                <div className="xxlarge-16 columns" data-v-654f459c="">
                <div className="anchor-list-wrapper" data-v-654f459c="">
                    <span className="line-wrapper" data-v-654f459c="">
                    <span className="line" data-v-654f459c="" style={{transform: `translate(0%, -${100-progress*100}%) translate3d(0px, 0px, 0px)`, willChange: 'transform'}}></span>
                    </span>
                    <ul className="anchor-list" data-v-654f459c="">
                    {
                        items.map((item, idx) => (
                            <Link href={`#${item.name}`} key={idx}>
                            <li className={`anchor-list-item ${item.active && 'active'}`} data-v-654f459c="">
                                <span className="btn p-caption" data-v-654f459c="">
                                <span className="ball" data-v-654f459c=""></span>{item.name}</span>
                            </li>
                            </Link>
                        ))
                    }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="wrapper">
    //     <ol className={`c-stepper`}>
    //         {
    //             items.map((item, idx) => (
    //                 <li key={idx} className={`${item.active ? "c-stepper__item_completed" : "c-stepper__item"}` }>
    //                     <a className="c-stepper__content" href={item.link}>
    //                         <span className={item.active ? "text-black" : "text-gray-divider" }>{item.name}</span>
    //                     </a>
    //                 </li>
    //             ))
    //         }
    //     </ol>
    //     </div>
    // )
}

{/* <div className="anchor-list-container" data-v-654f459c="">
            <div className="row" data-v-654f459c="">
                <div className="xxlarge-16 columns" data-v-654f459c="">
                <div className="anchor-list-wrapper" data-v-654f459c="">
                    <span className="line-wrapper" data-v-654f459c="">
                    <span className="line" data-v-654f459c="" style={{transform: 'translate(0%, -30.9762%) translate3d(0px, 0px, 0px)', willChange: 'transform'}}></span>
                    </span>
                    <ul className="anchor-list" data-v-654f459c="">
                    <li className="anchor-list-item active" data-v-654f459c="">
                        <span className="btn p-caption" data-v-654f459c="">
                        <span className="ball" data-v-654f459c=""></span> Create or Upload Invoice </span>
                    </li>
                    <li className="anchor-list-item active" data-v-654f459c="">
                        <span className="btn p-caption" data-v-654f459c="">
                        <span className="ball" data-v-654f459c=""></span> Create Link or E-mail </span>
                    </li>
                    <li className="anchor-list-item active" data-v-654f459c="">
                        <span className="btn p-caption" data-v-654f459c="">
                        <span className="ball" data-v-654f459c=""></span> Send </span>
                    </li>
                    <li className="anchor-list-item last" data-v-654f459c="">
                        <span className="btn p-caption" data-v-654f459c="">
                        <span className="ball" data-v-654f459c=""></span> Get Paid </span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div> */}