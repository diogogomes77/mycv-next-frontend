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

/**
 *
 * @export
 * @interface ProjectTechnology
 */
export interface ProjectTechnology {
  /**
   *
   * @type {number}
   * @memberof ProjectTechnology
   */
  technologyId: number;
  /**
   *
   * @type {string}
   * @memberof ProjectTechnology
   */
  technologySlug: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTechnology
   */
  comment?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProjectTechnology
   */
  technologyName: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTechnology
   */
  technologyContent: string;
}
