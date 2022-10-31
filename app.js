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


const PORT = process.env.PORT || 3001;

const app = express();


// const mainRouter = require('./routes/main');
// const addNewPathRouter = require('./routes/addNewPath');
// const openPathRouter = require('./routes/openPath');


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


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));


app.use(morgan("dev"));                             
app.use(express.urlencoded({ extended: true }));     
app.use(express.json());                           
// app.use(express.static(path.join(__dirname, 'public')));




// корса там не было
// app.use(cors({
//     origin: [
//         'http://localhost:3000',
// ]
// }));




// app.use('/', mainRouter);
// app.use('/add_new_path', addNewPathRouter);
// app.use('/open_path', openPathRouter);

app.get('/ping', (req, res) => {
    res.send('pong')
})



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
  });




app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})