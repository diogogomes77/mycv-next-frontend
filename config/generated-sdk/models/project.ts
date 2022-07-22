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

import { Collaboration } from './collaboration';
import { ProjectBusiness } from './project-business';
import { ProjectTechnology } from './project-technology';

/**
 *
 * @export
 * @interface Project
 */
export interface Project {
  /**
   *
   * @type {number}
   * @memberof Project
   */
  id?: number;
  /**
   *
   * @type {Array<Collaboration>}
   * @memberof Project
   */
  collaborations?: Array<Collaboration>;
  /**
   *
   * @type {Array<ProjectTechnology>}
   * @memberof Project
   */
  technologies?: Array<ProjectTechnology>;
  /**
   *
   * @type {string}
   * @memberof Project
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Project
   */
  description?: string;
  /**
   *
   * @type {ProjectBusiness}
   * @memberof Project
   */
  business?: ProjectBusiness;
}
