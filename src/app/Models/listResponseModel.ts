import { ResponseModel } from "src/app/Models/ResponseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}