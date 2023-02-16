export const Options_OPEN = "/catoption/zhankai.png";
export const Options_CLOSE = "/catoption/shouqi.png";

/**
 * 交易分类
 * TradeCat.CatEnum
 */
export interface ITradeCat { content: string, code: string, view: string, cat: string }

export interface ITradeCatCfg { cat: string, code: string }

export namespace TradeCat {
  export const CatGroup: { [key: string]: { icon: string, fgColor: string, bgColor: string } } = {
    "美食": { icon: "/catoption/ms.png", fgColor: "#FFCDD2", bgColor: "#F06292" },
    "购物": { icon: "/catoption/gw.png", fgColor: "#E1BEE7", bgColor: "#9575CD" },
    "医疗": { icon: "/catoption/yl.png", fgColor: "#C5CAE9", bgColor: "#64B5F6" },
    "文娱": { icon: "/catoption/wy.png", fgColor: "#B3E5FC", bgColor: "#4DD0E1" },
    "出行": { icon: "/catoption/cx.png", fgColor: "#B2DFDB", bgColor: "#81C784" },
    "居住": { icon: "/catoption/jz.png", fgColor: "#DCEDC8", bgColor: "#DCE775" },
    "服务": { icon: "/catoption/fw.png", fgColor: "#FFE0B2", bgColor: "#90A4AE" },
  }

  export const EnumMap: { [key: string]: ITradeCat } = {
    MS_WAIMAI: { content: "美食-外卖", cat: "美食", view: "外卖", code: "MS_WAIMAI" },
    MS_ZAOCAN: { content: "美食-早餐", cat: "美食", view: "早餐", code: "MS_ZAOCAN" },
    MS_TANGSHI: { content: "美食-堂食", cat: "美食", view: "堂食", code: "MS_TANGSHI" },
    GW_SHICAI: { content: "购物-食材", cat: "购物", view: "食材", code: "GW_SHICAI" },
    GW_SHUIGUO: { content: "购物-水果", cat: "购物", view: "水果", code: "GW_SHUIGUO" },
    GW_SHUSHI: { content: "购物-熟食", cat: "购物", view: "熟食", code: "GW_SHUSHI" },
    GW_LINGSHI: { content: "购物-饮料", cat: "购物", view: "饮料", code: "GW_LINGSHI" },
    GW_YINGLIAO: { content: "购物-零食", cat: "购物", view: "零食", code: "GW_YINGLIAO" },
    GW_YIFU: { content: "购物-衣物", cat: "购物", view: "衣物", code: "GW_YIFU" },
    GW_DIANZI: { content: "购物-电子", cat: "购物", view: "电子", code: "GW_DIANZI" },
    YL_KANBING: { content: "医疗-看病", cat: "医疗", view: "看病", code: "YL_KANBING" },
    YL_MAIYAO: { content: "医疗-买药", cat: "医疗", view: "买药", code: "YL_MAIYAO" },
    WY_KECHENG: { content: "文娱-影音", cat: "文娱", view: "影音", code: "WY_KECHENG" },
    WY_SHUJi: { content: "文娱-书籍", cat: "文娱", view: "书籍", code: "WY_SHUJi" },
    WY_YINYING: { content: "文娱-课程", cat: "文娱", view: "课程", code: "WY_YINYING" },
    CX_JIAOTONG: { content: "出行-交通", cat: "出行", view: "交通", code: "CX_JIAOTONG" },
    CX_DIDI: { content: "出行-打的", cat: "出行", view: "打的", code: "CX_DIDI" },
    CX_YOUFEI: { content: "出行-油费", cat: "出行", view: "油费", code: "CX_YOUFEI" },
    CX_LVYOU: { content: "出行-旅游", cat: "出行", view: "旅游", code: "CX_LVYOU" },
    CX_DIANYIN: { content: "出行-电影", cat: "出行", view: "电影", code: "CX_DIANYIN" },
    JZ_FANGZU: { content: "居住-房租", cat: "居住", view: "房租", code: "JZ_FANGZU" },
    JZ_SHUIFEI: { content: "居住-水费", cat: "居住", view: "水费", code: "JZ_SHUIFEI" },
    JZ_DIANFEI: { content: "居住-电费", cat: "居住", view: "电费", code: "JZ_DIANFEI" },
    JZ_RANQI: { content: "居住-燃气", cat: "居住", view: "燃气", code: "JZ_RANQI" },
    FW_WANGFEI: { content: "服务-网费", cat: "服务", view: "网费", code: "FW_WANGFEI" },
    FW_HUAFEI: { content: "服务-话费", cat: "服务", view: "话费", code: "FW_HUAFEI" },
    FW_HUIYUAN: { content: "服务-会员", cat: "服务", view: "会员", code: "FW_HUIYUAN" },
    FW_JIEHUAN: { content: "服务-借还", cat: "服务", view: "借还", code: "FW_JIEHUAN" },
  }

  export const CatConfigs: ITradeCatCfg[] = [
    { cat: "美食", code: "外卖" },
    { cat: "美食", code: "早餐" },
    { cat: "美食", code: "堂食" },
    { cat: "购物", code: "食材" },
    { cat: "购物", code: "水果" },
    { cat: "购物", code: "熟食" },
    { cat: "购物", code: "饮料" },
    { cat: "购物", code: "零食" },
    { cat: "购物", code: "衣物" },
    { cat: "购物", code: "电子" },
    { cat: "医疗", code: "看病" },
    { cat: "医疗", code: "买药" },
    { cat: "文娱", code: "影音" },
    { cat: "文娱", code: "书籍" },
    { cat: "文娱", code: "课程" },
    { cat: "出行", code: "交通" },
    { cat: "出行", code: "打的" },
    { cat: "出行", code: "油费" },
    { cat: "出行", code: "旅游" },
    { cat: "出行", code: "电影" },
    { cat: "居住", code: "房租" },
    { cat: "居住", code: "水费" },
    { cat: "居住", code: "电费" },
    { cat: "居住", code: "燃气" },
    { cat: "服务", code: "网费" },
    { cat: "服务", code: "话费" },
    { cat: "服务", code: "会员" },
    { cat: "服务", code: "借还" },
  ]
}