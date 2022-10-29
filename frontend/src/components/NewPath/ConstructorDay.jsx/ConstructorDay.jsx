import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvicesOnDay from './AdvicesOnDay/AdvicesOnDay';
import PlanList from './PlanConstrDay/PlanList'
import Repetition from './Repetition/Repetition';
import useOutsideClick from '../../../hooks/useOutsideClick';
import styles from '../NewPath.module.css'
import { changebleDayAC, constructorDayPopupAC } from '../../../redux/actionCreators/constructorDayAC';
import { pathAddNewDayAC, pathChangeDayAC } from '../../../redux/actionCreators/pathAC';

function ConstructorDay() {

   const dispatch = useDispatch()


   const [plans, setPlans] = useState([{ value: '', index: 0 }])
   const [advices, setAdvices] = useState([{ value: '', index: 0 }])
   const [repetition, setRepetition] = useState('')


   const openDay = useSelector(state => state.constructorDayPopup.openDay)



   const closeHandle = () => {

      dispatch(constructorDayPopupAC(false))

      dispatch(changebleDayAC({
         day: '',
         index: '',
         plans: '',
         time: { time: '', typeOfTime: '' },
         advices: '',
      }
      ))
   }
   const refWindow = useOutsideClick(closeHandle)



   // Определение нового дня
   const days = useSelector(state => state.pathEditorReducer.days)
   const numberOfDay = days.length + 1




   // По кнопке "закончить заполнение этого дня" добавляю данные в reducer и закрываю popup
   const addDayInReducer = (e) => {
      e.preventDefault()

      const day = days.length + 1
      const index = days.length
      const time = e.target.time.value
      const typeOfTime = e.target.typeOfTime.value


      dispatch(constructorDayPopupAC(false))
      dispatch(changebleDayAC({
         day: '',
         index: '',
         plans: '',
         time: { time: '', typeOfTime: '' },
         advices: ''
      }
      ))



      // если openDay не пустой, то нужно заменить день в pahtEditorReducer и вернуть пустые строки в CHANGEBLE_DAY
      if (openDay.day !== '') {
         const openDayIndex = openDay.index
         const openDayDay = openDay.day

         dispatch(pathChangeDayAC({ openDayDay, openDayIndex, plans, time, typeOfTime, advices, repetition }))



      } else {
         if (advices[0].value === '') {
            dispatch(pathAddNewDayAC({ day, index, plans, time, typeOfTime, advices: '', repetition }))
         }
         else {
            dispatch(pathAddNewDayAC({ day, index, plans, time, typeOfTime, advices, repetition }))
         }
      }
   }


   return (
      <div className={styles.constructor_day}>
         <div className={styles.constructor_day_body}>
            <div ref={refWindow} className={styles.constructor_day_content}>

               <div className={styles.constructor_day_title}>День {openDay.day !== '' ? openDay.day : numberOfDay}</div>

               <form onSubmit={addDayInReducer}>

                  <button onClick={closeHandle} className={styles.constructor_day_close}>x</button>

                  <PlanList plans={plans} setPlans={setPlans} />

                  <div className={styles.time}>
                     <div className={styles.time_title}>Примерное время выполнения*:</div>

                     <input className={styles.time_input}
                        required
                        type="number"
                        name="time"
                        min={0} max={1440} step={0.1}
                        defaultValue={openDay.time.time}
                     />

                     <select defaultValue={openDay?.time?.typeOfTime} className={styles.time_select} name="typeOfTime" >
                        <option value="min">мин</option>
                        <option value="hour">ч</option>
                     </select>
                  </div>

                  <AdvicesOnDay advices={advices} setAdvices={setAdvices} />

                  {openDay.day === ''
                     ? <Repetition repetition={repetition} setRepetition={setRepetition} />
                     : null
                  }

                  <button type='submit' className={styles.constructor_day_btn}>Закончить заполнение этого дня</button>


               </form>
            </div>

         </div>
      </div>
   );
}

export default ConstructorDay;