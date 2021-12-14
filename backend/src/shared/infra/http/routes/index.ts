import { Router } from 'express';

//Import os arquivos routes com @modules
import moneyRouter from '@modules/money/infra/http/routes/money.routes';

const routes = Router();

routes.use('/money', moneyRouter);

export default routes;
