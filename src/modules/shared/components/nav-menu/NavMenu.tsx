import React from 'react'
import { NavMenuUser } from './NavMenuUser'
import { NavMenuSearch } from './NavMenuSearch'

export const NavMenu = () => {
    return (
        <nav className='navbar'>
            <div className="nav__container">
                <NavMenuSearch/>
                <NavMenuUser />
            </div>
        </nav>
    )
}
