import { motion } from 'motion/react';
import { BsPencilSquare } from "react-icons/bs";
import styles from './styles.module.css';
import { GenericHtml } from '../GenericHtml';
import { Cards } from '../Cards';

export function SectionServices() {
  return (
    <section className={styles.section}>
      <GenericHtml titulo='O que oferecemos para' tituloGrifado='sua empresa?'>
        <Cards title='Aumento da presença digital' paragraph='conectando sua loja a novos clientes.'/>
        <Cards title='Integração ao sistema de busca e comparação de preços' paragraph='tornando seus produtos mais acessíveis e competitivos.'/>
        <Cards title='Plataforma intuitiva e eficiente' paragraph='proporcionando uma experiência otimizada para comerciantes e consumidores.'/>
        <Cards title='Promoção do crescimento do comércio local' paragraph='utilizando tecnologia para melhorar a visibilidade e vendas do seu negócio.'/>
        <Cards title='Geolocalização da loja física' paragraph='facilitando a localização pelos clientes e impulsionando o fluxo de visitantes.'/>
      </GenericHtml>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}  
        className={styles.rightSection}
        >
           <ul className={styles.list_itens}>
                <li><BsPencilSquare /><span>Presença digital</span></li>
                <li><BsPencilSquare /><span>Acesso a clientes</span></li>
                <li><BsPencilSquare /><span>Competitividade local</span></li>
                <li><BsPencilSquare /><span>Conversão de vendas</span></li>
                <li><BsPencilSquare /><span>Integração de produtos</span></li>
                <li><BsPencilSquare /><span>Aumento de visitantes</span></li>
                <li><BsPencilSquare /><span>Crescimento sustentável</span></li>
                <li><BsPencilSquare /><span>Maior visibilidade</span></li>
                <li><BsPencilSquare /><span>Expansão do negócio</span></li>
                <li><BsPencilSquare /><span>Facilidade de compra</span></li>
                <li><BsPencilSquare /><span>Fortalecimento do mercado</span></li>
                <li><BsPencilSquare /><span>Aprimoramento logístico</span></li>
                <li><BsPencilSquare /><span>Conectividade comercial</span></li>
                <li><BsPencilSquare /><span>Melhoria na experiência</span></li>
                <li><BsPencilSquare /><span>Suporte ao varejo</span></li>
            </ul>
    </motion.div>
    </section>
  );
}