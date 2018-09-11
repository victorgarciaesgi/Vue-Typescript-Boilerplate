import Request from './ApiService/Instance';

export namespace ApiTool {
  export async function post(path: string, payload?: any) {
    return await Request('post', path, payload);
  }
  export async function postFormData(path: string, payload?: any) {
    return await Request('postFormData', path, payload);
  }
  export async function get(path: string, payload?: any) {
    return await Request('get', path, payload);
  }
  export async function put(path: string, payload?: any) {
    return await Request('put', path, payload);
  }
}

export default ApiTool;
export { API_URL } from './ApiService/Instance';
export { EventBus, Events } from './EventBus';
