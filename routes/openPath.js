const express = require('express');
const router = express.Router();
const { Category, DayAdvice, Plan, Day, BasicAdvice } = require('../db/models');




router.get('/:id_path', async (req, res) => {
   const { id_path } = req.params

   const basicAdvices = await BasicAdvice.findAll({
      where: {
         id_path: id_path
      }
   })


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
         const id_day = plan.dataValues.id_day
         const id_plan = plan.dataValues.id_plan
         const text_plan = plan.dataValues.text_plan
         
         return {id_plan, text_plan} 
      })
      
      console.log('%cMyProject%cline:43%cplanOnDay', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 38, 58);padding:3px;border-radius:2px', planOnDay)
      
      const advicesDB = await DayAdvice.findAll({
         where: {
            id_day: day.id_day
         }
      })
      
      
      const adviceOnDay = advicesDB.map(advice => {
         const id_day = advice.dataValues.id_day
         const id_advice = advice.dataValues.id_advice
         const text_advice = advice.dataValues.text_advice
         return id_advice, text_advice
      })
      
      console.log('%cMyProject%cline:59%cadviceOnDay', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', adviceOnDay)

      return { ...day, advices: adviceOnDay, plans: planOnDay }

   }))
   
   
   
   console.log('%cMyProject%cline:34%cplansAndAdvices', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(227, 160, 93);padding:3px;border-radius:2px', plansAndAdvices)
   
   
//    SELECT public."Days".id_day, 
// public."Days".id_path,
// public."Days".number_day,
// public."Days".time_day,
// public."Plans".id_plan,
// public."Plans".text_plan,
// public."DayAdvices".id_advice,
// public."DayAdvices".text_advice FROM public."Days" 
// LEFT JOIN public."Plans" 
// ON public."Days".id_day=public."Plans".id_day 
// JOIN public."DayAdvices"
// ON public."Plans".id_day=public."DayAdvices".id_day
// WHERE public."Days".id_path = 100
   
   
   
   // const categories = await Category.findAll()
   // const subcategories = await Subcategory.findAll()
   // const skills = await Skill.findAll()
   // const paths = await Path.findAll()
   // // здесь нужно добавить
   
   // res.json({ categories, subcategories, skills, paths })
   
})








module.exports = router;