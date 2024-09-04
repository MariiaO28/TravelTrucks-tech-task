import { CiMap } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { selectFiltersByLocation } from '../../redux/filters/selectors';
import {setLocation} from '../../redux/filters/slice';
import css from './LocationFilter.module.css'

export default function LocationFilter() {
    const dispatch = useDispatch()

    const filter = useSelector(selectFiltersByLocation);
    const handleFilter = (event) => dispatch(setLocation(event.target.value))

    return(
     <label htmlFor="location" className={css.label}>
        Location
        <div className={css.input}>
          <CiMap/>
          <input
            className={css.field}
            type="text"
            name="location"
            placeholder="Location"
            value={filter}
            onChange={handleFilter}
          />
        </div>
      </label>
    )
};



