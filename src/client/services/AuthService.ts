/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { RegistrationDto } from '../models/RegistrationDto';
import type { UserDetail } from '../models/UserDetail';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @returns UserDetail
     * @throws ApiError
     */
    public static authControllerGetProfile(): CancelablePromise<UserDetail> {
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
