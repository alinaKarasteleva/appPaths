import React, { useEffect, useState } from 'react';
import CheckboxList from './CheckboxList';
import PopupDay from './PopupDay';
import styles from './PersonalArea.module.css'

function OneDay({ day }) {

   const [isDesabled, setIsDesabled] = useState(false)
   const [isPopupDay, setIsPopupDay] = useState(false)
   const [isBtn, setIsBtn] = useState('in progress')


   useEffect(() => {
      if (day.status === 'complete') {
         setIsDesabled(true)
         setIsBtn('complete')
      }
      else if (day.status === 'to do') {
         setIsDesabled(true)
         setIsBtn('to do')
      }

   }, [day])

   const popupHanble = () => {
      setIsPopupDay(true)
   }

   const btnHandle = (e) => {
      
   }

   return (
      <div>

         <fieldset disabled={isDesabled} className={isDesabled ? styles.one_path_day_disabled : styles.one_path_day_not_disabled}>

            <button onClick={popupHanble} className={styles.day_title}>{day.day} день</button>
            <div>{day.status}</div>

            <div className={styles.day_container_checkbox}>
               {day.plans.map((plan, i) => {
                  if (i < 2) {
                     return <CheckboxList key={plan.index} plan={plan} />
                  }
                  return null
               })}

               {day.plans.length > 2 ? <span className={styles.day_container_checkbox_dotes}>...</span> : null}
            </div>

            <div className={styles.day_status}>

               {isBtn === 'in progress' ?
                  <button onClick={btnHandle} className={styles.day_btn}>Завершить</button> :
                  isBtn === 'complete' ?
                     <div className={styles.day_status_div}>Завершено</div> :
                     <div>Закончите предыдущий день</div>
               }
            </div>
         </fieldset>

         {isPopupDay ? <PopupDay key={day.index} day={day} setIsPopupDay={setIsPopupDay} /> : null}

      </div>
   );
}

export default OneDay;