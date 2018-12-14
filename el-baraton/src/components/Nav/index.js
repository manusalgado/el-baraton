import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

const Nav = () => {
    return (
        <div>
            <nav className="red darken-1">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">El Baratón</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Bebidas</a></li>
                    <li><a href="#">Desayunos</a></li>
                    <li><a href="#">Almuerzos</a></li>
                    <li><a href="#">Vinos</a></li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Nav