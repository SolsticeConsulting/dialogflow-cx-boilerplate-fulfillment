import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { intentMap } from '../routes/fulfillment';

export const expressLoader = (app: express.Application) => {
    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.post('/fulfillment', intentMap)
}