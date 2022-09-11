/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attendance } from './Attendance';

export type PaginatedAttendance = {
    total: number;
    results: Array<Attendance>;
};

