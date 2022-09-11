/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type PaginatedUser = {
    total: number;
    results: Array<User>;
};
