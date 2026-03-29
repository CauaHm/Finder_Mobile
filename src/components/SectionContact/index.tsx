import { useState } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/images/logoFinder.png'; 
import { DefaultButton } from '../DefaultButton';
import { motion } from "framer-motion";

export function SectionContact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Simulação de envio de formulário!');
    setNome('');
    setEmail('');
    setCel('');
    setMsg('');
  };

  return (
    <section className={styles.contact}>

      <motion.div
        className={styles.finderContact} 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.sectionTitle}>
            Sua loja no digital: mais vendas, mais visibilidade! <span>Entre em contato</span>
        </h2>
        <img
          className={`${styles.finderLogo} ${styles.imgUpDown}`}
          src={logo}
          alt="Logo Finder"
        />
      </motion.div>

      <motion.div
        className={styles.contactSocial}
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="cel">Celular</label>
            <input type="tel" id="cel" value={cel} onChange={(e) => setCel(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="msg">Alguma duvida?</label>
            <textarea id="msg" value={msg} onChange={(e) => setMsg(e.target.value)} required />
          </div>
          <DefaultButton value="Enviar" />
        </form>
      </motion.div>
    </section>
  );
}