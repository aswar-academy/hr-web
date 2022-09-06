/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendanceDto } from './AttendanceDto';
import type { DepartmentDto } from './DepartmentDto';

export type UserData = {
    id: number;
    createdAt: string;
    email: string;
    name: string;
    role: any;
    jobTitle: string;
    salary: number;
    departmentId: number;
    department: DepartmentDto;
    attendance: Array<AttendanceDto>;
};
