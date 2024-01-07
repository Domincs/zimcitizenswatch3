import cn from 'classnames';

type Props = {
    variant: "green" | "red" | "orange"
}
export const Dot = ({ variant }: Props) => {
    const classes = cn(
        "h-6 w-6 rounded-[50%]",
        {
            "bg-green-light": variant === "green"
        },
        {
            "bg-red": variant === "red"
        },
        {
            "bg-orange": variant === "orange"
        }
    );

    return (<div className={classes} />)
}