import { Configuration, TechnologiesApi } from 'config/generated-sdk';
import axiosInstance from 'config/axiosInstance';

const getAxiosTechnologiesApi = () => {
  return new TechnologiesApi(new Configuration(), '', axiosInstance);
};

export default getAxiosTechnologiesApi();
