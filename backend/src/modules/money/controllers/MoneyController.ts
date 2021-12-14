import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

import avaliable from '../../../../avaliable.json'

interface Post {
  id: Number;
  name: String;
  ask: Number;
  bid: Number;
  pctChange: Number;
  item:Number;
}

interface Item {
  bid: Number;
}
class MoneyController {

  public async list(req: Request, res: Response): Promise<Response> {

    return res.json(avaliable);

  };

  public async show(req: Request, res: Response): Promise<Response> {

    let result: AxiosResponse = await axios.get(`https://economia.awesomeapi.com.br/${req.params.id}`);
    let itens: [Post] = result.data;
    return res.status(200).json(itens);

  };

  public async period(req: Request, res: Response): Promise<Response> {

    let result: AxiosResponse = await axios.get(`https://economia.awesomeapi.com.br/${req.params.id}/15`);

    let itens: [Post] = result.data;

    const bid= itens.map(element => parseFloat(element.bid));
    const ask= itens.map(element => parseFloat(element.ask));
    const pctChange= itens.map(element => parseFloat(element.pctChange));

    return res.status(200).json({name:itens[0].name,bid,ask,pctChange});

  };

}

export default MoneyController;
