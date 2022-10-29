import React, { useRef } from 'react';
import styles from '../../NewPath.module.css'


function OneAdvice({ setAdvices, index, value }) {

   const textareaValue = useRef()


   const blurHandler = () => {
      setAdvices(prev => prev.map(el => {
         if (el.index === index) {
            return { value: textareaValue.current.value, index }
         }
         return el
      }))
   }

   const deleteHandler = (event) => {
      event.preventDefault()
      setAdvices(prev => prev.filter(el => el.index !== index))
   }


   return (
      <div className={styles.one_advice}>
         <textarea cols="60" type="text"
            className={styles.one_advice_textarea}
            onBlur={blurHandler}
            ref={textareaValue}
            defaultValue={value ? value : null} />

         <button className={styles.one_advice_btn_delete} onClick={deleteHandler}>Удалить</button>
      </div>
   );
}

export default OneAdvice;