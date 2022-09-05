/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static usersControllerCreate(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param role
     * @returns UserDto
     * @throws ApiError
     */
    public static usersControllerFindAll(
        role: 'USER' | 'ADMIN',
    ): CancelablePromise<Array<UserDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'role': role,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static usersControllerFindOne(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
