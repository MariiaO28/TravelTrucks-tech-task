import { useSelector } from 'react-redux';
import {selectCampers} from '../../redux/campers/selectors';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

export default function CampersList() {
    const campers = useSelector(selectCampers)
    return (
        <ul className={css.list}>
            {campers.map(camper => (
                <li key={camper.id}>
                    <CamperCard camper={camper}/>
                </li>
            ))}
        </ul>
    );
};