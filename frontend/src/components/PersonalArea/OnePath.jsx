import React, { useState } from 'react';
import OneDay from './OneDay';
import PopupPath from './PopupPath';
import styles from './PersonalArea.module.css'


function OnePath({ path }) {
   
   const [isPopupPath, setIsPopupPath] = useState(false)


   const btnHandle = () => {
      setIsPopupPath(true)
   }


   return (

      <div className={styles.one_path_contaiter}>

         <div className={styles.path_skill_container}>
            <button onClick={btnHandle} className={styles.path_skill}>{path.path_skill}</button>
         </div>

         <div className={styles.one_path}>
            {path.days.map(day => <OneDay key={day.index} day={day} />)}
         </div>

         {isPopupPath ? <PopupPath path={path} setIsPopupPath={setIsPopupPath} /> : null}

      </div>


   );
}

export default OnePath;