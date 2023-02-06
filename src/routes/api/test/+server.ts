import { insertRecord } from '$lib/domain/recordMapper';
import { nextTradeNo } from '$lib/domain/TradeNoGenerator';
import { json, type RequestHandler } from '@sveltejs/kit';
import moment from 'moment';
 
export const GET = (async ({ request }) => {
  const a=1;
  const b=2;
  console.log(nextTradeNo())
  await insertRecord(1);
  return json(a + b);
}) satisfies RequestHandler;

