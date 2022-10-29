const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv')
// dotenv.config({ path: path.resolve(__dirname, '../.env') })
dotenv.config()
// const createError = require('http-errors');
// const cookieParser = require('cookie-parser')
// const expressSession = require('express-session')

const { sequelize } = require('./db/models');


const PORT = 3001;

const app = express();


const mainRouter = require('./routes/main');
const addNewPathRouter = require('./routes/addNewPath');
const openPathRouter = require('./routes/openPath');


// app.use(cookieParser())
// const sessionConfig = {
//     name: 'user_sid',            //имя куки для хранения id сессии. По умолчанию connect.sid 
//     secret: `${process.env.SESSION_SECRET}`,  //секретное слово для шифрования. может быть любым
//     resave: false,                 //пересохранять ли куку при каждом запросе
//     saveUninitialized: false,       //создавать сессию даже без инициализации
//     cookie: {
//         maxAge: 60 * 24 * 60 * 60 * 1000,  //срок истечения куку в миллисекундах
//         httpOnly: true            //серверная установка и удаление куки, по умолчанию true
//     }
// }
// app.use(expressSession(sessionConfig))


app.use(morgan("dev"));                             //Упрощает понимание работы, в консоле выдает (код, врями, биты): 200 11.922 ms - 26
app.use(express.urlencoded({ extended: true }));     //Эта строчка учит кодировать данные в формате x-www-form-urlencoded
app.use(express.json());                            //Cтрочка учит express обрабатывать json файлы

app.use(express.static(path.join(__dirname, 'public')));  //Подключаем папку public со статическими файлами (картинки, стили и тп)4




app.use(cors({
    origin: [
        'http://localhost:3000',
]
}));




app.use('/', mainRouter);
app.use('/add_new_path', addNewPathRouter);
app.use('/open_path', openPathRouter);





app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})