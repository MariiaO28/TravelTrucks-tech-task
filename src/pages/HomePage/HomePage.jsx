import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1 className={css.header}>Campers of your dreams</h1>
            <h2 className={css.subtext}>You can find everything you want in our catalog</h2>
            <button className={css.button}>
                <NavLink to='/catalog'>View Now</NavLink>
            </button>
        </div>
    )
};