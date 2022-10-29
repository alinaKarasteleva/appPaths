import React, { useRef } from 'react';
import styles from '../../NewPath.module.css'

function OnePlan({ setPlans, index, value }) {

   const textareaValue = useRef()


   const blurHandler = () => {
      setPlans(prev => prev.map(el => {
         if (el.index === index) {
            return { value: textareaValue.current.value, index }
         }
         return el
      }))
   }

   

   const deleteHandler = (event) => {
      event.preventDefault()
      setPlans(prev => prev.filter(el => el.index !== index))
   }

   return (
      <div className={styles.one_plan}>
         
         <textarea cols="60" type="text"
            required
            className={styles.one_plan_textarea}
            onBlur={blurHandler}
            ref={textareaValue}
            defaultValue={value ? value : null}
            placeholder='План...' />

         <button className={styles.one_plan_btn_delete} onClick={deleteHandler}>Удалить</button>
      </div>

   );
}

export default OnePlan;