import wave from "../../assets/images/wave.svg"
import { SocialButtons } from "../SocialButtons/SocialButtons"
import Styles from "./styles.module.css"

export function Footer() {
    
    return(
         <footer className={Styles.rodape}>
            <img src={wave} aria-hidden="true"/>
            <div className={Styles.footer_items}>
                <span className={Styles.copy}>
                    &copy 2025 Finder@v.2
                </span>
                <SocialButtons/>        
            </div>  
    </footer>
    )
}