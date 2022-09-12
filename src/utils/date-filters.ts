import moment from "moment";

export function formatDate(value:string){
    return moment(String(value)).format("YYYY/MM/DD");
}

export function formatDateTime(value:string){
    return moment(String(value)).format("YYYY/MM/DD     HH:MM:SS");
}