import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import OneAdvice from './OneAdvice';
import styles from '../../NewPath.module.css'


function AdvicesOnDay({ advices, setAdvices }) {



   const [checked, setChecked] = useState(false)

   const openDay = useSelector(state => state.constructorDayPopup.openDay)


// если есть совет, то он прописывается и чекбокс true, если совета нет , то чекбокс false
   useEffect(() => {
      if (openDay.advices !== '') {
         setChecked(true)
         setAdvices(openDay.advices)
      }
      else if (openDay.advices === '') {
         setChecked(false)
      }
   }, [openDay, setAdvices])


   const checkboxHandle = () => {
      setChecked(!checked)
   }


   const btnAdvice = (event) => {
      event.preventDefault()
      setAdvices(prev => [...prev, { value: '', index: Date.now() }])
   }


   return (
      <div className={styles.advice_on_day}>
         <div className={styles.advice_on_day_checkbox_container}>
            <input type="checkbox" id='checkbox' checked={checked} onChange={checkboxHandle} />
            <label htmlFor='checkbox' className={styles.advice_on_day_label}>Дать совет на этот день</label>
         </div>


         {checked ?
            <>
               {advices?.map(advice => <OneAdvice key={advice.index} setAdvices={setAdvices} index={advice.index} value={advice.value} />)}
               < button className={styles.advice_btn} onClick={btnAdvice}>Посоветовать</button>
            </> :
            null
         }



      </div >



   );
}

export default AdvicesOnDay;