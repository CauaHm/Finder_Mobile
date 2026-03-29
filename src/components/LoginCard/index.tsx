import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaUser, FaEnvelope, FaLock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../contexts/AuthContext';
import styles from './styles.module.css';

export function LoginCard() {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const { login } = useAuth();

  const handleToggle = () => setIsSignInActive(!isSignInActive);

  const API_BASE_URL = "http://localhost:5000"; 
  const navigate = useNavigate(); 

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      
      if (res.ok) {
        login(data.token);
        navigate("/products");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await res.json();
      
      if (res.ok) {
        alert("Conta criada com sucesso! Fazendo login automático...");
        
        const loginRes = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: registerEmail, password: registerPassword }),
        });
        const loginData = await loginRes.json();
        
        if (loginRes.ok) {
            login(loginData.token);
            navigate("/products");
        } else {
            setIsSignInActive(true); 
        }

      } else {
        alert(data.message || "Erro no cadastro");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.containerLogin}>
        <div className={styles.contentLogin}>
          <div className={`${styles.firstColumn} ${styles.column}`}>
            {isSignInActive ? (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titlePrimary}`}>Bem-vindo!</h2>
                <p className={`${styles.descriptionLogin} ${styles.descriptionPrimary}`}>Não possui uma conta?</p>
                <button onClick={handleToggle} className={`${styles.btnLogin} ${styles.btnPrimary}`}>Criar</button>
              </>
            ) : (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titlePrimary}`}>Olá, amigo!</h2>
                <p className={`${styles.descriptionLogin} ${styles.descriptionPrimary}`}>Já esta conosco?</p>
                <button onClick={handleToggle} className={`${styles.btnLogin} ${styles.btnPrimary}`}>Entrar</button>
              </>
            )}
          </div>
          <div className={`${styles.secondColumn} ${styles.column}`}>
            {isSignInActive ? (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Faça login no Finder</h2>
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>
                <p className={`${styles.descriptionLogin} ${styles.descriptionSecond}`}>ou use sua conta de email:</p>
                <form onSubmit={handleLogin} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                  </label>
                  <a className={styles.passwordLogin} href="#">esqueceu sua senha?</a>
                  <button type="submit" className={`${styles.btnLogin} ${styles.btnSecond}`}>Entrar</button>
                </form>
              </>
            ) : (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Crie uma conta</h2>
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>
                <form onSubmit={handleRegister} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaUser className={styles.iconModify} />
                    <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                  </label>
                  <button type="submit" className={`${styles.btnLogin} ${styles.btnSecond}`}>Criar</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.containerLoginMobile}>
        {isSignInActive ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={styles.formLoginMobile}>
              <label>
                <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
              </label>
              <label>
                <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
              </label>
              <button type="submit" className={styles.btnLoginMobile}>Entrar</button>
            </form>
            <p>Ainda não tem conta? <a href="#" onClick={handleToggle}>Cadastre-se</a></p>
          </>
        ) : (
          <>
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister} className={styles.formLoginMobile}>
              <label>
                <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
              </label>
              <label>
                <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
              </label>
              <label>
                <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
              </label>
              <button type="submit" className={styles.btnLoginMobile}>Cadastrar</button>
            </form>
            <p>Já tem uma conta? <a href="#" onClick={handleToggle}>Faça login</a></p>
          </>
        )}
      </div>
    </main>
  );
}