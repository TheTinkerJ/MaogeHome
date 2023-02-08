import type { TradeFlowRecordDO } from '$lib/domain/TradeFlowRecordMapper';
import { nextTradeNo } from '$lib/domain/TradeNoGenerator';
import type { Actions } from '@sveltejs/kit';


export const actions: Actions = {
  // 上报消费记录 
  postRecord: async ({ request }) => {
    let form = await request.formData();
    let tradeAmount:number = Number.parseInt(form.get("tradeAmount")?.toString()||"0");
    let tradeDate = form.get("tradeDate")?.toString()||"";
    let tradeCat = form.get("tradeCat")?.toString()||"";
    let tradeDetail = form.get("tradeDetail")?.toString()||"";

    let record = buildOneTradeRecord(tradeDate,tradeAmount,tradeCat,tradeDetail);


    // insertTradeFlowRecord(record)
    console.log("检查一下数据是不是插进去了");
  }

};

function buildOneTradeRecord(
  tradeDate:string,
  tradeAmount:number,
  tradeCat:string,
  tradeDesc:string
){
  let tradeNo = nextTradeNo()

  let record:TradeFlowRecordDO = {
    trade_no: tradeNo,
    trade_date: tradeDate,
    trade_amount: tradeAmount,
    trade_cat: tradeCat,
    trade_desc: tradeDesc,
    user_name: "maoge"
  }

  return record
}