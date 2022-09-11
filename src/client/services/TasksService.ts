/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTask } from '../models/CreateTask';
import type { Task } from '../models/Task';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TasksService {

    /**
     * @param skip
     * @param take
     * @returns any
     * @throws ApiError
     */
    public static tasksControllerFindAll(
        skip?: any,
        take?: any,
    ): CancelablePromise<> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks',
            query: {
                'skip': skip,
                'take': take,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Task
     * @throws ApiError
     */
    public static tasksControllerCreate(
        requestBody: CreateTask,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns Task
     * @throws ApiError
     */
    public static tasksControllerFindOne(
        id: number,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param role
     * @returns Task
     * @throws ApiError
     */
    public static tasksControllerMarkAs(
        id: number,
        role: 'DOING' | 'TODO' | 'DONE',
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            query: {
                'role': role,
            },
        });
    }

}
