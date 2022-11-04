const express = require('express');
const router = express.Router();
const { sequelize, Skill, Path, BasicAdvice, Day, DayAdvice, Plan } = require('../db/models');



router.post('/api/', async (req, res) => {


   const {
      path_name,
      path_skill,
      path_description,
      path_necessary_skills,
      path_necessary_stuff,
      path_basic_advices,
      path_total_days,
      path_total_time_in_min,
      days,
   } = req.body


   if (path_skill === null && days.length === 0) {
      return res.json({ errorSkill: 'no skill selected', errorDay: 'there is not a single day' })
   }
   else if (path_skill === null) {
      return res.json({ errorSkill: 'no skill selected' })
   }
   else if (days.length === 0) {
      return res.json({ errorDay: 'there is not a single day' })
   }
   else {
      // Достаю id_skill
      const skill = await Skill.findOne({
         where: {
            name_skill: path_skill
         }
      })

      const id_skill = skill.dataValues.id_skill


      // Записываю путь
      await Path.create({
         id_skill,
         id_user: 1,
         name_path: path_name,
         description: path_description,
         necessary_skills: path_necessary_skills,
         necessary_stuff: path_necessary_stuff,
         total_days: path_total_days,
         total_time_in_min: path_total_time_in_min
      })

      // Достаю id_path
      const newPath = await Path.findOne({
         where: {
            name_path: path_name
         }
      })
      const id_path = newPath.dataValues.id_path


      // Записываю основные советы
      await Promise.all(path_basic_advices.map(advice => {
         if (advice.value !== '') {
            BasicAdvice.create({
               id_path,
               text_basic_advice: advice.value
            })
         }
      }))


      await Promise.all(days.map(async (day) => {

         // Записываю дни
         let newDay
         if (day.time.typeOfTime === 'min') {
            newDay = await Day.create({
               id_path,
               number_day: day.day,
               time_day: day.time.time
            })

         } else {
            const timeInMin = Number(day.time.time) * 60
            newDay = await Day.create({
               id_path,
               number_day: day.day,
               time_day: timeInMin
            })

         }

         const id_day = newDay.dataValues.id_day

         // План дня
         day.plans.map(async (plan) => {
            await Plan.create({
               id_day,
               text_plan: plan.value
            })
         })

         // Советы дня, если они есть
         if (day.advices !== '') {

            day.advices.map(async (advice) => {
               if (advice.value !== '') {

                  await DayAdvice.create({
                     id_day,
                     text_advice: advice.value
                  })
               }
            })
         }


      }))

      res.json({ done: true })
   }
})








module.exports = router;