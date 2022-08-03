import { CollaborationsApi, Configuration } from 'config/generated-sdk';
import axiosInstance from 'config/axiosInstance';

const getAxiosCollaborationsApi = () => {
  return new CollaborationsApi(new Configuration(), '', axiosInstance);
};

export default getAxiosCollaborationsApi();
