import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const activeClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.navigation} > 
          <NavLink to='/' className={activeClass}>Home</NavLink>
          <NavLink to='/catalog' className={activeClass}>Catalog</NavLink>
        </nav>
    )
};