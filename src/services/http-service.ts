import Axios, {AxiosError, AxiosResponse} from "axios";
import { API_LOGGING_MESSAGES, GET, POST } from "../constants/api-constants";
import { RequestOptions } from "../models/http-models";
import logger from "../loaders/logger";

const httpRequestErrorHandler = (err: AxiosError, uuid: string, reject: (reason?: any) => void) => {
    logger.error(API_LOGGING_MESSAGES.REQUEST_FAILED);
    if (err.response) {
        logger.error(`${JSON.stringify(err.response.data)} - uuid=${uuid}`);
        logger.error(`${err.response.status}`);
        logger.error(`${JSON.stringify(err.response.headers)} - uuid=${uuid}`);
    } else if (err.request) {
        logger.error(`${err.request.toString()}`);
    } else {
        logger.error(`${err.message.toString()}`);
    }
    logger.error(`${JSON.stringify(err.config)} - uuid=${uuid}`);
    reject(err);
}

const getUnauthenticatedRequest = (route: string, uuid: string, inputOptions?: RequestOptions):
    Promise<AxiosResponse<any> | AxiosError<any>> => {
    return new Promise((resolve, reject) => {
        logger.info(API_LOGGING_MESSAGES.API_CHECKPOINT(GET, route, uuid));
        const { headers } = inputOptions || { headers: {}, params: {}};

        const options = {
            headers: {
                ...headers
            }
        }

        Axios.get(route, options).then((res: AxiosResponse) => {
            resolve(res);
        }).catch((err) => httpRequestErrorHandler(err, uuid, reject));
    });
}

const getRequestOptions = (headers: {}, params: {}): { headers: {}; params: {} } => {
    return { headers, params }
}


const postUnauthenticatedRequest = (route: string, uuid: string, payload?: object, inputOptions?: RequestOptions):
    Promise<AxiosResponse<any> | AxiosError<any>> => {
    return new Promise((resolve, reject) => {
        const { headers, params } = inputOptions || { headers: {}, params: {} };
        const options = {
            headers: {
                ...headers
            },
            params
        }
        return Axios.post(route, { ...payload }, options).then((res: AxiosResponse) => {
            logger.info(API_LOGGING_MESSAGES.API_SUCCESS(POST, route, uuid));
            resolve(res);
        }).catch((err) => httpRequestErrorHandler(err, uuid, reject));
    })
};
