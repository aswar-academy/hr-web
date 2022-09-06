/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { RegistrationDto } from '../models/RegistrationDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @returns UserDto 
     * @throws ApiError
     */
    public static authControllerGetProfile(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/profile',
        });
    }

    /**
     * @param requestBody 
     * @returns RegistrationDto 
     * @throws ApiError
     */
    public static authControllerLogin(
requestBody: LoginDto,
): CancelablePromise<RegistrationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
