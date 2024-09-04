import {TailSpin} from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loader}>
            <TailSpin
             margin="0 auto"
             visible={true}
             height="80"
             width="80"
             color="#101828"
             ariaLabel="tail-spin-loading"
             radius="1"
             wrapperStyle={{}}
             wrapperClass=""
              />
        </div>
    )
};