import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Plan from './Plan';
import starIcon from './img/star.png'
import skillIcon from './img/suitcase.png'
import stuffIcon from './img/pencil.png'
import styles from './paths.module.css'


function Path() {

   //Для открытия плана пути. true - открыто, false - закрыто
   const [flagPlan, setFlagPlan] = useState(false)
   const [totalTime, setTotalTime] = useState()


   // Достаю текущие категорию, подкатегорию, скил и путь 
   // const ourPath = useSelector(state => state.currentReducer.path)

   // const timeInMin = ourPath.total_time_in_min
   // useEffect(() => {

   //    // четкое время
   //    const toHoursAndMinutes = (timeInMin) => {
   //       const minutes = timeInMin % 60
   //       const hours = Math.floor(timeInMin / 60)
   //       return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`
   //    }

   //    setTotalTime(toHoursAndMinutes(timeInMin))
   // }, [timeInMin])


   // const planBtn = () => { setFlagPlan(prev => !prev) }


   return (
      <div>

         {/* <div className={styles.path_title}>{ourPath.name_path}</div>

         <div className={styles.rating_container}>"
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            <img className={styles.star_icon} src={starIcon} alt="" />
            "
         </div>


         <button className={styles.path_btn_start}> Начать путь</button>



         <div className={styles.path_total}>
            <div className={styles.path_total_text}>Общее время: {totalTime} ч.</div>
            <div className={styles.path_total_text}>Займет: {ourPath.total_days} д.</div>
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
               <div className={styles.path_necessary_text}>{ourPath.necessary_skills}</div>
            </div>

            <div className={styles.path_necessary_item}>
               <img className={styles.path_necessary_icon} src={stuffIcon} alt="" />
               <div className={styles.path_necessary_title}>Необходимые вещи:</div>
               <div className={styles.path_necessary_text}>{ourPath.necessary_stuff}</div>
            </div> */}

            {/* TODO КАК ДОБАВИТЬ СОВЕТЫ, ДНИ, ПЛАН НА ДЕНЬ И СОВЕТЫ НА ДЕНЬ, ЕСЛИ ОНИ В ДРУГОЙ ТАБЛИЦЕ запихнуть это еще при добавлении в current */}
            {/* TODO ПРИ ОБНОВЛЕНИЕ CURRENT REDUCER ОБНУЛЯЕТСЯ. КАК ТОГДА ДОСТАВАТЬ cделать по аналогии */}


            {/* <div className={styles.path_total_text}>Советы:
               <ul>
                  {ourPath.basic_advices?.map((advice, i) => <li key={i}>{advice}</li>)}
               </ul>
            </div> 

         </div>*/}


         {/* <button className={styles.path_btn_plan} onClick={planBtn}> Содержание пути </button> */}
         {/* {flagPlan ? <Plan /> : null} */}



      </div >
   );
}

export default Path;