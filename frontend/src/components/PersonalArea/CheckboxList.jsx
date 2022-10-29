import React from 'react';
import styles from './PersonalArea.module.css'

function CheckboxList({ plan }) {
   

   return (

      <div className={styles.day_checkbox}>
         <label className={styles.day_checkbox_label} >
            <input type="checkbox" name='checkbox' id="checkboxPA" className={styles.day_checkbox_inp} />
            {plan.value}
         </label>

      </div>
   );
}

export default CheckboxList;