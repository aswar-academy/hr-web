/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Task = {
    state: Task.state;
    title: string;
    description: string;
    userId: number;
    id: number;
    createdAt: string;
};

export namespace Task {

    export enum state {
        DOING = 'DOING',
        TODO = 'TODO',
        DONE = 'DONE',
    }


}

