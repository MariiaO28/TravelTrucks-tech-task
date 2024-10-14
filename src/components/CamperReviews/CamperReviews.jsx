import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import { BiSolidStar } from 'react-icons/bi';
import css from './CamperReviews.module.css';


export default function CamperReviews() {
    const camper = useSelector(selectCamperById);

    const reviews = camper?.reviews || [];

    if (reviews.length === 0) {
        return <p>No reviews available.</p>;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <BiSolidStar 
                    key={i} 
                    className={i <= rating ? css.starActive : css.starInactive} 
                />
            );
        }
        return stars;
    };

    return (
        <div className={css.container}>
            <ul className={css.reviewList}>
                {reviews.map((review, index) => (
                    <li key={index} className={css.review}>
                        <div className={css.reviewer} >
                          <div className={css.avatar}>{review.reviewer_name[0]}</div>
                             <div className={css.reviewerInfo}>
                                 <p className={css.name}>{review.reviewer_name}</p>
                                 <span className={css.rate}>{renderStars(review.reviewer_rating)}</span>
                             </div>
                        </div>
                        <p className={css.comment}>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};