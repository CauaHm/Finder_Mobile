import { motion } from 'motion/react';
import { BsPencilSquare } from "react-icons/bs";
import styles from './styles.module.css';
import { GenericHtml } from '../GenericHtml';

export function SectionAboutDoWeDo() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}  
        className={styles.leftSection}
        >
           <ul className={styles.list_itens}>
                <li><BsPencilSquare /><span>Plataforma Inovadora</span></li>
                <li><BsPencilSquare /><span>Interface intuitiva</span></li>
                <li><BsPencilSquare /><span>Comparação de preços</span></li>
                <li><BsPencilSquare /><span>Busca detalhada</span></li>
                <li><BsPencilSquare /><span>Geolocalização de lojas</span></li>
            </ul>
    </motion.div>
    
    <div className={styles.textContainer}>
      <GenericHtml titulo='O que' tituloGrifado='fazemos?'>
          <p>
            O Finder é uma plataforma que conecta consumidores a diversas lojas locais, oferecendo uma experiência intuitiva e prática. Com comparação de preços em tempo real, os usuários encontram as melhores ofertas disponíveis na região. Além disso, a busca detalhada de produtos facilita a navegação e a escolha dos itens desejados. Para maior comodidade, o carrinho de compras virtual permite adicionar produtos de diferentes lojas em uma única compra. Também utilizamos geolocalização para ajudar os clientes a localizarem os estabelecimentos físicos com facilidade. Nosso objetivo é otimizar a experiência de compra local, promovendo o comércio regional e facilitando o acesso a produtos e serviços de forma eficiente.
          </p>
        </GenericHtml>
    </div>
    </section>
  );
}