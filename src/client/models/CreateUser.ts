/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUser = {
    email: string;
    password: string;
    name: string;
    role: CreateUser.role;
    jobTitle: string;
    salary: number;
    departmentId: number;
};

export namespace CreateUser {

    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

