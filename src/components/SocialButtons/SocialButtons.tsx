import Styles from "./styles.module.css"

import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import type {NavItem} from "../../Models/NavItem"

export function SocialButtons() {
    const navItems: NavItem[] = [
        {href: "#", icon: <FaInstagram/>},
        {href: "#", icon: <FaWhatsapp/>},
        {href: "#", icon: <FaEnvelope/>},

    ]

    const renderNavItems = () => {
            return navItems.map((i, ) => {
                return <li key={i.name} className={Styles.social_buttons}><a href={i.href}>{i.icon}</a></li>
            })
        }
    return(
        <ul className={Styles.social}>
         {renderNavItems()}
        </ul>
    )
}