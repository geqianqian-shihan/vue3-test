import { get, post } from '@/utils/request';

// 登录接口
export const getCaptchaImage = (data) => get('/auth/captcha', data);
// export const getCaptchaImage = (data) => get('user/login', data);