import moment from "moment";

function getTradePrefix(){
    return moment().format("YYYYMMDD@HH")
}

let currentTradeNoPrefix= getTradePrefix()
let currentTradeCount = 0;

/**
 * 交易号生成器 --> 有一定业务意义
 * 
 * 不支持集群环境 
 * 
 * 20230201: 
 *  日期+小时(北京时间)+小时内的交易流水计数号
 *  也就是一小时内发生的交易数量，每小时刷新一次
 */
export function nextTradeNo(){
    if(getTradePrefix() != currentTradeNoPrefix){
        currentTradeNoPrefix = getTradePrefix();
        currentTradeCount = 0
    }
    currentTradeCount ++

    return currentTradeNoPrefix + "!" + currentTradeCount.toString()
}
