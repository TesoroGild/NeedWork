import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import { Container } from "../container/container"
import { ActiveLink } from "./active-link"

interface Props {

}

export const Navbar = ({ }: Props) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-2 gap-8">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div className="font-display">logo</div>
                        <div className="flex flex-col">
                            <div className="text-black ">
                                NEEDWORK
                            </div>
                            {/*Au besoin si description en dessous du nom de l'app*/}
                            {/* <Typography
                                variant="caption3"
                                component="span"
                                className="text-gray-600"
                            >
                                Lorem ipsum dolor sit amet
                            </Typography> */}
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-8">
                    <Typography 
                        variant="caption3" 
                        component="span" 
                        className="flex items-center gap-6"
                    >
                        <ActiveLink href="/design-system">DS</ActiveLink>
                        <span>A propos</span>
                        <ActiveLink href="/messaging">Messages</ActiveLink>
                        <ActiveLink href="/job-offers">Offres d'emplois</ActiveLink>
                        <ActiveLink href="/profile">Profil</ActiveLink>
                        <span>Langue</span>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small">
                            Connexion
                        </Button>
                        <Button size="small" variant="secondary">
                            Inscription
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}