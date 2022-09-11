/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Task } from './Task';

export type PaginatedTask = {
    total: number;
    results: Array<Task>;
};

