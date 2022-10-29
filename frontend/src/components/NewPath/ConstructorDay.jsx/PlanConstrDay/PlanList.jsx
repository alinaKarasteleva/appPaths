import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OnePlan from './OnePlan';
import styles from '../../NewPath.module.css'


function PlanList({ plans, setPlans }) {

   const openDay = useSelector(state => state.constructorDayPopup.openDay)

   useEffect(() => {
      if (openDay.plans !== '') {
         setPlans(openDay.plans)
      }
   }, [openDay, setPlans])


   const btnPlan = (event) => {
      event.preventDefault()
      setPlans(prev => [...prev, { value: '', index: Date.now() }])
   }



   return (
      <div className={styles.plans}>

         <div className={styles.plans_label}>Напишите четкий план действий на сегодня*:</div>

         {plans?.map(plan => <OnePlan key={plan.index} setPlans={setPlans} index={plan.index} value={plan.value} />)}

         <button className={styles.plans_btn} onClick={btnPlan}>Запланировать</button>


      </div>
   );
}

export default PlanList;