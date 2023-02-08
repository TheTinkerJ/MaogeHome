import { queryTradeFlowPage, type ITradeFlowRecord } from '$lib/domain/recordMapper';
import _ from 'lodash';
import type { PageServerLoad } from './$types';
import { insertTradeFlowRecord, type TradeFlowRecordDO } from '$lib/domain/TradeFlowRecordMapper';
import { nextTradeNo } from '$lib/domain/TradeNoGenerator';
import type { Actions } from '@sveltejs/kit';


export interface RecordPageData {
    page:number,
    pageSize:number,
    records:ITradeFlowRecord[]
}

export const load = (async () => {
    let page = 0;
    let pageSize = 100;  
    let {records} = await queryTradeFlowPage({page,pageSize});

    let result:RecordPageData = {
        page,
        pageSize,
        records
    }

    return result;
}) satisfies PageServerLoad;

export const actions: Actions = {
    // 上报消费记录 
    postRecord: async ({ request }) => {
      let form = await request.formData();
      let tradeAmount:number = Number.parseInt(form.get("tradeAmount")?.toString()||"0");
      let tradeDate = form.get("tradeDate")?.toString()||"";
      let tradeCat = form.get("tradeCat")?.toString()||"";
      let tradeDetail = form.get("tradeDetail")?.toString()||"";
  
      let record = buildOneTradeRecord(tradeDate,tradeAmount,tradeCat,tradeDetail);
      insertTradeFlowRecord(record)
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