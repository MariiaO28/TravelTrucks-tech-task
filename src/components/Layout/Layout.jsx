import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import css from './Layout.module.css';

export default function Layout({children}) {
    return(
        <div className={css.container}>
            <Navigation>
                <Suspense fallback>
                    {children}
                </Suspense>
            </Navigation>
        </div>
    )
};