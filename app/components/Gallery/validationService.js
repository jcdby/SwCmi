/**
 * Created by lijincheng on 8/7/16.
 */
declare type ValidationInfo = {
  status: number,
}

import {validationCodeConst} from './validationCodeConst';


export function validateInput(input: string) {
  if (input === '' || input === null) {
    return validationCodeConst.VAL_EMPTY;
  } else {
    return validationCodeConst.VAL_OK;

  }
}




