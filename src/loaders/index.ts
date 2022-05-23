import express from 'express'
import { expressLoader } from './express'


export const initializeApp = async (app: express.Application) => {
    console.log('Initialize App');
    expressLoader(app);
}