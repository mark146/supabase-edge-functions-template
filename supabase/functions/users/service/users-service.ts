import {apiResponse} from "../../common/api-response.ts";
import {ResultMessages} from "../../common/api-result-message.ts";
import {ResultCode} from "../../common/api-result-code.ts";


export async function getUser(supabaseClient: SupabaseClient, id: string) {
    console.info(`getUser - id:`, id)

    return apiResponse(200, ResultMessages[ResultCode.SUCCESS], id)
}
