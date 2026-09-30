import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [
  {
    "id": "1080zyku",
    "name": "TV-1080资源",
    "baseUrl": "https://api.1080zyku.com/inc/api_mac10.php",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "360zy",
    "name": "TV-360资源",
    "baseUrl": "https://360zy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ckzy",
    "name": "TV-CK资源",
    "baseUrl": "https://ckzy.me/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ukuapi",
    "name": "TV-U酷资源",
    "baseUrl": "https://api.ukuapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ukuapi88",
    "name": "TV-U酷资源88",
    "baseUrl": "https://api.ukuapi88.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ikunzy",
    "name": "TV-ikun资源",
    "baseUrl": "https://ikunzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wujinapi_cc",
    "name": "TV-wujinapi无尽",
    "baseUrl": "https://api.wujinapi.cc/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "yayazy",
    "name": "TV-丫丫点播",
    "baseUrl": "https://cj.yayazy.net/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "guangsuapi",
    "name": "TV-光速资源",
    "baseUrl": "https://api.guangsuapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wolongzyw",
    "name": "TV-卧龙点播",
    "baseUrl": "https://collect.wolongzyw.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wolongzy_cc",
    "name": "TV-卧龙资源",
    "baseUrl": "https://collect.wolongzy.cc/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wolongzyw_com",
    "name": "TV-卧龙资源",
    "baseUrl": "https://wolongzyw.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "tyyszy",
    "name": "TV-天涯资源",
    "baseUrl": "https://tyyszy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "rycjapi",
    "name": "TV-如意资源",
    "baseUrl": "https://cj.rycjapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "xiaomaomi",
    "name": "TV-小猫咪资源",
    "baseUrl": "https://zy.xmm.hk/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "xinlangapi",
    "name": "TV-新浪点播",
    "baseUrl": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wujinapi_com",
    "name": "TV-无尽资源",
    "baseUrl": "https://api.wujinapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wujinapi_me",
    "name": "TV-无尽资源",
    "baseUrl": "https://api.wujinapi.me/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wujinapi_net",
    "name": "TV-无尽资源",
    "baseUrl": "https://api.wujinapi.net/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wwzy",
    "name": "TV-旺旺短剧",
    "baseUrl": "https://wwzy.tv/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "wwzy_api",
    "name": "TV-旺旺资源",
    "baseUrl": "https://api.wwzy.tv/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "bfzyapi",
    "name": "TV-暴风资源",
    "baseUrl": "https://bfzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "zuidazy",
    "name": "TV-最大点播",
    "baseUrl": "http://zuidazy.me/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "zuidapi",
    "name": "TV-最大资源",
    "baseUrl": "https://api.zuidapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "apiyhzy",
    "name": "TV-樱花资源",
    "baseUrl": "https://m3u8.apiyhzy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "yparse",
    "name": "TV-步步高资源",
    "baseUrl": "https://api.yparse.com/api/json",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "niuniuzy",
    "name": "TV-牛牛点播",
    "baseUrl": "https://api.niuniuzy.me/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "dyttzyapi",
    "name": "TV-电影天堂资源",
    "baseUrl": "http://caiji.dyttzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "apibdzy",
    "name": "TV-百度云资源",
    "baseUrl": "https://api.apibdzy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "1080zyku_json",
    "name": "TV-神马云",
    "baseUrl": "https://api.1080zyku.com/inc/apijson.php/",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "suoniapi",
    "name": "TV-索尼资源",
    "baseUrl": "https://suoniapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "hongniuzy2",
    "name": "TV-红牛资源",
    "baseUrl": "https://www.hongniuzy2.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "maotaizy",
    "name": "TV-茅台资源",
    "baseUrl": "https://caiji.maotaizy.cc/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "huyaapi",
    "name": "TV-虎牙资源",
    "baseUrl": "https://www.huyaapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "dbzy_caiji",
    "name": "TV-豆瓣资源",
    "baseUrl": "https://caiji.dbzy.tv/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "dbzy",
    "name": "TV-豆瓣资源",
    "baseUrl": "https://dbzy.tv/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "hhzyapi",
    "name": "TV-豪华资源",
    "baseUrl": "https://hhzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "subocaiji",
    "name": "TV-速博资源",
    "baseUrl": "https://subocaiji.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "lziapi",
    "name": "TV-量子资源",
    "baseUrl": "https://cj.lziapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "jinyingzy",
    "name": "TV-金鹰点播",
    "baseUrl": "https://jinyingzy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "jyzyapi",
    "name": "TV-金鹰资源",
    "baseUrl": "https://jyzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "sdzyapi",
    "name": "TV-闪电资源",
    "baseUrl": "https://sdzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ffzyapi",
    "name": "TV-非凡资源",
    "baseUrl": "https://cj.ffzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "p2100",
    "name": "TV-飘零资源",
    "baseUrl": "https://p2100.net/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "mozhuazy",
    "name": "TV-魔爪资源",
    "baseUrl": "https://mozhuazy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "moduapi",
    "name": "TV-魔都动漫",
    "baseUrl": "https://caiji.moduapi.cc/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "mdzyapi",
    "name": "TV-魔都资源",
    "baseUrl": "https://www.mdzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "heimuer",
    "name": "TV-黑木耳",
    "baseUrl": "https://json.heimuer.xyz/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "heimuer02",
    "name": "TV-黑木耳点播",
    "baseUrl": "https://json02.heimuer.xyz/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "ffzynew",
    "name": "非凡影视new",
    "baseUrl": "https://api.ffzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "jszyapi",
    "name": "极速资源",
    "baseUrl": "https://jszyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "aiduanju",
    "name": "爱短剧.cc",
    "baseUrl": "https://www.aiduanju.cc/",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "huawei8",
    "name": "华为吧资源",
    "baseUrl": "https://huawei8.live/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "taopianapi",
    "name": "淘片资源",
    "baseUrl": "https://taopianapi.com/cjapi/sda/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "hongniuzy3",
    "name": "红牛资源",
    "baseUrl": "https://www.hongniuzy3.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "xsd_sdzyapi",
    "name": "索尼-闪电资源",
    "baseUrl": "https://xsd.sdzyapi.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "jyzyapi_provide",
    "name": "金鹰资源采集网",
    "baseUrl": "https://jyzyapi.com/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "fczy888",
    "name": "蜂巢片库",
    "baseUrl": "https://api.fczy888.me/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "jmzy",
    "name": "金马资源网",
    "baseUrl": "https://api.jmzy.com/api.php/provide/vod",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  },
  {
    "id": "qiqidys",
    "name": "七七影视",
    "baseUrl": "https://www.qiqidys.com/api.php/provide/vod/",
    "searchPath": "",
    "detailPath": "",
    "enabled": true,
    "priority": 1,
    "group": "normal"
  }
];
