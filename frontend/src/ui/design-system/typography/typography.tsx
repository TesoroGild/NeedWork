import clsx from "clsx";

interface Props {
    variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-base" | "body-sm" | "caption" | "caption1" | "caption2" | "caption3" | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    weight?: "regular"| "medium";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3", 
    component: Component = "div",
    weight = "regular",
    className,
    children}: Props) => {

    let variantStyles: string = "";

    switch (variant) {
        case "display":
            variantStyles = "text-6xl font-bold";
            break;
        case "h1":
            variantStyles = "text-4xl font-bold";
            break;
        case "h2":
            variantStyles = "text-3xl font-bold";
            break;
        case "h3":
            variantStyles = "text-2xl font-bold";
            break;
        case "h4":
            variantStyles = "text-xl font-bold";
            break;
        case "h5":
            variantStyles = "text-lg font-bold";
            break;
        case "lead":
            variantStyles = "text-lg";
            break;
        case "body-base":
            variantStyles = "text-base";
            break;
        case "body-sm":
            variantStyles = "text-sm";
            break;
        case "caption":
            variantStyles = "text-xs";
            break;
        case "caption1":
            variantStyles = "text-xs";
            break;
        case "caption2":
            variantStyles = "text-xs";
            break;
        case "caption3":
            variantStyles = "text-xs";
            break;
        case "caption4":
            variantStyles = "text-xs";
            break;
    }

    return (
        <Component className={clsx(
            variantStyles,
            className
        )}>
            {children}
        </Component>
    );
}