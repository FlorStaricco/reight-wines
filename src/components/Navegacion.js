import { NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"
import "../index.css"



const Navegacion = () => {
  
  const [expand, setExpand] = useState(false)



  return (
    <NavContenedor>

      <LogoContenedor>
        <NavLink to="/" className="navItem" onClick={()=> setExpand (!expand)}>
          <img src={logoNav} alt="Reight" height="90px" width="100px" /></NavLink>
      </LogoContenedor>
      
      <LinksContenedor open={expand}>
        <NavLink exact to="/bebidas" className="navItem" activeClassName="active" onClick={()=> setExpand (!expand)}>Bebidas</NavLink>
        <NavLink exact to="/nosotros" className="navItem" activeClassName="active" onClick={()=> setExpand (!expand)}>Nosotros</NavLink>
        <NavLink exact to="/gift" className="navItem" activeClassName="active" onClick={()=> setExpand (!expand)}>Gift</NavLink>
        <NavLink exact to="/contacto" className="navItem" activeClassName="active" onClick={()=> setExpand (!expand)}>Contacto</NavLink>

      </LinksContenedor>
  

      <IconosContenedor >
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>

        <div onClick={()=> setExpand (!expand)}>

          <BotonHamburguesa />
        </div>
      </IconosContenedor>
      
    </NavContenedor>
  )
}

export default Navegacion

  const NavContenedor = styled.nav`
    background-color: var(--orange);
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    position: relative;
  `;

  const LogoContenedor = styled.div`
    padding: 1%;
    width:15%;
  `;

  const LinksContenedor = styled.div`

    background-color: var(--orange);
    position: absolute;
    top: 15vh;
    left: ${({open}) => (open ? "0" : "-100%")};
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:10px;
    padding: 10% 0;
    transition: 0.5s all ease;
    z-index:9999;
    
    @media screen and (min-width: 768px){
      position: initial;
      height: 15vh;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 1rem;
      top: 0vh;
    }
    
  `;

  const IconosContenedor = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--dark);
    gap: 2rem;
    margin-right: 3rem;
  `;
