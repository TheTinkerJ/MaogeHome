
import { insertTradeFlowRecord } from '$lib/domain/TradeFlowRecordMapper';
import { json, type RequestHandler } from '@sveltejs/kit';
 
export const GET = (async ({ request }) => {
  const a=1;
  const b=2;
  await insertTradeFlowRecord();
  return json(a + b);
}) satisfies RequestHandler;