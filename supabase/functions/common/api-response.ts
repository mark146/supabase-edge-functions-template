export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

export function apiResponse(status: number = 200, message? : string, data?: any, error?: string) {
    return new Response(JSON.stringify({
            resultCode: status,
            message,
            data,
            error,
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status,
        }
    )
}
