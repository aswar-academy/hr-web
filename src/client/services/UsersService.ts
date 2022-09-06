/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UserData } from '../models/UserData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody 
     * @returns UserData 
     * @throws ApiError
     */
    public static usersControllerCreate(
requestBody: CreateUserDto,
): CancelablePromise<UserData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param role 
     * @returns UserData 
     * @throws ApiError
     */
    public static usersControllerFindAll(
role: 'USER' | 'ADMIN',
): CancelablePromise<Array<UserData>> {
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
     * @returns UserData 
     * @throws ApiError
     */
    public static usersControllerFindOne(
id: number,
): CancelablePromise<UserData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
