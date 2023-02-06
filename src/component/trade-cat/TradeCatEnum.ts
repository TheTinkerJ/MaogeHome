export const Options_OPEN="/catoption/zhankai.png";
export const Options_CLOSE="/catoption/shouqi.png";

/**
 * 交易分类
 * TradeCat.CatEnum
 */
export interface ITradeCat {content:string, code:string, view:string}

export namespace TradeCat {
    export const CatGroup:{[key:string]:{icon:string,fgColor:string,bgColor:string}} = {
        "美食": {icon:"/catoption/ms.png",fgColor:"#FFCDD2", bgColor:"#F06292"},
        "购物": {icon:"/catoption/gw.png",fgColor:"#E1BEE7", bgColor:"#9575CD"},
        "医疗": {icon:"/catoption/yl.png",fgColor:"#C5CAE9", bgColor:"#64B5F6"},
        "文娱": {icon:"/catoption/wy.png",fgColor:"#B3E5FC", bgColor:"#4DD0E1"},
        "出行": {icon:"/catoption/cx.png",fgColor:"#B2DFDB", bgColor:"#81C784"},
        "居住": {icon:"/catoption/jz.png",fgColor:"#DCEDC8", bgColor:"#DCE775"},
        "服务": {icon:"/catoption/fw.png",fgColor:"#FFE0B2", bgColor:"#90A4AE"},
    }

    export const EnumMap:{[key:string]:ITradeCat} = {
        MS_WAIMAI:      {content:"美食-外卖", view:"外卖", code:"MS_WAIMAI"  },
        MS_ZAOCAN:      {content:"美食-早餐", view:"早餐", code:"MS_ZAOCAN"  },
        MS_TANGSHI:     {content:"美食-堂食", view:"堂食", code:"MS_TANGSHI" },
        GW_SHICAI:      {content:"购物-食材", view:"食材", code:"GW_SHICAI"  },
        GW_SHUIGUO:     {content:"购物-水果", view:"水果", code:"GW_SHUIGUO" },
        GW_SHUSHI:      {content:"购物-熟食", view:"熟食", code:"GW_SHUSHI"  },
        GW_LINGSHI:     {content:"购物-饮料", view:"饮料", code:"GW_LINGSHI" },
        GW_YINGLIAO:    {content:"购物-零食", view:"零食", code:"GW_YINGLIAO"},
        GW_YIFU:        {content:"购物-衣物", view:"衣物", code:"GW_YIFU"    },
        GW_DIANZI:      {content:"购物-电子", view:"电子", code:"GW_DIANZI"  },
        YL_KANBING:     {content:"医疗-看病", view:"看病", code:"YL_KANBING" },
        YL_MAIYAO:      {content:"医疗-买药", view:"买药", code:"YL_MAIYAO"  },
        WY_KECHENG:     {content:"文娱-影音", view:"影音", code:"WY_KECHENG" },
        WY_SHUJi:       {content:"文娱-书籍", view:"书籍", code:"WY_SHUJi"   },
        WY_YINYING:     {content:"文娱-课程", view:"课程", code:"WY_YINYING" },
        CX_JIAOTONG:    {content:"出行-交通", view:"交通", code:"CX_JIAOTONG"},
        CX_DIDI:        {content:"出行-打的", view:"打的", code:"CX_DIDI"    },
        CX_YOUFEI:      {content:"出行-油费", view:"油费", code:"CX_YOUFEI"  },
        CX_LVYOU:       {content:"出行-旅游", view:"旅游", code:"CX_LVYOU"   },
        CX_DIANYIN:     {content:"出行-电影", view:"电影", code:"CX_DIANYIN" },
        JZ_FANGZU:      {content:"居住-房租", view:"房租", code:"JZ_FANGZU"  },
        JZ_SHUIFEI:     {content:"居住-水费", view:"水费", code:"JZ_SHUIFEI" },
        JZ_DIANFEI:     {content:"居住-电费", view:"电费", code:"JZ_DIANFEI" },
        JZ_RANQI:       {content:"居住-燃气", view:"燃气", code:"JZ_RANQI"   },
        FW_WANGFEI:     {content:"服务-网费", view:"网费", code:"FW_WANGFEI" },
        FW_HUAFEI:      {content:"服务-话费", view:"话费", code:"FW_HUAFEI"  },
        FW_HUIYUAN:     {content:"服务-会员", view:"会员", code:"FW_HUIYUAN" },
    }
}