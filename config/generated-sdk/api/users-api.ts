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
import { InlineResponse2006 } from '../models';
// @ts-ignore
import { User } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersList: async (
      page?: number,
      options: any = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/users/`;
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
     *
     * @param {number} id A unique integer value identifying this user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersRead: async (id: number, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling usersRead.',
        );
      }
      const localVarPath = `/users/{id}/`.replace(
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersList(
      page?: number,
      options?: any,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<InlineResponse2006>
    > {
      const localVarAxiosArgs = await UsersApiAxiosParamCreator(
        configuration,
      ).usersList(page, options);
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
     *
     * @param {number} id A unique integer value identifying this user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersRead(
      id: number,
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await UsersApiAxiosParamCreator(
        configuration,
      ).usersRead(id, options);
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
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  return {
    /**
     *
     * @param {number} [page] A page number within the paginated result set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersList(page?: number, options?: any): AxiosPromise<InlineResponse2006> {
      return UsersApiFp(configuration)
        .usersList(page, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @param {number} id A unique integer value identifying this user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersRead(id: number, options?: any): AxiosPromise<User> {
      return UsersApiFp(configuration)
        .usersRead(id, options)
        .then(request => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for usersList operation in UsersApi.
 * @export
 * @interface UsersApiUsersListRequest
 */
export interface UsersApiUsersListRequest {
  /**
   * A page number within the paginated result set.
   * @type {number}
   * @memberof UsersApiUsersList
   */
  readonly page?: number;
}

/**
 * Request parameters for usersRead operation in UsersApi.
 * @export
 * @interface UsersApiUsersReadRequest
 */
export interface UsersApiUsersReadRequest {
  /**
   * A unique integer value identifying this user.
   * @type {number}
   * @memberof UsersApiUsersRead
   */
  readonly id: number;
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
  /**
   *
   * @param {UsersApiUsersListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public usersList(
    requestParameters: UsersApiUsersListRequest = {},
    options?: any,
  ) {
    return UsersApiFp(this.configuration)
      .usersList(requestParameters.page, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UsersApiUsersReadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public usersRead(requestParameters: UsersApiUsersReadRequest, options?: any) {
    return UsersApiFp(this.configuration)
      .usersRead(requestParameters.id, options)
      .then(request => request(this.axios, this.basePath));
  }
}
