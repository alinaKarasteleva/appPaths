const express = require('express');
const router = express.Router();
const { Category, Subcategory, Skill, Path } = require('../db/models');



router.get('/', async (req, res) => {

   const categories = await Category.findAll()
   const subcategories = await Subcategory.findAll()
   const skills = await Skill.findAll()
   const paths = await Path.findAll()

   res.json({ categories, subcategories, skills, paths })
})








module.exports = router;