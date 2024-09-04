import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCamperById } from '../../redux/campers/operations';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectLoading, selectError, selectCamperById } from '../../redux/campers/selectors';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import clsx from 'clsx'
import css from './CamperInfoPage.module.css'

export default function CamperInfoPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const camper = useSelector(selectCamperById);

  useEffect(() => {
    if (id) {
        dispatch(selectedCamperById(id));
    }
  }, [dispatch, id])

  const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

  return (
    <div className={css.container}>
        {loading && !error && <Loader/>}
        {error && <ErrorMessage/>}
        {!loading && !error && 
        (camper ? (<CamperInfo camper ={camper}/>)
        : (<p className={css.text}>No camper found</p>)
        )
        }
        <ul className={css.list}>
            <li>
                <NavLink to='features' className={activeClass}><CamperFeatures/></NavLink>
            </li>
            <li>
                <NavLink to='reviews' className={activeClass}><CamperReviews/></NavLink>
            </li>
        </ul> 
        <Suspense  fallback={<Loader />}>
              <Outlet/>
        </Suspense>
    </div>
    )
};