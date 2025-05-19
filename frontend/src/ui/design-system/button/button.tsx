import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "primary" | "secondary" | "gray";
    inconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "primary",
    inconPosition = "right",
    disabled,
    isLoading,
    children,
}: Props) => {

    let variantStyle: string = "", 
        sizeStyles: string = "", 
        icoSize: number = 0;

    switch (variant) {
        case "primary": //Default
            variantStyle = "bg-primary hover:bg-primary-300 text-white rounded";
            break;
        case "secondary":
            variantStyle = "bg-primary-100 hover:bg-primary/50 text-primary rounded";
            break;
        case "outline":
            variantStyle = "bg-white hover:bg-gray-300/50 border border-gray-300 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyle = "bg-gray-200 border border-gray-200 text-gray-400 rounded cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "primary")
                variantStyle = "bg-primary hover:bg-primary-300 text-white rounded-full";
            if (iconTheme === "secondary")
                variantStyle = "bg-primary-100 hover:bg-primary/50 text-primary rounded-full";
            if (iconTheme === "gray")
                variantStyle = "bg-gray-400 hover:bg-gray-300 text-white rounded-full";
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
            }`;
            icoSize = 18;
            break;
        case "medium": //Default
            sizeStyles = `font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
            }`;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
            }`;
            icoSize = 24;
            break;
    }

    return (
        <>
            <button type="button"
                className={clsx(
                    variantStyle, 
                    sizeStyles, 
                    icoSize, 
                    isLoading && "cursor-wait",
                    "relative animate")}
                onClick={() => console.log("click")}
                disabled={disabled}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {variant === "primary" || variant === "ico" ? (<Spinner size="small" variant="white"/>) : (<Spinner size="small"/>)}
                    </div>
                )}

                <div className={clsx(
                    isLoading && "invisible"
                )}>
                    {icon && variant === "ico" ? (
                        <icon.icon size={icoSize}/>
                        ) : (
                        <div className={clsx(icon && "flex items-center gap-1")}>
                            {icon && inconPosition === "left" && (
                                <icon.icon size={icoSize}/>
                            )}
                            {children}
                            {icon && inconPosition === "right" && (
                                <icon.icon size={icoSize}/>
                            )}
                        </div>
                    )}
                </div>
            </button>
        </>
    )
}