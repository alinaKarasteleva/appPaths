import React from 'react';
import { useDispatch } from 'react-redux';
import { constructorDayPopupAC } from '../../../redux/actionCreators/constructorDayAC';
import styles from '../NewPath.module.css'

function AddDay() {

   const dispatch = useDispatch()

   const addDayHandle = (event) => {
      event.preventDefault()
      dispatch(constructorDayPopupAC(true))
   }


   return (
      <div className={styles.add_day}>
         <p className={styles.add_day_text}>...</p>
         <button onClick={addDayHandle} className={styles.add_day_btn}>Добавить день</button>
      </div>
   );
}

export default AddDay;