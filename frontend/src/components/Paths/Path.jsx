import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PathContent from './PathContent';
import starIcon from './img/star.png'
import clockIcon from './img/time.png'
import dayIcon from './img/calendar.png'
import skillIcon from './img/suitcase.png'
import stuffIcon from './img/pencil.png'
import styles from './paths.module.css'


function Path() {

   //Для открытия плана пути. true - открыто, false - закрыто
   const [flagPlan, setFlagPlan] = useState(false)
   const [totalTime, setTotalTime] = useState()


   // Достаю текущий путь 
   const ourPath = useSelector(state => state?.currentReducer?.path)
   


   const timeInMin = ourPath?.path?.total_time_in_min
   useEffect(() => {

      // четкое время
      const toHoursAndMinutes = (timeInMin) => {
         const minutes = timeInMin % 60
         const hours = Math.floor(timeInMin / 60)
         return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`
      }

      setTotalTime(toHoursAndMinutes(timeInMin))
   }, [timeInMin])


   const planBtn = () => { setFlagPlan(prev => !prev) }


   return (
      <div>

         <div className={styles.path_title}>{ourPath?.path?.name_path}</div>

         <div className={styles.rating_container}>"
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            "
         </div>


         <button className={styles.path_btn_start}> Начать путь</button>



         {ourPath?.path?.description ? <div className={styles.path_description}> Описание пути: {ourPath?.path?.description}</div> : null}

         <div className={styles.path_total_container}>
            <div className={styles.path_total}>
               <img className={styles.path_item_time_icon} src={clockIcon} alt="" />
               <div className={styles.path_total_text}>Общее время: {totalTime} ч.</div>
            </div>
            <div className={styles.path_total}>
               <img className={styles.path_item_time_icon} src={dayIcon} alt="" />
               <div className={styles.path_total_text}>Займет: {ourPath?.path?.total_days} дн.</div>
            </div>
         </div>


         <div className={styles.path_people_container}>
            "
            <div className={styles.path_people_item}>
               <div className={styles.path_people_text}>Прошло</div>
               <div className={styles.path_people_count}>30 чел.</div>
            </div>

            <div className={styles.path_people_item}>
               <div className={styles.path_people_text}>В процессе</div>
               <div className={styles.path_people_count}>30 чел.</div>
            </div>

            <div className={styles.path_people_item}>
               <div className={styles.path_people_text}>Бросило</div>
               <div className={styles.path_people_count}>30 чел.</div>
            </div>
            "
         </div>


         <div>
            <div className={styles.path_necessary_item}>
               <img className={styles.path_necessary_icon} src={skillIcon} alt="" />
               <div className={styles.path_necessary_title}>Необходимые навыки:</div>
               {ourPath?.path?.necessary_skills ? <div className={styles.path_necessary_text}>{ourPath.path.necessary_skills}</div> : <div>нет</div>}
            </div>

            <div className={styles.path_necessary_item}>
               <img className={styles.path_necessary_icon} src={stuffIcon} alt="" />
               <div className={styles.path_necessary_title}>Необходимые вещи:</div>
               {ourPath?.path?.necessary_stuff ? <div className={styles.path_necessary_text}>{ourPath?.path?.necessary_stuff}</div> : <div>нет</div>}
            </div>


            {/* TODO КАК ДОБАВИТЬ СОВЕТЫ, ДНИ, ПЛАН НА ДЕНЬ И СОВЕТЫ НА ДЕНЬ, ЕСЛИ ОНИ В ДРУГОЙ ТАБЛИЦЕ запихнуть это еще при добавлении в current */}
            {/* TODO ПРИ ОБНОВЛЕНИЕ CURRENT REDUCER ОБНУЛЯЕТСЯ. КАК ТОГДА ДОСТАВАТЬ cделать по аналогии */}
         </div>

         {ourPath?.basicAdvices ?
            <div className={styles.path_total_text}>Советы:
               <ul>
                  {ourPath?.basicAdvices?.map(advice => <li key={advice.id_basic_advice}>{advice.text_basic_advice}</li>)}
               </ul>
            </div>
            : null}


         <button className={styles.path_btn_start} onClick={planBtn}> Содержание пути </button>
         {flagPlan ? <PathContent /> : null}



      </div >
   );
}

export default Path;