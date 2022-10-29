import React, { useState } from 'react';
import styles from '../../NewPath.module.css'

function Repetition({ repetition, setRepetition }) {


   const [checked, setChecked] = useState(false)
   

   const checkboxHandle = () => {
      setChecked(!checked)
      if(checked === false) {
         setRepetition('')
      }
   }


   const blurHandler = (e) => {
      setRepetition(e.target.value)
   }

   return (

      <div className={styles.repetition}>

         <input className={styles.repetition_checkbox_container} type="checkbox" checked={checked} onChange={checkboxHandle} id='advice' />
         <label htmlFor="advice">Повторять этот день?</label>

         {checked ?
            <div className={styles.repetition_item}>
               <div className={styles.repetition_title}>Повторить этот день
                  <input className={styles.repetition_input} type="number" min={1} max={30} onBlur={blurHandler} />
                  раз</div>
            </div>
            : null}


      </div>
   );
}

export default Repetition;