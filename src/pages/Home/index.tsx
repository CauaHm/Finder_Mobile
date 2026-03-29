import { SectionAbout } from "../../components/SectionAbout";
import { SectionAboutDoWeDo } from "../../components/SectionAboutDoWeDo";
import { SectionServices } from "../../components/SectionServices";
import { SectionContact } from "../../components/SectionContact";
import { MainTamplates } from "../../Templates/MainTampletes";

export function Home() {
    return( 
           <>
            <MainTamplates>
                <SectionAbout/>
                <SectionAboutDoWeDo/>
                <SectionServices/>
                <SectionContact />
            </MainTamplates>
           </>
    )
}