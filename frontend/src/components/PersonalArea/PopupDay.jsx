import React, { useEffect, useState } from 'react';
import CheckboxList from './CheckboxList';
import useOutsideClick from '../../hooks/useOutsideClick.js'
import styles from './PersonalArea.module.css'

function PopupDay({ day, setIsPopupDay }) {


   const [totalTime, setTotalTime] = useState(0)
   const [advices, setAdvices] = useState(null)
   
   useEffect(() => {
      // время
      if (day.time.typeOfTime === 'hour') {
         setTotalTime(`${day.time.time.toString()}:00`)
      } else {
         const totalMin = day.time.time
         const minutes = totalMin % 60
         const hours = Math.floor(totalMin / 60)
         setTotalTime(`${hours.toString()}:${minutes.toString().padStart(2, '0')}`)
      }

      // достаю советы
      setAdvices(day.advices)

   }, [day.time.typeOfTime, day.time.time, day.advices])


   const closeHandle = () => {
      setIsPopupDay(false)
   }
   const refWindow = useOutsideClick(closeHandle)


   const btnHandle = () => {

   }


   return (
      <div className={styles.popup_day}>
         <div className={styles.popup_day_body}>
            <div ref={refWindow} className={styles.popup_day_content}>

               <div className={styles.popup_day_title}>День {day.day}</div>
               <button onClick={closeHandle} className={styles.popup_day_close}>x</button>

               <div className={styles.popup_day_container} >

                  <div className={styles.popup_day_time}>Время исполнения: {totalTime} ч</div>


                  <div className={styles.popup_day_plans}>
                     {day.plans.map(plan => <CheckboxList key={plan.index} plan={plan} />)}
                  </div>

                  <div className={styles.popup_day_advices}>

                     {advices ?
                        advices.map(advice => <li key={advice.index} className={styles.popup_day_advice}>{advice.value}</li>)
                        : <div>На этот день советов нет</div>}
                  </div>

                  <div className={styles.day_btns_container}>
                     <button onClick={btnHandle} className={styles.day_btn}>Завершить</button>
                     <button onClick={closeHandle} className={styles.day_btn}>Закрыть</button>
                  </div>

               </div>


            </div>
         </div>
      </div>
   );
}

export default PopupDay;