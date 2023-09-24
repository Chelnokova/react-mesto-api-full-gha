const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/error-handler');
const { validationAuth, validationRegister } = require('./utils/validation-joi');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();

const NotFoundError = require('./errors/NotFoundError');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Успешно');
  })
  .catch((err) => {
    console.log(`Ошибка ${err}`);
  });

app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://localhost:3001',
    'http://julia.students.nomoredomainsrocks.ru',
    'https://julia.students.nomoredomainsrocks.ru',
    'https://api.julia.students.nomoredomainsrocks.ru'],
}));

app.use(requestLogger);

app.use(express.json());
app.use(helmet());
app.use(limiter);

app.use('/', express.json());
app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.post('/signin', validationAuth, login);
app.post('/signup', validationRegister, createUser);

app.use('*', () => {
  throw new NotFoundError('Неправильный путь');
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
