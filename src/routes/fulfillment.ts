import { BOT_INTENTS, BOT_MESSAGE_CONSTANTS } from './../constants/string-constants';
import { Request, Response } from 'express';

 export const intentMap = async (request: Request, response: Response) => {
    const tag = request.body.fulfillmentInfo.tag;
    let jsonResponse = {}
    let message = ""
    if (tag === BOT_INTENTS.DEFAULT_WELCOME) {
        message = BOT_MESSAGE_CONSTANTS.DEFAULT_WELCOME
    }
    // add more intents here
    else {
        message = `There are no fulfillment responses defined for "${tag}"" tag`;
    }
    jsonResponse = {
        fulfillment_response: {
            messages: [
                {
                    text: {
                        text: [message]
                    }
                }
            ]
        }
    }
    response.status(200).send(jsonResponse)
}