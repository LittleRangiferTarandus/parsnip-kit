import { PrimitiveType } from "../common/types";
import { isObject } from "../main";

export function clone(arg: PrimitiveType | any[] | ) {
  if (isObject(arg))
}