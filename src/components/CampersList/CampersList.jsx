import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCampersByLocation } from '../../redux/campers/selectors';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

export default function CampersList() {

    const campers = useSelector(selectCampersByLocation);

    return (
        <ul className={css.list}>
            {campers.map(camper => (
                <li key={camper.id} className={css.card}>
                    <Link
                        to={`/campers/${camper.id}`} >
                          <CamperCard camper={camper}/>
                    </Link>
                </li>
            ))};
        </ul>
    );
};