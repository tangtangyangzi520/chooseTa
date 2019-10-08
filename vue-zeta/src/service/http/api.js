import { get, post } from './request'
export const query = params => get('/pur/pay/pageInit', params)
export const queryPost = params => post('/pur/pay/pageInit', params)
