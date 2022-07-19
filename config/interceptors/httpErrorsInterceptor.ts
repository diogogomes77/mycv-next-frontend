const httpErrorsInterceptor = async (error: any) => {
  console.error(error);

  return Promise.reject(error);
};

export default httpErrorsInterceptor;
