import Link from "next/link";

export function VerticalStepper ({items, progress, onClick}) {

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
                            <button data-link={`#${item.name}`} key={idx} onClick={(e) => onClick(e, `#${item.name}`)}>
                                <li className={`anchor-list-item ${item.active && 'active'}`} data-v-654f459c="">
                                    <span className="btn p-caption" data-v-654f459c="">
                                    <span className="ball" data-v-654f459c=""></span>{item.name}</span>
                                </li>
                            </button>
                        ))
                    }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )

}
