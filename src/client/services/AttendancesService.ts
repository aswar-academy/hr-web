/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attendance } from '../models/Attendance';
import type { CreateAttendance } from '../models/CreateAttendance';
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
    public static attendanceControllerCreate(
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
     * @returns any
     * @throws ApiError
     */
    public static attendanceControllerFindAll(
        skip?: number,
        take?: number,
    ): CancelablePromise<> {
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
    public static attendanceControllerFindOne(
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
    public static attendanceControllerUpdate(
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
    public static attendanceControllerDelete(
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
