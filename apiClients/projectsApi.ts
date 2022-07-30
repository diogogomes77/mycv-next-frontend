import { Configuration, ProjectsApi } from 'config/generated-sdk';
import axiosInstance from 'config/axiosInstance';

const getAxiosProjectsApi = () => {
  return new ProjectsApi(new Configuration(), '', axiosInstance);
};

export default getAxiosProjectsApi();
