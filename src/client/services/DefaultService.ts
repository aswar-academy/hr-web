/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static appControllerGetTaskById(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static appControllerDeleteTask(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/task/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static appControllerGetDoneTasks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/feed',
        });
    }

    /**
     * @param searchString 
     * @returns any 
     * @throws ApiError
     */
    public static appControllerGetFilteredTasks(
searchString: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filtered-tasks/{searchString}',
            path: {
                'searchString': searchString,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static appControllerCreateDraft(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static appControllerSignupUser(
requestBody: CreateUserDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static appControllerDoneTask(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/done/{id}',
            path: {
                'id': id,
            },
        });
    }

}
