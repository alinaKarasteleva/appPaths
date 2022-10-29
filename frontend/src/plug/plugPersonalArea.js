export default [
   {
      path_category: "Спорт",
      path_subcategory: "Кардио",
      path_skill: "Марафон",

      id_skill: "",
      path_id: 1,
      path_name: "Это 1 путь который я создаю сама!",
      path_basic_advices: "",
      total_time: '', //???????????????????????????????????????????????????
      days: [
         {
            day: 1,
            index: 0,
            plans: [
               { value: "Сделать хорошую разминку около 20 мин", index: 0 },
               { value: "Сделать хорошую разминку около 20 мин", index: 1 },
               { value: "Сделать хорошую разминку около 20 мин", index: 2 },
               { value: "Бег 1 ч", index: 1666023173817 },
               { value: "Заминка", index: 1666023203673 }
            ],
            time: { time: "80", typeOfTime: "min" },
            advices: "",
            status: "complete"
         },
         {
            day: 2,
            index: 1,
            plans: [
               { value: "Сделать разминку в течении 30 мин", index: 0 },
               { value: "Бег 2 ч или 5 км", index: 1666023234883 }
            ],
            time: { time: "150", typeOfTime: "min" },
            advices: [{ value: "Первый совет", index: 4835789982 },
            { value: "Второй совет", index: 4835678082 },
            { value: "Третий совет", index: 483349082 },
            ],
            status: "in progress"
         },
         {
            day: 3,
            index: 2,
            plans: [
               { value: "Сделать разминку в течении 30 мин", index: 0 },
               { value: "Бег 2 ч или 5 км", index: 1666023234883 }
            ],
            time: { time: "150", typeOfTime: "min" },
            advices: "",
            status: "to do"
         },
         {
            day: 4,
            index: 3,
            plans: [
               { value: "Сделать разминку в течении 30 мин", index: 0 },
               { value: "Бег 2 ч или 5 км", index: 1666023234883 }
            ],
            time: { time: "150", typeOfTime: "min" },
            advices: "",
            status: "to do"
         },
         {
            day: 5,
            index: 4,
            plans: [
               { value: "Разминка 30 мин", index: 0 },
               { value: "Пробежать 10 км или 1,5 ч", index: 1666023234883 },
               { value: "Точно радоваться", index: 1666023234899 }
            ],
            time: { time: "2", typeOfTime: "hours" },
            advices: "",
            status: "to do"
         }

      ]


   },
   {
      path_id: 34,
      path_name: "Это 2 путь!",
      path_category: "IT",
      path_subcategory: "Разработка сайтов",
      path_skill: "HTML/CSS",
      path_basic_advices: [
         { index: "0", value: "Это длительный процесс, так что не очкуйте! Действуйте!!!" },
         { index: 9876545678, value: "Это второй общий совет. Какая я молодец" }
      ],
      days: [
         {
            day: 1,
            index: 0,
            plans: [
               { value: "Что-то делать", index: 0 },
               { value: "И еще чуть-чуть что-то поделать", index: 1666023173817 },
               { value: "Расслабиться", index: 1666023203673 }
            ],
            time: { time: "3", typeOfTime: "hour" },
            advices: "",
            status: "complete"
         },
         {
            day: 2,
            index: 1,
            plans: [
               { value: "Продолжать занятия", index: 0 },
               { value: "Ля-ля-ля-ля-ля-ля", index: 1666023234883 }
            ],
            time: { time: "5", typeOfTime: "hour" },
            advices: [
               { value: "Советую не бросать", index: 0 }
            ],
            status: "complete"
         },
         {
            day: 3,
            index: 2,
            plans: [
               { value: "Трудиться и еще раз трудиться", index: 0 },
               { value: "Бег 2 ч или 5 км", index: 1666023234883 },
               { value: "Бег aedsfksd fsa fsa  км", index: 1796023234883 }
            ],
            time: { time: "4", typeOfTime: "hour" },
            advices: "",
            status: "in progress"
         },
         {
            day: 4,
            index: 3,
            plans: [
               { value: "Последний день", index: 0 },
               { value: "Еще позаниматься на последок", index: 1666023234883 }
            ],
            time: { time: "3", typeOfTime: "hour" },
            advices: [
               { value: "Продолжать заниматься", index: 0 },
               { value: "Посмотреть такой-то канал на ютубу", index: 0 },
            ],
            status: "to do"
         },


      ]


   }
]