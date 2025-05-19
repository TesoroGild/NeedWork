import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({href, children}: Props) => {
    const router = useRouter();
    return (
        <Link href={href} className={clsx()}>
            {children}
        </Link>
    );
};