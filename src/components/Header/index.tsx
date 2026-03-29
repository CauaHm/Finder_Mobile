import { useState } from 'react';
import type { NavItem } from '../../Models/NavItem';
import {  Link, useLocation, useNavigate } from 'react-router-dom'; 
import styles from './styles.module.css';
import logo from '../../assets/images/logoFinder.png';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); 

  const handleToggle = () => setActive(!active);

  const handleLogout = () => {
    logout();
    setActive(false); 
    navigate("/"); 
  };

  const allNavItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Produtos", path: "/products" },
    { name: "Favoritos", path: "/favorites" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Link to="/"> 
                <img src={logo} alt="Logo Finder" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${active ? styles.navActive : ''}`}>
          <button onClick={handleToggle} className={styles.btnClose}>
            <FaXmark />
          </button>
          
          <ul className={styles.ulLink}>
            {allNavItems.map((item) => {
              if (item.name === "Favoritos" && !isAuthenticated) {
                return null;
              }

              return (
                <li key={item.name}>
                  <Link 
                    to={item.path || "/"}  
                    className={`${styles.link} ${pathname === item.path ? styles.activeLink : ''}`} 
                    onClick={() => setActive(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            <li>
              {isAuthenticated ? (
                <span 
                  className={styles.link} 
                  onClick={handleLogout}
                  style={{ cursor: 'pointer' }}
                >
                  Sair
                </span>
              ) : (
                <Link 
                  to="/login" 
                  className={`${styles.link} ${pathname === '/login' ? styles.activeLink : ''}`}
                  onClick={() => setActive(false)}
                >
                  Entrar
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <button onClick={handleToggle} className={styles.btnMobile}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}