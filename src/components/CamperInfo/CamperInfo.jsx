import { useState } from 'react';
import { TiStar } from "react-icons/ti";
import { CiMap } from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";
import css from './CamperInfo.module.css';

export default function CamperInfo({camper: {name, rating, reviews, location, price, gallery, description }}) {
    const [activePhoto, setActivePhoto] = useState(null);

    const openModal = (photo) => {
        setActivePhoto(photo);
    };

    const closeModal = () => {
        setActivePhoto(null);
    };

    return (
        <div className={css.container}>
            <h2>{name}</h2>
            <p><TiStar className={css.star}/>{rating} {`(${reviews?.length || 0} reviews)`}</p>
            <p><CiMap /> {location}</p>
            <h2>{`€${price.toFixed(2)}`}</h2>
            <ul className={css.list}>
                {gallery && gallery.length > 0 ? (
                    gallery.map((photo, index) => (
                   <li key={index} className={css.card}>
                        <img 
                            src={photo.thumb} 
                            alt={name} 
                            className={css.photo}
                            width='292px'
                            height='312px'
                            onClick={() => openModal(photo.original)}
                         />
                    </li>
                 ))
                ) : (
                    <p> No photos available</p>
                )}
            </ul>
            <p>{description}</p>
    
            {activePhoto && (
                <div className={css.modal} onClick={closeModal}>
                    <div className={css.modalContent} onClick={(event) => event.stopPropagation()}>
                         <img 
                            src={activePhoto}
                            alt={name} 
                            className={css.modalPhoto}
                        />
                        <button className={css.closeButton} onClick={closeModal}>
                            <RxCross2 />
                        </button>
                     </div>
                </div>
            )}
        </div>
    );
};