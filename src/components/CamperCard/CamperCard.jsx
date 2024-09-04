
import { TiStar } from "react-icons/ti";
import { CiMap } from 'react-icons/ci';
import { BsSuitHeart } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";
// import { BsFuelPump } from "react-icons/bs";
import css from './CamperCard.module.css';

export default function CamperCard({camper: {name, rating, reviews, location, price, gallery, description, transmission, AC, bathroom, kitchen, TV, radio}}) {
    const features = [
        { name: 'Automatic Transmission', value: transmission === 'automatic', icon: <BsDiagram3 /> },
        { name: 'Air Conditioning', value: AC, icon: <BsWind /> },
        { name: 'Bathroom', value: bathroom, icon: <BsDroplet /> },
        { name: 'Kitchen', value: kitchen, icon: <BsCupHot /> },
        { name: 'TV', value: TV, icon: <MdTv /> },
        { name: 'Radio', value: radio, icon: <BsUiRadios /> }
    ];

    return (
        <div className = {css.container}>
            <img 
            src={gallery.thumb}
            // src={gallery[0]?.thumb || 'https://demofree.sirv.com/nope-not-here.jpg'}
            // {movie.poster_path === null ? <img src={`https://demofree.sirv.com/nope-not-here.jpg`} alt={movie.title} width='300px' className={css.picture} /> : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='300px' className={css.picture}/>}
            alt={name} 
            className={css.photo}
            width='292px'
            height='320px'
            />
            <h2>{name}</h2>
            <h2>{`€${price.toFixed(2)}`}</h2>
            <BsSuitHeart/>
            <p><TiStar className={css.star}/>{rating} {`(${reviews?.length || 0} reviews)`}</p>
            <p><CiMap /> {location}</p>
            <p>{description}</p>
            <ul className={css.featuresList}>
                {features.map((feature, index) =>
                    feature.value && (
                        <li key={index} className={css.featureItem}>
                            {feature.icon} {feature.name}
                        </li>
                    )
                )}
            </ul>
            <button className={css.button}>Show more</button>
        </div>
    )
};