/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attendance } from './Attendance';
import type { Task } from './Task';

export type UserDetail = {
    email: string;
    name: string;
    role: UserDetail.role;
    jobTitle: string;
    salary: number;
    departmentId: number;
    department: any;
    attendance: Array<Attendance>;
    tasks: Array<Task>;
    id: number;
    createdAt: string;
};

export namespace UserDetail {

    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

