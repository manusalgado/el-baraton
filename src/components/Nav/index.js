import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { MobileNav } from './styles'
import { Dropdown, Menu } from 'semantic-ui-react'

const Nav = ({categories}) => {
    console.log('from nav component', categories)
    return (
        <div>
            <nav className="red darken-1 pinned main-z-index">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">El Baratón</a>
                <ul className="right hide-on-med-and-down">
                {categories.map(categorie => (
                    <li key={categorie.id} className='padding-helper'>
                        <Menu horizontal>
                            <Dropdown item text={categorie.name}>
                            <Dropdown.Menu>
                                {categorie.sublevels.map(subCategorie => (
                                    <Dropdown.Item>{subCategorie.name}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </li>
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