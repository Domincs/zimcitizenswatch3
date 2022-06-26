
export function VerticalStepper ({items}) {





    return (
        <div className="wrapper">
        <ol className={`c-stepper`}>
            {
                items.map((item, idx) => (
                    <li key={idx} className={`${item.active ? "c-stepper__item_completed" : "c-stepper__item"}` }>
                        <div className="c-stepper__content">
                            <span className={item.active ? "text-black" : "text-gray-divider" }>{item.name}</span>
                        </div>
                    </li>
                ))
            }
        </ol>
        </div>
    )
}