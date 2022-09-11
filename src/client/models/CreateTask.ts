/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTask = {
    state: CreateTask.state;
    title: string;
    description: string;
    userId: number;
};

export namespace CreateTask {

    export enum state {
        DOING = 'DOING',
        TODO = 'TODO',
        DONE = 'DONE',
    }


}

