import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError, selectCampers} from '../../redux/campers/selectors';
import { fetchCampers } from '../../redux/campers/operations';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import FiltersBar from '../../components/FiltersBar/FiltersBar';
import CampersList from '../../components/CampersList/CampersList';
import css from './CampersCataloguePage.module.css';

export default function CampersCataloguePage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const campers = useSelector(selectCampers);

    useEffect(()=> {
        dispatch(fetchCampers());
    }, [dispatch])

    return (
        <div className={css.container}>
           <FiltersBar/>
           {loading && !error && <Loader/>}
           {error && <ErrorMessage/>}
           {!loading && !error &&
           (campers.length > 0 ? (<CampersList/>) :
           (<p className={css.text}>No campers found</p>)
        )}
        </div>
    )
};