import React, { useState, useEffect } from 'react';
import './styles/navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miCuenta, setMiCuenta] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isProductosRoute, setIsProductosRoute] = useState(false);

  useEffect(() => {
    // Lógica para determinar si es la ruta de productos
    setIsProductosRoute(window.location.pathname.includes('/productos'));
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const abrirMiCuenta = () => setMiCuenta(!miCuenta);

  const cerrarSesion = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="flex-column">
      {isProductosRoute && (
        <div className="transformacionTop">
          <img
            src="/images/butterfly.png"
            type="png"
            alt="Mariposa Azul"
            style={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          El espacio para que suceda TU transformación
          <img
            src="/images/butterfly.png"
            type="png"
            alt="Mariposa Azul"
            style={{ width: '20px', height: '20px', marginLeft: '10px' }}
          />
        </div>
      )}
      <nav className={`navbar ${isProductosRoute ? 'productos-route' : ''}`}>
        <div className="menu_box" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        {isProductosRoute && (
          <div id="buscador">
            <div className="search-container">
              <input type="text" placeholder="Buscar..." />
              <i className="fas fa-search"></i>
            </div>
          </div>
        )}
        <div className="logo">
          <a href="/">
            <img src="/images/Group 40.png" 
            type="png" alt="Panambi" />
          </a>
        </div>
        {!isProductosRoute && (
          <div className="user_box" onClick={abrirMiCuenta}>
            <i className="fas fa-user"></i>
          </div>
        )}
        {miCuenta && (
          <div className={`miCuenta ${miCuenta ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`}>
            <ul className="navCuenta">
              {isLoggedIn ? (
                <>
                  <div className="mensaje-bienvenida">
                    <span>Bienvenide, {userName}</span>
                  </div>
                  <li onClick={cerrarSesion}>
                    <a>Cerrar mi sesión</a>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={abrirMiCuenta}>
                    <a href="/login">Ingresar a mi cuenta</a>
                  </li>
                  <li onClick={abrirMiCuenta}>
                    <a href="/login/register">Crear una cuenta</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
      {isMenuOpen && (
        <div className={`sidebar-menu ${isMenuOpen ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}`}>
          <div className="menu-content">
            <a href="/" onClick={toggleMenu}>
              <i className="fas fa-home"></i> Inicio
            </a>
            <a href="/productos" onClick={toggleMenu}>
              <i className="fas fa-shopping-cart"></i> Tienda
            </a>
            <a href="/cursos" onClick={toggleMenu}>
              <i className="fas fa-graduation-cap"></i> Cursos
            </a>
            <a href="/foro" onClick={toggleMenu}>
              <i className="fas fa-comments"></i> Foro
            </a>
            <a href="/contacto" onClick={toggleMenu}>
              <i className="fas fa-user"></i> Contacto
            </a>
          </div>
          <div className="copyright">
            <a href="/">
              <img src="/images/Group 40.png" type="png" alt="Panambi" />
            </a>
            <p>Panambi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;