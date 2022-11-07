const express = require('express');
const router = express.Router();
const { Category, DayAdvice, Plan, Day, BasicAdvice } = require('../db/models');




router.get('/:id_path', async (req, res) => {
   const { id_path } = req.params

   // достаю основные советы для открытого пути
   const basicAdvices = await BasicAdvice.findAll({
      where: {
         id_path: id_path
      }
   })

   // достаю все дни для этого пути
   const daysDB = await Day.findAll({
      where: {
         id_path: id_path
      }
   })


   const days = daysDB.map(day => {
      const id_day = day.dataValues.id_day
      const number_day = day.dataValues.number_day
      const time_day = day.dataValues.time_day
      return { id_day, number_day, time_day }

   })




   const plansAndAdvices = await Promise.all(days.map(async (day) => {

      const plansDB = await Plan.findAll({
         where: {
            id_day: day.id_day
         }
      })


      const planOnDay = plansDB.map(plan => {
         const id_plan = plan.dataValues.id_plan
         const text_plan = plan.dataValues.text_plan

         return id_plan, text_plan
      })




      const advicesDB = await DayAdvice.findAll({
         where: {
            id_day: day.id_day
         }
      })


      const adviceOnDay = advicesDB.map(advice => {
         const id_advice = advice.dataValues.id_advice
         const text_advice = advice.dataValues.text_advice
         return id_advice, text_advice
      })




      return { ...day, advices: adviceOnDay, plans: planOnDay }

   }))

   


   res.json({ basicAdvices, plansAndAdvices })

})








module.exports = router;