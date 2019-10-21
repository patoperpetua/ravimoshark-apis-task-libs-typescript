/**
 * Ravimoshark Task API
 * This is an API to interact with Ravimoshark task database. # Introduction This API allow to create, modify and delete task, visits, technicians and interventions. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';


import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { Finished } from '../model/finished';
import { IdInteger } from '../model/idInteger';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Interventions } from '../model/interventions';


import { Configuration }                                     from '../configuration';


export interface InterventionsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Add one intervention.
    * Add one intervention.
    * @param body 
    */
    addIntervention(body: Interventions, extraHttpRequestParams?: any): Observable<Interventions>;

    /**
    * Delete one intervention.
    * Delete one intervention.
    * @param id id to delete or search
    */
    deleteIntervention(id: number, extraHttpRequestParams?: any): Observable<IdInteger>;

    /**
    * Edit one intervention.
    * Edit one intervention.
    * @param body 
    */
    editIntervention(body: Interventions, extraHttpRequestParams?: any): Observable<Interventions>;

    /**
    * Get one intervention.
    * Get one intervention.
    * @param id id to delete or search
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    */
    getInterventionById(id: number, deleted?: Deleted, extraHttpRequestParams?: any): Observable<Interventions>;

    /**
    * Get all interventions.
    * Get all interventions.
    * @param skip number of item to skip
    * @param limit max records to return
    * @param orderBy order by property.
    * @param filterBy filter data.
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    * @param metadata If metadata is needed (for pagination controls)
    * @param refClient Data from a desired client
    * @param finished Get all, finished or unfinished task. Default not finished.
    * @param technicianId Data from a desired technician
    * @param dateFrom Date from
    * @param dateUntil Date until
    */
    getInterventions(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFrom?: string, dateUntil?: string, extraHttpRequestParams?: any): Observable<InlineResponse200>;

}
