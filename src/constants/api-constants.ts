export const API_CONSTANTS = {
    BASE_URL: 'http://dummy.restapiexample.com'
    // Add other URL structures as needed
}

export const API_ROUTES = {
    GET_DUMMY_STATUS: `${API_CONSTANTS.BASE_URL}/api/v1/employees`
    // Add additional routes here
}

export const API_LOGGING_MESSAGES = {
    FAILURE_MESSAGE: (referrer: string, uuid: string) => `Failure in ${referrer} - uuid=${uuid}`,
    ERROR_LOGGING: (referrer: string, err: any) => `${referrer} Error: ${err}`,
    INTENT_CHECKPOINT: (referrer: string, uuid: string) => `${referrer} - id=${uuid}`,
    INTENT_SUCCESS: (referrer: string, uuid: string) => `${referrer} Success - id=${uuid}`,
    INTENT_ERROR: (referrer: string, uuid: string, err: any) => `${referrer} Error - id=${uuid} - ${err}`,
    REQUEST_FAILED: (uuid: string) => `Request failed - uuid=${uuid}`,
    API_CHECKPOINT: (requestType: string, route: string, uuid: string) => `${requestType} request to ${route} - uuid=${uuid}`,
    API_SUCCESS: (requestType: string, route: string, uuid: string) => `${requestType} request to ${route} succeeded - uuid=${uuid}`
}

export const GET = 'GET';
export const POST = 'POST';