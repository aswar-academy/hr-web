/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUser } from '../models/CreateUser';
import type { PaginatedUser } from '../models/PaginatedUser';
import type { User } from '../models/User';
import type { UserDetail } from '../models/UserDetail';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody
     * @returns UserDetail
     * @returns User
     * @throws ApiError
     */
    public static create(
        requestBody: CreateUser,
    ): CancelablePromise<UserDetail | User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param role
     * @param skip
     * @param take
     * @returns PaginatedUser
     * @throws ApiError
     */
    public static findAll(
        role: 'USER' | 'ADMIN',
        skip?: number,
        take?: number,
    ): CancelablePromise<PaginatedUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'role': role,
                'skip': skip,
                'take': take,
            },
        });
    }

    /**
     * @param id
     * @returns UserDetail
     * @throws ApiError
     */
    public static findOne(
        id: number,
    ): CancelablePromise<UserDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
