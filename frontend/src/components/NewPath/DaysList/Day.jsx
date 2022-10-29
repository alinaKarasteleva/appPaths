import React from 'react';
import { useDispatch } from 'react-redux';
import { changebleDayAC, constructorDayPopupAC } from '../../../redux/actionCreators/constructorDayAC';
import { pathRemoveDayAC } from '../../../redux/actionCreators/pathAC';
import styles from '../NewPath.module.css'

function Day({ day }) {

   const dispatch = useDispatch()

   const deleteHandle = (event) => {
      event.preventDefault()

      dispatch(pathRemoveDayAC(day.index))
   }



   const changeHanble = (event) => {
      event.preventDefault()
      dispatch(constructorDayPopupAC(true))
      dispatch(changebleDayAC(day))

   }

   return (
      <div countofdays={day.day} className={styles.day_item}>

         <button onClick={deleteHandle} className={styles.day_delete}>x</button>
         <div className={styles.day_text}>
            {day.plans.map(el => <p key={el.value}>{el.value}</p>)}
         </div>
         <button onClick={changeHanble} className={styles.day_btn_change}>Изменить</button>

      </div>
   );
}

export default Day;