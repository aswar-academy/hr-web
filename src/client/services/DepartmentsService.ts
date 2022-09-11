/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDepartment } from '../models/CreateDepartment';
import type { Department } from '../models/Department';
import type { PaginatedDepartment } from '../models/PaginatedDepartment';
import type { UpdateDepartment } from '../models/UpdateDepartment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DepartmentsService {

    /**
     * @param requestBody
     * @returns Department
     * @throws ApiError
     */
    public static create(
        requestBody: CreateDepartment,
    ): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param skip
     * @param take
     * @returns PaginatedDepartment
     * @throws ApiError
     */
    public static findAll(
        skip?: number,
        take?: number,
    ): CancelablePromise<PaginatedDepartment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments',
            query: {
                'skip': skip,
                'take': take,
            },
        });
    }

    /**
     * @param id
     * @returns Department
     * @throws ApiError
     */
    public static findOne(
        id: number,
    ): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Department
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: UpdateDepartment,
    ): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/departments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns Department
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/departments/{id}',
            path: {
                'id': id,
            },
        });
    }

}
