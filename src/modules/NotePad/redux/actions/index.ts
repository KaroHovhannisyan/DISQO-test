export const GET_NOTEPADS: string = "GET_NOTEPADS";
export const GET_NOTEPADS_SUCCESS: string = "GET_NOTEPADS_SUCCESS";


export const getNotepads = () => ({ type: GET_NOTEPADS });
export const getNotepadsSuccess = (data: any) => ({ type: GET_NOTEPADS_SUCCESS, payload: data });