import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { MobileNav } from './styles'

const Nav = ({categories}) => {
    console.log('from nav component', categories)
    return (
        <div>
            <nav className="red darken-1">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">El Baratón</a>
                <ul className="right hide-on-med-and-down">
                {categories.map(categorie => (
                    <li key={categorie.id}><a href="#">{categorie.name}</a></li>
                ))}
                </ul>
            </div>
            </nav>
            <MobileNav>
                {categories.map(categorie => (
                    <li key={categorie.id}><a href="#">{categorie.name}</a></li>
                ))}
            </MobileNav>
        </div>
    )
}

export default Nav