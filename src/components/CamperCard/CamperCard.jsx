import { TiStar } from "react-icons/ti";
import { CiMap } from 'react-icons/ci';
import { BsSuitHeart, BsWind, BsDiagram3, BsCupHot, BsDroplet, BsFuelPump, BsUiRadios } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import css from './CamperCard.module.css';

export default function CamperCard({camper: {id, name, rating, reviews, location, price, gallery, description, transmission, AC, bathroom, kitchen, TV, radio, engine}}) 
{
    const features = [
        { name: 'Automatic', value: transmission === 'automatic', icon: <BsDiagram3 /> },
        {name: 'Petrol', value: engine === 'petrol',icon: <BsFuelPump/> },
        { name: 'AC', value: AC, icon: <BsWind /> },
        { name: 'Bathroom', value: bathroom, icon: <BsDroplet /> },
        { name: 'Kitchen', value: kitchen, icon: <BsCupHot /> },
        { name: 'TV', value: TV, icon: <MdTv /> },
        { name: 'Radio', value: radio, icon: <BsUiRadios /> },
    ];

    const activeClass = ({ isActive }) => {
        return clsx(css.favourite, isActive && css.active)
    }

    return (
        <div className = {css.container}>
           <img src={gallery?.[0]?.thumb 
            ? gallery[0].thumb 
            : 'https://demofree.sirv.com/nope-not-here.jpg'}
             alt={name} 
             className={css.photo}
             width='292px'
             height='320px'
           />
           <div className={css.information}>
            <div className={css.mainInfo}>
              <h2 className={css.name}>{name}</h2>
              <h2 className={css.price}>{`€${price.toFixed(2)}`} <BsSuitHeart className={activeClass} /></h2>
            </div>
            <div className={css.secondaryInfo}>
               <p className={css.reviews}><TiStar className={css.star}/>{rating} {`(${reviews?.length || 0} reviews)`}</p>
               <p className={css.location}><CiMap className={css.map}/> {location}</p>
            </div>
             <p className={css.description}>{description}</p>
             <ul className={css.features}>
                {features.map((feature, index) =>
                    feature.value && (
                        <li key={index} className={css.featureItem}>
                            {feature.icon} {feature.name}
                        </li>
                    )
                )}
             </ul>
             <Link to={`/catalog/${id}`} className={css.button}> Show more </Link>
            </div>
        </div>
    )
};