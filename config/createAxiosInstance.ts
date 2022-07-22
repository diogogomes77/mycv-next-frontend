import axios from 'axios';
import applyCaseConverter from 'axios-case-converter';
import { stringify } from 'querystring';
import { BACKEND_URL } from 'utils/consts';
import { Configuration, ProjectsApi, TechnologiesApi } from './generated-sdk';
import { httpErrorsInterceptor } from './interceptors';

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

const instance = createAxiosInstance();

const getAxiosProjectsApi = () => {
  return new ProjectsApi(new Configuration(), '', instance);
};

const projectsApi = getAxiosProjectsApi();

const getAxiosTechnologiesApi = () => {
  return new TechnologiesApi(new Configuration(), '', instance);
};

const technologiesApi = getAxiosTechnologiesApi();

export { projectsApi, technologiesApi };
