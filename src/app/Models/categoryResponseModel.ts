import { Category } from "./category";
import { ResponseModel } from "./ResponseModel";

export interface categoryResponseModel extends ResponseModel{
    data:Category[]
}