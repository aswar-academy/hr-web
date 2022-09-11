/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attendance } from '../models/Attendance';
import type { CreateAttendance } from '../models/CreateAttendance';
import type { PaginatedAttendance } from '../models/PaginatedAttendance';
import type { UpdateAttendance } from '../models/UpdateAttendance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttendancesService {

    /**
     * @param requestBody
     * @returns Attendance
     * @throws ApiError
     */
    public static create(
        requestBody: CreateAttendance,
    ): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/attendances',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param skip
     * @param take
     * @returns PaginatedAttendance
     * @throws ApiError
     */
    public static findAll(
        skip?: number,
        take?: number,
    ): CancelablePromise<PaginatedAttendance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances',
            query: {
                'skip': skip,
                'take': take,
            },
        });
    }

    /**
     * @param id
     * @returns Attendance
     * @throws ApiError
     */
    public static findOne(
        id: number,
    ): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Attendance
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: UpdateAttendance,
    ): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns Attendance
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<Attendance> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/attendances/{id}',
            path: {
                'id': id,
            },
        });
    }

}
