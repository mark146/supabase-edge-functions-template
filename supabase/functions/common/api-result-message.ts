import {ResultCode} from "./api-result-code.ts";

export const ResultMessages = {
    [ResultCode.SUCCESS]: "Success",
    [ResultCode.ERR_DUPLICATE]: "Error: Duplicate Data",
    [ResultCode.ERR_TOO_LONG]: "Error: Data Too Long",
    [ResultCode.ERR_INVALID_FORM]: "Error: Invalid Data Form",
    [ResultCode.ERR_DATA_NOT_EXIST]: "Error: Data Not Found",
    [ResultCode.ERR_META_DATA_NOT_EXIST]: "Error: Meta Data Not Exist",
    [ResultCode.ERR_ACCESS_DENIED]: "Error: Access Denied",
    [ResultCode.ERR_FAIL]: "Unexpected error occurred",
    [ResultCode.ERR_DATA_ALREADY_EXIST]: "Error: Data Already Exist",
};
