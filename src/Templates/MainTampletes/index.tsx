import type React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from './styles.module.css';

type MainTamplatesProps = {
    children: React.ReactNode
}

export function MainTamplates({children}: MainTamplatesProps) {
    return(
        
        <div className={styles.mainTemplateContainer}> 
            <Container>       
                <Header/>
            </Container>

           
            <main className={styles.mainContent}>
                {children}
            </main>
            
            <Container>
                <Footer/>
            </Container>
        </div>
    )
}