/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    email: string;
    name: string;
    role: User.role;
    jobTitle: string;
    salary: number;
    departmentId: number;
    id: number;
    createdAt: string;
};

export namespace User {

    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

