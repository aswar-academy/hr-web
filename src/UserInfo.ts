export interface user {
    [key: string]: user | string;
  }
interface localizations extends user{
    theCondition:string;
    name:string;
    imageUrl:string;
    theDateOfJoin:string;
    department:string;
    job:string;
    id:string;
}
const user : localizations={
    theCondition: "Attend",
    name: "Noor Haider",
    imageUrl: "../assets/user-photo.svg",
    theDateOfJoin: "11/2",
    department: "development",
    job:"Frontend developer",
    id:"1",
}
export default user