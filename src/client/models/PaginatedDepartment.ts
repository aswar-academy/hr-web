/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department } from './Department';

export type PaginatedDepartment = {
    total: number;
    results: Array<Department>;
};

