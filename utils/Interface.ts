export enum Role{
    User=0,
    Assistant=1
}
export interface Message{
    role:Role;
    content:string;
    prompt?:string;
    imageurl?:string;
}
export interface Chat {
    id: string;
    title: string;
   
}