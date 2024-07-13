import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import { apiResponse } from "../common/api-response.ts";
import { getUser } from "./service/users-service.ts";


const createSupabaseClient = (authHeader: string) => {
  if (!authHeader || !authHeader.trim()) {
    throw new Error('Invalid or empty authHeader');
  }
  if (!Deno.env.get('SUPABASE_URL') || !Deno.env.get('SUPABASE_ANON_KEY')) {
    throw new Error('Supabase URL or Anon Key is missing');
  }
  try {
    return createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_ANON_KEY') ?? '', {
      global: { headers: { Authorization: authHeader } },
    });
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    throw error;
  }
};

const handleRequest = async (req: Request) => {
  const { url, method } = req;
  const supabaseClient = createSupabaseClient(req.headers.get('Authorization')!);

  const userPattern = new URLPattern({ pathname: '/users/*' });
  const matchingPath = userPattern.exec(url);
  const paths = matchingPath?.pathname.groups["0"].split('/') ?? [];

  return getUser(supabaseClient, paths[0]);
};

Deno.serve(async (req) => {
  try {
    return await handleRequest(req);
  } catch (error) {
    console.error(error);
    return apiResponse(error.status || 500, undefined, undefined, error.message || 'Internal Server Error');
  }
});