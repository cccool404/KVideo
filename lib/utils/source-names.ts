
/**
 * Source Name Mapping
 * Maps source IDs to human-readable display names
 * Auto-generated from i.txt video source configuration
 */

export function getSourceName(sourceId: string): string {
  const sourceNames: Record<string, string> = {
    '1080zyku': '1080资源',
    '360zy': '360资源',
    'ckzy': 'CK资源',
    'ukuapi': 'U酷资源',
    'ukuapi88': 'U酷资源88',
    'ikunzy': 'ikun资源',
    'wujinapi_cc': '无尽资源cc',
    'yayazy': '丫丫点播',
    'guangsuapi': '光速资源',
    'wolongzyw': '卧龙点播',
    'wolongzy_cc': '卧龙资源cc',
    'wolongzyw_com': '卧龙资源com',
    'tyyszy': '天涯资源',
    'rycjapi': '如意资源',
    'xiaomaomi': '小猫咪资源',
    'xinlangapi': '新浪点播',
    'wujinapi_com': '无尽资源com',
    'wujinapi_me': '无尽资源me',
    'wujinapi_net': '无尽资源net',
    'wwzy': '旺旺短剧',
    'wwzy_api': '旺旺资源',
    'bfzyapi': '暴风资源',
    'zuidazy': '最大点播',
    'zuidapi': '最大资源',
    'apiyhzy': '樱花资源',
    'yparse': '步步高资源',
    'niuniuzy': '牛牛点播',
    'dyttzyapi': '电影天堂资源',
    'apibdzy': '百度云资源',
    '1080zyku_json': '神马云',
    'suoniapi': '索尼资源',
    'hongniuzy2': '红牛资源',
    'maotaizy': '茅台资源',
    'huyaapi': '虎牙资源',
    'dbzy_caiji': '豆瓣资源',
    'dbzy': '豆瓣资源',
    'hhzyapi': '豪华资源',
    'subocaiji': '速博资源',
    'lziapi': '量子资源',
    'jinyingzy': '金鹰点播',
    'jyzyapi': '金鹰资源',
    'sdzyapi': '闪电资源',
    'ffzyapi': '非凡资源',
    'p2100': '飘零资源',
    'mozhuazy': '魔爪资源',
    'moduapi': '魔都动漫',
    'mdzyapi': '魔都资源',
    'heimuer': '黑木耳',
    'heimuer02': '黑木耳点播',
    'ffzynew': '非凡影视new',
    'jszyapi': '极速资源',
    'aiduanju': '爱短剧.cc',
    'huawei8': '华为吧资源',
    'taopianapi': '淘片资源',
    'hongniuzy3': '红牛资源',
    'xsd_sdzyapi': '索尼-闪电资源',
    'jyzyapi_provide': '金鹰资源采集网',
    'fczy888': '蜂巢片库',
    'jmzy': '金马资源网',
    'qiqidys': '七七影视'
  };
  return sourceNames[sourceId] || sourceId;
}

export const SOURCE_IDS = [
  '1080zyku', '360zy', 'ckzy', 'ukuapi', 'ukuapi88', 'ikunzy',
  'wujinapi_cc', 'yayazy', 'guangsuapi', 'wolongzyw', 'wolongzy_cc', 'wolongzyw_com',
  'tyyszy', 'rycjapi', 'xiaomaomi', 'xinlangapi', 'wujinapi_com', 'wujinapi_me',
  'wujinapi_net', 'wwzy', 'wwzy_api', 'bfzyapi', 'zuidazy', 'zuidapi',
  'apiyhzy', 'yparse', 'niuniuzy', 'dyttzyapi', 'apibdzy', '1080zyku_json',
  'suoniapi', 'hongniuzy2', 'maotaizy', 'huyaapi', 'dbzy_caiji', 'dbzy',
  'hhzyapi', 'subocaiji', 'lziapi', 'jinyingzy', 'jyzyapi', 'sdzyapi',
  'ffzyapi', 'p2100', 'mozhuazy', 'moduapi', 'mdzyapi', 'heimuer',
  'heimuer02', 'ffzynew', 'jszyapi', 'aiduanju', 'huawei8', 'taopianapi',
  'hongniuzy3', 'xsd_sdzyapi', 'jyzyapi_provide', 'fczy888', 'jmzy', 'qiqidys'
];
