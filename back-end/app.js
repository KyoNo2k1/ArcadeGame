const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const adminRoute = require('./routes/admins')
const gameRoute = require('./routes/games');
const userRoute = require('./routes/users');
const friendRoute = require('./routes/friends');
const imageRoute = require('./routes/images');
const commentRoute = require('./routes/comments');
const categoryRoute = require('./routes/categories');
const userRecordRoute = require('./routes/user_records');
const errorFeedbackRoute = require('./routes/error_feedbacks')

const app = express();

app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:3000', 
        'http://localhost:3001', 
        'https://arcadegame-gonin.netlify.app',
        'https://arcadegame.cf'
    ]
}))

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/admin', adminRoute);
app.use('/game', gameRoute);
app.use('/user', userRoute);
app.use('/friend', friendRoute);
app.use('/images', imageRoute);
app.use('/comment', commentRoute);
app.use('/category', categoryRoute);
app.use('/user-record', userRecordRoute);
app.use('/error-feedback', errorFeedbackRoute);

module.exports = app