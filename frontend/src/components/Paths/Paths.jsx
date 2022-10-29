import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import starIcon from './img/star.png'
import clockIcon from './img/time.png'
import dayIcon from './img/calendar.png'
import styles from './paths.module.css'


function Paths({ path }) {

   const [totalTime, setTotalTime] = useState()

   const timeInMin = path.total_time_in_min

   useEffect(() => {

      // четкое время
      const toHoursAndMinutes = (timeInMin) => {
         const minutes = timeInMin % 60
         const hours = Math.floor(timeInMin / 60)
         return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`
      }

      setTotalTime(toHoursAndMinutes(timeInMin))
   }, [])




   return (
      <>

         <Link to={`${path.id_path}`} className={styles.path_item_link}>
            <div className={styles.path_item}>

               <div className={styles.path_item_title}>{path.name_path}</div>
              

               <div className={styles.path_item_time_container}>
                  <img className={styles.path_item_time_icon} src={clockIcon} alt="" />
                  <div className={styles.path_item_time_text}>Общее время: {totalTime} ч.</div>
               </div>

               <div className={styles.path_item_time_container}>
                  <img className={styles.path_item_time_icon} src={dayIcon} alt="" />
                  <div className={styles.path_item_time_text}>Займет: {path.total_days} дн.</div>
               </div>


               {/* TODO почему-то при переходе на страницу пути не обновляются */}

               <div><span className={styles.necessary_title}>Необходимые навыки:</span>
                  {path.necessary_skills ? <span className={styles.necessary_text}> {path.necessary_skills}</span> : <span> не указаны</span>}
               </div>

               <div> <span className={styles.necessary_title}>Необходимые вещи:</span>
                  {path.necessary_skills ? <span className={styles.necessary_text}>{path.necessary_stuff}</span> : <span> не указаны</span>}
               </div>

               <div>"
                  <div>Прошло: 30 чел.</div>
                  <div>В процессе: 30 чел.</div>
                  <div>Бросило: 30 чел.</div>
                  "
               </div>



               <div className={styles.rating_container}>
                  "
                  <img className={styles.star_icon} src={starIcon} alt="" />
                  <img className={styles.star_icon} src={starIcon} alt="" />
                  <img className={styles.star_icon} src={starIcon} alt="" />
                  <img className={styles.star_icon} src={starIcon} alt="" />
                  <img className={styles.star_icon} src={starIcon} alt="" />
                  "
               </div>

            </div>
         </Link>


      </ >
   );
}

export default Paths;