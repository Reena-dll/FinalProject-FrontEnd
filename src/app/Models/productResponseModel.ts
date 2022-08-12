import { Product } from "./product";
import { ResponseModel } from "./ResponseModel";

export interface ProductResponseModel extends ResponseModel{ 
data:Product[],
}