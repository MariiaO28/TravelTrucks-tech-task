import LocationFilter from '../LocationFilter/LocationFilter';
import css from './FiltersBar.module.css';

export default function FiltersBar() {
    return (
        <div className = {css.container}>
            <LocationFilter/>
        </div>
    )
};