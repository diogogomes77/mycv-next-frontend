import axios from 'axios';
import applyCaseConverter from 'axios-case-converter';
import { stringify } from 'querystring';
import { BACKEND_URL } from 'utils/consts';
import { httpErrorsInterceptor } from 'config/interceptors';

const createAxiosInstance = () => {
  const instance = applyCaseConverter(
    axios.create({
      baseURL: BACKEND_URL,
      timeout: 5000,
      paramsSerializer: params => stringify(params),
    }),
  );
  instance.interceptors.response.use(undefined, httpErrorsInterceptor);

  return instance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
