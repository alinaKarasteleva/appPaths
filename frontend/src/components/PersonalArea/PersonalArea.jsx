import React from 'react';
import plugPersonalArea from '../../plug/plugPersonalArea';
import OnePath from './OnePath';
import styles from './PersonalArea.module.css'

function PersonalArea() {


   return (
      <div className={styles.pers_area_container}>
         <div className={styles.pers_area_header} >
            <div className={styles.user_photo}></div>

            <div>
               <div className={styles.user_name}>User's name</div>
               <div className={styles.user_poins}>Количество очков</div>
               <div>и тд</div>
            </div>

         </div>


         <div className={styles.paths_container}>
            {plugPersonalArea.map(path => <OnePath key={path.path_id} path={path} />)}
         </div>


      </div>
   );
}

export default PersonalArea;




//   user   ||   path  ||     day1    ||     day2    ||   day3
//    1     || ------- ||   complete  || in progress ||  to do 
