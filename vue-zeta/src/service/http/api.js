import { get, post } from './request'
export const query = (params, config) => get('/api/goods', params, config)
export const queryPost = (params, config) => post('/api/list', params, config)
