/* tslint:disable */
/* eslint-disable */
/**
 * MyCV API
 * MyCV Django API
 *
 * The version of the OpenAPI document: v0.1
 * Contact: diogo.gomes77@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base';
// @ts-ignore
import { InlineResponse2004 } from '../models';
// @ts-ignore
import { Project } from '../models';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * API endpoint to handle project related requests.
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsList: async (
      page?: number,
      options: any = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/projects/`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      if (configuration && (configuration.username || configuration.password)) {
        localVarRequestOptions['auth'] = {
          username: configuration.username,
          password: configuration.password,
        };
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      const queryParameters = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        queryParameters.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        queryParameters.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(queryParameters).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     * API endpoint to handle project related requests.
     * @param {number} id A unique integer value identifying this project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsRead: async (
      id: number,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling projectsRead.',
        );
      }
      const localVarPath = `/projects/{id}/`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      if (configuration && (configuration.username || configuration.password)) {
        localVarRequestOptions['auth'] = {
          username: configuration.username,
          password: configuration.password,
        };
      }

      const queryParameters = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        queryParameters.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        queryParameters.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(queryParameters).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function (configuration?: Configuration) {
  return {
    /**
     * API endpoint to handle project related requests.
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async projectsList(
      page?: number,
      options?: any,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<InlineResponse2004>
    > {
      const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(
        configuration,
      ).projectsList(page, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: (configuration?.basePath || basePath) + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * API endpoint to handle project related requests.
     * @param {number} id A unique integer value identifying this project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async projectsRead(
      id: number,
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>
    > {
      const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(
        configuration,
      ).projectsRead(id, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: (configuration?.basePath || basePath) + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  return {
    /**
     * API endpoint to handle project related requests.
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsList(
      page?: number,
      options?: any,
    ): AxiosPromise<InlineResponse2004> {
      return ProjectsApiFp(configuration)
        .projectsList(page, options)
        .then(request => request(axios, basePath));
    },
    /**
     * API endpoint to handle project related requests.
     * @param {number} id A unique integer value identifying this project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsRead(id: number, options?: any): AxiosPromise<Project> {
      return ProjectsApiFp(configuration)
        .projectsRead(id, options)
        .then(request => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for projectsList operation in ProjectsApi.
 * @export
 * @interface ProjectsApiProjectsListRequest
 */
export interface ProjectsApiProjectsListRequest {
  /**
   * A page number within the paginated result set.
   * @type {number}
   * @memberof ProjectsApiProjectsList
   */
  readonly page?: number;
}

/**
 * Request parameters for projectsRead operation in ProjectsApi.
 * @export
 * @interface ProjectsApiProjectsReadRequest
 */
export interface ProjectsApiProjectsReadRequest {
  /**
   * A unique integer value identifying this project.
   * @type {number}
   * @memberof ProjectsApiProjectsRead
   */
  readonly id: number;
}

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI {
  /**
   * API endpoint to handle project related requests.
   * @param {ProjectsApiProjectsListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectsApi
   */
  public projectsList(
    requestParameters: ProjectsApiProjectsListRequest = {},
    options?: any,
  ) {
    return ProjectsApiFp(this.configuration)
      .projectsList(requestParameters.page, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * API endpoint to handle project related requests.
   * @param {ProjectsApiProjectsReadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectsApi
   */
  public projectsRead(
    requestParameters: ProjectsApiProjectsReadRequest,
    options?: any,
  ) {
    return ProjectsApiFp(this.configuration)
      .projectsRead(requestParameters.id, options)
      .then(request => request(this.axios, this.basePath));
  }
}