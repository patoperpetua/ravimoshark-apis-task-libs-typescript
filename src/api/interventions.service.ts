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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { Finished } from '../model/finished';
import { IdInteger } from '../model/idInteger';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Interventions } from '../model/interventions';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { InterventionsServiceInterface }                            from './interventions.serviceInterface';


@Injectable()
export class InterventionsService implements InterventionsServiceInterface {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add one intervention.
     * Add one intervention.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addIntervention(body: Interventions, observe?: 'body', reportProgress?: boolean): Observable<Interventions>;
    public addIntervention(body: Interventions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Interventions>>;
    public addIntervention(body: Interventions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Interventions>>;
    public addIntervention(body: Interventions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addIntervention.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Interventions>(`${this.basePath}/interventions`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete one intervention.
     * Delete one intervention.
     * @param id id to delete or search
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteIntervention(id: number, observe?: 'body', reportProgress?: boolean): Observable<IdInteger>;
    public deleteIntervention(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IdInteger>>;
    public deleteIntervention(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IdInteger>>;
    public deleteIntervention(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteIntervention.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<IdInteger>(`${this.basePath}/interventions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit one intervention.
     * Edit one intervention.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editIntervention(body: Interventions, observe?: 'body', reportProgress?: boolean): Observable<Interventions>;
    public editIntervention(body: Interventions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Interventions>>;
    public editIntervention(body: Interventions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Interventions>>;
    public editIntervention(body: Interventions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling editIntervention.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Interventions>(`${this.basePath}/interventions`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get one intervention.
     * Get one intervention.
     * @param id id to delete or search
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInterventionById(id: number, deleted?: Deleted, observe?: 'body', reportProgress?: boolean): Observable<Interventions>;
    public getInterventionById(id: number, deleted?: Deleted, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Interventions>>;
    public getInterventionById(id: number, deleted?: Deleted, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Interventions>>;
    public getInterventionById(id: number, deleted?: Deleted, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getInterventionById.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Interventions>(`${this.basePath}/interventions/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInterventions(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFrom?: string, dateUntil?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public getInterventions(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFrom?: string, dateUntil?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public getInterventions(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFrom?: string, dateUntil?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public getInterventions(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, finished?: Finished, technicianId?: string, dateFrom?: string, dateUntil?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {












        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (filterBy !== undefined && filterBy !== null) {
            queryParameters = queryParameters.set('filterBy', <any>filterBy);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }
        if (metadata !== undefined && metadata !== null) {
            queryParameters = queryParameters.set('metadata', <any>metadata);
        }
        if (refClient !== undefined && refClient !== null) {
            queryParameters = queryParameters.set('refClient', <any>refClient);
        }
        if (finished !== undefined && finished !== null) {
            queryParameters = queryParameters.set('finished', <any>finished);
        }
        if (technicianId !== undefined && technicianId !== null) {
            queryParameters = queryParameters.set('technicianId', <any>technicianId);
        }
        if (dateFrom !== undefined && dateFrom !== null) {
            queryParameters = queryParameters.set('dateFrom', <any>dateFrom);
        }
        if (dateUntil !== undefined && dateUntil !== null) {
            queryParameters = queryParameters.set('dateUntil', <any>dateUntil);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/interventions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
