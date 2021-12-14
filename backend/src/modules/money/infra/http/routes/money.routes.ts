import { Router } from 'express';

import moneyController from '@modules/money/controllers/MoneyController';
const money = new moneyController();


const moneyRoute = Router();

moneyRoute.get('/', money.list);
moneyRoute.get('/show/:id', money.show);
moneyRoute.get('/period/:id', money.period);


export default moneyRoute;
