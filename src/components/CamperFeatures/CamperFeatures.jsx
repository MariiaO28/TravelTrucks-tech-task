import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import { BsWind, BsDiagram3, BsCupHot, BsDroplet, BsFuelPump, BsUiRadios } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import formatName from '../../index.js';
import css from './CamperFeatures.module.css';

export default function CamperFeatures() {
    const camper = useSelector(selectCamperById);

    if (!camper) {
        return <p>No camper information available.</p>;
    }

    // Move to index.js
    const features = [
        { name: 'Automatic', value: camper.transmission === 'automatic', icon: <BsDiagram3 /> },
        { name: 'Petrol', value: camper.engine === 'petrol', icon: <BsFuelPump/> },
        { name: 'AC', value: camper.AC, icon: <BsWind /> },
        { name: 'Bathroom', value: camper.bathroom, icon: <BsDroplet /> },
        { name: 'Kitchen', value: camper.kitchen, icon: <BsCupHot /> },
        { name: 'TV', value: camper.TV, icon: <MdTv /> },
        { name: 'Radio', value: camper.radio, icon: <BsUiRadios /> },
    ];
    
    // Move to index.js
    const characteristics = [
        {name: 'Form', value: camper.form},
        {name: 'Length', value: camper.length},
        {name: 'Width', value: camper.width},
        {name: 'Height', value: camper.height},
        {name: 'Tank', value: camper.tank},
        {name: 'Consumption', value: camper.consumption},
    ]

    return (
        <div className={css.container}>
            <ul className={css.features}>
                {features.map((feature, index) =>
                    feature.value && (
                        <li key={index} className={css.featureItem}>
                            {feature.icon} {feature.name}
                        </li>
                    )
                )}
             </ul>
             <h3 className={css.header}>Vehicle details</h3>
             <ul className={css.characteristics}>
                {characteristics.map((characteristic, index) => 
                characteristic.value && (
                    <li key={index} className={css.charItem}>
                        <span className={css.charName}>{characteristic.name}</span>
                        <span className={css.charValue}>{formatName(characteristic.value)}</span>
                    </li>
                )
                )}
             </ul>
        </div>
    )
};