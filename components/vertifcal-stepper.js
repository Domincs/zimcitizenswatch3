
export function VerticalStepper ({items}) {





    return (
        <div className="wrapper">
        <ol className={`c-stepper`}>
            {
                items.map((item, idx) => (
                    <li key={idx} className={`${item.active ? "c-stepper__item_completed" : "c-stepper__item"}` }>
                        <a className="c-stepper__content" href={item.link}>
                            <span className={item.active ? "text-black" : "text-gray-divider" }>{item.name}</span>
                        </a>
                    </li>
                ))
            }
        </ol>
        </div>
    )
}