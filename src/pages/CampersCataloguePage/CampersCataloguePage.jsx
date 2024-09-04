import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import css from './CampersCataloguePage.module.css';

export default function CampersCataloguePage() {
    return (
        <div className={css.container}>
           <FiltersBar/>
        </div>
    )
};