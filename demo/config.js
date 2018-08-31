Demo.CONFIG = Demo.CORE_CONFIG.concat(Demo.BASE_CONFIG).concat(Demo.CASE_CONFIG).concat(Demo.WIDGET_CONFIG).concat(Demo.COMPONENT_CONFIG).concat(Demo.FIX_CONFIG).concat(Demo.CATEGORY_CONFIG);

Demo.CONSTANTS = {
    SIMPLE_ITEMS: BI.map("柳州市城贸金属材料有限责任公司 柳州市建福房屋租赁有限公司 柳州市迅昌数码办公设备有限责任公司 柳州市河海贸易有限责任公司 柳州市花篮制衣厂 柳州市兴溪物资有限公司 柳州市针织总厂 柳州市衡管物资有限公司 柳州市琪成机电设备有限公司 柳州市松林工程机械修理厂".match(/[^\s]+/g), function (i, v) {
        return {
            text: v,
            value: v,
            title: v
        };
    }),
    ITEMS: BI.map("2 21 柳州市迅昌数码办公设备有限责任公司 柳州市河海贸易有限责任公司 柳州市花篮制衣厂 柳州市兴溪物资有限公司 柳州市针织总厂 柳州市衡管物资有限公司 柳州市琪成机电设备有限公司 柳州市松林工程机械修理厂 柳州市积玉贸易有限公司 柳州市福运来贸易有限责任公司 柳州市钢义物资有限公司 柳州市洋力化工有限公司 柳州市悦盛贸易有限公司 柳州市雁城钢管物资有限公司 柳州市恒瑞钢材经营部 柳州市科拓电子有限公司 柳州市九方电子有限公司 柳州市桂龙汽车配件厂 柳州市制鞋工厂 柳州市炜力科贸有限公司 柳州市希翼贸易有限公司 柳州市兆金物资有限公司 柳州市和润电子科技有限责任公司 柳州市汇凯贸易有限公司 柳州市好机汇商贸有限公司 柳州市泛源商贸经营部 柳州市利汇达物资有限公司 广西全民药业有限责任公司 柳州超凡物资贸易有限责任公司 柳州市贵宏物资有限责任公司 柳州昊恒贸易有限责任公司 柳州市浦联物资有限公司 柳州市广通园林绿化工程有限责任公司 柳州市松发物资贸易有限责任公司 柳州市奥士达办公设备有限责任公司 柳州市海泰物资有限公司 柳州市金三环针织厂 柳州市钢贸物资有限公司 柳州市明阳纺织有限公司 柳州市世科科技发展有限公司 柳州市禄羊贸易有限公司 柳州市金兆阳商贸有限公司 柳州市汇昌物资经营部 柳州市林泰金属物资供应站 柳州市自来水管道材料设备公司 柳州市丹柳铝板有限公司 柳州市桂冶物资有限公司 柳州市宸业物资经营部 柳州市耀成贸易有限公司 柳州奥易自动化科技有限公司 柳州市萃丰科技有限责任公司 柳州市华储贸易有限责任公司 柳州市黄颜钢材有限责任公司 柳州市银盛物资有限责任公司 柳州市新仪化玻供应站 柳州市晶凯化工有限公司 广西柳州市柳江包装纸厂 柳州市志新物资有限责任公司 柳州市兆钢物资有限公司 柳州市友方科技发展有限责任公司 柳州市缝纫机台板家具总厂 柳州市晖海数码办公设备有限责任公司 柳州市富兰特服饰有限责任公司 柳州市柳北区富兴物资经营部 柳州市柳锌福利厂 柳州市海泉印刷有限责任公司 柳州市乾亨贸易有限公司 柳州市悦宁物资贸易有限公司 柳州市昊天贸易有限公司 广西惠字钢铁有限公司 柳州市名青物资有限公司 柳州市林郝物资有限公司 柳州市民政服装厂 柳州市多维劳保用品厂 柳州市轻工物资供应公司 柳州市程源物资有限责任公司 柳州市寿丰物资贸易有限责任公司 柳州市凯凡物资有限公司 柳州市利晖物资经营部 柳州市恒茂金属物资供应站 柳州市中储物资经营部 柳州市第二医疗器械厂 柳州市来鑫物资经营部 柳州市钢鑫物资贸易有限责任公司 柳州市双合袜业有限责任公司 柳州市茂松经贸有限责任公司 柳州市行行物资贸易有限公司 柳州市方一物资有限公司 柳州成异钢管销售有限公司 柳州广惠佳电脑有限公司 桂林市圣泽鑫物资有限公司柳州分公司 柳州市砼基建材贸易有限公司 柳州市海燕针织厂 上海浦光仪表厂柳州销售处 柳州市能电工贸有限责任公司 柳州市广贸物资有限公司 柳州市柳北区大昌电工灯饰经营部 柳州市金龙印务有限公司 柳州市奇缘婚典服务有限公司 柳州市盛博物资经营部 柳州市项元钢铁贸易有限公司 柳州市虞美人化妆品经营部 柳州市俊彦鞋厂 柳州市聚源特钢有限公司 柳州市迅龙科贸有限责任公司 柳州市恒飞电子有限责任公司 柳州市蓝正现代办公设备有限责任公司 柳州地区农业生产资料公司 柳州华菱钢管销售有限公司 柳州融通物资有限公司 柳州市可仁广告策划有限责任公司 柳州市鸟鑫物资有限责任公司 柳州市五丰钢材供应站 柳州市金江不锈钢有限公司 柳州市美日物资设备有限责任公司 柳州市鑫东物资贸易有限责任公司 柳州地区日用杂品公司 柳州市华纳物资贸易有限公司 柳州乾利金虹物资贸易有限责任公司 柳州市新迈计算机有限公司 柳州市富丽实业发展公司 柳州市石钢金属材料有限公司 柳州市力志传真机销售有限公司 广西宝森投资有限公司 柳州市嵘基商贸有限公司 柳州市景民商贸有限责任公司 柳州市银桥化玻有限责任公司 柳州市宏文糖烟店 柳州市科苑电脑网络有限公司 柳州市两面针旅游用品厂 柳州市立早室内装璜有限责任公司 柳州地化建材有限公司 柳州市涛达贸易有限公司 柳州市兰丰档案服务中心 柳州市惠贸物资有限责任公司 柳州市立文物资有限责任公司 柳州市致和商贸经营部 柳州市金色阳光信息咨询有限公司 柳州市赛利钢材经销部 柳州市日用化工厂 柳州市昆廷物资有限责任公司 柳州市邦盛贸易有限公司 柳州市济华贸易有限公司 柳州昕威橡塑化工经营部 柳州市联业贸易有限公司 柳州市兰钢贸易有限公司 柳州市子欣科技有限公司 柳州市狄龙机电设备有限公司 柳州市方真物资贸易有限公司 柳州市银鸥废旧回收中心 柳州市冠宝贸易有限公司 柳州市鑫盛德商务咨询有限责任公司 柳州市泰汇银通经贸有限公司 广西瀚维智测科技有限公司 柳州市钓鱼郎制衣有限责任公司 柳州溪水物资有限公司 柳州市融峰物资有限责任公司 广西新地科技有限责任公司 柳州市纺织装饰公司 柳州市粤翔冶金炉料有限公司 柳州市远腾贸易有限公司 柳州市东鸿城市改造有限公司 广西丛欣实业有限公司 柳州市服装厂 柳州市立安联合刀片有限公司 广西国扬投资有限责任公司 柳州市铭泰办公设备公司 柳州市桂钢物资供应站 柳州市昱升物资有限责任公司 柳州市鹰飞灿科贸有限公司 柳州市先导科贸有限公司 柳州市金秋建材物资经营部 柳州市童装厂 柳州市民泽物资有限公司 柳州市恒先物资贸易有限公司 柳州市银夏冷气工程有限责任公司 柳州粮食批发有限责任公司 柳州市金银华窗纱制造有限责任公司 柳州市三方贸易有限公司 柳州市丰涛商贸有限责任公司 柳州华智企业管理咨询有限责任公司 柳州市诚正建筑工程施工图审查有限公司 柳州市今科电讯设备营销中心 柳州市闽德电子有限公司 柳州市鑫虹针织厂 柳州市畅通通讯器材有限责任公司 柳州市正钢物资经营部 柳州市新柳饲料有限责任公司 柳州市黄村油库 柳州市天泰电力装饰工程有限公司 柳州市兆吉物资有限责任公司 柳州市八龙纸制品有限责任公司 柳州市巨佳电脑网络科技有限公司 ".match(/[^\s]+/g), function (i, v) {
        return {
            text: v,
            value: v,
            title: v
        };
    }),
    TREEITEMS: [{pId: "0", id: "0_0", text: "( 共25个 )", value: "", open: true}, {
        pId: "0_0",
        id: "0_0_0",
        text: "安徽省( 共1个 )",
        value: "安徽省",
        open: true
    }, {pId: "0_0_0", id: "0_0_0_0", text: "芜湖市", value: "芜湖市", open: true}, {
        pId: "0_0",
        id: "0_0_1",
        text: "北京市( 共6个 )",
        value: "北京市",
        open: true
    }, {pId: "0_0_1", id: "0_0_1_0", text: "北京市区", value: "北京市区", open: true}, {
        pId: "0_0_1",
        id: "0_0_1_1",
        text: "朝阳区",
        value: "朝阳区",
        open: true
    }, {pId: "0_0_1", id: "0_0_1_2", text: "东城区", value: "东城区", open: true}, {
        pId: "0_0_1",
        id: "0_0_1_3",
        text: "海淀区4内",
        value: "海淀区4内",
        open: true
    }, {pId: "0_0_1", id: "0_0_1_4", text: "海淀区4外", value: "海淀区4外", open: true}, {
        pId: "0_0_1",
        id: "0_0_1_5",
        text: "石景山区",
        value: "石景山区",
        open: true
    }, {pId: "0_0", id: "0_0_2", text: "福建省( 共2个 )", value: "福建省", open: true}, {
        pId: "0_0_2",
        id: "0_0_2_0",
        text: "莆田市",
        value: "莆田市",
        open: true
    }, {pId: "0_0_2", id: "0_0_2_1", text: "泉州市", value: "泉州市", open: true}, {
        pId: "0_0",
        id: "0_0_3",
        text: "甘肃省( 共1个 )",
        value: "甘肃省",
        open: true
    }, {pId: "0_0_3", id: "0_0_3_0", text: "兰州市", value: "兰州市", open: true}, {
        pId: "0_0",
        id: "0_0_4",
        text: "广东省( 共5个 )",
        value: "广东省",
        open: true
    }, {pId: "0_0_4", id: "0_0_4_0", text: "东莞市", value: "东莞市", open: true}, {
        pId: "0_0_4",
        id: "0_0_4_1",
        text: "广州市",
        value: "广州市",
        open: true
    }, {pId: "0_0_4", id: "0_0_4_2", text: "惠州市", value: "惠州市", open: true}, {
        pId: "0_0_4",
        id: "0_0_4_3",
        text: "深圳市",
        value: "深圳市",
        open: true
    }, {pId: "0_0_4", id: "0_0_4_4", text: "珠海市", value: "珠海市", open: true}, {
        pId: "0_0",
        id: "0_0_5",
        text: "广西壮族自治区( 共1个 )",
        value: "广西壮族自治区",
        open: true
    }, {pId: "0_0_5", id: "0_0_5_0", text: "南宁市", value: "南宁市", open: true}, {
        pId: "0_0",
        id: "0_0_6",
        text: "河北省( 共2个 )",
        value: "河北省",
        open: true
    }, {pId: "0_0_6", id: "0_0_6_0", text: "保定市", value: "保定市", open: true}, {
        pId: "0_0_6",
        id: "0_0_6_1",
        text: "邢台市",
        value: "邢台市",
        open: true
    }, {pId: "0_0", id: "0_0_7", text: "河南省( 共1个 )", value: "河南省", open: true}, {
        pId: "0_0_7",
        id: "0_0_7_0",
        text: "郑州市",
        value: "郑州市",
        open: true
    }, {pId: "0_0", id: "0_0_8", text: "黑龙江省( 共7个 )", value: "黑龙江省", open: true}, {
        pId: "0_0_8",
        id: "0_0_8_0",
        text: "大庆市",
        value: "大庆市",
        open: true
    }, {pId: "0_0_8", id: "0_0_8_1", text: "哈尔滨市", value: "哈尔滨市", open: true}, {
        pId: "0_0_8",
        id: "0_0_8_2",
        text: "鸡西市",
        value: "鸡西市",
        open: true
    }, {pId: "0_0_8", id: "0_0_8_3", text: "佳木斯市", value: "佳木斯市", open: true}, {
        pId: "0_0_8",
        id: "0_0_8_4",
        text: "牡丹江市",
        value: "牡丹江市",
        open: true
    }, {pId: "0_0_8", id: "0_0_8_5", text: "齐齐哈尔市", value: "齐齐哈尔市", open: true}, {
        pId: "0_0_8",
        id: "0_0_8_6",
        text: "双鸭山市",
        value: "双鸭山市",
        open: true
    }, {pId: "0_0", id: "0_0_9", text: "湖北省( 共1个 )", value: "湖北省", open: true}, {
        pId: "0_0_9",
        id: "0_0_9_0",
        text: "武汉市",
        value: "武汉市",
        open: true
    }, {pId: "0_0", id: "0_0_10", text: "湖南省( 共3个 )", value: "湖南省", open: true}, {
        pId: "0_0_10",
        id: "0_0_10_0",
        text: "常德市",
        value: "常德市",
        open: true
    }, {pId: "0_0_10", id: "0_0_10_1", text: "长沙市", value: "长沙市", open: true}, {
        pId: "0_0_10",
        id: "0_0_10_2",
        text: "邵阳市",
        value: "邵阳市",
        open: true
    }, {pId: "0_0", id: "0_0_11", text: "吉林省( 共4个 )", value: "吉林省", open: true}, {
        pId: "0_0_11",
        id: "0_0_11_0",
        text: "白山市",
        value: "白山市",
        open: true
    }, {pId: "0_0_11", id: "0_0_11_1", text: "长春市", value: "长春市", open: true}, {
        pId: "0_0_11",
        id: "0_0_11_2",
        text: "松原市",
        value: "松原市",
        open: true
    }, {pId: "0_0_11", id: "0_0_11_3", text: "通化市", value: "通化市", open: true}, {
        pId: "0_0",
        id: "0_0_12",
        text: "江苏省( 共8个 )",
        value: "江苏省",
        open: true
    }, {pId: "0_0_12", id: "0_0_12_0", text: "常州市", value: "常州市", open: true}, {
        pId: "0_0_12",
        id: "0_0_12_1",
        text: "南京市",
        value: "南京市",
        open: true
    }, {pId: "0_0_12", id: "0_0_12_2", text: "南通市", value: "南通市", open: true}, {
        pId: "0_0_12",
        id: "0_0_12_3",
        text: "苏州市",
        value: "苏州市",
        open: true
    }, {pId: "0_0_12", id: "0_0_12_4", text: "宿迁市", value: "宿迁市", open: true}, {
        pId: "0_0_12",
        id: "0_0_12_5",
        text: "泰州市",
        value: "泰州市",
        open: true
    }, {pId: "0_0_12", id: "0_0_12_6", text: "无锡市", value: "无锡市", open: true}, {
        pId: "0_0_12",
        id: "0_0_12_7",
        text: "盐城市",
        value: "盐城市",
        open: true
    }, {pId: "0_0", id: "0_0_13", text: "辽宁省( 共11个 )", value: "辽宁省", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_0",
        text: "鞍山市",
        value: "鞍山市",
        open: true
    }, {pId: "0_0_13", id: "0_0_13_1", text: "本溪市", value: "本溪市", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_2",
        text: "朝阳市",
        value: "朝阳市",
        open: true
    }, {pId: "0_0_13", id: "0_0_13_3", text: "大连市", value: "大连市", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_4",
        text: "抚顺市",
        value: "抚顺市",
        open: true
    }, {pId: "0_0_13", id: "0_0_13_5", text: "葫芦岛市", value: "葫芦岛市", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_6",
        text: "锦州市",
        value: "锦州市",
        open: true
    }, {pId: "0_0_13", id: "0_0_13_7", text: "辽阳市", value: "辽阳市", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_8",
        text: "盘锦市",
        value: "盘锦市",
        open: true
    }, {pId: "0_0_13", id: "0_0_13_9", text: "沈阳市", value: "沈阳市", open: true}, {
        pId: "0_0_13",
        id: "0_0_13_10",
        text: "营口市",
        value: "营口市",
        open: true
    }, {pId: "0_0", id: "0_0_14", text: "内蒙古( 共1个 )", value: "内蒙古", open: true}, {
        pId: "0_0_14",
        id: "0_0_14_0",
        text: "鄂尔多斯市",
        value: "鄂尔多斯市",
        open: true
    }, {pId: "0_0", id: "0_0_15", text: "宁夏回族自治区( 共1个 )", value: "宁夏回族自治区", open: true}, {
        pId: "0_0_15",
        id: "0_0_15_0",
        text: "银川市",
        value: "银川市",
        open: true
    }, {pId: "0_0", id: "0_0_16", text: "山东省( 共7个 )", value: "山东省", open: true}, {
        pId: "0_0_16",
        id: "0_0_16_0",
        text: "济南市",
        value: "济南市",
        open: true
    }, {pId: "0_0_16", id: "0_0_16_1", text: "济宁市", value: "济宁市", open: true}, {
        pId: "0_0_16",
        id: "0_0_16_2",
        text: "聊城市",
        value: "聊城市",
        open: true
    }, {pId: "0_0_16", id: "0_0_16_3", text: "临沂市", value: "临沂市", open: true}, {
        pId: "0_0_16",
        id: "0_0_16_4",
        text: "青岛市",
        value: "青岛市",
        open: true
    }, {pId: "0_0_16", id: "0_0_16_5", text: "烟台市", value: "烟台市", open: true}, {
        pId: "0_0_16",
        id: "0_0_16_6",
        text: "枣庄市",
        value: "枣庄市",
        open: true
    }, {pId: "0_0", id: "0_0_17", text: "山西省( 共1个 )", value: "山西省", open: true}, {
        pId: "0_0_17",
        id: "0_0_17_0",
        text: "太原市",
        value: "太原市",
        open: true
    }, {pId: "0_0", id: "0_0_18", text: "陕西省( 共1个 )", value: "陕西省", open: true}, {
        pId: "0_0_18",
        id: "0_0_18_0",
        text: "西安市",
        value: "西安市",
        open: true
    }, {pId: "0_0", id: "0_0_19", text: "上海市( 共1个 )", value: "上海市", open: true}, {
        pId: "0_0_19",
        id: "0_0_19_0",
        text: "上海市区",
        value: "上海市区",
        open: true
    }, {pId: "0_0", id: "0_0_20", text: "四川省( 共1个 )", value: "四川省", open: true}, {
        pId: "0_0_20",
        id: "0_0_20_0",
        text: "成都市",
        value: "成都市",
        open: true
    }, {pId: "0_0", id: "0_0_21", text: "新疆维吾尔族自治区( 共2个 )", value: "新疆维吾尔族自治区", open: true}, {
        pId: "0_0_21",
        id: "0_0_21_0",
        text: "吐鲁番地区",
        value: "吐鲁番地区",
        open: true
    }, {pId: "0_0_21", id: "0_0_21_1", text: "乌鲁木齐", value: "乌鲁木齐", open: true}, {
        pId: "0_0",
        id: "0_0_22",
        text: "云南省( 共1个 )",
        value: "云南省",
        open: true
    }, {pId: "0_0_22", id: "0_0_22_0", text: "昆明市", value: "昆明市", open: true}, {
        pId: "0_0",
        id: "0_0_23",
        text: "浙江省( 共5个 )",
        value: "浙江省",
        open: true
    }, {pId: "0_0_23", id: "0_0_23_0", text: "杭州市", value: "杭州市", open: true}, {
        pId: "0_0_23",
        id: "0_0_23_1",
        text: "湖州市",
        value: "湖州市",
        open: true
    }, {pId: "0_0_23", id: "0_0_23_2", text: "嘉兴市", value: "嘉兴市", open: true}, {
        pId: "0_0_23",
        id: "0_0_23_3",
        text: "宁波市",
        value: "宁波市",
        open: true
    }, {pId: "0_0_23", id: "0_0_23_4", text: "绍兴市", value: "绍兴市", open: true}, {
        pId: "0_0",
        id: "0_0_24",
        text: "重庆市( 共1个 )",
        value: "重庆市",
        open: true
    }, {pId: "0_0_24", id: "0_0_24_0", text: "重庆市区", value: "重庆市区", open: true}, {
        pId: "0",
        id: "0_1",
        text: "中国( 共34个 )",
        value: "中国",
        open: true
    }, {pId: "0_1", id: "0_1_0", text: "安徽省( 共19个 )", value: "安徽省", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_0",
        text: "安庆市",
        value: "安庆市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_1", text: "蚌埠市", value: "蚌埠市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_2",
        text: "亳州市",
        value: "亳州市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_3", text: "巢湖市", value: "巢湖市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_4",
        text: "池州市",
        value: "池州市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_5", text: "滁州市", value: "滁州市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_6",
        text: "阜阳市",
        value: "阜阳市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_7", text: "毫州市", value: "毫州市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_8",
        text: "合肥市",
        value: "合肥市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_9", text: "淮北市", value: "淮北市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_10",
        text: "淮南市",
        value: "淮南市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_11", text: "黄山市", value: "黄山市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_12",
        text: "六安市",
        value: "六安市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_13", text: "马鞍山市", value: "马鞍山市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_14",
        text: "濮阳市",
        value: "濮阳市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_15", text: "宿州市", value: "宿州市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_16",
        text: "铜陵市",
        value: "铜陵市",
        open: true
    }, {pId: "0_1_0", id: "0_1_0_17", text: "芜湖市", value: "芜湖市", open: true}, {
        pId: "0_1_0",
        id: "0_1_0_18",
        text: "宣城市",
        value: "宣城市",
        open: true
    }, {pId: "0_1", id: "0_1_1", text: "澳门特别行政区( 共1个 )", value: "澳门特别行政区", open: true}, {
        pId: "0_1_1",
        id: "0_1_1_0",
        text: "澳门",
        value: "澳门",
        open: true
    }, {pId: "0_1", id: "0_1_2", text: "北京市( 共17个 )", value: "北京市", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_0",
        text: "北京市区",
        value: "北京市区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_1", text: "昌平区", value: "昌平区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_2",
        text: "朝阳区",
        value: "朝阳区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_3", text: "大兴区", value: "大兴区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_4",
        text: "东城区",
        value: "东城区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_5", text: "房山区", value: "房山区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_6",
        text: "丰台区",
        value: "丰台区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_7", text: "海淀区", value: "海淀区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_8",
        text: "海淀区4内",
        value: "海淀区4内",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_9", text: "海淀区4外", value: "海淀区4外", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_10",
        text: "门头沟区",
        value: "门头沟区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_11", text: "平谷区", value: "平谷区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_12",
        text: "石景山区",
        value: "石景山区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_13", text: "顺义区", value: "顺义区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_14",
        text: "通州区",
        value: "通州区",
        open: true
    }, {pId: "0_1_2", id: "0_1_2_15", text: "西城区", value: "西城区", open: true}, {
        pId: "0_1_2",
        id: "0_1_2_16",
        text: "西城区  ",
        value: "西城区  ",
        open: true
    }, {pId: "0_1", id: "0_1_3", text: "福建省( 共9个 )", value: "福建省", open: true}, {
        pId: "0_1_3",
        id: "0_1_3_0",
        text: "福州市",
        value: "福州市",
        open: true
    }, {pId: "0_1_3", id: "0_1_3_1", text: "龙岩市", value: "龙岩市", open: true}, {
        pId: "0_1_3",
        id: "0_1_3_2",
        text: "南平市",
        value: "南平市",
        open: true
    }, {pId: "0_1_3", id: "0_1_3_3", text: "宁德市", value: "宁德市", open: true}, {
        pId: "0_1_3",
        id: "0_1_3_4",
        text: "莆田市",
        value: "莆田市",
        open: true
    }, {pId: "0_1_3", id: "0_1_3_5", text: "泉州市", value: "泉州市", open: true}, {
        pId: "0_1_3",
        id: "0_1_3_6",
        text: "三明市",
        value: "三明市",
        open: true
    }, {pId: "0_1_3", id: "0_1_3_7", text: "厦门市", value: "厦门市", open: true}, {
        pId: "0_1_3",
        id: "0_1_3_8",
        text: "漳州市",
        value: "漳州市",
        open: true
    }, {pId: "0_1", id: "0_1_4", text: "甘肃省( 共12个 )", value: "甘肃省", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_0",
        text: "白银市",
        value: "白银市",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_1", text: "嘉峪关市", value: "嘉峪关市", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_2",
        text: "金昌市",
        value: "金昌市",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_3", text: "酒泉市", value: "酒泉市", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_4",
        text: "兰州市",
        value: "兰州市",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_5", text: "陇南市", value: "陇南市", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_6",
        text: "平凉市",
        value: "平凉市",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_7", text: "庆阳市", value: "庆阳市", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_8",
        text: "天津市区",
        value: "天津市区",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_9", text: "天水市", value: "天水市", open: true}, {
        pId: "0_1_4",
        id: "0_1_4_10",
        text: "武威市",
        value: "武威市",
        open: true
    }, {pId: "0_1_4", id: "0_1_4_11", text: "张掖市", value: "张掖市", open: true}, {
        pId: "0_1",
        id: "0_1_5",
        text: "广东省( 共21个 )",
        value: "广东省",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_0", text: "潮州市", value: "潮州市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_1",
        text: "东莞市",
        value: "东莞市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_2", text: "佛山市", value: "佛山市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_3",
        text: "广州市",
        value: "广州市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_4", text: "河源市", value: "河源市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_5",
        text: "惠州市",
        value: "惠州市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_6", text: "江门市", value: "江门市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_7",
        text: "揭阳市",
        value: "揭阳市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_8", text: "茂名市", value: "茂名市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_9",
        text: "梅州市",
        value: "梅州市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_10", text: "清远市", value: "清远市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_11",
        text: "汕头市",
        value: "汕头市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_12", text: "汕尾市", value: "汕尾市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_13",
        text: "韶关市",
        value: "韶关市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_14", text: "深圳市", value: "深圳市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_15",
        text: "阳江市",
        value: "阳江市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_16", text: "云浮市", value: "云浮市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_17",
        text: "湛江市",
        value: "湛江市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_18", text: "肇庆市", value: "肇庆市", open: true}, {
        pId: "0_1_5",
        id: "0_1_5_19",
        text: "中山市",
        value: "中山市",
        open: true
    }, {pId: "0_1_5", id: "0_1_5_20", text: "珠海市", value: "珠海市", open: true}, {
        pId: "0_1",
        id: "0_1_6",
        text: "广西壮族自治区( 共14个 )",
        value: "广西壮族自治区",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_0", text: "百色市", value: "百色市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_1",
        text: "北海市",
        value: "北海市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_2", text: "崇左市", value: "崇左市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_3",
        text: "防城港市",
        value: "防城港市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_4", text: "桂林市", value: "桂林市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_5",
        text: "贵港市",
        value: "贵港市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_6", text: "河池市", value: "河池市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_7",
        text: "贺州市",
        value: "贺州市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_8", text: "来宾市", value: "来宾市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_9",
        text: "柳州市",
        value: "柳州市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_10", text: "南宁市", value: "南宁市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_11",
        text: "钦州市",
        value: "钦州市",
        open: true
    }, {pId: "0_1_6", id: "0_1_6_12", text: "梧州市", value: "梧州市", open: true}, {
        pId: "0_1_6",
        id: "0_1_6_13",
        text: "玉林市",
        value: "玉林市",
        open: true
    }, {pId: "0_1", id: "0_1_7", text: "贵州省( 共9个 )", value: "贵州省", open: true}, {
        pId: "0_1_7",
        id: "0_1_7_0",
        text: "安顺市",
        value: "安顺市",
        open: true
    }, {pId: "0_1_7", id: "0_1_7_1", text: "毕节地区", value: "毕节地区", open: true}, {
        pId: "0_1_7",
        id: "0_1_7_2",
        text: "贵阳市",
        value: "贵阳市",
        open: true
    }, {pId: "0_1_7", id: "0_1_7_3", text: "六盘水市", value: "六盘水市", open: true}, {
        pId: "0_1_7",
        id: "0_1_7_4",
        text: "黔东南州",
        value: "黔东南州",
        open: true
    }, {pId: "0_1_7", id: "0_1_7_5", text: "黔南州", value: "黔南州", open: true}, {
        pId: "0_1_7",
        id: "0_1_7_6",
        text: "黔西南市",
        value: "黔西南市",
        open: true
    }, {pId: "0_1_7", id: "0_1_7_7", text: "铜仁地区", value: "铜仁地区", open: true}, {
        pId: "0_1_7",
        id: "0_1_7_8",
        text: "遵义市",
        value: "遵义市",
        open: true
    }, {pId: "0_1", id: "0_1_8", text: "海南省( 共2个 )", value: "海南省", open: true}, {
        pId: "0_1_8",
        id: "0_1_8_0",
        text: "海口市",
        value: "海口市",
        open: true
    }, {pId: "0_1_8", id: "0_1_8_1", text: "三亚市", value: "三亚市", open: true}, {
        pId: "0_1",
        id: "0_1_9",
        text: "河北省( 共12个 )",
        value: "河北省",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_0", text: "保定市", value: "保定市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_1",
        text: "沧州市",
        value: "沧州市",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_2", text: "承德市", value: "承德市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_3",
        text: "邯郸市",
        value: "邯郸市",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_4", text: "衡水市", value: "衡水市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_5",
        text: "廊坊市",
        value: "廊坊市",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_6", text: "秦皇岛市", value: "秦皇岛市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_7",
        text: "石家庄市",
        value: "石家庄市",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_8", text: "唐山市", value: "唐山市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_9",
        text: "天津市区",
        value: "天津市区",
        open: true
    }, {pId: "0_1_9", id: "0_1_9_10", text: "邢台市", value: "邢台市", open: true}, {
        pId: "0_1_9",
        id: "0_1_9_11",
        text: "张家口市",
        value: "张家口市",
        open: true
    }, {pId: "0_1", id: "0_1_10", text: "河南省( 共19个 )", value: "河南省", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_0",
        text: "安阳市",
        value: "安阳市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_1", text: "鹤壁市", value: "鹤壁市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_2",
        text: "济源市",
        value: "济源市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_3", text: "焦作市", value: "焦作市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_4",
        text: "开封市",
        value: "开封市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_5", text: "廊坊市", value: "廊坊市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_6",
        text: "洛阳市",
        value: "洛阳市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_7", text: "漯河市", value: "漯河市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_8",
        text: "南阳市",
        value: "南阳市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_9", text: "平顶山市", value: "平顶山市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_10",
        text: "濮阳市",
        value: "濮阳市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_11", text: "三门峡市", value: "三门峡市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_12",
        text: "商丘市",
        value: "商丘市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_13", text: "新乡市", value: "新乡市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_14",
        text: "信阳市",
        value: "信阳市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_15", text: "许昌市", value: "许昌市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_16",
        text: "郑州市",
        value: "郑州市",
        open: true
    }, {pId: "0_1_10", id: "0_1_10_17", text: "周口市", value: "周口市", open: true}, {
        pId: "0_1_10",
        id: "0_1_10_18",
        text: "驻马店市",
        value: "驻马店市",
        open: true
    }, {pId: "0_1", id: "0_1_11", text: "黑龙江省( 共13个 )", value: "黑龙江省", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_0",
        text: "大庆市",
        value: "大庆市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_1", text: "大兴安岭地区", value: "大兴安岭地区", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_2",
        text: "大兴安岭市",
        value: "大兴安岭市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_3", text: "哈尔滨市", value: "哈尔滨市", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_4",
        text: "鹤港市",
        value: "鹤港市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_5", text: "黑河市", value: "黑河市", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_6",
        text: "佳木斯市",
        value: "佳木斯市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_7", text: "牡丹江市", value: "牡丹江市", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_8",
        text: "七台河市",
        value: "七台河市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_9", text: "齐齐哈尔市", value: "齐齐哈尔市", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_10",
        text: "双鸭山市",
        value: "双鸭山市",
        open: true
    }, {pId: "0_1_11", id: "0_1_11_11", text: "绥化市", value: "绥化市", open: true}, {
        pId: "0_1_11",
        id: "0_1_11_12",
        text: "伊春市",
        value: "伊春市",
        open: true
    }, {pId: "0_1", id: "0_1_12", text: "湖北省( 共16个 )", value: "湖北省", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_0",
        text: "鄂州市",
        value: "鄂州市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_1", text: "恩施土家族苗族自治州", value: "恩施土家族苗族自治州", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_2",
        text: "黄冈市",
        value: "黄冈市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_3", text: "黄石市", value: "黄石市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_4",
        text: "荆门市",
        value: "荆门市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_5", text: "荆州市", value: "荆州市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_6",
        text: "神农架市",
        value: "神农架市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_7", text: "十堰市", value: "十堰市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_8",
        text: "随州市",
        value: "随州市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_9", text: "天门市", value: "天门市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_10",
        text: "武汉市",
        value: "武汉市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_11", text: "咸宁市", value: "咸宁市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_12",
        text: "襄樊市",
        value: "襄樊市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_13", text: "襄阳市", value: "襄阳市", open: true}, {
        pId: "0_1_12",
        id: "0_1_12_14",
        text: "孝感市",
        value: "孝感市",
        open: true
    }, {pId: "0_1_12", id: "0_1_12_15", text: "宜昌市", value: "宜昌市", open: true}, {
        pId: "0_1",
        id: "0_1_13",
        text: "湖南省( 共15个 )",
        value: "湖南省",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_0", text: "常德市", value: "常德市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_1",
        text: "长沙市",
        value: "长沙市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_2", text: "郴州市", value: "郴州市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_3",
        text: "衡阳市",
        value: "衡阳市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_4", text: "怀化市", value: "怀化市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_5",
        text: "娄底市",
        value: "娄底市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_6", text: "邵阳市", value: "邵阳市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_7",
        text: "湘潭市",
        value: "湘潭市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_8", text: "湘西市", value: "湘西市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_9",
        text: "湘西土家族苗族自治州",
        value: "湘西土家族苗族自治州",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_10", text: "益阳市", value: "益阳市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_11",
        text: "永州市",
        value: "永州市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_12", text: "岳阳市", value: "岳阳市", open: true}, {
        pId: "0_1_13",
        id: "0_1_13_13",
        text: "张家界市",
        value: "张家界市",
        open: true
    }, {pId: "0_1_13", id: "0_1_13_14", text: "株洲市", value: "株洲市", open: true}, {
        pId: "0_1",
        id: "0_1_14",
        text: "吉林省( 共10个 )",
        value: "吉林省",
        open: true
    }, {pId: "0_1_14", id: "0_1_14_0", text: "白城市", value: "白城市", open: true}, {
        pId: "0_1_14",
        id: "0_1_14_1",
        text: "白山市",
        value: "白山市",
        open: true
    }, {pId: "0_1_14", id: "0_1_14_2", text: "长春市", value: "长春市", open: true}, {
        pId: "0_1_14",
        id: "0_1_14_3",
        text: "大庆市",
        value: "大庆市",
        open: true
    }, {pId: "0_1_14", id: "0_1_14_4", text: "吉林市", value: "吉林市", open: true}, {
        pId: "0_1_14",
        id: "0_1_14_5",
        text: "辽源市",
        value: "辽源市",
        open: true
    }, {pId: "0_1_14", id: "0_1_14_6", text: "四平市", value: "四平市", open: true}, {
        pId: "0_1_14",
        id: "0_1_14_7",
        text: "松原市",
        value: "松原市",
        open: true
    }, {pId: "0_1_14", id: "0_1_14_8", text: "通化市", value: "通化市", open: true}, {
        pId: "0_1_14",
        id: "0_1_14_9",
        text: "延边朝鲜族自治州",
        value: "延边朝鲜族自治州",
        open: true
    }, {pId: "0_1", id: "0_1_15", text: "江苏省( 共13个 )", value: "江苏省", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_0",
        text: "常州市",
        value: "常州市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_1", text: "淮安市", value: "淮安市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_2",
        text: "连云港市",
        value: "连云港市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_3", text: "南京市", value: "南京市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_4",
        text: "南通市",
        value: "南通市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_5", text: "苏州市", value: "苏州市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_6",
        text: "宿迁市",
        value: "宿迁市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_7", text: "泰州市", value: "泰州市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_8",
        text: "无锡市",
        value: "无锡市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_9", text: "徐州市", value: "徐州市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_10",
        text: "盐城市",
        value: "盐城市",
        open: true
    }, {pId: "0_1_15", id: "0_1_15_11", text: "扬州市", value: "扬州市", open: true}, {
        pId: "0_1_15",
        id: "0_1_15_12",
        text: "镇江市",
        value: "镇江市",
        open: true
    }, {pId: "0_1", id: "0_1_16", text: "江西省( 共10个 )", value: "江西省", open: true}, {
        pId: "0_1_16",
        id: "0_1_16_0",
        text: "抚州市",
        value: "抚州市",
        open: true
    }, {pId: "0_1_16", id: "0_1_16_1", text: "赣州市", value: "赣州市", open: true}, {
        pId: "0_1_16",
        id: "0_1_16_2",
        text: "景德镇市",
        value: "景德镇市",
        open: true
    }, {pId: "0_1_16", id: "0_1_16_3", text: "九江市", value: "九江市", open: true}, {
        pId: "0_1_16",
        id: "0_1_16_4",
        text: "南昌市",
        value: "南昌市",
        open: true
    }, {pId: "0_1_16", id: "0_1_16_5", text: "萍乡市", value: "萍乡市", open: true}, {
        pId: "0_1_16",
        id: "0_1_16_6",
        text: "上饶市",
        value: "上饶市",
        open: true
    }, {pId: "0_1_16", id: "0_1_16_7", text: "新余市", value: "新余市", open: true}, {
        pId: "0_1_16",
        id: "0_1_16_8",
        text: "宜春市",
        value: "宜春市",
        open: true
    }, {pId: "0_1_16", id: "0_1_16_9", text: "鹰潭市", value: "鹰潭市", open: true}, {
        pId: "0_1",
        id: "0_1_17",
        text: "辽宁省( 共14个 )",
        value: "辽宁省",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_0", text: "鞍山市", value: "鞍山市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_1",
        text: "本溪市",
        value: "本溪市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_2", text: "朝阳市", value: "朝阳市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_3",
        text: "大连市",
        value: "大连市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_4", text: "丹东市", value: "丹东市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_5",
        text: "抚顺市",
        value: "抚顺市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_6", text: "阜新市", value: "阜新市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_7",
        text: "葫芦岛市",
        value: "葫芦岛市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_8", text: "锦州市", value: "锦州市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_9",
        text: "辽阳市",
        value: "辽阳市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_10", text: "盘锦市", value: "盘锦市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_11",
        text: "沈阳市",
        value: "沈阳市",
        open: true
    }, {pId: "0_1_17", id: "0_1_17_12", text: "铁岭市", value: "铁岭市", open: true}, {
        pId: "0_1_17",
        id: "0_1_17_13",
        text: "营口市",
        value: "营口市",
        open: true
    }, {pId: "0_1", id: "0_1_18", text: "内蒙古( 共10个 )", value: "内蒙古", open: true}, {
        pId: "0_1_18",
        id: "0_1_18_0",
        text: "包头市",
        value: "包头市",
        open: true
    }, {pId: "0_1_18", id: "0_1_18_1", text: "赤峰市", value: "赤峰市", open: true}, {
        pId: "0_1_18",
        id: "0_1_18_2",
        text: "鄂尔多斯市",
        value: "鄂尔多斯市",
        open: true
    }, {pId: "0_1_18", id: "0_1_18_3", text: "呼和浩特市", value: "呼和浩特市", open: true}, {
        pId: "0_1_18",
        id: "0_1_18_4",
        text: "呼伦贝尔市",
        value: "呼伦贝尔市",
        open: true
    }, {pId: "0_1_18", id: "0_1_18_5", text: "通辽市", value: "通辽市", open: true}, {
        pId: "0_1_18",
        id: "0_1_18_6",
        text: "乌海市",
        value: "乌海市",
        open: true
    }, {pId: "0_1_18", id: "0_1_18_7", text: "锡林郭勒市", value: "锡林郭勒市", open: true}, {
        pId: "0_1_18",
        id: "0_1_18_8",
        text: "兴安市",
        value: "兴安市",
        open: true
    }, {pId: "0_1_18", id: "0_1_18_9", text: "运城市", value: "运城市", open: true}, {
        pId: "0_1",
        id: "0_1_19",
        text: "宁夏回族自治区( 共5个 )",
        value: "宁夏回族自治区",
        open: true
    }, {pId: "0_1_19", id: "0_1_19_0", text: "固原市", value: "固原市", open: true}, {
        pId: "0_1_19",
        id: "0_1_19_1",
        text: "石嘴山市",
        value: "石嘴山市",
        open: true
    }, {pId: "0_1_19", id: "0_1_19_2", text: "吴忠市", value: "吴忠市", open: true}, {
        pId: "0_1_19",
        id: "0_1_19_3",
        text: "银川市",
        value: "银川市",
        open: true
    }, {pId: "0_1_19", id: "0_1_19_4", text: "中卫市", value: "中卫市", open: true}, {
        pId: "0_1",
        id: "0_1_20",
        text: "青海省( 共4个 )",
        value: "青海省",
        open: true
    }, {pId: "0_1_20", id: "0_1_20_0", text: "海东地区", value: "海东地区", open: true}, {
        pId: "0_1_20",
        id: "0_1_20_1",
        text: "海南藏族自治州",
        value: "海南藏族自治州",
        open: true
    }, {pId: "0_1_20", id: "0_1_20_2", text: "海西蒙古族藏族自治州", value: "海西蒙古族藏族自治州", open: true}, {
        pId: "0_1_20",
        id: "0_1_20_3",
        text: "西宁市",
        value: "西宁市",
        open: true
    }, {pId: "0_1", id: "0_1_21", text: "山东省( 共17个 )", value: "山东省", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_0",
        text: "滨州市",
        value: "滨州市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_1", text: "德州市", value: "德州市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_2",
        text: "东营市",
        value: "东营市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_3", text: "菏泽市", value: "菏泽市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_4",
        text: "济南市",
        value: "济南市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_5", text: "济宁市", value: "济宁市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_6",
        text: "莱芜市",
        value: "莱芜市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_7", text: "聊城市", value: "聊城市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_8",
        text: "临沂市",
        value: "临沂市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_9", text: "青岛市", value: "青岛市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_10",
        text: "日照市",
        value: "日照市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_11", text: "泰安市", value: "泰安市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_12",
        text: "威海市",
        value: "威海市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_13", text: "潍坊市", value: "潍坊市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_14",
        text: "烟台市",
        value: "烟台市",
        open: true
    }, {pId: "0_1_21", id: "0_1_21_15", text: "枣庄市", value: "枣庄市", open: true}, {
        pId: "0_1_21",
        id: "0_1_21_16",
        text: "淄博市",
        value: "淄博市",
        open: true
    }, {pId: "0_1", id: "0_1_22", text: "山西省( 共12个 )", value: "山西省", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_0",
        text: "长治市",
        value: "长治市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_1", text: "大同市", value: "大同市", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_2",
        text: "晋城市",
        value: "晋城市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_3", text: "晋中市", value: "晋中市", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_4",
        text: "临汾市",
        value: "临汾市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_5", text: "吕梁市", value: "吕梁市", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_6",
        text: "青岛市",
        value: "青岛市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_7", text: "朔州市", value: "朔州市", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_8",
        text: "太原市",
        value: "太原市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_9", text: "忻州市", value: "忻州市", open: true}, {
        pId: "0_1_22",
        id: "0_1_22_10",
        text: "阳泉市",
        value: "阳泉市",
        open: true
    }, {pId: "0_1_22", id: "0_1_22_11", text: "运城市", value: "运城市", open: true}, {
        pId: "0_1",
        id: "0_1_23",
        text: "陕西省( 共9个 )",
        value: "陕西省",
        open: true
    }, {pId: "0_1_23", id: "0_1_23_0", text: "安康市", value: "安康市", open: true}, {
        pId: "0_1_23",
        id: "0_1_23_1",
        text: "宝鸡市",
        value: "宝鸡市",
        open: true
    }, {pId: "0_1_23", id: "0_1_23_2", text: "汉中市", value: "汉中市", open: true}, {
        pId: "0_1_23",
        id: "0_1_23_3",
        text: "商洛市",
        value: "商洛市",
        open: true
    }, {pId: "0_1_23", id: "0_1_23_4", text: "渭南市", value: "渭南市", open: true}, {
        pId: "0_1_23",
        id: "0_1_23_5",
        text: "西安市",
        value: "西安市",
        open: true
    }, {pId: "0_1_23", id: "0_1_23_6", text: "咸阳市", value: "咸阳市", open: true}, {
        pId: "0_1_23",
        id: "0_1_23_7",
        text: "延安市",
        value: "延安市",
        open: true
    }, {pId: "0_1_23", id: "0_1_23_8", text: "榆林市", value: "榆林市", open: true}, {
        pId: "0_1",
        id: "0_1_24",
        text: "上海市( 共19个 )",
        value: "上海市",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_0", text: "宝山区", value: "宝山区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_1",
        text: "长宁区",
        value: "长宁区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_2", text: "崇明县", value: "崇明县", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_3",
        text: "奉贤区",
        value: "奉贤区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_4", text: "虹口区", value: "虹口区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_5",
        text: "黄浦区",
        value: "黄浦区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_6", text: "嘉定区", value: "嘉定区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_7",
        text: "金山区",
        value: "金山区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_8", text: "静安区", value: "静安区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_9",
        text: "昆明市",
        value: "昆明市",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_10", text: "闵行区", value: "闵行区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_11",
        text: "普陀区",
        value: "普陀区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_12", text: "浦东新区", value: "浦东新区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_13",
        text: "青浦区",
        value: "青浦区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_14", text: "上海市区", value: "上海市区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_15",
        text: "松江区",
        value: "松江区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_16", text: "徐汇区", value: "徐汇区", open: true}, {
        pId: "0_1_24",
        id: "0_1_24_17",
        text: "杨浦区",
        value: "杨浦区",
        open: true
    }, {pId: "0_1_24", id: "0_1_24_18", text: "闸北区", value: "闸北区", open: true}, {
        pId: "0_1",
        id: "0_1_25",
        text: "四川省( 共21个 )",
        value: "四川省",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_0", text: "阿坝藏族羌族自治州", value: "阿坝藏族羌族自治州", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_1",
        text: "巴中市",
        value: "巴中市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_2", text: "成都市", value: "成都市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_3",
        text: "达州市",
        value: "达州市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_4", text: "德阳市", value: "德阳市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_5",
        text: "甘孜市",
        value: "甘孜市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_6", text: "广安市", value: "广安市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_7",
        text: "广元市",
        value: "广元市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_8", text: "乐山市", value: "乐山市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_9",
        text: "凉山市",
        value: "凉山市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_10", text: "泸州市", value: "泸州市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_11",
        text: "眉山市",
        value: "眉山市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_12", text: "绵阳市", value: "绵阳市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_13",
        text: "南充市",
        value: "南充市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_14", text: "内江市", value: "内江市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_15",
        text: "攀枝花市",
        value: "攀枝花市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_16", text: "遂宁市", value: "遂宁市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_17",
        text: "雅安市",
        value: "雅安市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_18", text: "宜宾市", value: "宜宾市", open: true}, {
        pId: "0_1_25",
        id: "0_1_25_19",
        text: "资阳市",
        value: "资阳市",
        open: true
    }, {pId: "0_1_25", id: "0_1_25_20", text: "自贡市", value: "自贡市", open: true}, {
        pId: "0_1",
        id: "0_1_26",
        text: "台湾( 共1个 )",
        value: "台湾",
        open: true
    }, {pId: "0_1_26", id: "0_1_26_0", text: "台北市", value: "台北市", open: true}, {
        pId: "0_1",
        id: "0_1_27",
        text: "天津市( 共1个 )",
        value: "天津市",
        open: true
    }, {pId: "0_1_27", id: "0_1_27_0", text: "天津市区", value: "天津市区", open: true}, {
        pId: "0_1",
        id: "0_1_28",
        text: "西藏自治区( 共2个 )",
        value: "西藏自治区",
        open: true
    }, {pId: "0_1_28", id: "0_1_28_0", text: "阿里市", value: "阿里市", open: true}, {
        pId: "0_1_28",
        id: "0_1_28_1",
        text: "日喀则市",
        value: "日喀则市",
        open: true
    }, {pId: "0_1", id: "0_1_29", text: "香港特别行政区( 共1个 )", value: "香港特别行政区", open: true}, {
        pId: "0_1_29",
        id: "0_1_29_0",
        text: "香港",
        value: "香港",
        open: true
    }, {
        pId: "0_1",
        id: "0_1_30",
        text: "新疆维吾尔族自治区( 共11个 )",
        value: "新疆维吾尔族自治区",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_0", text: "巴音郭楞市", value: "巴音郭楞市", open: true}, {
        pId: "0_1_30",
        id: "0_1_30_1",
        text: "哈密市",
        value: "哈密市",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_2", text: "和田市", value: "和田市", open: true}, {
        pId: "0_1_30",
        id: "0_1_30_3",
        text: "喀什地区",
        value: "喀什地区",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_4", text: "克拉玛依市", value: "克拉玛依市", open: true}, {
        pId: "0_1_30",
        id: "0_1_30_5",
        text: "克孜勒苏柯州",
        value: "克孜勒苏柯州",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_6", text: "石河子市", value: "石河子市", open: true}, {
        pId: "0_1_30",
        id: "0_1_30_7",
        text: "塔城市",
        value: "塔城市",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_8", text: "吐鲁番地区", value: "吐鲁番地区", open: true}, {
        pId: "0_1_30",
        id: "0_1_30_9",
        text: "乌鲁木齐",
        value: "乌鲁木齐",
        open: true
    }, {pId: "0_1_30", id: "0_1_30_10", text: "伊犁市", value: "伊犁市", open: true}, {
        pId: "0_1",
        id: "0_1_31",
        text: "云南省( 共12个 )",
        value: "云南省",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_0", text: "保山市", value: "保山市", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_1",
        text: "楚雄彝族自治州",
        value: "楚雄彝族自治州",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_2", text: "大理白族自治州", value: "大理白族自治州", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_3",
        text: "红河哈尼族彝族自治州",
        value: "红河哈尼族彝族自治州",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_4", text: "昆明市", value: "昆明市", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_5",
        text: "丽江市",
        value: "丽江市",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_6", text: "临沧市", value: "临沧市", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_7",
        text: "曲靖市",
        value: "曲靖市",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_8", text: "思茅市", value: "思茅市", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_9",
        text: "文山市",
        value: "文山市",
        open: true
    }, {pId: "0_1_31", id: "0_1_31_10", text: "玉溪市", value: "玉溪市", open: true}, {
        pId: "0_1_31",
        id: "0_1_31_11",
        text: "昭通市",
        value: "昭通市",
        open: true
    }, {pId: "0_1", id: "0_1_32", text: "浙江省( 共12个 )", value: "浙江省", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_0",
        text: "杭州市",
        value: "杭州市",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_1", text: "湖州市", value: "湖州市", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_2",
        text: "嘉兴市",
        value: "嘉兴市",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_3", text: "金华市", value: "金华市", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_4",
        text: "丽水市",
        value: "丽水市",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_5", text: "宁波市", value: "宁波市", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_6",
        text: "衢州市",
        value: "衢州市",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_7", text: "绍兴市", value: "绍兴市", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_8",
        text: "台州市",
        value: "台州市",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_9", text: "温州市", value: "温州市", open: true}, {
        pId: "0_1_32",
        id: "0_1_32_10",
        text: "浙江省",
        value: "浙江省",
        open: true
    }, {pId: "0_1_32", id: "0_1_32_11", text: "舟山市", value: "舟山市", open: true}, {
        pId: "0_1",
        id: "0_1_33",
        text: "重庆市( 共1个 )",
        value: "重庆市",
        open: true
    }, {pId: "0_1_33", id: "0_1_33_0", text: "重庆市区", value: "重庆市区", open: true}],

    TREE: [{id: -1, pId: -2, value: "根目录", text: "根目录"},
        {id: 1, pId: -1, value: "第一级目录1", text: "第一级目录1"},
        {id: 11, pId: 1, value: "第二级文件1", text: "第二级文件1"},
        {id: 12, pId: 1, value: "第二级目录2", text: "第二级目录2"},
        {id: 121, pId: 12, value: "第三级目录1", text: "第三级目录1"},
        {id: 122, pId: 12, value: "第三级文件1", text: "第三级文件1"},
        {id: 1211, pId: 121, value: "第四级目录1", text: "第四级目录1"},
        {id: 12111, pId: 1211, value: "第五级文件1", text: "第五级文件111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"},
        {id: 2, pId: -1, value: "第一级目录2", text: "第一级目录2"},
        {id: 21, pId: 2, value: "第二级目录3", text: "第二级目录3"},
        {id: 22, pId: 2, value: "第二级文件2", text: "第二级文件2"},
        {id: 211, pId: 21, value: "第三级目录2", text: "第三级目录2"},
        {id: 212, pId: 21, value: "第三级文件2", text: "第三级文件2"},
        {id: 2111, pId: 211, value: "第四级文件1", text: "第四级文件1"}],
    LEVELTREE: [{
        id: 1,
        text: "第一项",
        value: "1"
    }, {
        id: 2,
        text: "第二项",
        value: "2"
    }, {
        id: 3,
        text: "第三项",
        value: "3",
        open: true
    }, {
        id: 11,
        pId: 1,
        text: "子项1",
        value: "11"
    }, {
        id: 12,
        pId: 1,
        text: "子项2",
        value: "12"
    }, {
        id: 13,
        pId: 1,
        text: "子项3",
        value: "13"
    }, {
        id: 31,
        pId: 3,
        text: "子项1",
        value: "31"
    }, {
        id: 32,
        pId: 3,
        text: "子项2",
        value: "32"
    }, {
        id: 33,
        pId: 3,
        text: "子项3",
        value: "33"
    }]
};

