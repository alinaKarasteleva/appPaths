import React, {useState,useEffect} from 'react';
import useOutsideClick from '../../hooks/useOutsideClick.js'
import iconPath from './img/path.png'
import styles from './PersonalArea.module.css'

function PopupPath({ path, setIsPopupPath }) {

   const [totalTime, setTotalTime] = useState()
   const basicAdvices = path.path_basic_advices

   const closeHandle = () => {
      setIsPopupPath(false)
   }
   const refWindow = useOutsideClick(closeHandle)

   useEffect(() => {
      const totalMin = path.days.reduce((cul, el) => {
         const time = Number(el.time.time)
         const typeOfTime = el.time.typeOfTime
         if (typeOfTime === 'min') {
            return cul + time
         } else {
            return cul + (time * 60)
         }
      }, 0)

      const toHoursAndMinutes = (totalMin) => {
         const minutes = totalMin % 60
         const hours = Math.floor(totalMin / 60)
         return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`
      }

      setTotalTime(toHoursAndMinutes(totalMin))
   }, [path.days])



   return (
      <div className={styles.popup_path}>
         <div className={styles.popup_path_body}>
            <div ref={refWindow} className={styles.popup_path_content}>

               <div className={styles.popup_path_title}>{path.path_name}</div>
               <button onClick={closeHandle} className={styles.popup_path_close}>x</button>

               <div className={styles.popup_path_container} >

                  <div className={styles.popup_path_icon_container}>
                     <div className={styles.popup_path_icon_item}>
                        {/* <div>Категория</div> */}
                        <img className={styles.popup_path_icon} src={iconPath} alt="" />
                        <div className={styles.popup_path_icon_text}>{path.path_category}</div>
                     </div>

                     <div className={styles.popup_path_icon_item}>
                        {/* <div>Подкатегория</div> */}
                        <img className={styles.popup_path_icon} src={iconPath} alt="" />
                        <div className={styles.popup_path_icon_text}>{path.path_subcategory}</div>
                     </div>

                     <div className={styles.popup_path_icon_item}>
                        {/* <div>Навык</div> */}
                        <img className={styles.popup_path_icon} src={iconPath} alt="" />
                        <div className={styles.popup_path_icon_text}>{path.path_skill}</div>
                     </div>


                  </div>

                  <div className={styles.popup_path_counter_container}>
                     {/* <img className={styles.popup_path_icon_counter} src={iconCounter} alt="" /> */}
                     <div className={styles.popup_path_count_text}>Количество дней:  <span className={styles.popup_path_count_days}>{path.days.length}</span></div>
                  </div>

                  <div className={styles.popup_path_counter_container}>
                     <div className={styles.popup_path_count_text}>Количество часов: <span className={styles.popup_path_count_days}>{totalTime}</span></div>
                  </div>

                  <div className={styles.popup_path_advices_container}>
                     {basicAdvices !== '' ?
                        <>
                           <div className={styles.popup_path_advices_title}> Основые советы: </div> {basicAdvices?.map(advice => <li className={styles.popup_path_advices_li} key={advice.index}> {advice.value}</li>)}
                        </> :
                        <div className={styles.popup_path_advices_title} >У этого курса нет советов</div>
                     }
                  </div>

                  <button className={styles.popup_path_btn}>Закрыть</button>

               </div>


            </div>
         </div>
      </div >
   );
}

export default PopupPath;