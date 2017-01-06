/**
 * Created by Administrator on 2016/11/17 0017.
 */
+function($){

    var cityData = [ // xuele系统地区数据
        {
            "code": "11",
            "name": "北京",
            "longname": "北京"
        },
        {
            "code": "1101",
            "name": "市辖区",
            "longname": "北京 市辖区"
        },
        {
            "code": "110101",
            "name": "东城区",
            "longname": "北京 市辖区 东城区"
        },
        {
            "code": "110102",
            "name": "西城区",
            "longname": "北京 市辖区 西城区"
        },
        {
            "code": "110105",
            "name": "朝阳区",
            "longname": "北京 市辖区 朝阳区"
        },
        {
            "code": "110106",
            "name": "丰台区",
            "longname": "北京 市辖区 丰台区"
        },
        {
            "code": "110107",
            "name": "石景山区",
            "longname": "北京 市辖区 石景山区"
        },
        {
            "code": "110108",
            "name": "海淀区",
            "longname": "北京 市辖区 海淀区"
        },
        {
            "code": "110109",
            "name": "门头沟区",
            "longname": "北京 市辖区 门头沟区"
        },
        {
            "code": "110111",
            "name": "房山区",
            "longname": "北京 市辖区 房山区"
        },
        {
            "code": "110112",
            "name": "通州区",
            "longname": "北京 市辖区 通州区"
        },
        {
            "code": "110113",
            "name": "顺义区",
            "longname": "北京 市辖区 顺义区"
        },
        {
            "code": "110114",
            "name": "昌平区",
            "longname": "北京 市辖区 昌平区"
        },
        {
            "code": "110115",
            "name": "大兴区",
            "longname": "北京 市辖区 大兴区"
        },
        {
            "code": "110116",
            "name": "怀柔区",
            "longname": "北京 市辖区 怀柔区"
        },
        {
            "code": "110117",
            "name": "平谷区",
            "longname": "北京 市辖区 平谷区"
        },
        {
            "code": "1102",
            "name": "县",
            "longname": "北京 县"
        },
        {
            "code": "110228",
            "name": "密云县",
            "longname": "北京 县 密云县"
        },
        {
            "code": "110229",
            "name": "延庆县",
            "longname": "北京 县 延庆县"
        },
        {
            "code": "12",
            "name": "天津",
            "longname": "天津"
        },
        {
            "code": "1201",
            "name": "市辖区",
            "longname": "天津 市辖区"
        },
        {
            "code": "120101",
            "name": "和平区",
            "longname": "天津 市辖区 和平区"
        },
        {
            "code": "120102",
            "name": "河东区",
            "longname": "天津 市辖区 河东区"
        },
        {
            "code": "120103",
            "name": "河西区",
            "longname": "天津 市辖区 河西区"
        },
        {
            "code": "120104",
            "name": "南开区",
            "longname": "天津 市辖区 南开区"
        },
        {
            "code": "120105",
            "name": "河北区",
            "longname": "天津 市辖区 河北区"
        },
        {
            "code": "120106",
            "name": "红桥区",
            "longname": "天津 市辖区 红桥区"
        },
        {
            "code": "120110",
            "name": "东丽区",
            "longname": "天津 市辖区 东丽区"
        },
        {
            "code": "120111",
            "name": "西青区",
            "longname": "天津 市辖区 西青区"
        },
        {
            "code": "120112",
            "name": "津南区",
            "longname": "天津 市辖区 津南区"
        },
        {
            "code": "120113",
            "name": "北辰区",
            "longname": "天津 市辖区 北辰区"
        },
        {
            "code": "120114",
            "name": "武清区",
            "longname": "天津 市辖区 武清区"
        },
        {
            "code": "120115",
            "name": "宝坻区",
            "longname": "天津 市辖区 宝坻区"
        },
        {
            "code": "120116",
            "name": "滨海新区",
            "longname": "天津 市辖区 滨海新区"
        },
        {
            "code": "1202",
            "name": "县",
            "longname": "天津 县"
        },
        {
            "code": "120221",
            "name": "宁河县",
            "longname": "天津 县 宁河县"
        },
        {
            "code": "120223",
            "name": "静海县",
            "longname": "天津 县 静海县"
        },
        {
            "code": "120225",
            "name": "蓟县",
            "longname": "天津 县 蓟县"
        },
        {
            "code": "13",
            "name": "河北",
            "longname": "河北"
        },
        {
            "code": "1301",
            "name": "石家庄市",
            "longname": "河北 石家庄市"
        },
        {
            "code": "130101",
            "name": "市辖区",
            "longname": "河北 石家庄市 市辖区"
        },
        {
            "code": "130102",
            "name": "长安区",
            "longname": "河北 石家庄市 长安区"
        },
        {
            "code": "130103",
            "name": "桥东区",
            "longname": "河北 石家庄市 桥东区"
        },
        {
            "code": "130104",
            "name": "桥西区",
            "longname": "河北 石家庄市 桥西区"
        },
        {
            "code": "130105",
            "name": "新华区",
            "longname": "河北 石家庄市 新华区"
        },
        {
            "code": "130107",
            "name": "井陉矿区",
            "longname": "河北 石家庄市 井陉矿区"
        },
        {
            "code": "130108",
            "name": "裕华区",
            "longname": "河北 石家庄市 裕华区"
        },
        {
            "code": "130121",
            "name": "井陉县",
            "longname": "河北 石家庄市 井陉县"
        },
        {
            "code": "130123",
            "name": "正定县",
            "longname": "河北 石家庄市 正定县"
        },
        {
            "code": "130124",
            "name": "栾城县",
            "longname": "河北 石家庄市 栾城县"
        },
        {
            "code": "130125",
            "name": "行唐县",
            "longname": "河北 石家庄市 行唐县"
        },
        {
            "code": "130126",
            "name": "灵寿县",
            "longname": "河北 石家庄市 灵寿县"
        },
        {
            "code": "130127",
            "name": "高邑县",
            "longname": "河北 石家庄市 高邑县"
        },
        {
            "code": "130128",
            "name": "深泽县",
            "longname": "河北 石家庄市 深泽县"
        },
        {
            "code": "130129",
            "name": "赞皇县",
            "longname": "河北 石家庄市 赞皇县"
        },
        {
            "code": "130130",
            "name": "无极县",
            "longname": "河北 石家庄市 无极县"
        },
        {
            "code": "130131",
            "name": "平山县",
            "longname": "河北 石家庄市 平山县"
        },
        {
            "code": "130132",
            "name": "元氏县",
            "longname": "河北 石家庄市 元氏县"
        },
        {
            "code": "130133",
            "name": "赵县",
            "longname": "河北 石家庄市 赵县"
        },
        {
            "code": "130181",
            "name": "辛集市",
            "longname": "河北 石家庄市 辛集市"
        },
        {
            "code": "130182",
            "name": "藁城市",
            "longname": "河北 石家庄市 藁城市"
        },
        {
            "code": "130183",
            "name": "晋州市",
            "longname": "河北 石家庄市 晋州市"
        },
        {
            "code": "130184",
            "name": "新乐市",
            "longname": "河北 石家庄市 新乐市"
        },
        {
            "code": "130185",
            "name": "鹿泉市",
            "longname": "河北 石家庄市 鹿泉市"
        },
        {
            "code": "1302",
            "name": "唐山市",
            "longname": "河北 唐山市"
        },
        {
            "code": "130201",
            "name": "市辖区",
            "longname": "河北 唐山市 市辖区"
        },
        {
            "code": "130202",
            "name": "路南区",
            "longname": "河北 唐山市 路南区"
        },
        {
            "code": "130203",
            "name": "路北区",
            "longname": "河北 唐山市 路北区"
        },
        {
            "code": "130204",
            "name": "古冶区",
            "longname": "河北 唐山市 古冶区"
        },
        {
            "code": "130205",
            "name": "开平区",
            "longname": "河北 唐山市 开平区"
        },
        {
            "code": "130207",
            "name": "丰南区",
            "longname": "河北 唐山市 丰南区"
        },
        {
            "code": "130208",
            "name": "丰润区",
            "longname": "河北 唐山市 丰润区"
        },
        {
            "code": "130223",
            "name": "滦县",
            "longname": "河北 唐山市 滦县"
        },
        {
            "code": "130224",
            "name": "滦南县",
            "longname": "河北 唐山市 滦南县"
        },
        {
            "code": "130225",
            "name": "乐亭县",
            "longname": "河北 唐山市 乐亭县"
        },
        {
            "code": "130227",
            "name": "迁西县",
            "longname": "河北 唐山市 迁西县"
        },
        {
            "code": "130229",
            "name": "玉田县",
            "longname": "河北 唐山市 玉田县"
        },
        {
            "code": "130230",
            "name": "唐海县",
            "longname": "河北 唐山市 唐海县"
        },
        {
            "code": "130240",
            "name": "汉沽管理区",
            "longname": "河北 唐山市 汉沽管理区"
        },
        {
            "code": "130281",
            "name": "遵化市",
            "longname": "河北 唐山市 遵化市"
        },
        {
            "code": "130283",
            "name": "迁安市",
            "longname": "河北 唐山市 迁安市"
        },
        {
            "code": "1303",
            "name": "秦皇岛市",
            "longname": "河北 秦皇岛市"
        },
        {
            "code": "130301",
            "name": "市辖区",
            "longname": "河北 秦皇岛市 市辖区"
        },
        {
            "code": "130302",
            "name": "海港区",
            "longname": "河北 秦皇岛市 海港区"
        },
        {
            "code": "130303",
            "name": "山海关区",
            "longname": "河北 秦皇岛市 山海关区"
        },
        {
            "code": "130304",
            "name": "北戴河区",
            "longname": "河北 秦皇岛市 北戴河区"
        },
        {
            "code": "130321",
            "name": "青龙满族自治县",
            "longname": "河北 秦皇岛市 青龙满族自治县"
        },
        {
            "code": "130322",
            "name": "昌黎县",
            "longname": "河北 秦皇岛市 昌黎县"
        },
        {
            "code": "130323",
            "name": "抚宁县",
            "longname": "河北 秦皇岛市 抚宁县"
        },
        {
            "code": "130324",
            "name": "卢龙县",
            "longname": "河北 秦皇岛市 卢龙县"
        },
        {
            "code": "1304",
            "name": "邯郸市",
            "longname": "河北 邯郸市"
        },
        {
            "code": "130401",
            "name": "市辖区",
            "longname": "河北 邯郸市 市辖区"
        },
        {
            "code": "130402",
            "name": "邯山区",
            "longname": "河北 邯郸市 邯山区"
        },
        {
            "code": "130403",
            "name": "丛台区",
            "longname": "河北 邯郸市 丛台区"
        },
        {
            "code": "130404",
            "name": "复兴区",
            "longname": "河北 邯郸市 复兴区"
        },
        {
            "code": "130406",
            "name": "峰峰矿区",
            "longname": "河北 邯郸市 峰峰矿区"
        },
        {
            "code": "130421",
            "name": "邯郸县",
            "longname": "河北 邯郸市 邯郸县"
        },
        {
            "code": "130423",
            "name": "临漳县",
            "longname": "河北 邯郸市 临漳县"
        },
        {
            "code": "130424",
            "name": "成安县",
            "longname": "河北 邯郸市 成安县"
        },
        {
            "code": "130425",
            "name": "大名县",
            "longname": "河北 邯郸市 大名县"
        },
        {
            "code": "130426",
            "name": "涉县",
            "longname": "河北 邯郸市 涉县"
        },
        {
            "code": "130427",
            "name": "磁县",
            "longname": "河北 邯郸市 磁县"
        },
        {
            "code": "130428",
            "name": "肥乡县",
            "longname": "河北 邯郸市 肥乡县"
        },
        {
            "code": "130429",
            "name": "永年县",
            "longname": "河北 邯郸市 永年县"
        },
        {
            "code": "130430",
            "name": "邱县",
            "longname": "河北 邯郸市 邱县"
        },
        {
            "code": "130431",
            "name": "鸡泽县",
            "longname": "河北 邯郸市 鸡泽县"
        },
        {
            "code": "130432",
            "name": "广平县",
            "longname": "河北 邯郸市 广平县"
        },
        {
            "code": "130433",
            "name": "馆陶县",
            "longname": "河北 邯郸市 馆陶县"
        },
        {
            "code": "130434",
            "name": "魏县",
            "longname": "河北 邯郸市 魏县"
        },
        {
            "code": "130435",
            "name": "曲周县",
            "longname": "河北 邯郸市 曲周县"
        },
        {
            "code": "130481",
            "name": "武安市",
            "longname": "河北 邯郸市 武安市"
        },
        {
            "code": "1305",
            "name": "邢台市",
            "longname": "河北 邢台市"
        },
        {
            "code": "130501",
            "name": "市辖区",
            "longname": "河北 邢台市 市辖区"
        },
        {
            "code": "130502",
            "name": "桥东区",
            "longname": "河北 邢台市 桥东区"
        },
        {
            "code": "130503",
            "name": "桥西区",
            "longname": "河北 邢台市 桥西区"
        },
        {
            "code": "130521",
            "name": "邢台县",
            "longname": "河北 邢台市 邢台县"
        },
        {
            "code": "130522",
            "name": "临城县",
            "longname": "河北 邢台市 临城县"
        },
        {
            "code": "130523",
            "name": "内丘县",
            "longname": "河北 邢台市 内丘县"
        },
        {
            "code": "130524",
            "name": "柏乡县",
            "longname": "河北 邢台市 柏乡县"
        },
        {
            "code": "130525",
            "name": "隆尧县",
            "longname": "河北 邢台市 隆尧县"
        },
        {
            "code": "130526",
            "name": "任县",
            "longname": "河北 邢台市 任县"
        },
        {
            "code": "130527",
            "name": "南和县",
            "longname": "河北 邢台市 南和县"
        },
        {
            "code": "130528",
            "name": "宁晋县",
            "longname": "河北 邢台市 宁晋县"
        },
        {
            "code": "130529",
            "name": "巨鹿县",
            "longname": "河北 邢台市 巨鹿县"
        },
        {
            "code": "130530",
            "name": "新河县",
            "longname": "河北 邢台市 新河县"
        },
        {
            "code": "130531",
            "name": "广宗县",
            "longname": "河北 邢台市 广宗县"
        },
        {
            "code": "130532",
            "name": "平乡县",
            "longname": "河北 邢台市 平乡县"
        },
        {
            "code": "130533",
            "name": "威县",
            "longname": "河北 邢台市 威县"
        },
        {
            "code": "130534",
            "name": "清河县",
            "longname": "河北 邢台市 清河县"
        },
        {
            "code": "130535",
            "name": "临西县",
            "longname": "河北 邢台市 临西县"
        },
        {
            "code": "130581",
            "name": "南宫市",
            "longname": "河北 邢台市 南宫市"
        },
        {
            "code": "130582",
            "name": "沙河市",
            "longname": "河北 邢台市 沙河市"
        },
        {
            "code": "1306",
            "name": "保定市",
            "longname": "河北 保定市"
        },
        {
            "code": "130601",
            "name": "市辖区",
            "longname": "河北 保定市 市辖区"
        },
        {
            "code": "130602",
            "name": "新市区",
            "longname": "河北 保定市 新市区"
        },
        {
            "code": "130603",
            "name": "北市区",
            "longname": "河北 保定市 北市区"
        },
        {
            "code": "130604",
            "name": "南市区",
            "longname": "河北 保定市 南市区"
        },
        {
            "code": "130621",
            "name": "满城县",
            "longname": "河北 保定市 满城县"
        },
        {
            "code": "130622",
            "name": "清苑县",
            "longname": "河北 保定市 清苑县"
        },
        {
            "code": "130623",
            "name": "涞水县",
            "longname": "河北 保定市 涞水县"
        },
        {
            "code": "130624",
            "name": "阜平县",
            "longname": "河北 保定市 阜平县"
        },
        {
            "code": "130625",
            "name": "徐水县",
            "longname": "河北 保定市 徐水县"
        },
        {
            "code": "130626",
            "name": "定兴县",
            "longname": "河北 保定市 定兴县"
        },
        {
            "code": "130627",
            "name": "唐县",
            "longname": "河北 保定市 唐县"
        },
        {
            "code": "130628",
            "name": "高阳县",
            "longname": "河北 保定市 高阳县"
        },
        {
            "code": "130629",
            "name": "容城县",
            "longname": "河北 保定市 容城县"
        },
        {
            "code": "130630",
            "name": "涞源县",
            "longname": "河北 保定市 涞源县"
        },
        {
            "code": "130631",
            "name": "望都县",
            "longname": "河北 保定市 望都县"
        },
        {
            "code": "130632",
            "name": "安新县",
            "longname": "河北 保定市 安新县"
        },
        {
            "code": "130633",
            "name": "易县",
            "longname": "河北 保定市 易县"
        },
        {
            "code": "130634",
            "name": "曲阳县",
            "longname": "河北 保定市 曲阳县"
        },
        {
            "code": "130635",
            "name": "蠡县",
            "longname": "河北 保定市 蠡县"
        },
        {
            "code": "130636",
            "name": "顺平县",
            "longname": "河北 保定市 顺平县"
        },
        {
            "code": "130637",
            "name": "博野县",
            "longname": "河北 保定市 博野县"
        },
        {
            "code": "130638",
            "name": "雄县",
            "longname": "河北 保定市 雄县"
        },
        {
            "code": "130681",
            "name": "涿州市",
            "longname": "河北 保定市 涿州市"
        },
        {
            "code": "130682",
            "name": "定州市",
            "longname": "河北 保定市 定州市"
        },
        {
            "code": "130683",
            "name": "安国市",
            "longname": "河北 保定市 安国市"
        },
        {
            "code": "130684",
            "name": "高碑店市",
            "longname": "河北 保定市 高碑店市"
        },
        {
            "code": "1307",
            "name": "张家口市",
            "longname": "河北 张家口市"
        },
        {
            "code": "130701",
            "name": "市辖区",
            "longname": "河北 张家口市 市辖区"
        },
        {
            "code": "130702",
            "name": "桥东区",
            "longname": "河北 张家口市 桥东区"
        },
        {
            "code": "130703",
            "name": "桥西区",
            "longname": "河北 张家口市 桥西区"
        },
        {
            "code": "130705",
            "name": "宣化区",
            "longname": "河北 张家口市 宣化区"
        },
        {
            "code": "130706",
            "name": "下花园区",
            "longname": "河北 张家口市 下花园区"
        },
        {
            "code": "130721",
            "name": "宣化县",
            "longname": "河北 张家口市 宣化县"
        },
        {
            "code": "130722",
            "name": "张北县",
            "longname": "河北 张家口市 张北县"
        },
        {
            "code": "130723",
            "name": "康保县",
            "longname": "河北 张家口市 康保县"
        },
        {
            "code": "130724",
            "name": "沽源县",
            "longname": "河北 张家口市 沽源县"
        },
        {
            "code": "130725",
            "name": "尚义县",
            "longname": "河北 张家口市 尚义县"
        },
        {
            "code": "130726",
            "name": "蔚县",
            "longname": "河北 张家口市 蔚县"
        },
        {
            "code": "130727",
            "name": "阳原县",
            "longname": "河北 张家口市 阳原县"
        },
        {
            "code": "130728",
            "name": "怀安县",
            "longname": "河北 张家口市 怀安县"
        },
        {
            "code": "130729",
            "name": "万全县",
            "longname": "河北 张家口市 万全县"
        },
        {
            "code": "130730",
            "name": "怀来县",
            "longname": "河北 张家口市 怀来县"
        },
        {
            "code": "130731",
            "name": "涿鹿县",
            "longname": "河北 张家口市 涿鹿县"
        },
        {
            "code": "130732",
            "name": "赤城县",
            "longname": "河北 张家口市 赤城县"
        },
        {
            "code": "130733",
            "name": "崇礼县",
            "longname": "河北 张家口市 崇礼县"
        },
        {
            "code": "1308",
            "name": "承德市",
            "longname": "河北 承德市"
        },
        {
            "code": "130801",
            "name": "市辖区",
            "longname": "河北 承德市 市辖区"
        },
        {
            "code": "130802",
            "name": "双桥区",
            "longname": "河北 承德市 双桥区"
        },
        {
            "code": "130803",
            "name": "双滦区",
            "longname": "河北 承德市 双滦区"
        },
        {
            "code": "130804",
            "name": "鹰手营子矿区",
            "longname": "河北 承德市 鹰手营子矿区"
        },
        {
            "code": "130821",
            "name": "承德县",
            "longname": "河北 承德市 承德县"
        },
        {
            "code": "130822",
            "name": "兴隆县",
            "longname": "河北 承德市 兴隆县"
        },
        {
            "code": "130823",
            "name": "平泉县",
            "longname": "河北 承德市 平泉县"
        },
        {
            "code": "130824",
            "name": "滦平县",
            "longname": "河北 承德市 滦平县"
        },
        {
            "code": "130825",
            "name": "隆化县",
            "longname": "河北 承德市 隆化县"
        },
        {
            "code": "130826",
            "name": "丰宁满族自治县",
            "longname": "河北 承德市 丰宁满族自治县"
        },
        {
            "code": "130827",
            "name": "宽城满族自治县",
            "longname": "河北 承德市 宽城满族自治县"
        },
        {
            "code": "130828",
            "name": "围场满族蒙古族自治县",
            "longname": "河北 承德市 围场满族蒙古族自治县"
        },
        {
            "code": "1309",
            "name": "沧州市",
            "longname": "河北 沧州市"
        },
        {
            "code": "130901",
            "name": "市辖区",
            "longname": "河北 沧州市 市辖区"
        },
        {
            "code": "130902",
            "name": "新华区",
            "longname": "河北 沧州市 新华区"
        },
        {
            "code": "130903",
            "name": "运河区",
            "longname": "河北 沧州市 运河区"
        },
        {
            "code": "130921",
            "name": "沧县",
            "longname": "河北 沧州市 沧县"
        },
        {
            "code": "130922",
            "name": "青县",
            "longname": "河北 沧州市 青县"
        },
        {
            "code": "130923",
            "name": "东光县",
            "longname": "河北 沧州市 东光县"
        },
        {
            "code": "130924",
            "name": "海兴县",
            "longname": "河北 沧州市 海兴县"
        },
        {
            "code": "130925",
            "name": "盐山县",
            "longname": "河北 沧州市 盐山县"
        },
        {
            "code": "130926",
            "name": "肃宁县",
            "longname": "河北 沧州市 肃宁县"
        },
        {
            "code": "130927",
            "name": "南皮县",
            "longname": "河北 沧州市 南皮县"
        },
        {
            "code": "130928",
            "name": "吴桥县",
            "longname": "河北 沧州市 吴桥县"
        },
        {
            "code": "130929",
            "name": "献县",
            "longname": "河北 沧州市 献县"
        },
        {
            "code": "130930",
            "name": "孟村回族自治县",
            "longname": "河北 沧州市 孟村回族自治县"
        },
        {
            "code": "130981",
            "name": "泊头市",
            "longname": "河北 沧州市 泊头市"
        },
        {
            "code": "130982",
            "name": "任丘市",
            "longname": "河北 沧州市 任丘市"
        },
        {
            "code": "130983",
            "name": "黄骅市",
            "longname": "河北 沧州市 黄骅市"
        },
        {
            "code": "130984",
            "name": "河间市",
            "longname": "河北 沧州市 河间市"
        },
        {
            "code": "1310",
            "name": "廊坊市",
            "longname": "河北 廊坊市"
        },
        {
            "code": "131001",
            "name": "市辖区",
            "longname": "河北 廊坊市 市辖区"
        },
        {
            "code": "131002",
            "name": "安次区",
            "longname": "河北 廊坊市 安次区"
        },
        {
            "code": "131003",
            "name": "广阳区",
            "longname": "河北 廊坊市 广阳区"
        },
        {
            "code": "131022",
            "name": "固安县",
            "longname": "河北 廊坊市 固安县"
        },
        {
            "code": "131023",
            "name": "永清县",
            "longname": "河北 廊坊市 永清县"
        },
        {
            "code": "131024",
            "name": "香河县",
            "longname": "河北 廊坊市 香河县"
        },
        {
            "code": "131025",
            "name": "大城县",
            "longname": "河北 廊坊市 大城县"
        },
        {
            "code": "131026",
            "name": "文安县",
            "longname": "河北 廊坊市 文安县"
        },
        {
            "code": "131028",
            "name": "大厂回族自治县",
            "longname": "河北 廊坊市 大厂回族自治县"
        },
        {
            "code": "131081",
            "name": "霸州市",
            "longname": "河北 廊坊市 霸州市"
        },
        {
            "code": "131082",
            "name": "三河市",
            "longname": "河北 廊坊市 三河市"
        },
        {
            "code": "1311",
            "name": "衡水市",
            "longname": "河北 衡水市"
        },
        {
            "code": "131101",
            "name": "市辖区",
            "longname": "河北 衡水市 市辖区"
        },
        {
            "code": "131102",
            "name": "桃城区",
            "longname": "河北 衡水市 桃城区"
        },
        {
            "code": "131121",
            "name": "枣强县",
            "longname": "河北 衡水市 枣强县"
        },
        {
            "code": "131122",
            "name": "武邑县",
            "longname": "河北 衡水市 武邑县"
        },
        {
            "code": "131123",
            "name": "武强县",
            "longname": "河北 衡水市 武强县"
        },
        {
            "code": "131124",
            "name": "饶阳县",
            "longname": "河北 衡水市 饶阳县"
        },
        {
            "code": "131125",
            "name": "安平县",
            "longname": "河北 衡水市 安平县"
        },
        {
            "code": "131126",
            "name": "故城县",
            "longname": "河北 衡水市 故城县"
        },
        {
            "code": "131127",
            "name": "景县",
            "longname": "河北 衡水市 景县"
        },
        {
            "code": "131128",
            "name": "阜城县",
            "longname": "河北 衡水市 阜城县"
        },
        {
            "code": "131181",
            "name": "冀州市",
            "longname": "河北 衡水市 冀州市"
        },
        {
            "code": "131182",
            "name": "深州市",
            "longname": "河北 衡水市 深州市"
        },
        {
            "code": "14",
            "name": "山西",
            "longname": "山西"
        },
        {
            "code": "1401",
            "name": "太原市",
            "longname": "山西 太原市"
        },
        {
            "code": "140101",
            "name": "市辖区",
            "longname": "山西 太原市 市辖区"
        },
        {
            "code": "140105",
            "name": "小店区",
            "longname": "山西 太原市 小店区"
        },
        {
            "code": "140106",
            "name": "迎泽区",
            "longname": "山西 太原市 迎泽区"
        },
        {
            "code": "140107",
            "name": "杏花岭区",
            "longname": "山西 太原市 杏花岭区"
        },
        {
            "code": "140108",
            "name": "尖草坪区",
            "longname": "山西 太原市 尖草坪区"
        },
        {
            "code": "140109",
            "name": "万柏林区",
            "longname": "山西 太原市 万柏林区"
        },
        {
            "code": "140110",
            "name": "晋源区",
            "longname": "山西 太原市 晋源区"
        },
        {
            "code": "140121",
            "name": "清徐县",
            "longname": "山西 太原市 清徐县"
        },
        {
            "code": "140122",
            "name": "阳曲县",
            "longname": "山西 太原市 阳曲县"
        },
        {
            "code": "140123",
            "name": "娄烦县",
            "longname": "山西 太原市 娄烦县"
        },
        {
            "code": "140181",
            "name": "古交市",
            "longname": "山西 太原市 古交市"
        },
        {
            "code": "1402",
            "name": "大同市",
            "longname": "山西 大同市"
        },
        {
            "code": "140201",
            "name": "市辖区",
            "longname": "山西 大同市 市辖区"
        },
        {
            "code": "140202",
            "name": "城区",
            "longname": "山西 大同市 城区"
        },
        {
            "code": "140203",
            "name": "矿区",
            "longname": "山西 大同市 矿区"
        },
        {
            "code": "140211",
            "name": "南郊区",
            "longname": "山西 大同市 南郊区"
        },
        {
            "code": "140212",
            "name": "新荣区",
            "longname": "山西 大同市 新荣区"
        },
        {
            "code": "140221",
            "name": "阳高县",
            "longname": "山西 大同市 阳高县"
        },
        {
            "code": "140222",
            "name": "天镇县",
            "longname": "山西 大同市 天镇县"
        },
        {
            "code": "140223",
            "name": "广灵县",
            "longname": "山西 大同市 广灵县"
        },
        {
            "code": "140224",
            "name": "灵丘县",
            "longname": "山西 大同市 灵丘县"
        },
        {
            "code": "140225",
            "name": "浑源县",
            "longname": "山西 大同市 浑源县"
        },
        {
            "code": "140226",
            "name": "左云县",
            "longname": "山西 大同市 左云县"
        },
        {
            "code": "140227",
            "name": "大同县",
            "longname": "山西 大同市 大同县"
        },
        {
            "code": "1403",
            "name": "阳泉市",
            "longname": "山西 阳泉市"
        },
        {
            "code": "140301",
            "name": "市辖区",
            "longname": "山西 阳泉市 市辖区"
        },
        {
            "code": "140302",
            "name": "城区",
            "longname": "山西 阳泉市 城区"
        },
        {
            "code": "140303",
            "name": "矿区",
            "longname": "山西 阳泉市 矿区"
        },
        {
            "code": "140311",
            "name": "郊区",
            "longname": "山西 阳泉市 郊区"
        },
        {
            "code": "140321",
            "name": "平定县",
            "longname": "山西 阳泉市 平定县"
        },
        {
            "code": "140322",
            "name": "盂县",
            "longname": "山西 阳泉市 盂县"
        },
        {
            "code": "1404",
            "name": "长治市",
            "longname": "山西 长治市"
        },
        {
            "code": "140401",
            "name": "市辖区",
            "longname": "山西 长治市 市辖区"
        },
        {
            "code": "140402",
            "name": "城区",
            "longname": "山西 长治市 城区"
        },
        {
            "code": "140411",
            "name": "郊区",
            "longname": "山西 长治市 郊区"
        },
        {
            "code": "140421",
            "name": "长治县",
            "longname": "山西 长治市 长治县"
        },
        {
            "code": "140423",
            "name": "襄垣县",
            "longname": "山西 长治市 襄垣县"
        },
        {
            "code": "140424",
            "name": "屯留县",
            "longname": "山西 长治市 屯留县"
        },
        {
            "code": "140425",
            "name": "平顺县",
            "longname": "山西 长治市 平顺县"
        },
        {
            "code": "140426",
            "name": "黎城县",
            "longname": "山西 长治市 黎城县"
        },
        {
            "code": "140427",
            "name": "壶关县",
            "longname": "山西 长治市 壶关县"
        },
        {
            "code": "140428",
            "name": "长子县",
            "longname": "山西 长治市 长子县"
        },
        {
            "code": "140429",
            "name": "武乡县",
            "longname": "山西 长治市 武乡县"
        },
        {
            "code": "140430",
            "name": "沁县",
            "longname": "山西 长治市 沁县"
        },
        {
            "code": "140431",
            "name": "沁源县",
            "longname": "山西 长治市 沁源县"
        },
        {
            "code": "140481",
            "name": "潞城市",
            "longname": "山西 长治市 潞城市"
        },
        {
            "code": "1405",
            "name": "晋城市",
            "longname": "山西 晋城市"
        },
        {
            "code": "140501",
            "name": "市辖区",
            "longname": "山西 晋城市 市辖区"
        },
        {
            "code": "140502",
            "name": "城区",
            "longname": "山西 晋城市 城区"
        },
        {
            "code": "140521",
            "name": "沁水县",
            "longname": "山西 晋城市 沁水县"
        },
        {
            "code": "140522",
            "name": "阳城县",
            "longname": "山西 晋城市 阳城县"
        },
        {
            "code": "140524",
            "name": "陵川县",
            "longname": "山西 晋城市 陵川县"
        },
        {
            "code": "140525",
            "name": "泽州县",
            "longname": "山西 晋城市 泽州县"
        },
        {
            "code": "140581",
            "name": "高平市",
            "longname": "山西 晋城市 高平市"
        },
        {
            "code": "1406",
            "name": "朔州市",
            "longname": "山西 朔州市"
        },
        {
            "code": "140601",
            "name": "市辖区",
            "longname": "山西 朔州市 市辖区"
        },
        {
            "code": "140602",
            "name": "朔城区",
            "longname": "山西 朔州市 朔城区"
        },
        {
            "code": "140603",
            "name": "平鲁区",
            "longname": "山西 朔州市 平鲁区"
        },
        {
            "code": "140621",
            "name": "山阴县",
            "longname": "山西 朔州市 山阴县"
        },
        {
            "code": "140622",
            "name": "应县",
            "longname": "山西 朔州市 应县"
        },
        {
            "code": "140623",
            "name": "右玉县",
            "longname": "山西 朔州市 右玉县"
        },
        {
            "code": "140624",
            "name": "怀仁县",
            "longname": "山西 朔州市 怀仁县"
        },
        {
            "code": "1407",
            "name": "晋中市",
            "longname": "山西 晋中市"
        },
        {
            "code": "140701",
            "name": "市辖区",
            "longname": "山西 晋中市 市辖区"
        },
        {
            "code": "140702",
            "name": "榆次区",
            "longname": "山西 晋中市 榆次区"
        },
        {
            "code": "140721",
            "name": "榆社县",
            "longname": "山西 晋中市 榆社县"
        },
        {
            "code": "140722",
            "name": "左权县",
            "longname": "山西 晋中市 左权县"
        },
        {
            "code": "140723",
            "name": "和顺县",
            "longname": "山西 晋中市 和顺县"
        },
        {
            "code": "140724",
            "name": "昔阳县",
            "longname": "山西 晋中市 昔阳县"
        },
        {
            "code": "140725",
            "name": "寿阳县",
            "longname": "山西 晋中市 寿阳县"
        },
        {
            "code": "140726",
            "name": "太谷县",
            "longname": "山西 晋中市 太谷县"
        },
        {
            "code": "140727",
            "name": "祁县",
            "longname": "山西 晋中市 祁县"
        },
        {
            "code": "140728",
            "name": "平遥县",
            "longname": "山西 晋中市 平遥县"
        },
        {
            "code": "140729",
            "name": "灵石县",
            "longname": "山西 晋中市 灵石县"
        },
        {
            "code": "140781",
            "name": "介休市",
            "longname": "山西 晋中市 介休市"
        },
        {
            "code": "1408",
            "name": "运城市",
            "longname": "山西 运城市"
        },
        {
            "code": "140801",
            "name": "市辖区",
            "longname": "山西 运城市 市辖区"
        },
        {
            "code": "140802",
            "name": "盐湖区",
            "longname": "山西 运城市 盐湖区"
        },
        {
            "code": "140821",
            "name": "临猗县",
            "longname": "山西 运城市 临猗县"
        },
        {
            "code": "140822",
            "name": "万荣县",
            "longname": "山西 运城市 万荣县"
        },
        {
            "code": "140823",
            "name": "闻喜县",
            "longname": "山西 运城市 闻喜县"
        },
        {
            "code": "140824",
            "name": "稷山县",
            "longname": "山西 运城市 稷山县"
        },
        {
            "code": "140825",
            "name": "新绛县",
            "longname": "山西 运城市 新绛县"
        },
        {
            "code": "140826",
            "name": "绛县",
            "longname": "山西 运城市 绛县"
        },
        {
            "code": "140827",
            "name": "垣曲县",
            "longname": "山西 运城市 垣曲县"
        },
        {
            "code": "140828",
            "name": "夏县",
            "longname": "山西 运城市 夏县"
        },
        {
            "code": "140829",
            "name": "平陆县",
            "longname": "山西 运城市 平陆县"
        },
        {
            "code": "140830",
            "name": "芮城县",
            "longname": "山西 运城市 芮城县"
        },
        {
            "code": "140881",
            "name": "永济市",
            "longname": "山西 运城市 永济市"
        },
        {
            "code": "140882",
            "name": "河津市",
            "longname": "山西 运城市 河津市"
        },
        {
            "code": "1409",
            "name": "忻州市",
            "longname": "山西 忻州市"
        },
        {
            "code": "140901",
            "name": "市辖区",
            "longname": "山西 忻州市 市辖区"
        },
        {
            "code": "140902",
            "name": "忻府区",
            "longname": "山西 忻州市 忻府区"
        },
        {
            "code": "140921",
            "name": "定襄县",
            "longname": "山西 忻州市 定襄县"
        },
        {
            "code": "140922",
            "name": "五台县",
            "longname": "山西 忻州市 五台县"
        },
        {
            "code": "140923",
            "name": "代县",
            "longname": "山西 忻州市 代县"
        },
        {
            "code": "140924",
            "name": "繁峙县",
            "longname": "山西 忻州市 繁峙县"
        },
        {
            "code": "140925",
            "name": "宁武县",
            "longname": "山西 忻州市 宁武县"
        },
        {
            "code": "140926",
            "name": "静乐县",
            "longname": "山西 忻州市 静乐县"
        },
        {
            "code": "140927",
            "name": "神池县",
            "longname": "山西 忻州市 神池县"
        },
        {
            "code": "140928",
            "name": "五寨县",
            "longname": "山西 忻州市 五寨县"
        },
        {
            "code": "140929",
            "name": "岢岚县",
            "longname": "山西 忻州市 岢岚县"
        },
        {
            "code": "140930",
            "name": "河曲县",
            "longname": "山西 忻州市 河曲县"
        },
        {
            "code": "140931",
            "name": "保德县",
            "longname": "山西 忻州市 保德县"
        },
        {
            "code": "140932",
            "name": "偏关县",
            "longname": "山西 忻州市 偏关县"
        },
        {
            "code": "140981",
            "name": "原平市",
            "longname": "山西 忻州市 原平市"
        },
        {
            "code": "1410",
            "name": "临汾市",
            "longname": "山西 临汾市"
        },
        {
            "code": "141001",
            "name": "市辖区",
            "longname": "山西 临汾市 市辖区"
        },
        {
            "code": "141002",
            "name": "尧都区",
            "longname": "山西 临汾市 尧都区"
        },
        {
            "code": "141021",
            "name": "曲沃县",
            "longname": "山西 临汾市 曲沃县"
        },
        {
            "code": "141022",
            "name": "翼城县",
            "longname": "山西 临汾市 翼城县"
        },
        {
            "code": "141023",
            "name": "襄汾县",
            "longname": "山西 临汾市 襄汾县"
        },
        {
            "code": "141024",
            "name": "洪洞县",
            "longname": "山西 临汾市 洪洞县"
        },
        {
            "code": "141025",
            "name": "古县",
            "longname": "山西 临汾市 古县"
        },
        {
            "code": "141026",
            "name": "安泽县",
            "longname": "山西 临汾市 安泽县"
        },
        {
            "code": "141027",
            "name": "浮山县",
            "longname": "山西 临汾市 浮山县"
        },
        {
            "code": "141028",
            "name": "吉县",
            "longname": "山西 临汾市 吉县"
        },
        {
            "code": "141029",
            "name": "乡宁县",
            "longname": "山西 临汾市 乡宁县"
        },
        {
            "code": "141030",
            "name": "大宁县",
            "longname": "山西 临汾市 大宁县"
        },
        {
            "code": "141031",
            "name": "隰县",
            "longname": "山西 临汾市 隰县"
        },
        {
            "code": "141032",
            "name": "永和县",
            "longname": "山西 临汾市 永和县"
        },
        {
            "code": "141033",
            "name": "蒲县",
            "longname": "山西 临汾市 蒲县"
        },
        {
            "code": "141034",
            "name": "汾西县",
            "longname": "山西 临汾市 汾西县"
        },
        {
            "code": "141081",
            "name": "侯马市",
            "longname": "山西 临汾市 侯马市"
        },
        {
            "code": "141082",
            "name": "霍州市",
            "longname": "山西 临汾市 霍州市"
        },
        {
            "code": "1411",
            "name": "吕梁市",
            "longname": "山西 吕梁市"
        },
        {
            "code": "141101",
            "name": "市辖区",
            "longname": "山西 吕梁市 市辖区"
        },
        {
            "code": "141102",
            "name": "离石区",
            "longname": "山西 吕梁市 离石区"
        },
        {
            "code": "141121",
            "name": "文水县",
            "longname": "山西 吕梁市 文水县"
        },
        {
            "code": "141122",
            "name": "交城县",
            "longname": "山西 吕梁市 交城县"
        },
        {
            "code": "141123",
            "name": "兴县",
            "longname": "山西 吕梁市 兴县"
        },
        {
            "code": "141124",
            "name": "临县",
            "longname": "山西 吕梁市 临县"
        },
        {
            "code": "141125",
            "name": "柳林县",
            "longname": "山西 吕梁市 柳林县"
        },
        {
            "code": "141126",
            "name": "石楼县",
            "longname": "山西 吕梁市 石楼县"
        },
        {
            "code": "141127",
            "name": "岚县",
            "longname": "山西 吕梁市 岚县"
        },
        {
            "code": "141128",
            "name": "方山县",
            "longname": "山西 吕梁市 方山县"
        },
        {
            "code": "141129",
            "name": "中阳县",
            "longname": "山西 吕梁市 中阳县"
        },
        {
            "code": "141130",
            "name": "交口县",
            "longname": "山西 吕梁市 交口县"
        },
        {
            "code": "141181",
            "name": "孝义市",
            "longname": "山西 吕梁市 孝义市"
        },
        {
            "code": "141182",
            "name": "汾阳市",
            "longname": "山西 吕梁市 汾阳市"
        },
        {
            "code": "15",
            "name": "内蒙",
            "longname": "内蒙"
        },
        {
            "code": "1501",
            "name": "呼和浩特市",
            "longname": "内蒙 呼和浩特市"
        },
        {
            "code": "150101",
            "name": "市辖区",
            "longname": "内蒙 呼和浩特市 市辖区"
        },
        {
            "code": "150102",
            "name": "新城区",
            "longname": "内蒙 呼和浩特市 新城区"
        },
        {
            "code": "150103",
            "name": "回民区",
            "longname": "内蒙 呼和浩特市 回民区"
        },
        {
            "code": "150104",
            "name": "玉泉区",
            "longname": "内蒙 呼和浩特市 玉泉区"
        },
        {
            "code": "150105",
            "name": "赛罕区",
            "longname": "内蒙 呼和浩特市 赛罕区"
        },
        {
            "code": "150121",
            "name": "土默特左旗",
            "longname": "内蒙 呼和浩特市 土默特左旗"
        },
        {
            "code": "150122",
            "name": "托克托县",
            "longname": "内蒙 呼和浩特市 托克托县"
        },
        {
            "code": "150123",
            "name": "和林格尔县",
            "longname": "内蒙 呼和浩特市 和林格尔县"
        },
        {
            "code": "150124",
            "name": "清水河县",
            "longname": "内蒙 呼和浩特市 清水河县"
        },
        {
            "code": "150125",
            "name": "武川县",
            "longname": "内蒙 呼和浩特市 武川县"
        },
        {
            "code": "1502",
            "name": "包头市",
            "longname": "内蒙 包头市"
        },
        {
            "code": "150201",
            "name": "市辖区",
            "longname": "内蒙 包头市 市辖区"
        },
        {
            "code": "150202",
            "name": "东河区",
            "longname": "内蒙 包头市 东河区"
        },
        {
            "code": "150203",
            "name": "昆都仑区",
            "longname": "内蒙 包头市 昆都仑区"
        },
        {
            "code": "150204",
            "name": "青山区",
            "longname": "内蒙 包头市 青山区"
        },
        {
            "code": "150205",
            "name": "石拐区",
            "longname": "内蒙 包头市 石拐区"
        },
        {
            "code": "150206",
            "name": "白云鄂博矿区",
            "longname": "内蒙 包头市 白云鄂博矿区"
        },
        {
            "code": "150207",
            "name": "九原区",
            "longname": "内蒙 包头市 九原区"
        },
        {
            "code": "150221",
            "name": "土默特右旗",
            "longname": "内蒙 包头市 土默特右旗"
        },
        {
            "code": "150222",
            "name": "固阳县",
            "longname": "内蒙 包头市 固阳县"
        },
        {
            "code": "150223",
            "name": "达尔罕茂明安联合旗",
            "longname": "内蒙 包头市 达尔罕茂明安联合旗"
        },
        {
            "code": "1503",
            "name": "乌海市",
            "longname": "内蒙 乌海市"
        },
        {
            "code": "150301",
            "name": "市辖区",
            "longname": "内蒙 乌海市 市辖区"
        },
        {
            "code": "150302",
            "name": "海勃湾区",
            "longname": "内蒙 乌海市 海勃湾区"
        },
        {
            "code": "150303",
            "name": "海南区",
            "longname": "内蒙 乌海市 海南区"
        },
        {
            "code": "150304",
            "name": "乌达区",
            "longname": "内蒙 乌海市 乌达区"
        },
        {
            "code": "1504",
            "name": "赤峰市",
            "longname": "内蒙 赤峰市"
        },
        {
            "code": "150401",
            "name": "市辖区",
            "longname": "内蒙 赤峰市 市辖区"
        },
        {
            "code": "150402",
            "name": "红山区",
            "longname": "内蒙 赤峰市 红山区"
        },
        {
            "code": "150403",
            "name": "元宝山区",
            "longname": "内蒙 赤峰市 元宝山区"
        },
        {
            "code": "150404",
            "name": "松山区",
            "longname": "内蒙 赤峰市 松山区"
        },
        {
            "code": "150421",
            "name": "阿鲁科尔沁旗",
            "longname": "内蒙 赤峰市 阿鲁科尔沁旗"
        },
        {
            "code": "150422",
            "name": "巴林左旗",
            "longname": "内蒙 赤峰市 巴林左旗"
        },
        {
            "code": "150423",
            "name": "巴林右旗",
            "longname": "内蒙 赤峰市 巴林右旗"
        },
        {
            "code": "150424",
            "name": "林西县",
            "longname": "内蒙 赤峰市 林西县"
        },
        {
            "code": "150425",
            "name": "克什克腾旗",
            "longname": "内蒙 赤峰市 克什克腾旗"
        },
        {
            "code": "150426",
            "name": "翁牛特旗",
            "longname": "内蒙 赤峰市 翁牛特旗"
        },
        {
            "code": "150428",
            "name": "喀喇沁旗",
            "longname": "内蒙 赤峰市 喀喇沁旗"
        },
        {
            "code": "150429",
            "name": "宁城县",
            "longname": "内蒙 赤峰市 宁城县"
        },
        {
            "code": "150430",
            "name": "敖汉旗",
            "longname": "内蒙 赤峰市 敖汉旗"
        },
        {
            "code": "1505",
            "name": "通辽市",
            "longname": "内蒙 通辽市"
        },
        {
            "code": "150501",
            "name": "市辖区",
            "longname": "内蒙 通辽市 市辖区"
        },
        {
            "code": "150502",
            "name": "科尔沁区",
            "longname": "内蒙 通辽市 科尔沁区"
        },
        {
            "code": "150521",
            "name": "科尔沁左翼中旗",
            "longname": "内蒙 通辽市 科尔沁左翼中旗"
        },
        {
            "code": "150522",
            "name": "科尔沁左翼后旗",
            "longname": "内蒙 通辽市 科尔沁左翼后旗"
        },
        {
            "code": "150523",
            "name": "开鲁县",
            "longname": "内蒙 通辽市 开鲁县"
        },
        {
            "code": "150524",
            "name": "库伦旗",
            "longname": "内蒙 通辽市 库伦旗"
        },
        {
            "code": "150525",
            "name": "奈曼旗",
            "longname": "内蒙 通辽市 奈曼旗"
        },
        {
            "code": "150526",
            "name": "扎鲁特旗",
            "longname": "内蒙 通辽市 扎鲁特旗"
        },
        {
            "code": "150581",
            "name": "霍林郭勒市",
            "longname": "内蒙 通辽市 霍林郭勒市"
        },
        {
            "code": "1506",
            "name": "鄂尔多斯市",
            "longname": "内蒙 鄂尔多斯市"
        },
        {
            "code": "150601",
            "name": "市辖区",
            "longname": "内蒙 鄂尔多斯市 市辖区"
        },
        {
            "code": "150602",
            "name": "东胜区",
            "longname": "内蒙 鄂尔多斯市 东胜区"
        },
        {
            "code": "150621",
            "name": "达拉特旗",
            "longname": "内蒙 鄂尔多斯市 达拉特旗"
        },
        {
            "code": "150622",
            "name": "准格尔旗",
            "longname": "内蒙 鄂尔多斯市 准格尔旗"
        },
        {
            "code": "150623",
            "name": "鄂托克前旗",
            "longname": "内蒙 鄂尔多斯市 鄂托克前旗"
        },
        {
            "code": "150624",
            "name": "鄂托克旗",
            "longname": "内蒙 鄂尔多斯市 鄂托克旗"
        },
        {
            "code": "150625",
            "name": "杭锦旗",
            "longname": "内蒙 鄂尔多斯市 杭锦旗"
        },
        {
            "code": "150626",
            "name": "乌审旗",
            "longname": "内蒙 鄂尔多斯市 乌审旗"
        },
        {
            "code": "150627",
            "name": "伊金霍洛旗",
            "longname": "内蒙 鄂尔多斯市 伊金霍洛旗"
        },
        {
            "code": "1507",
            "name": "呼伦贝尔市",
            "longname": "内蒙 呼伦贝尔市"
        },
        {
            "code": "150701",
            "name": "市辖区",
            "longname": "内蒙 呼伦贝尔市 市辖区"
        },
        {
            "code": "150702",
            "name": "海拉尔区",
            "longname": "内蒙 呼伦贝尔市 海拉尔区"
        },
        {
            "code": "150721",
            "name": "阿荣旗",
            "longname": "内蒙 呼伦贝尔市 阿荣旗"
        },
        {
            "code": "150722",
            "name": "莫力达瓦达斡尔族自治旗",
            "longname": "内蒙 呼伦贝尔市 莫力达瓦达斡尔族自治旗"
        },
        {
            "code": "150723",
            "name": "鄂伦春自治旗",
            "longname": "内蒙 呼伦贝尔市 鄂伦春自治旗"
        },
        {
            "code": "150724",
            "name": "鄂温克族自治旗",
            "longname": "内蒙 呼伦贝尔市 鄂温克族自治旗"
        },
        {
            "code": "150725",
            "name": "陈巴尔虎旗",
            "longname": "内蒙 呼伦贝尔市 陈巴尔虎旗"
        },
        {
            "code": "150726",
            "name": "新巴尔虎左旗",
            "longname": "内蒙 呼伦贝尔市 新巴尔虎左旗"
        },
        {
            "code": "150727",
            "name": "新巴尔虎右旗",
            "longname": "内蒙 呼伦贝尔市 新巴尔虎右旗"
        },
        {
            "code": "150781",
            "name": "满洲里市",
            "longname": "内蒙 呼伦贝尔市 满洲里市"
        },
        {
            "code": "150782",
            "name": "牙克石市",
            "longname": "内蒙 呼伦贝尔市 牙克石市"
        },
        {
            "code": "150783",
            "name": "扎兰屯市",
            "longname": "内蒙 呼伦贝尔市 扎兰屯市"
        },
        {
            "code": "150784",
            "name": "额尔古纳市",
            "longname": "内蒙 呼伦贝尔市 额尔古纳市"
        },
        {
            "code": "150785",
            "name": "根河市",
            "longname": "内蒙 呼伦贝尔市 根河市"
        },
        {
            "code": "1508",
            "name": "巴彦淖尔市",
            "longname": "内蒙 巴彦淖尔市"
        },
        {
            "code": "150801",
            "name": "市辖区",
            "longname": "内蒙 巴彦淖尔市 市辖区"
        },
        {
            "code": "150802",
            "name": "临河区",
            "longname": "内蒙 巴彦淖尔市 临河区"
        },
        {
            "code": "150821",
            "name": "五原县",
            "longname": "内蒙 巴彦淖尔市 五原县"
        },
        {
            "code": "150822",
            "name": "磴口县",
            "longname": "内蒙 巴彦淖尔市 磴口县"
        },
        {
            "code": "150823",
            "name": "乌拉特前旗",
            "longname": "内蒙 巴彦淖尔市 乌拉特前旗"
        },
        {
            "code": "150824",
            "name": "乌拉特中旗",
            "longname": "内蒙 巴彦淖尔市 乌拉特中旗"
        },
        {
            "code": "150825",
            "name": "乌拉特后旗",
            "longname": "内蒙 巴彦淖尔市 乌拉特后旗"
        },
        {
            "code": "150826",
            "name": "杭锦后旗",
            "longname": "内蒙 巴彦淖尔市 杭锦后旗"
        },
        {
            "code": "1509",
            "name": "乌兰察布市",
            "longname": "内蒙 乌兰察布市"
        },
        {
            "code": "150901",
            "name": "市辖区",
            "longname": "内蒙 乌兰察布市 市辖区"
        },
        {
            "code": "150902",
            "name": "集宁区",
            "longname": "内蒙 乌兰察布市 集宁区"
        },
        {
            "code": "150921",
            "name": "卓资县",
            "longname": "内蒙 乌兰察布市 卓资县"
        },
        {
            "code": "150922",
            "name": "化德县",
            "longname": "内蒙 乌兰察布市 化德县"
        },
        {
            "code": "150923",
            "name": "商都县",
            "longname": "内蒙 乌兰察布市 商都县"
        },
        {
            "code": "150924",
            "name": "兴和县",
            "longname": "内蒙 乌兰察布市 兴和县"
        },
        {
            "code": "150925",
            "name": "凉城县",
            "longname": "内蒙 乌兰察布市 凉城县"
        },
        {
            "code": "150926",
            "name": "察哈尔右翼前旗",
            "longname": "内蒙 乌兰察布市 察哈尔右翼前旗"
        },
        {
            "code": "150927",
            "name": "察哈尔右翼中旗",
            "longname": "内蒙 乌兰察布市 察哈尔右翼中旗"
        },
        {
            "code": "150928",
            "name": "察哈尔右翼后旗",
            "longname": "内蒙 乌兰察布市 察哈尔右翼后旗"
        },
        {
            "code": "150929",
            "name": "四子王旗",
            "longname": "内蒙 乌兰察布市 四子王旗"
        },
        {
            "code": "150981",
            "name": "丰镇市",
            "longname": "内蒙 乌兰察布市 丰镇市"
        },
        {
            "code": "1522",
            "name": "兴安盟",
            "longname": "内蒙 兴安盟"
        },
        {
            "code": "152201",
            "name": "乌兰浩特市",
            "longname": "内蒙 兴安盟 乌兰浩特市"
        },
        {
            "code": "152202",
            "name": "阿尔山市",
            "longname": "内蒙 兴安盟 阿尔山市"
        },
        {
            "code": "152221",
            "name": "科尔沁右翼前旗",
            "longname": "内蒙 兴安盟 科尔沁右翼前旗"
        },
        {
            "code": "152222",
            "name": "科尔沁右翼中旗",
            "longname": "内蒙 兴安盟 科尔沁右翼中旗"
        },
        {
            "code": "152223",
            "name": "扎赉特旗",
            "longname": "内蒙 兴安盟 扎赉特旗"
        },
        {
            "code": "152224",
            "name": "突泉县",
            "longname": "内蒙 兴安盟 突泉县"
        },
        {
            "code": "1525",
            "name": "锡林郭勒盟",
            "longname": "内蒙 锡林郭勒盟"
        },
        {
            "code": "152501",
            "name": "二连浩特市",
            "longname": "内蒙 锡林郭勒盟 二连浩特市"
        },
        {
            "code": "152502",
            "name": "锡林浩特市",
            "longname": "内蒙 锡林郭勒盟 锡林浩特市"
        },
        {
            "code": "152522",
            "name": "阿巴嘎旗",
            "longname": "内蒙 锡林郭勒盟 阿巴嘎旗"
        },
        {
            "code": "152523",
            "name": "苏尼特左旗",
            "longname": "内蒙 锡林郭勒盟 苏尼特左旗"
        },
        {
            "code": "152524",
            "name": "苏尼特右旗",
            "longname": "内蒙 锡林郭勒盟 苏尼特右旗"
        },
        {
            "code": "152525",
            "name": "东乌珠穆沁旗",
            "longname": "内蒙 锡林郭勒盟 东乌珠穆沁旗"
        },
        {
            "code": "152526",
            "name": "西乌珠穆沁旗",
            "longname": "内蒙 锡林郭勒盟 西乌珠穆沁旗"
        },
        {
            "code": "152527",
            "name": "太仆寺旗",
            "longname": "内蒙 锡林郭勒盟 太仆寺旗"
        },
        {
            "code": "152528",
            "name": "镶黄旗",
            "longname": "内蒙 锡林郭勒盟 镶黄旗"
        },
        {
            "code": "152529",
            "name": "正镶白旗",
            "longname": "内蒙 锡林郭勒盟 正镶白旗"
        },
        {
            "code": "152530",
            "name": "正蓝旗",
            "longname": "内蒙 锡林郭勒盟 正蓝旗"
        },
        {
            "code": "152531",
            "name": "多伦县",
            "longname": "内蒙 锡林郭勒盟 多伦县"
        },
        {
            "code": "1529",
            "name": "阿拉善盟",
            "longname": "内蒙 阿拉善盟"
        },
        {
            "code": "152921",
            "name": "阿拉善左旗",
            "longname": "内蒙 阿拉善盟 阿拉善左旗"
        },
        {
            "code": "152922",
            "name": "阿拉善右旗",
            "longname": "内蒙 阿拉善盟 阿拉善右旗"
        },
        {
            "code": "152923",
            "name": "额济纳旗",
            "longname": "内蒙 阿拉善盟 额济纳旗"
        },
        {
            "code": "21",
            "name": "辽宁",
            "longname": "辽宁"
        },
        {
            "code": "2101",
            "name": "沈阳市",
            "longname": "辽宁 沈阳市"
        },
        {
            "code": "210101",
            "name": "市辖区",
            "longname": "辽宁 沈阳市 市辖区"
        },
        {
            "code": "210102",
            "name": "和平区",
            "longname": "辽宁 沈阳市 和平区"
        },
        {
            "code": "210103",
            "name": "沈河区",
            "longname": "辽宁 沈阳市 沈河区"
        },
        {
            "code": "210104",
            "name": "大东区",
            "longname": "辽宁 沈阳市 大东区"
        },
        {
            "code": "210105",
            "name": "皇姑区",
            "longname": "辽宁 沈阳市 皇姑区"
        },
        {
            "code": "210106",
            "name": "铁西区",
            "longname": "辽宁 沈阳市 铁西区"
        },
        {
            "code": "210111",
            "name": "苏家屯区",
            "longname": "辽宁 沈阳市 苏家屯区"
        },
        {
            "code": "210112",
            "name": "东陵区",
            "longname": "辽宁 沈阳市 东陵区"
        },
        {
            "code": "210113",
            "name": "沈北新区",
            "longname": "辽宁 沈阳市 沈北新区"
        },
        {
            "code": "210114",
            "name": "于洪区",
            "longname": "辽宁 沈阳市 于洪区"
        },
        {
            "code": "210122",
            "name": "辽中县",
            "longname": "辽宁 沈阳市 辽中县"
        },
        {
            "code": "210123",
            "name": "康平县",
            "longname": "辽宁 沈阳市 康平县"
        },
        {
            "code": "210124",
            "name": "法库县",
            "longname": "辽宁 沈阳市 法库县"
        },
        {
            "code": "210181",
            "name": "新民市",
            "longname": "辽宁 沈阳市 新民市"
        },
        {
            "code": "2102",
            "name": "大连市",
            "longname": "辽宁 大连市"
        },
        {
            "code": "210201",
            "name": "市辖区",
            "longname": "辽宁 大连市 市辖区"
        },
        {
            "code": "210202",
            "name": "中山区",
            "longname": "辽宁 大连市 中山区"
        },
        {
            "code": "210203",
            "name": "西岗区",
            "longname": "辽宁 大连市 西岗区"
        },
        {
            "code": "210204",
            "name": "沙河口区",
            "longname": "辽宁 大连市 沙河口区"
        },
        {
            "code": "210211",
            "name": "甘井子区",
            "longname": "辽宁 大连市 甘井子区"
        },
        {
            "code": "210212",
            "name": "旅顺口区",
            "longname": "辽宁 大连市 旅顺口区"
        },
        {
            "code": "210213",
            "name": "金州区",
            "longname": "辽宁 大连市 金州区"
        },
        {
            "code": "210224",
            "name": "长海县",
            "longname": "辽宁 大连市 长海县"
        },
        {
            "code": "210281",
            "name": "瓦房店市",
            "longname": "辽宁 大连市 瓦房店市"
        },
        {
            "code": "210282",
            "name": "普兰店市",
            "longname": "辽宁 大连市 普兰店市"
        },
        {
            "code": "210283",
            "name": "庄河市",
            "longname": "辽宁 大连市 庄河市"
        },
        {
            "code": "2103",
            "name": "鞍山市",
            "longname": "辽宁 鞍山市"
        },
        {
            "code": "210301",
            "name": "市辖区",
            "longname": "辽宁 鞍山市 市辖区"
        },
        {
            "code": "210302",
            "name": "铁东区",
            "longname": "辽宁 鞍山市 铁东区"
        },
        {
            "code": "210303",
            "name": "铁西区",
            "longname": "辽宁 鞍山市 铁西区"
        },
        {
            "code": "210304",
            "name": "立山区",
            "longname": "辽宁 鞍山市 立山区"
        },
        {
            "code": "210311",
            "name": "千山区",
            "longname": "辽宁 鞍山市 千山区"
        },
        {
            "code": "210321",
            "name": "台安县",
            "longname": "辽宁 鞍山市 台安县"
        },
        {
            "code": "210323",
            "name": "岫岩满族自治县",
            "longname": "辽宁 鞍山市 岫岩满族自治县"
        },
        {
            "code": "210381",
            "name": "海城市",
            "longname": "辽宁 鞍山市 海城市"
        },
        {
            "code": "2104",
            "name": "抚顺市",
            "longname": "辽宁 抚顺市"
        },
        {
            "code": "210401",
            "name": "市辖区",
            "longname": "辽宁 抚顺市 市辖区"
        },
        {
            "code": "210402",
            "name": "新抚区",
            "longname": "辽宁 抚顺市 新抚区"
        },
        {
            "code": "210403",
            "name": "东洲区",
            "longname": "辽宁 抚顺市 东洲区"
        },
        {
            "code": "210404",
            "name": "望花区",
            "longname": "辽宁 抚顺市 望花区"
        },
        {
            "code": "210411",
            "name": "顺城区",
            "longname": "辽宁 抚顺市 顺城区"
        },
        {
            "code": "210421",
            "name": "抚顺县",
            "longname": "辽宁 抚顺市 抚顺县"
        },
        {
            "code": "210422",
            "name": "新宾满族自治县",
            "longname": "辽宁 抚顺市 新宾满族自治县"
        },
        {
            "code": "210423",
            "name": "清原满族自治县",
            "longname": "辽宁 抚顺市 清原满族自治县"
        },
        {
            "code": "2105",
            "name": "本溪市",
            "longname": "辽宁 本溪市"
        },
        {
            "code": "210501",
            "name": "市辖区",
            "longname": "辽宁 本溪市 市辖区"
        },
        {
            "code": "210502",
            "name": "平山区",
            "longname": "辽宁 本溪市 平山区"
        },
        {
            "code": "210503",
            "name": "溪湖区",
            "longname": "辽宁 本溪市 溪湖区"
        },
        {
            "code": "210504",
            "name": "明山区",
            "longname": "辽宁 本溪市 明山区"
        },
        {
            "code": "210505",
            "name": "南芬区",
            "longname": "辽宁 本溪市 南芬区"
        },
        {
            "code": "210521",
            "name": "本溪满族自治县",
            "longname": "辽宁 本溪市 本溪满族自治县"
        },
        {
            "code": "210522",
            "name": "桓仁满族自治县",
            "longname": "辽宁 本溪市 桓仁满族自治县"
        },
        {
            "code": "2106",
            "name": "丹东市",
            "longname": "辽宁 丹东市"
        },
        {
            "code": "210601",
            "name": "市辖区",
            "longname": "辽宁 丹东市 市辖区"
        },
        {
            "code": "210602",
            "name": "元宝区",
            "longname": "辽宁 丹东市 元宝区"
        },
        {
            "code": "210603",
            "name": "振兴区",
            "longname": "辽宁 丹东市 振兴区"
        },
        {
            "code": "210604",
            "name": "振安区",
            "longname": "辽宁 丹东市 振安区"
        },
        {
            "code": "210624",
            "name": "宽甸满族自治县",
            "longname": "辽宁 丹东市 宽甸满族自治县"
        },
        {
            "code": "210681",
            "name": "东港市",
            "longname": "辽宁 丹东市 东港市"
        },
        {
            "code": "210682",
            "name": "凤城市",
            "longname": "辽宁 丹东市 凤城市"
        },
        {
            "code": "2107",
            "name": "锦州市",
            "longname": "辽宁 锦州市"
        },
        {
            "code": "210701",
            "name": "市辖区",
            "longname": "辽宁 锦州市 市辖区"
        },
        {
            "code": "210702",
            "name": "古塔区",
            "longname": "辽宁 锦州市 古塔区"
        },
        {
            "code": "210703",
            "name": "凌河区",
            "longname": "辽宁 锦州市 凌河区"
        },
        {
            "code": "210711",
            "name": "太和区",
            "longname": "辽宁 锦州市 太和区"
        },
        {
            "code": "210726",
            "name": "黑山县",
            "longname": "辽宁 锦州市 黑山县"
        },
        {
            "code": "210727",
            "name": "义县",
            "longname": "辽宁 锦州市 义县"
        },
        {
            "code": "210781",
            "name": "凌海市",
            "longname": "辽宁 锦州市 凌海市"
        },
        {
            "code": "210782",
            "name": "北镇市",
            "longname": "辽宁 锦州市 北镇市"
        },
        {
            "code": "2108",
            "name": "营口市",
            "longname": "辽宁 营口市"
        },
        {
            "code": "210801",
            "name": "市辖区",
            "longname": "辽宁 营口市 市辖区"
        },
        {
            "code": "210802",
            "name": "站前区",
            "longname": "辽宁 营口市 站前区"
        },
        {
            "code": "210803",
            "name": "西市区",
            "longname": "辽宁 营口市 西市区"
        },
        {
            "code": "210804",
            "name": "鲅鱼圈区",
            "longname": "辽宁 营口市 鲅鱼圈区"
        },
        {
            "code": "210811",
            "name": "老边区",
            "longname": "辽宁 营口市 老边区"
        },
        {
            "code": "210881",
            "name": "盖州市",
            "longname": "辽宁 营口市 盖州市"
        },
        {
            "code": "210882",
            "name": "大石桥市",
            "longname": "辽宁 营口市 大石桥市"
        },
        {
            "code": "2109",
            "name": "阜新市",
            "longname": "辽宁 阜新市"
        },
        {
            "code": "210901",
            "name": "市辖区",
            "longname": "辽宁 阜新市 市辖区"
        },
        {
            "code": "210902",
            "name": "海州区",
            "longname": "辽宁 阜新市 海州区"
        },
        {
            "code": "210903",
            "name": "新邱区",
            "longname": "辽宁 阜新市 新邱区"
        },
        {
            "code": "210904",
            "name": "太平区",
            "longname": "辽宁 阜新市 太平区"
        },
        {
            "code": "210905",
            "name": "清河门区",
            "longname": "辽宁 阜新市 清河门区"
        },
        {
            "code": "210911",
            "name": "细河区",
            "longname": "辽宁 阜新市 细河区"
        },
        {
            "code": "210921",
            "name": "阜新蒙古族自治县",
            "longname": "辽宁 阜新市 阜新蒙古族自治县"
        },
        {
            "code": "210922",
            "name": "彰武县",
            "longname": "辽宁 阜新市 彰武县"
        },
        {
            "code": "2110",
            "name": "辽阳市",
            "longname": "辽宁 辽阳市"
        },
        {
            "code": "211001",
            "name": "市辖区",
            "longname": "辽宁 辽阳市 市辖区"
        },
        {
            "code": "211002",
            "name": "白塔区",
            "longname": "辽宁 辽阳市 白塔区"
        },
        {
            "code": "211003",
            "name": "文圣区",
            "longname": "辽宁 辽阳市 文圣区"
        },
        {
            "code": "211004",
            "name": "宏伟区",
            "longname": "辽宁 辽阳市 宏伟区"
        },
        {
            "code": "211005",
            "name": "弓长岭区",
            "longname": "辽宁 辽阳市 弓长岭区"
        },
        {
            "code": "211011",
            "name": "太子河区",
            "longname": "辽宁 辽阳市 太子河区"
        },
        {
            "code": "211021",
            "name": "辽阳县",
            "longname": "辽宁 辽阳市 辽阳县"
        },
        {
            "code": "211081",
            "name": "灯塔市",
            "longname": "辽宁 辽阳市 灯塔市"
        },
        {
            "code": "2111",
            "name": "盘锦市",
            "longname": "辽宁 盘锦市"
        },
        {
            "code": "211101",
            "name": "市辖区",
            "longname": "辽宁 盘锦市 市辖区"
        },
        {
            "code": "211102",
            "name": "双台子区",
            "longname": "辽宁 盘锦市 双台子区"
        },
        {
            "code": "211103",
            "name": "兴隆台区",
            "longname": "辽宁 盘锦市 兴隆台区"
        },
        {
            "code": "211121",
            "name": "大洼县",
            "longname": "辽宁 盘锦市 大洼县"
        },
        {
            "code": "211122",
            "name": "盘山县",
            "longname": "辽宁 盘锦市 盘山县"
        },
        {
            "code": "2112",
            "name": "铁岭市",
            "longname": "辽宁 铁岭市"
        },
        {
            "code": "211201",
            "name": "市辖区",
            "longname": "辽宁 铁岭市 市辖区"
        },
        {
            "code": "211202",
            "name": "银州区",
            "longname": "辽宁 铁岭市 银州区"
        },
        {
            "code": "211204",
            "name": "清河区",
            "longname": "辽宁 铁岭市 清河区"
        },
        {
            "code": "211221",
            "name": "铁岭县",
            "longname": "辽宁 铁岭市 铁岭县"
        },
        {
            "code": "211223",
            "name": "西丰县",
            "longname": "辽宁 铁岭市 西丰县"
        },
        {
            "code": "211224",
            "name": "昌图县",
            "longname": "辽宁 铁岭市 昌图县"
        },
        {
            "code": "211281",
            "name": "调兵山市",
            "longname": "辽宁 铁岭市 调兵山市"
        },
        {
            "code": "211282",
            "name": "开原市",
            "longname": "辽宁 铁岭市 开原市"
        },
        {
            "code": "2113",
            "name": "朝阳市",
            "longname": "辽宁 朝阳市"
        },
        {
            "code": "211301",
            "name": "市辖区",
            "longname": "辽宁 朝阳市 市辖区"
        },
        {
            "code": "211302",
            "name": "双塔区",
            "longname": "辽宁 朝阳市 双塔区"
        },
        {
            "code": "211303",
            "name": "龙城区",
            "longname": "辽宁 朝阳市 龙城区"
        },
        {
            "code": "211321",
            "name": "朝阳县",
            "longname": "辽宁 朝阳市 朝阳县"
        },
        {
            "code": "211322",
            "name": "建平县",
            "longname": "辽宁 朝阳市 建平县"
        },
        {
            "code": "211324",
            "name": "喀喇沁左翼蒙古族自治县",
            "longname": "辽宁 朝阳市 喀喇沁左翼蒙古族自治县"
        },
        {
            "code": "211381",
            "name": "北票市",
            "longname": "辽宁 朝阳市 北票市"
        },
        {
            "code": "211382",
            "name": "凌源市",
            "longname": "辽宁 朝阳市 凌源市"
        },
        {
            "code": "2114",
            "name": "葫芦岛市",
            "longname": "辽宁 葫芦岛市"
        },
        {
            "code": "211401",
            "name": "市辖区",
            "longname": "辽宁 葫芦岛市 市辖区"
        },
        {
            "code": "211402",
            "name": "连山区",
            "longname": "辽宁 葫芦岛市 连山区"
        },
        {
            "code": "211403",
            "name": "龙港区",
            "longname": "辽宁 葫芦岛市 龙港区"
        },
        {
            "code": "211404",
            "name": "南票区",
            "longname": "辽宁 葫芦岛市 南票区"
        },
        {
            "code": "211421",
            "name": "绥中县",
            "longname": "辽宁 葫芦岛市 绥中县"
        },
        {
            "code": "211422",
            "name": "建昌县",
            "longname": "辽宁 葫芦岛市 建昌县"
        },
        {
            "code": "211481",
            "name": "兴城市",
            "longname": "辽宁 葫芦岛市 兴城市"
        },
        {
            "code": "22",
            "name": "吉林",
            "longname": "吉林"
        },
        {
            "code": "2201",
            "name": "长春市",
            "longname": "吉林 长春市"
        },
        {
            "code": "220101",
            "name": "市辖区",
            "longname": "吉林 长春市 市辖区"
        },
        {
            "code": "220102",
            "name": "南关区",
            "longname": "吉林 长春市 南关区"
        },
        {
            "code": "220103",
            "name": "宽城区",
            "longname": "吉林 长春市 宽城区"
        },
        {
            "code": "220104",
            "name": "朝阳区",
            "longname": "吉林 长春市 朝阳区"
        },
        {
            "code": "220105",
            "name": "二道区",
            "longname": "吉林 长春市 二道区"
        },
        {
            "code": "220106",
            "name": "绿园区",
            "longname": "吉林 长春市 绿园区"
        },
        {
            "code": "220112",
            "name": "双阳区",
            "longname": "吉林 长春市 双阳区"
        },
        {
            "code": "220122",
            "name": "农安县",
            "longname": "吉林 长春市 农安县"
        },
        {
            "code": "220181",
            "name": "九台市",
            "longname": "吉林 长春市 九台市"
        },
        {
            "code": "220182",
            "name": "榆树市",
            "longname": "吉林 长春市 榆树市"
        },
        {
            "code": "220183",
            "name": "德惠市",
            "longname": "吉林 长春市 德惠市"
        },
        {
            "code": "2202",
            "name": "吉林市",
            "longname": "吉林 吉林市"
        },
        {
            "code": "220201",
            "name": "市辖区",
            "longname": "吉林 吉林市 市辖区"
        },
        {
            "code": "220202",
            "name": "昌邑区",
            "longname": "吉林 吉林市 昌邑区"
        },
        {
            "code": "220203",
            "name": "龙潭区",
            "longname": "吉林 吉林市 龙潭区"
        },
        {
            "code": "220204",
            "name": "船营区",
            "longname": "吉林 吉林市 船营区"
        },
        {
            "code": "220211",
            "name": "丰满区",
            "longname": "吉林 吉林市 丰满区"
        },
        {
            "code": "220221",
            "name": "永吉县",
            "longname": "吉林 吉林市 永吉县"
        },
        {
            "code": "220281",
            "name": "蛟河市",
            "longname": "吉林 吉林市 蛟河市"
        },
        {
            "code": "220282",
            "name": "桦甸市",
            "longname": "吉林 吉林市 桦甸市"
        },
        {
            "code": "220283",
            "name": "舒兰市",
            "longname": "吉林 吉林市 舒兰市"
        },
        {
            "code": "220284",
            "name": "磐石市",
            "longname": "吉林 吉林市 磐石市"
        },
        {
            "code": "2203",
            "name": "四平市",
            "longname": "吉林 四平市"
        },
        {
            "code": "220301",
            "name": "市辖区",
            "longname": "吉林 四平市 市辖区"
        },
        {
            "code": "220302",
            "name": "铁西区",
            "longname": "吉林 四平市 铁西区"
        },
        {
            "code": "220303",
            "name": "铁东区",
            "longname": "吉林 四平市 铁东区"
        },
        {
            "code": "220322",
            "name": "梨树县",
            "longname": "吉林 四平市 梨树县"
        },
        {
            "code": "220323",
            "name": "伊通满族自治县",
            "longname": "吉林 四平市 伊通满族自治县"
        },
        {
            "code": "220381",
            "name": "公主岭市",
            "longname": "吉林 四平市 公主岭市"
        },
        {
            "code": "220382",
            "name": "双辽市",
            "longname": "吉林 四平市 双辽市"
        },
        {
            "code": "2204",
            "name": "辽源市",
            "longname": "吉林 辽源市"
        },
        {
            "code": "220401",
            "name": "市辖区",
            "longname": "吉林 辽源市 市辖区"
        },
        {
            "code": "220402",
            "name": "龙山区",
            "longname": "吉林 辽源市 龙山区"
        },
        {
            "code": "220403",
            "name": "西安区",
            "longname": "吉林 辽源市 西安区"
        },
        {
            "code": "220421",
            "name": "东丰县",
            "longname": "吉林 辽源市 东丰县"
        },
        {
            "code": "220422",
            "name": "东辽县",
            "longname": "吉林 辽源市 东辽县"
        },
        {
            "code": "2205",
            "name": "通化市",
            "longname": "吉林 通化市"
        },
        {
            "code": "220501",
            "name": "市辖区",
            "longname": "吉林 通化市 市辖区"
        },
        {
            "code": "220502",
            "name": "东昌区",
            "longname": "吉林 通化市 东昌区"
        },
        {
            "code": "220503",
            "name": "二道江区",
            "longname": "吉林 通化市 二道江区"
        },
        {
            "code": "220521",
            "name": "通化县",
            "longname": "吉林 通化市 通化县"
        },
        {
            "code": "220523",
            "name": "辉南县",
            "longname": "吉林 通化市 辉南县"
        },
        {
            "code": "220524",
            "name": "柳河县",
            "longname": "吉林 通化市 柳河县"
        },
        {
            "code": "220581",
            "name": "梅河口市",
            "longname": "吉林 通化市 梅河口市"
        },
        {
            "code": "220582",
            "name": "集安市",
            "longname": "吉林 通化市 集安市"
        },
        {
            "code": "2206",
            "name": "白山市",
            "longname": "吉林 白山市"
        },
        {
            "code": "220601",
            "name": "市辖区",
            "longname": "吉林 白山市 市辖区"
        },
        {
            "code": "220602",
            "name": "八道江区",
            "longname": "吉林 白山市 八道江区"
        },
        {
            "code": "220605",
            "name": "江源区",
            "longname": "吉林 白山市 江源区"
        },
        {
            "code": "220621",
            "name": "抚松县",
            "longname": "吉林 白山市 抚松县"
        },
        {
            "code": "220622",
            "name": "靖宇县",
            "longname": "吉林 白山市 靖宇县"
        },
        {
            "code": "220623",
            "name": "长白朝鲜族自治县",
            "longname": "吉林 白山市 长白朝鲜族自治县"
        },
        {
            "code": "220681",
            "name": "临江市",
            "longname": "吉林 白山市 临江市"
        },
        {
            "code": "2207",
            "name": "松原市",
            "longname": "吉林 松原市"
        },
        {
            "code": "220701",
            "name": "市辖区",
            "longname": "吉林 松原市 市辖区"
        },
        {
            "code": "220702",
            "name": "宁江区",
            "longname": "吉林 松原市 宁江区"
        },
        {
            "code": "220721",
            "name": "前郭尔罗斯蒙古族自治县",
            "longname": "吉林 松原市 前郭尔罗斯蒙古族自治县"
        },
        {
            "code": "220722",
            "name": "长岭县",
            "longname": "吉林 松原市 长岭县"
        },
        {
            "code": "220723",
            "name": "乾安县",
            "longname": "吉林 松原市 乾安县"
        },
        {
            "code": "220724",
            "name": "扶余县",
            "longname": "吉林 松原市 扶余县"
        },
        {
            "code": "2208",
            "name": "白城市",
            "longname": "吉林 白城市"
        },
        {
            "code": "220801",
            "name": "市辖区",
            "longname": "吉林 白城市 市辖区"
        },
        {
            "code": "220802",
            "name": "洮北区",
            "longname": "吉林 白城市 洮北区"
        },
        {
            "code": "220821",
            "name": "镇赉县",
            "longname": "吉林 白城市 镇赉县"
        },
        {
            "code": "220822",
            "name": "通榆县",
            "longname": "吉林 白城市 通榆县"
        },
        {
            "code": "220881",
            "name": "洮南市",
            "longname": "吉林 白城市 洮南市"
        },
        {
            "code": "220882",
            "name": "大安市",
            "longname": "吉林 白城市 大安市"
        },
        {
            "code": "2224",
            "name": "延边朝鲜族自治州",
            "longname": "吉林 延边朝鲜族自治州"
        },
        {
            "code": "222401",
            "name": "延吉市",
            "longname": "吉林 延边朝鲜族自治州 延吉市"
        },
        {
            "code": "222402",
            "name": "图们市",
            "longname": "吉林 延边朝鲜族自治州 图们市"
        },
        {
            "code": "222403",
            "name": "敦化市",
            "longname": "吉林 延边朝鲜族自治州 敦化市"
        },
        {
            "code": "222404",
            "name": "珲春市",
            "longname": "吉林 延边朝鲜族自治州 珲春市"
        },
        {
            "code": "222405",
            "name": "龙井市",
            "longname": "吉林 延边朝鲜族自治州 龙井市"
        },
        {
            "code": "222406",
            "name": "和龙市",
            "longname": "吉林 延边朝鲜族自治州 和龙市"
        },
        {
            "code": "222424",
            "name": "汪清县",
            "longname": "吉林 延边朝鲜族自治州 汪清县"
        },
        {
            "code": "222426",
            "name": "安图县",
            "longname": "吉林 延边朝鲜族自治州 安图县"
        },
        {
            "code": "23",
            "name": "黑龙江",
            "longname": "黑龙江"
        },
        {
            "code": "2301",
            "name": "哈尔滨市",
            "longname": "黑龙江 哈尔滨市"
        },
        {
            "code": "230101",
            "name": "市辖区",
            "longname": "黑龙江 哈尔滨市 市辖区"
        },
        {
            "code": "230102",
            "name": "道里区",
            "longname": "黑龙江 哈尔滨市 道里区"
        },
        {
            "code": "230103",
            "name": "南岗区",
            "longname": "黑龙江 哈尔滨市 南岗区"
        },
        {
            "code": "230104",
            "name": "道外区",
            "longname": "黑龙江 哈尔滨市 道外区"
        },
        {
            "code": "230108",
            "name": "平房区",
            "longname": "黑龙江 哈尔滨市 平房区"
        },
        {
            "code": "230109",
            "name": "松北区",
            "longname": "黑龙江 哈尔滨市 松北区"
        },
        {
            "code": "230110",
            "name": "香坊区",
            "longname": "黑龙江 哈尔滨市 香坊区"
        },
        {
            "code": "230111",
            "name": "呼兰区",
            "longname": "黑龙江 哈尔滨市 呼兰区"
        },
        {
            "code": "230112",
            "name": "阿城区",
            "longname": "黑龙江 哈尔滨市 阿城区"
        },
        {
            "code": "230123",
            "name": "依兰县",
            "longname": "黑龙江 哈尔滨市 依兰县"
        },
        {
            "code": "230124",
            "name": "方正县",
            "longname": "黑龙江 哈尔滨市 方正县"
        },
        {
            "code": "230125",
            "name": "宾县",
            "longname": "黑龙江 哈尔滨市 宾县"
        },
        {
            "code": "230126",
            "name": "巴彦县",
            "longname": "黑龙江 哈尔滨市 巴彦县"
        },
        {
            "code": "230127",
            "name": "木兰县",
            "longname": "黑龙江 哈尔滨市 木兰县"
        },
        {
            "code": "230128",
            "name": "通河县",
            "longname": "黑龙江 哈尔滨市 通河县"
        },
        {
            "code": "230129",
            "name": "延寿县",
            "longname": "黑龙江 哈尔滨市 延寿县"
        },
        {
            "code": "230182",
            "name": "双城市",
            "longname": "黑龙江 哈尔滨市 双城市"
        },
        {
            "code": "230183",
            "name": "尚志市",
            "longname": "黑龙江 哈尔滨市 尚志市"
        },
        {
            "code": "230184",
            "name": "五常市",
            "longname": "黑龙江 哈尔滨市 五常市"
        },
        {
            "code": "2302",
            "name": "齐齐哈尔市",
            "longname": "黑龙江 齐齐哈尔市"
        },
        {
            "code": "230201",
            "name": "市辖区",
            "longname": "黑龙江 齐齐哈尔市 市辖区"
        },
        {
            "code": "230202",
            "name": "龙沙区",
            "longname": "黑龙江 齐齐哈尔市 龙沙区"
        },
        {
            "code": "230203",
            "name": "建华区",
            "longname": "黑龙江 齐齐哈尔市 建华区"
        },
        {
            "code": "230204",
            "name": "铁锋区",
            "longname": "黑龙江 齐齐哈尔市 铁锋区"
        },
        {
            "code": "230205",
            "name": "昂昂溪区",
            "longname": "黑龙江 齐齐哈尔市 昂昂溪区"
        },
        {
            "code": "230206",
            "name": "富拉尔基区",
            "longname": "黑龙江 齐齐哈尔市 富拉尔基区"
        },
        {
            "code": "230207",
            "name": "碾子山区",
            "longname": "黑龙江 齐齐哈尔市 碾子山区"
        },
        {
            "code": "230208",
            "name": "梅里斯达斡尔族区",
            "longname": "黑龙江 齐齐哈尔市 梅里斯达斡尔族区"
        },
        {
            "code": "230221",
            "name": "龙江县",
            "longname": "黑龙江 齐齐哈尔市 龙江县"
        },
        {
            "code": "230223",
            "name": "依安县",
            "longname": "黑龙江 齐齐哈尔市 依安县"
        },
        {
            "code": "230224",
            "name": "泰来县",
            "longname": "黑龙江 齐齐哈尔市 泰来县"
        },
        {
            "code": "230225",
            "name": "甘南县",
            "longname": "黑龙江 齐齐哈尔市 甘南县"
        },
        {
            "code": "230227",
            "name": "富裕县",
            "longname": "黑龙江 齐齐哈尔市 富裕县"
        },
        {
            "code": "230229",
            "name": "克山县",
            "longname": "黑龙江 齐齐哈尔市 克山县"
        },
        {
            "code": "230230",
            "name": "克东县",
            "longname": "黑龙江 齐齐哈尔市 克东县"
        },
        {
            "code": "230231",
            "name": "拜泉县",
            "longname": "黑龙江 齐齐哈尔市 拜泉县"
        },
        {
            "code": "230281",
            "name": "讷河市",
            "longname": "黑龙江 齐齐哈尔市 讷河市"
        },
        {
            "code": "2303",
            "name": "鸡西市",
            "longname": "黑龙江 鸡西市"
        },
        {
            "code": "230301",
            "name": "市辖区",
            "longname": "黑龙江 鸡西市 市辖区"
        },
        {
            "code": "230302",
            "name": "鸡冠区",
            "longname": "黑龙江 鸡西市 鸡冠区"
        },
        {
            "code": "230303",
            "name": "恒山区",
            "longname": "黑龙江 鸡西市 恒山区"
        },
        {
            "code": "230304",
            "name": "滴道区",
            "longname": "黑龙江 鸡西市 滴道区"
        },
        {
            "code": "230305",
            "name": "梨树区",
            "longname": "黑龙江 鸡西市 梨树区"
        },
        {
            "code": "230306",
            "name": "城子河区",
            "longname": "黑龙江 鸡西市 城子河区"
        },
        {
            "code": "230307",
            "name": "麻山区",
            "longname": "黑龙江 鸡西市 麻山区"
        },
        {
            "code": "230321",
            "name": "鸡东县",
            "longname": "黑龙江 鸡西市 鸡东县"
        },
        {
            "code": "230381",
            "name": "虎林市",
            "longname": "黑龙江 鸡西市 虎林市"
        },
        {
            "code": "230382",
            "name": "密山市",
            "longname": "黑龙江 鸡西市 密山市"
        },
        {
            "code": "2304",
            "name": "鹤岗市",
            "longname": "黑龙江 鹤岗市"
        },
        {
            "code": "230401",
            "name": "市辖区",
            "longname": "黑龙江 鹤岗市 市辖区"
        },
        {
            "code": "230402",
            "name": "向阳区",
            "longname": "黑龙江 鹤岗市 向阳区"
        },
        {
            "code": "230403",
            "name": "工农区",
            "longname": "黑龙江 鹤岗市 工农区"
        },
        {
            "code": "230404",
            "name": "南山区",
            "longname": "黑龙江 鹤岗市 南山区"
        },
        {
            "code": "230405",
            "name": "兴安区",
            "longname": "黑龙江 鹤岗市 兴安区"
        },
        {
            "code": "230406",
            "name": "东山区",
            "longname": "黑龙江 鹤岗市 东山区"
        },
        {
            "code": "230407",
            "name": "兴山区",
            "longname": "黑龙江 鹤岗市 兴山区"
        },
        {
            "code": "230421",
            "name": "萝北县",
            "longname": "黑龙江 鹤岗市 萝北县"
        },
        {
            "code": "230422",
            "name": "绥滨县",
            "longname": "黑龙江 鹤岗市 绥滨县"
        },
        {
            "code": "2305",
            "name": "双鸭山市",
            "longname": "黑龙江 双鸭山市"
        },
        {
            "code": "230501",
            "name": "市辖区",
            "longname": "黑龙江 双鸭山市 市辖区"
        },
        {
            "code": "230502",
            "name": "尖山区",
            "longname": "黑龙江 双鸭山市 尖山区"
        },
        {
            "code": "230503",
            "name": "岭东区",
            "longname": "黑龙江 双鸭山市 岭东区"
        },
        {
            "code": "230505",
            "name": "四方台区",
            "longname": "黑龙江 双鸭山市 四方台区"
        },
        {
            "code": "230506",
            "name": "宝山区",
            "longname": "黑龙江 双鸭山市 宝山区"
        },
        {
            "code": "230521",
            "name": "集贤县",
            "longname": "黑龙江 双鸭山市 集贤县"
        },
        {
            "code": "230522",
            "name": "友谊县",
            "longname": "黑龙江 双鸭山市 友谊县"
        },
        {
            "code": "230523",
            "name": "宝清县",
            "longname": "黑龙江 双鸭山市 宝清县"
        },
        {
            "code": "230524",
            "name": "饶河县",
            "longname": "黑龙江 双鸭山市 饶河县"
        },
        {
            "code": "2306",
            "name": "大庆市",
            "longname": "黑龙江 大庆市"
        },
        {
            "code": "230601",
            "name": "市辖区",
            "longname": "黑龙江 大庆市 市辖区"
        },
        {
            "code": "230602",
            "name": "萨尔图区",
            "longname": "黑龙江 大庆市 萨尔图区"
        },
        {
            "code": "230603",
            "name": "龙凤区",
            "longname": "黑龙江 大庆市 龙凤区"
        },
        {
            "code": "230604",
            "name": "让胡路区",
            "longname": "黑龙江 大庆市 让胡路区"
        },
        {
            "code": "230605",
            "name": "红岗区",
            "longname": "黑龙江 大庆市 红岗区"
        },
        {
            "code": "230606",
            "name": "大同区",
            "longname": "黑龙江 大庆市 大同区"
        },
        {
            "code": "230621",
            "name": "肇州县",
            "longname": "黑龙江 大庆市 肇州县"
        },
        {
            "code": "230622",
            "name": "肇源县",
            "longname": "黑龙江 大庆市 肇源县"
        },
        {
            "code": "230623",
            "name": "林甸县",
            "longname": "黑龙江 大庆市 林甸县"
        },
        {
            "code": "230624",
            "name": "杜尔伯特蒙古族自治县",
            "longname": "黑龙江 大庆市 杜尔伯特蒙古族自治县"
        },
        {
            "code": "2307",
            "name": "伊春市",
            "longname": "黑龙江 伊春市"
        },
        {
            "code": "230701",
            "name": "市辖区",
            "longname": "黑龙江 伊春市 市辖区"
        },
        {
            "code": "230702",
            "name": "伊春区",
            "longname": "黑龙江 伊春市 伊春区"
        },
        {
            "code": "230703",
            "name": "南岔区",
            "longname": "黑龙江 伊春市 南岔区"
        },
        {
            "code": "230704",
            "name": "友好区",
            "longname": "黑龙江 伊春市 友好区"
        },
        {
            "code": "230705",
            "name": "西林区",
            "longname": "黑龙江 伊春市 西林区"
        },
        {
            "code": "230706",
            "name": "翠峦区",
            "longname": "黑龙江 伊春市 翠峦区"
        },
        {
            "code": "230707",
            "name": "新青区",
            "longname": "黑龙江 伊春市 新青区"
        },
        {
            "code": "230708",
            "name": "美溪区",
            "longname": "黑龙江 伊春市 美溪区"
        },
        {
            "code": "230709",
            "name": "金山屯区",
            "longname": "黑龙江 伊春市 金山屯区"
        },
        {
            "code": "230710",
            "name": "五营区",
            "longname": "黑龙江 伊春市 五营区"
        },
        {
            "code": "230711",
            "name": "乌马河区",
            "longname": "黑龙江 伊春市 乌马河区"
        },
        {
            "code": "230712",
            "name": "汤旺河区",
            "longname": "黑龙江 伊春市 汤旺河区"
        },
        {
            "code": "230713",
            "name": "带岭区",
            "longname": "黑龙江 伊春市 带岭区"
        },
        {
            "code": "230714",
            "name": "乌伊岭区",
            "longname": "黑龙江 伊春市 乌伊岭区"
        },
        {
            "code": "230715",
            "name": "红星区",
            "longname": "黑龙江 伊春市 红星区"
        },
        {
            "code": "230716",
            "name": "上甘岭区",
            "longname": "黑龙江 伊春市 上甘岭区"
        },
        {
            "code": "230722",
            "name": "嘉荫县",
            "longname": "黑龙江 伊春市 嘉荫县"
        },
        {
            "code": "230781",
            "name": "铁力市",
            "longname": "黑龙江 伊春市 铁力市"
        },
        {
            "code": "2308",
            "name": "佳木斯市",
            "longname": "黑龙江 佳木斯市"
        },
        {
            "code": "230801",
            "name": "市辖区",
            "longname": "黑龙江 佳木斯市 市辖区"
        },
        {
            "code": "230803",
            "name": "向阳区",
            "longname": "黑龙江 佳木斯市 向阳区"
        },
        {
            "code": "230804",
            "name": "前进区",
            "longname": "黑龙江 佳木斯市 前进区"
        },
        {
            "code": "230805",
            "name": "东风区",
            "longname": "黑龙江 佳木斯市 东风区"
        },
        {
            "code": "230811",
            "name": "郊区",
            "longname": "黑龙江 佳木斯市 郊区"
        },
        {
            "code": "230822",
            "name": "桦南县",
            "longname": "黑龙江 佳木斯市 桦南县"
        },
        {
            "code": "230826",
            "name": "桦川县",
            "longname": "黑龙江 佳木斯市 桦川县"
        },
        {
            "code": "230828",
            "name": "汤原县",
            "longname": "黑龙江 佳木斯市 汤原县"
        },
        {
            "code": "230833",
            "name": "抚远县",
            "longname": "黑龙江 佳木斯市 抚远县"
        },
        {
            "code": "230881",
            "name": "同江市",
            "longname": "黑龙江 佳木斯市 同江市"
        },
        {
            "code": "230882",
            "name": "富锦市",
            "longname": "黑龙江 佳木斯市 富锦市"
        },
        {
            "code": "2309",
            "name": "七台河市",
            "longname": "黑龙江 七台河市"
        },
        {
            "code": "230901",
            "name": "市辖区",
            "longname": "黑龙江 七台河市 市辖区"
        },
        {
            "code": "230902",
            "name": "新兴区",
            "longname": "黑龙江 七台河市 新兴区"
        },
        {
            "code": "230903",
            "name": "桃山区",
            "longname": "黑龙江 七台河市 桃山区"
        },
        {
            "code": "230904",
            "name": "茄子河区",
            "longname": "黑龙江 七台河市 茄子河区"
        },
        {
            "code": "230921",
            "name": "勃利县",
            "longname": "黑龙江 七台河市 勃利县"
        },
        {
            "code": "2310",
            "name": "牡丹江市",
            "longname": "黑龙江 牡丹江市"
        },
        {
            "code": "231001",
            "name": "市辖区",
            "longname": "黑龙江 牡丹江市 市辖区"
        },
        {
            "code": "231002",
            "name": "东安区",
            "longname": "黑龙江 牡丹江市 东安区"
        },
        {
            "code": "231003",
            "name": "阳明区",
            "longname": "黑龙江 牡丹江市 阳明区"
        },
        {
            "code": "231004",
            "name": "爱民区",
            "longname": "黑龙江 牡丹江市 爱民区"
        },
        {
            "code": "231005",
            "name": "西安区",
            "longname": "黑龙江 牡丹江市 西安区"
        },
        {
            "code": "231024",
            "name": "东宁县",
            "longname": "黑龙江 牡丹江市 东宁县"
        },
        {
            "code": "231025",
            "name": "林口县",
            "longname": "黑龙江 牡丹江市 林口县"
        },
        {
            "code": "231081",
            "name": "绥芬河市",
            "longname": "黑龙江 牡丹江市 绥芬河市"
        },
        {
            "code": "231083",
            "name": "海林市",
            "longname": "黑龙江 牡丹江市 海林市"
        },
        {
            "code": "231084",
            "name": "宁安市",
            "longname": "黑龙江 牡丹江市 宁安市"
        },
        {
            "code": "231085",
            "name": "穆棱市",
            "longname": "黑龙江 牡丹江市 穆棱市"
        },
        {
            "code": "2311",
            "name": "黑河市",
            "longname": "黑龙江 黑河市"
        },
        {
            "code": "231101",
            "name": "市辖区",
            "longname": "黑龙江 黑河市 市辖区"
        },
        {
            "code": "231102",
            "name": "爱辉区",
            "longname": "黑龙江 黑河市 爱辉区"
        },
        {
            "code": "231121",
            "name": "嫩江县",
            "longname": "黑龙江 黑河市 嫩江县"
        },
        {
            "code": "231123",
            "name": "逊克县",
            "longname": "黑龙江 黑河市 逊克县"
        },
        {
            "code": "231124",
            "name": "孙吴县",
            "longname": "黑龙江 黑河市 孙吴县"
        },
        {
            "code": "231181",
            "name": "北安市",
            "longname": "黑龙江 黑河市 北安市"
        },
        {
            "code": "231182",
            "name": "五大连池市",
            "longname": "黑龙江 黑河市 五大连池市"
        },
        {
            "code": "2312",
            "name": "绥化市",
            "longname": "黑龙江 绥化市"
        },
        {
            "code": "231201",
            "name": "市辖区",
            "longname": "黑龙江 绥化市 市辖区"
        },
        {
            "code": "231202",
            "name": "北林区",
            "longname": "黑龙江 绥化市 北林区"
        },
        {
            "code": "231221",
            "name": "望奎县",
            "longname": "黑龙江 绥化市 望奎县"
        },
        {
            "code": "231222",
            "name": "兰西县",
            "longname": "黑龙江 绥化市 兰西县"
        },
        {
            "code": "231223",
            "name": "青冈县",
            "longname": "黑龙江 绥化市 青冈县"
        },
        {
            "code": "231224",
            "name": "庆安县",
            "longname": "黑龙江 绥化市 庆安县"
        },
        {
            "code": "231225",
            "name": "明水县",
            "longname": "黑龙江 绥化市 明水县"
        },
        {
            "code": "231226",
            "name": "绥棱县",
            "longname": "黑龙江 绥化市 绥棱县"
        },
        {
            "code": "231281",
            "name": "安达市",
            "longname": "黑龙江 绥化市 安达市"
        },
        {
            "code": "231282",
            "name": "肇东市",
            "longname": "黑龙江 绥化市 肇东市"
        },
        {
            "code": "231283",
            "name": "海伦市",
            "longname": "黑龙江 绥化市 海伦市"
        },
        {
            "code": "2327",
            "name": "大兴安岭地区",
            "longname": "黑龙江 大兴安岭地区"
        },
        {
            "code": "232701",
            "name": "加格达奇区",
            "longname": "黑龙江 大兴安岭地区 加格达奇区"
        },
        {
            "code": "232702",
            "name": "松岭区",
            "longname": "黑龙江 大兴安岭地区 松岭区"
        },
        {
            "code": "232703",
            "name": "新林区",
            "longname": "黑龙江 大兴安岭地区 新林区"
        },
        {
            "code": "232704",
            "name": "呼中区",
            "longname": "黑龙江 大兴安岭地区 呼中区"
        },
        {
            "code": "232721",
            "name": "呼玛县",
            "longname": "黑龙江 大兴安岭地区 呼玛县"
        },
        {
            "code": "232722",
            "name": "塔河县",
            "longname": "黑龙江 大兴安岭地区 塔河县"
        },
        {
            "code": "232723",
            "name": "漠河县",
            "longname": "黑龙江 大兴安岭地区 漠河县"
        },
        {
            "code": "31",
            "name": "上海",
            "longname": "上海"
        },
        {
            "code": "3101",
            "name": "市辖区",
            "longname": "上海 市辖区"
        },
        {
            "code": "310101",
            "name": "黄浦区",
            "longname": "上海 市辖区 黄浦区"
        },
        {
            "code": "310103",
            "name": "卢湾区",
            "longname": "上海 市辖区 卢湾区"
        },
        {
            "code": "310104",
            "name": "徐汇区",
            "longname": "上海 市辖区 徐汇区"
        },
        {
            "code": "310105",
            "name": "长宁区",
            "longname": "上海 市辖区 长宁区"
        },
        {
            "code": "310106",
            "name": "静安区",
            "longname": "上海 市辖区 静安区"
        },
        {
            "code": "310107",
            "name": "普陀区",
            "longname": "上海 市辖区 普陀区"
        },
        {
            "code": "310108",
            "name": "闸北区",
            "longname": "上海 市辖区 闸北区"
        },
        {
            "code": "310109",
            "name": "虹口区",
            "longname": "上海 市辖区 虹口区"
        },
        {
            "code": "310110",
            "name": "杨浦区",
            "longname": "上海 市辖区 杨浦区"
        },
        {
            "code": "310112",
            "name": "闵行区",
            "longname": "上海 市辖区 闵行区"
        },
        {
            "code": "310113",
            "name": "宝山区",
            "longname": "上海 市辖区 宝山区"
        },
        {
            "code": "310114",
            "name": "嘉定区",
            "longname": "上海 市辖区 嘉定区"
        },
        {
            "code": "310115",
            "name": "浦东新区",
            "longname": "上海 市辖区 浦东新区"
        },
        {
            "code": "310116",
            "name": "金山区",
            "longname": "上海 市辖区 金山区"
        },
        {
            "code": "310117",
            "name": "松江区",
            "longname": "上海 市辖区 松江区"
        },
        {
            "code": "310118",
            "name": "青浦区",
            "longname": "上海 市辖区 青浦区"
        },
        {
            "code": "310120",
            "name": "奉贤区",
            "longname": "上海 市辖区 奉贤区"
        },
        {
            "code": "3102",
            "name": "县",
            "longname": "上海 县"
        },
        {
            "code": "310230",
            "name": "崇明县",
            "longname": "上海 县 崇明县"
        },
        {
            "code": "32",
            "name": "江苏",
            "longname": "江苏"
        },
        {
            "code": "3201",
            "name": "南京市",
            "longname": "江苏 南京市"
        },
        {
            "code": "320101",
            "name": "市辖区",
            "longname": "江苏 南京市 市辖区"
        },
        {
            "code": "320102",
            "name": "玄武区",
            "longname": "江苏 南京市 玄武区"
        },
        {
            "code": "320103",
            "name": "白下区",
            "longname": "江苏 南京市 白下区"
        },
        {
            "code": "320104",
            "name": "秦淮区",
            "longname": "江苏 南京市 秦淮区"
        },
        {
            "code": "320105",
            "name": "建邺区",
            "longname": "江苏 南京市 建邺区"
        },
        {
            "code": "320106",
            "name": "鼓楼区",
            "longname": "江苏 南京市 鼓楼区"
        },
        {
            "code": "320107",
            "name": "下关区",
            "longname": "江苏 南京市 下关区"
        },
        {
            "code": "320111",
            "name": "浦口区",
            "longname": "江苏 南京市 浦口区"
        },
        {
            "code": "320113",
            "name": "栖霞区",
            "longname": "江苏 南京市 栖霞区"
        },
        {
            "code": "320114",
            "name": "雨花台区",
            "longname": "江苏 南京市 雨花台区"
        },
        {
            "code": "320115",
            "name": "江宁区",
            "longname": "江苏 南京市 江宁区"
        },
        {
            "code": "320116",
            "name": "六合区",
            "longname": "江苏 南京市 六合区"
        },
        {
            "code": "320124",
            "name": "溧水县",
            "longname": "江苏 南京市 溧水县"
        },
        {
            "code": "320125",
            "name": "高淳县",
            "longname": "江苏 南京市 高淳县"
        },
        {
            "code": "3202",
            "name": "无锡市",
            "longname": "江苏 无锡市"
        },
        {
            "code": "320201",
            "name": "市辖区",
            "longname": "江苏 无锡市 市辖区"
        },
        {
            "code": "320202",
            "name": "崇安区",
            "longname": "江苏 无锡市 崇安区"
        },
        {
            "code": "320203",
            "name": "南长区",
            "longname": "江苏 无锡市 南长区"
        },
        {
            "code": "320204",
            "name": "北塘区",
            "longname": "江苏 无锡市 北塘区"
        },
        {
            "code": "320205",
            "name": "锡山区",
            "longname": "江苏 无锡市 锡山区"
        },
        {
            "code": "320206",
            "name": "惠山区",
            "longname": "江苏 无锡市 惠山区"
        },
        {
            "code": "320211",
            "name": "滨湖区",
            "longname": "江苏 无锡市 滨湖区"
        },
        {
            "code": "320281",
            "name": "江阴市",
            "longname": "江苏 无锡市 江阴市"
        },
        {
            "code": "320282",
            "name": "宜兴市",
            "longname": "江苏 无锡市 宜兴市"
        },
        {
            "code": "3203",
            "name": "徐州市",
            "longname": "江苏 徐州市"
        },
        {
            "code": "320301",
            "name": "市辖区",
            "longname": "江苏 徐州市 市辖区"
        },
        {
            "code": "320302",
            "name": "鼓楼区",
            "longname": "江苏 徐州市 鼓楼区"
        },
        {
            "code": "320303",
            "name": "云龙区",
            "longname": "江苏 徐州市 云龙区"
        },
        {
            "code": "320305",
            "name": "贾汪区",
            "longname": "江苏 徐州市 贾汪区"
        },
        {
            "code": "320311",
            "name": "泉山区",
            "longname": "江苏 徐州市 泉山区"
        },
        {
            "code": "320312",
            "name": "铜山区",
            "longname": "江苏 徐州市 铜山区"
        },
        {
            "code": "320321",
            "name": "丰县",
            "longname": "江苏 徐州市 丰县"
        },
        {
            "code": "320322",
            "name": "沛县",
            "longname": "江苏 徐州市 沛县"
        },
        {
            "code": "320324",
            "name": "睢宁县",
            "longname": "江苏 徐州市 睢宁县"
        },
        {
            "code": "320381",
            "name": "新沂市",
            "longname": "江苏 徐州市 新沂市"
        },
        {
            "code": "320382",
            "name": "邳州市",
            "longname": "江苏 徐州市 邳州市"
        },
        {
            "code": "3204",
            "name": "常州市",
            "longname": "江苏 常州市"
        },
        {
            "code": "320401",
            "name": "市辖区",
            "longname": "江苏 常州市 市辖区"
        },
        {
            "code": "320402",
            "name": "天宁区",
            "longname": "江苏 常州市 天宁区"
        },
        {
            "code": "320404",
            "name": "钟楼区",
            "longname": "江苏 常州市 钟楼区"
        },
        {
            "code": "320405",
            "name": "戚墅堰区",
            "longname": "江苏 常州市 戚墅堰区"
        },
        {
            "code": "320411",
            "name": "新北区",
            "longname": "江苏 常州市 新北区"
        },
        {
            "code": "320412",
            "name": "武进区",
            "longname": "江苏 常州市 武进区"
        },
        {
            "code": "320481",
            "name": "溧阳市",
            "longname": "江苏 常州市 溧阳市"
        },
        {
            "code": "320482",
            "name": "金坛市",
            "longname": "江苏 常州市 金坛市"
        },
        {
            "code": "3205",
            "name": "苏州市",
            "longname": "江苏 苏州市"
        },
        {
            "code": "320501",
            "name": "市辖区",
            "longname": "江苏 苏州市 市辖区"
        },
        {
            "code": "320502",
            "name": "沧浪区",
            "longname": "江苏 苏州市 沧浪区"
        },
        {
            "code": "320503",
            "name": "平江区",
            "longname": "江苏 苏州市 平江区"
        },
        {
            "code": "320504",
            "name": "金阊区",
            "longname": "江苏 苏州市 金阊区"
        },
        {
            "code": "320505",
            "name": "虎丘区",
            "longname": "江苏 苏州市 虎丘区"
        },
        {
            "code": "320506",
            "name": "吴中区",
            "longname": "江苏 苏州市 吴中区"
        },
        {
            "code": "320507",
            "name": "相城区",
            "longname": "江苏 苏州市 相城区"
        },
        {
            "code": "320581",
            "name": "常熟市",
            "longname": "江苏 苏州市 常熟市"
        },
        {
            "code": "320582",
            "name": "张家港市",
            "longname": "江苏 苏州市 张家港市"
        },
        {
            "code": "320583",
            "name": "昆山市",
            "longname": "江苏 苏州市 昆山市"
        },
        {
            "code": "320584",
            "name": "吴江市",
            "longname": "江苏 苏州市 吴江市"
        },
        {
            "code": "320585",
            "name": "太仓市",
            "longname": "江苏 苏州市 太仓市"
        },
        {
            "code": "3206",
            "name": "南通市",
            "longname": "江苏 南通市"
        },
        {
            "code": "320601",
            "name": "市辖区",
            "longname": "江苏 南通市 市辖区"
        },
        {
            "code": "320602",
            "name": "崇川区",
            "longname": "江苏 南通市 崇川区"
        },
        {
            "code": "320611",
            "name": "港闸区",
            "longname": "江苏 南通市 港闸区"
        },
        {
            "code": "320612",
            "name": "通州区",
            "longname": "江苏 南通市 通州区"
        },
        {
            "code": "320621",
            "name": "海安县",
            "longname": "江苏 南通市 海安县"
        },
        {
            "code": "320623",
            "name": "如东县",
            "longname": "江苏 南通市 如东县"
        },
        {
            "code": "320681",
            "name": "启东市",
            "longname": "江苏 南通市 启东市"
        },
        {
            "code": "320682",
            "name": "如皋市",
            "longname": "江苏 南通市 如皋市"
        },
        {
            "code": "320684",
            "name": "海门市",
            "longname": "江苏 南通市 海门市"
        },
        {
            "code": "3207",
            "name": "连云港市",
            "longname": "江苏 连云港市"
        },
        {
            "code": "320701",
            "name": "市辖区",
            "longname": "江苏 连云港市 市辖区"
        },
        {
            "code": "320703",
            "name": "连云区",
            "longname": "江苏 连云港市 连云区"
        },
        {
            "code": "320705",
            "name": "新浦区",
            "longname": "江苏 连云港市 新浦区"
        },
        {
            "code": "320706",
            "name": "海州区",
            "longname": "江苏 连云港市 海州区"
        },
        {
            "code": "320721",
            "name": "赣榆县",
            "longname": "江苏 连云港市 赣榆县"
        },
        {
            "code": "320722",
            "name": "东海县",
            "longname": "江苏 连云港市 东海县"
        },
        {
            "code": "320723",
            "name": "灌云县",
            "longname": "江苏 连云港市 灌云县"
        },
        {
            "code": "320724",
            "name": "灌南县",
            "longname": "江苏 连云港市 灌南县"
        },
        {
            "code": "3208",
            "name": "淮安市",
            "longname": "江苏 淮安市"
        },
        {
            "code": "320801",
            "name": "市辖区",
            "longname": "江苏 淮安市 市辖区"
        },
        {
            "code": "320802",
            "name": "清河区",
            "longname": "江苏 淮安市 清河区"
        },
        {
            "code": "320803",
            "name": "楚州区",
            "longname": "江苏 淮安市 楚州区"
        },
        {
            "code": "320804",
            "name": "淮阴区",
            "longname": "江苏 淮安市 淮阴区"
        },
        {
            "code": "320811",
            "name": "清浦区",
            "longname": "江苏 淮安市 清浦区"
        },
        {
            "code": "320826",
            "name": "涟水县",
            "longname": "江苏 淮安市 涟水县"
        },
        {
            "code": "320829",
            "name": "洪泽县",
            "longname": "江苏 淮安市 洪泽县"
        },
        {
            "code": "320830",
            "name": "盱眙县",
            "longname": "江苏 淮安市 盱眙县"
        },
        {
            "code": "320831",
            "name": "金湖县",
            "longname": "江苏 淮安市 金湖县"
        },
        {
            "code": "3209",
            "name": "盐城市",
            "longname": "江苏 盐城市"
        },
        {
            "code": "320901",
            "name": "市辖区",
            "longname": "江苏 盐城市 市辖区"
        },
        {
            "code": "320902",
            "name": "亭湖区",
            "longname": "江苏 盐城市 亭湖区"
        },
        {
            "code": "320903",
            "name": "盐都区",
            "longname": "江苏 盐城市 盐都区"
        },
        {
            "code": "320921",
            "name": "响水县",
            "longname": "江苏 盐城市 响水县"
        },
        {
            "code": "320922",
            "name": "滨海县",
            "longname": "江苏 盐城市 滨海县"
        },
        {
            "code": "320923",
            "name": "阜宁县",
            "longname": "江苏 盐城市 阜宁县"
        },
        {
            "code": "320924",
            "name": "射阳县",
            "longname": "江苏 盐城市 射阳县"
        },
        {
            "code": "320925",
            "name": "建湖县",
            "longname": "江苏 盐城市 建湖县"
        },
        {
            "code": "320981",
            "name": "东台市",
            "longname": "江苏 盐城市 东台市"
        },
        {
            "code": "320982",
            "name": "大丰市",
            "longname": "江苏 盐城市 大丰市"
        },
        {
            "code": "3210",
            "name": "扬州市",
            "longname": "江苏 扬州市"
        },
        {
            "code": "321001",
            "name": "市辖区",
            "longname": "江苏 扬州市 市辖区"
        },
        {
            "code": "321002",
            "name": "广陵区",
            "longname": "江苏 扬州市 广陵区"
        },
        {
            "code": "321003",
            "name": "邗江区",
            "longname": "江苏 扬州市 邗江区"
        },
        {
            "code": "321011",
            "name": "维扬区",
            "longname": "江苏 扬州市 维扬区"
        },
        {
            "code": "321023",
            "name": "宝应县",
            "longname": "江苏 扬州市 宝应县"
        },
        {
            "code": "321081",
            "name": "仪征市",
            "longname": "江苏 扬州市 仪征市"
        },
        {
            "code": "321084",
            "name": "高邮市",
            "longname": "江苏 扬州市 高邮市"
        },
        {
            "code": "321088",
            "name": "江都市",
            "longname": "江苏 扬州市 江都市"
        },
        {
            "code": "3211",
            "name": "镇江市",
            "longname": "江苏 镇江市"
        },
        {
            "code": "321101",
            "name": "市辖区",
            "longname": "江苏 镇江市 市辖区"
        },
        {
            "code": "321102",
            "name": "京口区",
            "longname": "江苏 镇江市 京口区"
        },
        {
            "code": "321111",
            "name": "润州区",
            "longname": "江苏 镇江市 润州区"
        },
        {
            "code": "321112",
            "name": "丹徒区",
            "longname": "江苏 镇江市 丹徒区"
        },
        {
            "code": "321181",
            "name": "丹阳市",
            "longname": "江苏 镇江市 丹阳市"
        },
        {
            "code": "321182",
            "name": "扬中市",
            "longname": "江苏 镇江市 扬中市"
        },
        {
            "code": "321183",
            "name": "句容市",
            "longname": "江苏 镇江市 句容市"
        },
        {
            "code": "3212",
            "name": "泰州市",
            "longname": "江苏 泰州市"
        },
        {
            "code": "321201",
            "name": "市辖区",
            "longname": "江苏 泰州市 市辖区"
        },
        {
            "code": "321202",
            "name": "海陵区",
            "longname": "江苏 泰州市 海陵区"
        },
        {
            "code": "321203",
            "name": "高港区",
            "longname": "江苏 泰州市 高港区"
        },
        {
            "code": "321204",
            "name": "医药高新区",
            "longname": "江苏 泰州市 医药高新区"
        },
        {
            "code": "321281",
            "name": "兴化市",
            "longname": "江苏 泰州市 兴化市"
        },
        {
            "code": "321282",
            "name": "靖江市",
            "longname": "江苏 泰州市 靖江市"
        },
        {
            "code": "321283",
            "name": "泰兴市",
            "longname": "江苏 泰州市 泰兴市"
        },
        {
            "code": "321284",
            "name": "姜堰市",
            "longname": "江苏 泰州市 姜堰市"
        },
        {
            "code": "3213",
            "name": "宿迁市",
            "longname": "江苏 宿迁市"
        },
        {
            "code": "321301",
            "name": "市辖区",
            "longname": "江苏 宿迁市 市辖区"
        },
        {
            "code": "321302",
            "name": "宿城区",
            "longname": "江苏 宿迁市 宿城区"
        },
        {
            "code": "321311",
            "name": "宿豫区",
            "longname": "江苏 宿迁市 宿豫区"
        },
        {
            "code": "321322",
            "name": "沭阳县",
            "longname": "江苏 宿迁市 沭阳县"
        },
        {
            "code": "321323",
            "name": "泗阳县",
            "longname": "江苏 宿迁市 泗阳县"
        },
        {
            "code": "321324",
            "name": "泗洪县",
            "longname": "江苏 宿迁市 泗洪县"
        },
        {
            "code": "33",
            "name": "浙江",
            "longname": "浙江"
        },
        {
            "code": "3301",
            "name": "杭州市",
            "longname": "浙江 杭州市"
        },
        {
            "code": "330101",
            "name": "市辖区",
            "longname": "浙江 杭州市 市辖区"
        },
        {
            "code": "330102",
            "name": "上城区",
            "longname": "浙江 杭州市 上城区"
        },
        {
            "code": "330103",
            "name": "下城区",
            "longname": "浙江 杭州市 下城区"
        },
        {
            "code": "330104",
            "name": "江干区",
            "longname": "浙江 杭州市 江干区"
        },
        {
            "code": "330105",
            "name": "拱墅区",
            "longname": "浙江 杭州市 拱墅区"
        },
        {
            "code": "330106",
            "name": "西湖区",
            "longname": "浙江 杭州市 西湖区"
        },
        {
            "code": "330108",
            "name": "滨江区",
            "longname": "浙江 杭州市 滨江区"
        },
        {
            "code": "330109",
            "name": "萧山区",
            "longname": "浙江 杭州市 萧山区"
        },
        {
            "code": "330110",
            "name": "余杭区",
            "longname": "浙江 杭州市 余杭区"
        },
        {
            "code": "330122",
            "name": "桐庐县",
            "longname": "浙江 杭州市 桐庐县"
        },
        {
            "code": "330127",
            "name": "淳安县",
            "longname": "浙江 杭州市 淳安县"
        },
        {
            "code": "330182",
            "name": "建德市",
            "longname": "浙江 杭州市 建德市"
        },
        {
            "code": "330183",
            "name": "富阳市",
            "longname": "浙江 杭州市 富阳市"
        },
        {
            "code": "330185",
            "name": "临安市",
            "longname": "浙江 杭州市 临安市"
        },
        {
            "code": "3302",
            "name": "宁波市",
            "longname": "浙江 宁波市"
        },
        {
            "code": "330201",
            "name": "市辖区",
            "longname": "浙江 宁波市 市辖区"
        },
        {
            "code": "330203",
            "name": "海曙区",
            "longname": "浙江 宁波市 海曙区"
        },
        {
            "code": "330204",
            "name": "江东区",
            "longname": "浙江 宁波市 江东区"
        },
        {
            "code": "330205",
            "name": "江北区",
            "longname": "浙江 宁波市 江北区"
        },
        {
            "code": "330206",
            "name": "北仑区",
            "longname": "浙江 宁波市 北仑区"
        },
        {
            "code": "330211",
            "name": "镇海区",
            "longname": "浙江 宁波市 镇海区"
        },
        {
            "code": "330212",
            "name": "鄞州区",
            "longname": "浙江 宁波市 鄞州区"
        },
        {
            "code": "330225",
            "name": "象山县",
            "longname": "浙江 宁波市 象山县"
        },
        {
            "code": "330226",
            "name": "宁海县",
            "longname": "浙江 宁波市 宁海县"
        },
        {
            "code": "330281",
            "name": "余姚市",
            "longname": "浙江 宁波市 余姚市"
        },
        {
            "code": "330282",
            "name": "慈溪市",
            "longname": "浙江 宁波市 慈溪市"
        },
        {
            "code": "330283",
            "name": "奉化市",
            "longname": "浙江 宁波市 奉化市"
        },
        {
            "code": "3303",
            "name": "温州市",
            "longname": "浙江 温州市"
        },
        {
            "code": "330301",
            "name": "市辖区",
            "longname": "浙江 温州市 市辖区"
        },
        {
            "code": "330302",
            "name": "鹿城区",
            "longname": "浙江 温州市 鹿城区"
        },
        {
            "code": "330303",
            "name": "龙湾区",
            "longname": "浙江 温州市 龙湾区"
        },
        {
            "code": "330304",
            "name": "瓯海区",
            "longname": "浙江 温州市 瓯海区"
        },
        {
            "code": "330322",
            "name": "洞头县",
            "longname": "浙江 温州市 洞头县"
        },
        {
            "code": "330324",
            "name": "永嘉县",
            "longname": "浙江 温州市 永嘉县"
        },
        {
            "code": "330326",
            "name": "平阳县",
            "longname": "浙江 温州市 平阳县"
        },
        {
            "code": "330327",
            "name": "苍南县",
            "longname": "浙江 温州市 苍南县"
        },
        {
            "code": "330328",
            "name": "文成县",
            "longname": "浙江 温州市 文成县"
        },
        {
            "code": "330329",
            "name": "泰顺县",
            "longname": "浙江 温州市 泰顺县"
        },
        {
            "code": "330381",
            "name": "瑞安市",
            "longname": "浙江 温州市 瑞安市"
        },
        {
            "code": "330382",
            "name": "乐清市",
            "longname": "浙江 温州市 乐清市"
        },
        {
            "code": "3304",
            "name": "嘉兴市",
            "longname": "浙江 嘉兴市"
        },
        {
            "code": "330401",
            "name": "市辖区",
            "longname": "浙江 嘉兴市 市辖区"
        },
        {
            "code": "330402",
            "name": "南湖区",
            "longname": "浙江 嘉兴市 南湖区"
        },
        {
            "code": "330411",
            "name": "秀洲区",
            "longname": "浙江 嘉兴市 秀洲区"
        },
        {
            "code": "330421",
            "name": "嘉善县",
            "longname": "浙江 嘉兴市 嘉善县"
        },
        {
            "code": "330424",
            "name": "海盐县",
            "longname": "浙江 嘉兴市 海盐县"
        },
        {
            "code": "330481",
            "name": "海宁市",
            "longname": "浙江 嘉兴市 海宁市"
        },
        {
            "code": "330482",
            "name": "平湖市",
            "longname": "浙江 嘉兴市 平湖市"
        },
        {
            "code": "330483",
            "name": "桐乡市",
            "longname": "浙江 嘉兴市 桐乡市"
        },
        {
            "code": "3305",
            "name": "湖州市",
            "longname": "浙江 湖州市"
        },
        {
            "code": "330501",
            "name": "市辖区",
            "longname": "浙江 湖州市 市辖区"
        },
        {
            "code": "330502",
            "name": "吴兴区",
            "longname": "浙江 湖州市 吴兴区"
        },
        {
            "code": "330503",
            "name": "南浔区",
            "longname": "浙江 湖州市 南浔区"
        },
        {
            "code": "330521",
            "name": "德清县",
            "longname": "浙江 湖州市 德清县"
        },
        {
            "code": "330522",
            "name": "长兴县",
            "longname": "浙江 湖州市 长兴县"
        },
        {
            "code": "330523",
            "name": "安吉县",
            "longname": "浙江 湖州市 安吉县"
        },
        {
            "code": "3306",
            "name": "绍兴市",
            "longname": "浙江 绍兴市"
        },
        {
            "code": "330601",
            "name": "市辖区",
            "longname": "浙江 绍兴市 市辖区"
        },
        {
            "code": "330602",
            "name": "越城区",
            "longname": "浙江 绍兴市 越城区"
        },
        {
            "code": "330621",
            "name": "绍兴县",
            "longname": "浙江 绍兴市 绍兴县"
        },
        {
            "code": "330624",
            "name": "新昌县",
            "longname": "浙江 绍兴市 新昌县"
        },
        {
            "code": "330681",
            "name": "诸暨市",
            "longname": "浙江 绍兴市 诸暨市"
        },
        {
            "code": "330682",
            "name": "上虞市",
            "longname": "浙江 绍兴市 上虞市"
        },
        {
            "code": "330683",
            "name": "嵊州市",
            "longname": "浙江 绍兴市 嵊州市"
        },
        {
            "code": "3307",
            "name": "金华市",
            "longname": "浙江 金华市"
        },
        {
            "code": "330701",
            "name": "市辖区",
            "longname": "浙江 金华市 市辖区"
        },
        {
            "code": "330702",
            "name": "婺城区",
            "longname": "浙江 金华市 婺城区"
        },
        {
            "code": "330703",
            "name": "金东区",
            "longname": "浙江 金华市 金东区"
        },
        {
            "code": "330723",
            "name": "武义县",
            "longname": "浙江 金华市 武义县"
        },
        {
            "code": "330726",
            "name": "浦江县",
            "longname": "浙江 金华市 浦江县"
        },
        {
            "code": "330727",
            "name": "磐安县",
            "longname": "浙江 金华市 磐安县"
        },
        {
            "code": "330781",
            "name": "兰溪市",
            "longname": "浙江 金华市 兰溪市"
        },
        {
            "code": "330782",
            "name": "义乌市",
            "longname": "浙江 金华市 义乌市"
        },
        {
            "code": "330783",
            "name": "东阳市",
            "longname": "浙江 金华市 东阳市"
        },
        {
            "code": "330784",
            "name": "永康市",
            "longname": "浙江 金华市 永康市"
        },
        {
            "code": "3308",
            "name": "衢州市",
            "longname": "浙江 衢州市"
        },
        {
            "code": "330801",
            "name": "市辖区",
            "longname": "浙江 衢州市 市辖区"
        },
        {
            "code": "330802",
            "name": "柯城区",
            "longname": "浙江 衢州市 柯城区"
        },
        {
            "code": "330803",
            "name": "衢江区",
            "longname": "浙江 衢州市 衢江区"
        },
        {
            "code": "330822",
            "name": "常山县",
            "longname": "浙江 衢州市 常山县"
        },
        {
            "code": "330824",
            "name": "开化县",
            "longname": "浙江 衢州市 开化县"
        },
        {
            "code": "330825",
            "name": "龙游县",
            "longname": "浙江 衢州市 龙游县"
        },
        {
            "code": "330881",
            "name": "江山市",
            "longname": "浙江 衢州市 江山市"
        },
        {
            "code": "3309",
            "name": "舟山市",
            "longname": "浙江 舟山市"
        },
        {
            "code": "330901",
            "name": "市辖区",
            "longname": "浙江 舟山市 市辖区"
        },
        {
            "code": "330902",
            "name": "定海区",
            "longname": "浙江 舟山市 定海区"
        },
        {
            "code": "330903",
            "name": "普陀区",
            "longname": "浙江 舟山市 普陀区"
        },
        {
            "code": "330921",
            "name": "岱山县",
            "longname": "浙江 舟山市 岱山县"
        },
        {
            "code": "330922",
            "name": "嵊泗县",
            "longname": "浙江 舟山市 嵊泗县"
        },
        {
            "code": "3310",
            "name": "台州市",
            "longname": "浙江 台州市"
        },
        {
            "code": "331001",
            "name": "市辖区",
            "longname": "浙江 台州市 市辖区"
        },
        {
            "code": "331002",
            "name": "椒江区",
            "longname": "浙江 台州市 椒江区"
        },
        {
            "code": "331003",
            "name": "黄岩区",
            "longname": "浙江 台州市 黄岩区"
        },
        {
            "code": "331004",
            "name": "路桥区",
            "longname": "浙江 台州市 路桥区"
        },
        {
            "code": "331021",
            "name": "玉环县",
            "longname": "浙江 台州市 玉环县"
        },
        {
            "code": "331022",
            "name": "三门县",
            "longname": "浙江 台州市 三门县"
        },
        {
            "code": "331023",
            "name": "天台县",
            "longname": "浙江 台州市 天台县"
        },
        {
            "code": "331024",
            "name": "仙居县",
            "longname": "浙江 台州市 仙居县"
        },
        {
            "code": "331081",
            "name": "温岭市",
            "longname": "浙江 台州市 温岭市"
        },
        {
            "code": "331082",
            "name": "临海市",
            "longname": "浙江 台州市 临海市"
        },
        {
            "code": "3311",
            "name": "丽水市",
            "longname": "浙江 丽水市"
        },
        {
            "code": "331101",
            "name": "市辖区",
            "longname": "浙江 丽水市 市辖区"
        },
        {
            "code": "331102",
            "name": "莲都区",
            "longname": "浙江 丽水市 莲都区"
        },
        {
            "code": "331121",
            "name": "青田县",
            "longname": "浙江 丽水市 青田县"
        },
        {
            "code": "331122",
            "name": "缙云县",
            "longname": "浙江 丽水市 缙云县"
        },
        {
            "code": "331123",
            "name": "遂昌县",
            "longname": "浙江 丽水市 遂昌县"
        },
        {
            "code": "331124",
            "name": "松阳县",
            "longname": "浙江 丽水市 松阳县"
        },
        {
            "code": "331125",
            "name": "云和县",
            "longname": "浙江 丽水市 云和县"
        },
        {
            "code": "331126",
            "name": "庆元县",
            "longname": "浙江 丽水市 庆元县"
        },
        {
            "code": "331127",
            "name": "景宁畲族自治县",
            "longname": "浙江 丽水市 景宁畲族自治县"
        },
        {
            "code": "331181",
            "name": "龙泉市",
            "longname": "浙江 丽水市 龙泉市"
        },
        {
            "code": "34",
            "name": "安徽",
            "longname": "安徽"
        },
        {
            "code": "3401",
            "name": "合肥市",
            "longname": "安徽 合肥市"
        },
        {
            "code": "340101",
            "name": "市辖区",
            "longname": "安徽 合肥市 市辖区"
        },
        {
            "code": "340102",
            "name": "瑶海区",
            "longname": "安徽 合肥市 瑶海区"
        },
        {
            "code": "340103",
            "name": "庐阳区",
            "longname": "安徽 合肥市 庐阳区"
        },
        {
            "code": "340104",
            "name": "蜀山区",
            "longname": "安徽 合肥市 蜀山区"
        },
        {
            "code": "340111",
            "name": "包河区",
            "longname": "安徽 合肥市 包河区"
        },
        {
            "code": "340121",
            "name": "长丰县",
            "longname": "安徽 合肥市 长丰县"
        },
        {
            "code": "340122",
            "name": "肥东县",
            "longname": "安徽 合肥市 肥东县"
        },
        {
            "code": "340123",
            "name": "肥西县",
            "longname": "安徽 合肥市 肥西县"
        },
        {
            "code": "3402",
            "name": "芜湖市",
            "longname": "安徽 芜湖市"
        },
        {
            "code": "340201",
            "name": "市辖区",
            "longname": "安徽 芜湖市 市辖区"
        },
        {
            "code": "340202",
            "name": "镜湖区",
            "longname": "安徽 芜湖市 镜湖区"
        },
        {
            "code": "340203",
            "name": "弋江区",
            "longname": "安徽 芜湖市 弋江区"
        },
        {
            "code": "340207",
            "name": "鸠江区",
            "longname": "安徽 芜湖市 鸠江区"
        },
        {
            "code": "340208",
            "name": "三山区",
            "longname": "安徽 芜湖市 三山区"
        },
        {
            "code": "340221",
            "name": "芜湖县",
            "longname": "安徽 芜湖市 芜湖县"
        },
        {
            "code": "340222",
            "name": "繁昌县",
            "longname": "安徽 芜湖市 繁昌县"
        },
        {
            "code": "340223",
            "name": "南陵县",
            "longname": "安徽 芜湖市 南陵县"
        },
        {
            "code": "3403",
            "name": "蚌埠市",
            "longname": "安徽 蚌埠市"
        },
        {
            "code": "340301",
            "name": "市辖区",
            "longname": "安徽 蚌埠市 市辖区"
        },
        {
            "code": "340302",
            "name": "龙子湖区",
            "longname": "安徽 蚌埠市 龙子湖区"
        },
        {
            "code": "340303",
            "name": "蚌山区",
            "longname": "安徽 蚌埠市 蚌山区"
        },
        {
            "code": "340304",
            "name": "禹会区",
            "longname": "安徽 蚌埠市 禹会区"
        },
        {
            "code": "340311",
            "name": "淮上区",
            "longname": "安徽 蚌埠市 淮上区"
        },
        {
            "code": "340321",
            "name": "怀远县",
            "longname": "安徽 蚌埠市 怀远县"
        },
        {
            "code": "340322",
            "name": "五河县",
            "longname": "安徽 蚌埠市 五河县"
        },
        {
            "code": "340323",
            "name": "固镇县",
            "longname": "安徽 蚌埠市 固镇县"
        },
        {
            "code": "3404",
            "name": "淮南市",
            "longname": "安徽 淮南市"
        },
        {
            "code": "340401",
            "name": "市辖区",
            "longname": "安徽 淮南市 市辖区"
        },
        {
            "code": "340402",
            "name": "大通区",
            "longname": "安徽 淮南市 大通区"
        },
        {
            "code": "340403",
            "name": "田家庵区",
            "longname": "安徽 淮南市 田家庵区"
        },
        {
            "code": "340404",
            "name": "谢家集区",
            "longname": "安徽 淮南市 谢家集区"
        },
        {
            "code": "340405",
            "name": "八公山区",
            "longname": "安徽 淮南市 八公山区"
        },
        {
            "code": "340406",
            "name": "潘集区",
            "longname": "安徽 淮南市 潘集区"
        },
        {
            "code": "340421",
            "name": "凤台县",
            "longname": "安徽 淮南市 凤台县"
        },
        {
            "code": "3405",
            "name": "马鞍山市",
            "longname": "安徽 马鞍山市"
        },
        {
            "code": "340501",
            "name": "市辖区",
            "longname": "安徽 马鞍山市 市辖区"
        },
        {
            "code": "340502",
            "name": "金家庄区",
            "longname": "安徽 马鞍山市 金家庄区"
        },
        {
            "code": "340503",
            "name": "花山区",
            "longname": "安徽 马鞍山市 花山区"
        },
        {
            "code": "340504",
            "name": "雨山区",
            "longname": "安徽 马鞍山市 雨山区"
        },
        {
            "code": "340521",
            "name": "当涂县",
            "longname": "安徽 马鞍山市 当涂县"
        },
        {
            "code": "3406",
            "name": "淮北市",
            "longname": "安徽 淮北市"
        },
        {
            "code": "340601",
            "name": "市辖区",
            "longname": "安徽 淮北市 市辖区"
        },
        {
            "code": "340602",
            "name": "杜集区",
            "longname": "安徽 淮北市 杜集区"
        },
        {
            "code": "340603",
            "name": "相山区",
            "longname": "安徽 淮北市 相山区"
        },
        {
            "code": "340604",
            "name": "烈山区",
            "longname": "安徽 淮北市 烈山区"
        },
        {
            "code": "340621",
            "name": "濉溪县",
            "longname": "安徽 淮北市 濉溪县"
        },
        {
            "code": "3407",
            "name": "铜陵市",
            "longname": "安徽 铜陵市"
        },
        {
            "code": "340701",
            "name": "市辖区",
            "longname": "安徽 铜陵市 市辖区"
        },
        {
            "code": "340702",
            "name": "铜官山区",
            "longname": "安徽 铜陵市 铜官山区"
        },
        {
            "code": "340703",
            "name": "狮子山区",
            "longname": "安徽 铜陵市 狮子山区"
        },
        {
            "code": "340711",
            "name": "郊区",
            "longname": "安徽 铜陵市 郊区"
        },
        {
            "code": "340721",
            "name": "铜陵县",
            "longname": "安徽 铜陵市 铜陵县"
        },
        {
            "code": "3408",
            "name": "安庆市",
            "longname": "安徽 安庆市"
        },
        {
            "code": "340801",
            "name": "市辖区",
            "longname": "安徽 安庆市 市辖区"
        },
        {
            "code": "340802",
            "name": "迎江区",
            "longname": "安徽 安庆市 迎江区"
        },
        {
            "code": "340803",
            "name": "大观区",
            "longname": "安徽 安庆市 大观区"
        },
        {
            "code": "340811",
            "name": "宜秀区",
            "longname": "安徽 安庆市 宜秀区"
        },
        {
            "code": "340822",
            "name": "怀宁县",
            "longname": "安徽 安庆市 怀宁县"
        },
        {
            "code": "340823",
            "name": "枞阳县",
            "longname": "安徽 安庆市 枞阳县"
        },
        {
            "code": "340824",
            "name": "潜山县",
            "longname": "安徽 安庆市 潜山县"
        },
        {
            "code": "340825",
            "name": "太湖县",
            "longname": "安徽 安庆市 太湖县"
        },
        {
            "code": "340826",
            "name": "宿松县",
            "longname": "安徽 安庆市 宿松县"
        },
        {
            "code": "340827",
            "name": "望江县",
            "longname": "安徽 安庆市 望江县"
        },
        {
            "code": "340828",
            "name": "岳西县",
            "longname": "安徽 安庆市 岳西县"
        },
        {
            "code": "340881",
            "name": "桐城市",
            "longname": "安徽 安庆市 桐城市"
        },
        {
            "code": "3410",
            "name": "黄山市",
            "longname": "安徽 黄山市"
        },
        {
            "code": "341001",
            "name": "市辖区",
            "longname": "安徽 黄山市 市辖区"
        },
        {
            "code": "341002",
            "name": "屯溪区",
            "longname": "安徽 黄山市 屯溪区"
        },
        {
            "code": "341003",
            "name": "黄山区",
            "longname": "安徽 黄山市 黄山区"
        },
        {
            "code": "341004",
            "name": "徽州区",
            "longname": "安徽 黄山市 徽州区"
        },
        {
            "code": "341021",
            "name": "歙县",
            "longname": "安徽 黄山市 歙县"
        },
        {
            "code": "341022",
            "name": "休宁县",
            "longname": "安徽 黄山市 休宁县"
        },
        {
            "code": "341023",
            "name": "黟县",
            "longname": "安徽 黄山市 黟县"
        },
        {
            "code": "341024",
            "name": "祁门县",
            "longname": "安徽 黄山市 祁门县"
        },
        {
            "code": "3411",
            "name": "滁州市",
            "longname": "安徽 滁州市"
        },
        {
            "code": "341101",
            "name": "市辖区",
            "longname": "安徽 滁州市 市辖区"
        },
        {
            "code": "341102",
            "name": "琅琊区",
            "longname": "安徽 滁州市 琅琊区"
        },
        {
            "code": "341103",
            "name": "南谯区",
            "longname": "安徽 滁州市 南谯区"
        },
        {
            "code": "341122",
            "name": "来安县",
            "longname": "安徽 滁州市 来安县"
        },
        {
            "code": "341124",
            "name": "全椒县",
            "longname": "安徽 滁州市 全椒县"
        },
        {
            "code": "341125",
            "name": "定远县",
            "longname": "安徽 滁州市 定远县"
        },
        {
            "code": "341126",
            "name": "凤阳县",
            "longname": "安徽 滁州市 凤阳县"
        },
        {
            "code": "341181",
            "name": "天长市",
            "longname": "安徽 滁州市 天长市"
        },
        {
            "code": "341182",
            "name": "明光市",
            "longname": "安徽 滁州市 明光市"
        },
        {
            "code": "3412",
            "name": "阜阳市",
            "longname": "安徽 阜阳市"
        },
        {
            "code": "341201",
            "name": "市辖区",
            "longname": "安徽 阜阳市 市辖区"
        },
        {
            "code": "341202",
            "name": "颍州区",
            "longname": "安徽 阜阳市 颍州区"
        },
        {
            "code": "341203",
            "name": "颍东区",
            "longname": "安徽 阜阳市 颍东区"
        },
        {
            "code": "341204",
            "name": "颍泉区",
            "longname": "安徽 阜阳市 颍泉区"
        },
        {
            "code": "341221",
            "name": "临泉县",
            "longname": "安徽 阜阳市 临泉县"
        },
        {
            "code": "341222",
            "name": "太和县",
            "longname": "安徽 阜阳市 太和县"
        },
        {
            "code": "341225",
            "name": "阜南县",
            "longname": "安徽 阜阳市 阜南县"
        },
        {
            "code": "341226",
            "name": "颍上县",
            "longname": "安徽 阜阳市 颍上县"
        },
        {
            "code": "341282",
            "name": "界首市",
            "longname": "安徽 阜阳市 界首市"
        },
        {
            "code": "3413",
            "name": "宿州市",
            "longname": "安徽 宿州市"
        },
        {
            "code": "341301",
            "name": "市辖区",
            "longname": "安徽 宿州市 市辖区"
        },
        {
            "code": "341302",
            "name": "埇桥区",
            "longname": "安徽 宿州市 埇桥区"
        },
        {
            "code": "341321",
            "name": "砀山县",
            "longname": "安徽 宿州市 砀山县"
        },
        {
            "code": "341322",
            "name": "萧县",
            "longname": "安徽 宿州市 萧县"
        },
        {
            "code": "341323",
            "name": "灵璧县",
            "longname": "安徽 宿州市 灵璧县"
        },
        {
            "code": "341324",
            "name": "泗县",
            "longname": "安徽 宿州市 泗县"
        },
        {
            "code": "3414",
            "name": "巢湖市",
            "longname": "安徽 巢湖市"
        },
        {
            "code": "341401",
            "name": "市辖区",
            "longname": "安徽 巢湖市 市辖区"
        },
        {
            "code": "341402",
            "name": "居巢区",
            "longname": "安徽 巢湖市 居巢区"
        },
        {
            "code": "341421",
            "name": "庐江县",
            "longname": "安徽 巢湖市 庐江县"
        },
        {
            "code": "341422",
            "name": "无为县",
            "longname": "安徽 巢湖市 无为县"
        },
        {
            "code": "341423",
            "name": "含山县",
            "longname": "安徽 巢湖市 含山县"
        },
        {
            "code": "341424",
            "name": "和县",
            "longname": "安徽 巢湖市 和县"
        },
        {
            "code": "3415",
            "name": "六安市",
            "longname": "安徽 六安市"
        },
        {
            "code": "341501",
            "name": "市辖区",
            "longname": "安徽 六安市 市辖区"
        },
        {
            "code": "341502",
            "name": "金安区",
            "longname": "安徽 六安市 金安区"
        },
        {
            "code": "341503",
            "name": "裕安区",
            "longname": "安徽 六安市 裕安区"
        },
        {
            "code": "341521",
            "name": "寿县",
            "longname": "安徽 六安市 寿县"
        },
        {
            "code": "341522",
            "name": "霍邱县",
            "longname": "安徽 六安市 霍邱县"
        },
        {
            "code": "341523",
            "name": "舒城县",
            "longname": "安徽 六安市 舒城县"
        },
        {
            "code": "341524",
            "name": "金寨县",
            "longname": "安徽 六安市 金寨县"
        },
        {
            "code": "341525",
            "name": "霍山县",
            "longname": "安徽 六安市 霍山县"
        },
        {
            "code": "3416",
            "name": "亳州市",
            "longname": "安徽 亳州市"
        },
        {
            "code": "341601",
            "name": "市辖区",
            "longname": "安徽 亳州市 市辖区"
        },
        {
            "code": "341602",
            "name": "谯城区",
            "longname": "安徽 亳州市 谯城区"
        },
        {
            "code": "341621",
            "name": "涡阳县",
            "longname": "安徽 亳州市 涡阳县"
        },
        {
            "code": "341622",
            "name": "蒙城县",
            "longname": "安徽 亳州市 蒙城县"
        },
        {
            "code": "341623",
            "name": "利辛县",
            "longname": "安徽 亳州市 利辛县"
        },
        {
            "code": "3417",
            "name": "池州市",
            "longname": "安徽 池州市"
        },
        {
            "code": "341701",
            "name": "市辖区",
            "longname": "安徽 池州市 市辖区"
        },
        {
            "code": "341702",
            "name": "贵池区",
            "longname": "安徽 池州市 贵池区"
        },
        {
            "code": "341721",
            "name": "东至县",
            "longname": "安徽 池州市 东至县"
        },
        {
            "code": "341722",
            "name": "石台县",
            "longname": "安徽 池州市 石台县"
        },
        {
            "code": "341723",
            "name": "青阳县",
            "longname": "安徽 池州市 青阳县"
        },
        {
            "code": "3418",
            "name": "宣城市",
            "longname": "安徽 宣城市"
        },
        {
            "code": "341801",
            "name": "市辖区",
            "longname": "安徽 宣城市 市辖区"
        },
        {
            "code": "341802",
            "name": "宣州区",
            "longname": "安徽 宣城市 宣州区"
        },
        {
            "code": "341821",
            "name": "郎溪县",
            "longname": "安徽 宣城市 郎溪县"
        },
        {
            "code": "341822",
            "name": "广德县",
            "longname": "安徽 宣城市 广德县"
        },
        {
            "code": "341823",
            "name": "泾县",
            "longname": "安徽 宣城市 泾县"
        },
        {
            "code": "341824",
            "name": "绩溪县",
            "longname": "安徽 宣城市 绩溪县"
        },
        {
            "code": "341825",
            "name": "旌德县",
            "longname": "安徽 宣城市 旌德县"
        },
        {
            "code": "341881",
            "name": "宁国市",
            "longname": "安徽 宣城市 宁国市"
        },
        {
            "code": "35",
            "name": "福建",
            "longname": "福建"
        },
        {
            "code": "3501",
            "name": "福州市",
            "longname": "福建 福州市"
        },
        {
            "code": "350101",
            "name": "市辖区",
            "longname": "福建 福州市 市辖区"
        },
        {
            "code": "350102",
            "name": "鼓楼区",
            "longname": "福建 福州市 鼓楼区"
        },
        {
            "code": "350103",
            "name": "台江区",
            "longname": "福建 福州市 台江区"
        },
        {
            "code": "350104",
            "name": "仓山区",
            "longname": "福建 福州市 仓山区"
        },
        {
            "code": "350105",
            "name": "马尾区",
            "longname": "福建 福州市 马尾区"
        },
        {
            "code": "350111",
            "name": "晋安区",
            "longname": "福建 福州市 晋安区"
        },
        {
            "code": "350121",
            "name": "闽侯县",
            "longname": "福建 福州市 闽侯县"
        },
        {
            "code": "350122",
            "name": "连江县",
            "longname": "福建 福州市 连江县"
        },
        {
            "code": "350123",
            "name": "罗源县",
            "longname": "福建 福州市 罗源县"
        },
        {
            "code": "350124",
            "name": "闽清县",
            "longname": "福建 福州市 闽清县"
        },
        {
            "code": "350125",
            "name": "永泰县",
            "longname": "福建 福州市 永泰县"
        },
        {
            "code": "350128",
            "name": "平潭综合实验区",
            "longname": "福建 福州市 平潭综合实验区"
        },
        {
            "code": "350181",
            "name": "福清市",
            "longname": "福建 福州市 福清市"
        },
        {
            "code": "350182",
            "name": "长乐市",
            "longname": "福建 福州市 长乐市"
        },
        {
            "code": "3502",
            "name": "厦门市",
            "longname": "福建 厦门市"
        },
        {
            "code": "350201",
            "name": "市辖区",
            "longname": "福建 厦门市 市辖区"
        },
        {
            "code": "350203",
            "name": "思明区",
            "longname": "福建 厦门市 思明区"
        },
        {
            "code": "350205",
            "name": "海沧区",
            "longname": "福建 厦门市 海沧区"
        },
        {
            "code": "350206",
            "name": "湖里区",
            "longname": "福建 厦门市 湖里区"
        },
        {
            "code": "350211",
            "name": "集美区",
            "longname": "福建 厦门市 集美区"
        },
        {
            "code": "350212",
            "name": "同安区",
            "longname": "福建 厦门市 同安区"
        },
        {
            "code": "350213",
            "name": "翔安区",
            "longname": "福建 厦门市 翔安区"
        },
        {
            "code": "3503",
            "name": "莆田市",
            "longname": "福建 莆田市"
        },
        {
            "code": "350301",
            "name": "市辖区",
            "longname": "福建 莆田市 市辖区"
        },
        {
            "code": "350302",
            "name": "城厢区",
            "longname": "福建 莆田市 城厢区"
        },
        {
            "code": "350303",
            "name": "涵江区",
            "longname": "福建 莆田市 涵江区"
        },
        {
            "code": "350304",
            "name": "荔城区",
            "longname": "福建 莆田市 荔城区"
        },
        {
            "code": "350305",
            "name": "秀屿区",
            "longname": "福建 莆田市 秀屿区"
        },
        {
            "code": "350306",
            "name": "湄洲岛",
            "longname": "福建 莆田市 湄洲岛"
        },
        {
            "code": "350307",
            "name": "北岸开发区",
            "longname": "福建 莆田市 北岸开发区"
        },
        {
            "code": "350322",
            "name": "仙游县",
            "longname": "福建 莆田市 仙游县"
        },
        {
            "code": "3504",
            "name": "三明市",
            "longname": "福建 三明市"
        },
        {
            "code": "350401",
            "name": "市辖区",
            "longname": "福建 三明市 市辖区"
        },
        {
            "code": "350402",
            "name": "梅列区",
            "longname": "福建 三明市 梅列区"
        },
        {
            "code": "350403",
            "name": "三元区",
            "longname": "福建 三明市 三元区"
        },
        {
            "code": "350421",
            "name": "明溪县",
            "longname": "福建 三明市 明溪县"
        },
        {
            "code": "350423",
            "name": "清流县",
            "longname": "福建 三明市 清流县"
        },
        {
            "code": "350424",
            "name": "宁化县",
            "longname": "福建 三明市 宁化县"
        },
        {
            "code": "350425",
            "name": "大田县",
            "longname": "福建 三明市 大田县"
        },
        {
            "code": "350426",
            "name": "尤溪县",
            "longname": "福建 三明市 尤溪县"
        },
        {
            "code": "350427",
            "name": "沙县",
            "longname": "福建 三明市 沙县"
        },
        {
            "code": "350428",
            "name": "将乐县",
            "longname": "福建 三明市 将乐县"
        },
        {
            "code": "350429",
            "name": "泰宁县",
            "longname": "福建 三明市 泰宁县"
        },
        {
            "code": "350430",
            "name": "建宁县",
            "longname": "福建 三明市 建宁县"
        },
        {
            "code": "350481",
            "name": "永安市",
            "longname": "福建 三明市 永安市"
        },
        {
            "code": "3505",
            "name": "泉州市",
            "longname": "福建 泉州市"
        },
        {
            "code": "350501",
            "name": "市辖区",
            "longname": "福建 泉州市 市辖区"
        },
        {
            "code": "350502",
            "name": "鲤城区",
            "longname": "福建 泉州市 鲤城区"
        },
        {
            "code": "350503",
            "name": "丰泽区",
            "longname": "福建 泉州市 丰泽区"
        },
        {
            "code": "350504",
            "name": "洛江区",
            "longname": "福建 泉州市 洛江区"
        },
        {
            "code": "350505",
            "name": "泉港区",
            "longname": "福建 泉州市 泉港区"
        },
        {
            "code": "350506",
            "name": "经济技术开发区",
            "longname": "福建 泉州市 经济技术开发区"
        },
        {
            "code": "350507",
            "name": "台商投资区",
            "longname": "福建 泉州市 台商投资区"
        },
        {
            "code": "350521",
            "name": "惠安县",
            "longname": "福建 泉州市 惠安县"
        },
        {
            "code": "350524",
            "name": "安溪县",
            "longname": "福建 泉州市 安溪县"
        },
        {
            "code": "350525",
            "name": "永春县",
            "longname": "福建 泉州市 永春县"
        },
        {
            "code": "350526",
            "name": "德化县",
            "longname": "福建 泉州市 德化县"
        },
        {
            "code": "350527",
            "name": "金门县",
            "longname": "福建 泉州市 金门县"
        },
        {
            "code": "350581",
            "name": "石狮市",
            "longname": "福建 泉州市 石狮市"
        },
        {
            "code": "350582",
            "name": "晋江市",
            "longname": "福建 泉州市 晋江市"
        },
        {
            "code": "350583",
            "name": "南安市",
            "longname": "福建 泉州市 南安市"
        },
        {
            "code": "3506",
            "name": "漳州市",
            "longname": "福建 漳州市"
        },
        {
            "code": "350601",
            "name": "市辖区",
            "longname": "福建 漳州市 市辖区"
        },
        {
            "code": "350602",
            "name": "芗城区",
            "longname": "福建 漳州市 芗城区"
        },
        {
            "code": "350603",
            "name": "龙文区",
            "longname": "福建 漳州市 龙文区"
        },
        {
            "code": "350605",
            "name": "常山华侨经济开发区",
            "longname": "福建 漳州市 常山华侨经济开发区"
        },
        {
            "code": "350606",
            "name": "台商投资区",
            "longname": "福建 漳州市 台商投资区"
        },
        {
            "code": "350622",
            "name": "云霄县",
            "longname": "福建 漳州市 云霄县"
        },
        {
            "code": "350623",
            "name": "漳浦县",
            "longname": "福建 漳州市 漳浦县"
        },
        {
            "code": "350624",
            "name": "诏安县",
            "longname": "福建 漳州市 诏安县"
        },
        {
            "code": "350625",
            "name": "长泰县",
            "longname": "福建 漳州市 长泰县"
        },
        {
            "code": "350626",
            "name": "东山县",
            "longname": "福建 漳州市 东山县"
        },
        {
            "code": "350627",
            "name": "南靖县",
            "longname": "福建 漳州市 南靖县"
        },
        {
            "code": "350628",
            "name": "平和县",
            "longname": "福建 漳州市 平和县"
        },
        {
            "code": "350629",
            "name": "华安县",
            "longname": "福建 漳州市 华安县"
        },
        {
            "code": "350681",
            "name": "龙海市",
            "longname": "福建 漳州市 龙海市"
        },
        {
            "code": "3507",
            "name": "南平市",
            "longname": "福建 南平市"
        },
        {
            "code": "350701",
            "name": "市辖区",
            "longname": "福建 南平市 市辖区"
        },
        {
            "code": "350702",
            "name": "延平区",
            "longname": "福建 南平市 延平区"
        },
        {
            "code": "350721",
            "name": "顺昌县",
            "longname": "福建 南平市 顺昌县"
        },
        {
            "code": "350722",
            "name": "浦城县",
            "longname": "福建 南平市 浦城县"
        },
        {
            "code": "350723",
            "name": "光泽县",
            "longname": "福建 南平市 光泽县"
        },
        {
            "code": "350724",
            "name": "松溪县",
            "longname": "福建 南平市 松溪县"
        },
        {
            "code": "350725",
            "name": "政和县",
            "longname": "福建 南平市 政和县"
        },
        {
            "code": "350781",
            "name": "邵武市",
            "longname": "福建 南平市 邵武市"
        },
        {
            "code": "350782",
            "name": "武夷山市",
            "longname": "福建 南平市 武夷山市"
        },
        {
            "code": "350783",
            "name": "建瓯市",
            "longname": "福建 南平市 建瓯市"
        },
        {
            "code": "350784",
            "name": "建阳市",
            "longname": "福建 南平市 建阳市"
        },
        {
            "code": "3508",
            "name": "龙岩市",
            "longname": "福建 龙岩市"
        },
        {
            "code": "350801",
            "name": "市辖区",
            "longname": "福建 龙岩市 市辖区"
        },
        {
            "code": "350802",
            "name": "新罗区",
            "longname": "福建 龙岩市 新罗区"
        },
        {
            "code": "350821",
            "name": "长汀县",
            "longname": "福建 龙岩市 长汀县"
        },
        {
            "code": "350822",
            "name": "永定区",
            "longname": "福建 龙岩市 永定区"
        },
        {
            "code": "350823",
            "name": "上杭县",
            "longname": "福建 龙岩市 上杭县"
        },
        {
            "code": "350824",
            "name": "武平县",
            "longname": "福建 龙岩市 武平县"
        },
        {
            "code": "350825",
            "name": "连城县",
            "longname": "福建 龙岩市 连城县"
        },
        {
            "code": "350881",
            "name": "漳平市",
            "longname": "福建 龙岩市 漳平市"
        },
        {
            "code": "3509",
            "name": "宁德市",
            "longname": "福建 宁德市"
        },
        {
            "code": "350901",
            "name": "市辖区",
            "longname": "福建 宁德市 市辖区"
        },
        {
            "code": "350902",
            "name": "蕉城区",
            "longname": "福建 宁德市 蕉城区"
        },
        {
            "code": "350903",
            "name": "东侨经济开发区",
            "longname": "福建 宁德市 东侨经济开发区"
        },
        {
            "code": "350921",
            "name": "霞浦县",
            "longname": "福建 宁德市 霞浦县"
        },
        {
            "code": "350922",
            "name": "古田县",
            "longname": "福建 宁德市 古田县"
        },
        {
            "code": "350923",
            "name": "屏南县",
            "longname": "福建 宁德市 屏南县"
        },
        {
            "code": "350924",
            "name": "寿宁县",
            "longname": "福建 宁德市 寿宁县"
        },
        {
            "code": "350925",
            "name": "周宁县",
            "longname": "福建 宁德市 周宁县"
        },
        {
            "code": "350926",
            "name": "柘荣县",
            "longname": "福建 宁德市 柘荣县"
        },
        {
            "code": "350981",
            "name": "福安市",
            "longname": "福建 宁德市 福安市"
        },
        {
            "code": "350982",
            "name": "福鼎市",
            "longname": "福建 宁德市 福鼎市"
        },
        {
            "code": "36",
            "name": "江西",
            "longname": "江西"
        },
        {
            "code": "3601",
            "name": "南昌市",
            "longname": "江西 南昌市"
        },
        {
            "code": "360101",
            "name": "市辖区",
            "longname": "江西 南昌市 市辖区"
        },
        {
            "code": "360102",
            "name": "东湖区",
            "longname": "江西 南昌市 东湖区"
        },
        {
            "code": "360103",
            "name": "西湖区",
            "longname": "江西 南昌市 西湖区"
        },
        {
            "code": "360104",
            "name": "青云谱区",
            "longname": "江西 南昌市 青云谱区"
        },
        {
            "code": "360105",
            "name": "湾里区",
            "longname": "江西 南昌市 湾里区"
        },
        {
            "code": "360111",
            "name": "青山湖区",
            "longname": "江西 南昌市 青山湖区"
        },
        {
            "code": "360121",
            "name": "南昌县",
            "longname": "江西 南昌市 南昌县"
        },
        {
            "code": "360122",
            "name": "新建县",
            "longname": "江西 南昌市 新建县"
        },
        {
            "code": "360123",
            "name": "安义县",
            "longname": "江西 南昌市 安义县"
        },
        {
            "code": "360124",
            "name": "进贤县",
            "longname": "江西 南昌市 进贤县"
        },
        {
            "code": "3602",
            "name": "景德镇市",
            "longname": "江西 景德镇市"
        },
        {
            "code": "360201",
            "name": "市辖区",
            "longname": "江西 景德镇市 市辖区"
        },
        {
            "code": "360202",
            "name": "昌江区",
            "longname": "江西 景德镇市 昌江区"
        },
        {
            "code": "360203",
            "name": "珠山区",
            "longname": "江西 景德镇市 珠山区"
        },
        {
            "code": "360222",
            "name": "浮梁县",
            "longname": "江西 景德镇市 浮梁县"
        },
        {
            "code": "360281",
            "name": "乐平市",
            "longname": "江西 景德镇市 乐平市"
        },
        {
            "code": "3603",
            "name": "萍乡市",
            "longname": "江西 萍乡市"
        },
        {
            "code": "360301",
            "name": "市辖区",
            "longname": "江西 萍乡市 市辖区"
        },
        {
            "code": "360302",
            "name": "安源区",
            "longname": "江西 萍乡市 安源区"
        },
        {
            "code": "360313",
            "name": "湘东区",
            "longname": "江西 萍乡市 湘东区"
        },
        {
            "code": "360321",
            "name": "莲花县",
            "longname": "江西 萍乡市 莲花县"
        },
        {
            "code": "360322",
            "name": "上栗县",
            "longname": "江西 萍乡市 上栗县"
        },
        {
            "code": "360323",
            "name": "芦溪县",
            "longname": "江西 萍乡市 芦溪县"
        },
        {
            "code": "3604",
            "name": "九江市",
            "longname": "江西 九江市"
        },
        {
            "code": "360401",
            "name": "市辖区",
            "longname": "江西 九江市 市辖区"
        },
        {
            "code": "360402",
            "name": "庐山区",
            "longname": "江西 九江市 庐山区"
        },
        {
            "code": "360403",
            "name": "浔阳区",
            "longname": "江西 九江市 浔阳区"
        },
        {
            "code": "360421",
            "name": "九江县",
            "longname": "江西 九江市 九江县"
        },
        {
            "code": "360423",
            "name": "武宁县",
            "longname": "江西 九江市 武宁县"
        },
        {
            "code": "360424",
            "name": "修水县",
            "longname": "江西 九江市 修水县"
        },
        {
            "code": "360425",
            "name": "永修县",
            "longname": "江西 九江市 永修县"
        },
        {
            "code": "360426",
            "name": "德安县",
            "longname": "江西 九江市 德安县"
        },
        {
            "code": "360427",
            "name": "星子县",
            "longname": "江西 九江市 星子县"
        },
        {
            "code": "360428",
            "name": "都昌县",
            "longname": "江西 九江市 都昌县"
        },
        {
            "code": "360429",
            "name": "湖口县",
            "longname": "江西 九江市 湖口县"
        },
        {
            "code": "360430",
            "name": "彭泽县",
            "longname": "江西 九江市 彭泽县"
        },
        {
            "code": "360481",
            "name": "瑞昌市",
            "longname": "江西 九江市 瑞昌市"
        },
        {
            "code": "360482",
            "name": "共青城市",
            "longname": "江西 九江市 共青城市"
        },
        {
            "code": "3605",
            "name": "新余市",
            "longname": "江西 新余市"
        },
        {
            "code": "360501",
            "name": "市辖区",
            "longname": "江西 新余市 市辖区"
        },
        {
            "code": "360502",
            "name": "渝水区",
            "longname": "江西 新余市 渝水区"
        },
        {
            "code": "360521",
            "name": "分宜县",
            "longname": "江西 新余市 分宜县"
        },
        {
            "code": "3606",
            "name": "鹰潭市",
            "longname": "江西 鹰潭市"
        },
        {
            "code": "360601",
            "name": "市辖区",
            "longname": "江西 鹰潭市 市辖区"
        },
        {
            "code": "360602",
            "name": "月湖区",
            "longname": "江西 鹰潭市 月湖区"
        },
        {
            "code": "360622",
            "name": "余江县",
            "longname": "江西 鹰潭市 余江县"
        },
        {
            "code": "360681",
            "name": "贵溪市",
            "longname": "江西 鹰潭市 贵溪市"
        },
        {
            "code": "3607",
            "name": "赣州市",
            "longname": "江西 赣州市"
        },
        {
            "code": "360701",
            "name": "市辖区",
            "longname": "江西 赣州市 市辖区"
        },
        {
            "code": "360702",
            "name": "章贡区",
            "longname": "江西 赣州市 章贡区"
        },
        {
            "code": "360721",
            "name": "赣县",
            "longname": "江西 赣州市 赣县"
        },
        {
            "code": "360722",
            "name": "信丰县",
            "longname": "江西 赣州市 信丰县"
        },
        {
            "code": "360723",
            "name": "大余县",
            "longname": "江西 赣州市 大余县"
        },
        {
            "code": "360724",
            "name": "上犹县",
            "longname": "江西 赣州市 上犹县"
        },
        {
            "code": "360725",
            "name": "崇义县",
            "longname": "江西 赣州市 崇义县"
        },
        {
            "code": "360726",
            "name": "安远县",
            "longname": "江西 赣州市 安远县"
        },
        {
            "code": "360727",
            "name": "龙南县",
            "longname": "江西 赣州市 龙南县"
        },
        {
            "code": "360728",
            "name": "定南县",
            "longname": "江西 赣州市 定南县"
        },
        {
            "code": "360729",
            "name": "全南县",
            "longname": "江西 赣州市 全南县"
        },
        {
            "code": "360730",
            "name": "宁都县",
            "longname": "江西 赣州市 宁都县"
        },
        {
            "code": "360731",
            "name": "于都县",
            "longname": "江西 赣州市 于都县"
        },
        {
            "code": "360732",
            "name": "兴国县",
            "longname": "江西 赣州市 兴国县"
        },
        {
            "code": "360733",
            "name": "会昌县",
            "longname": "江西 赣州市 会昌县"
        },
        {
            "code": "360734",
            "name": "寻乌县",
            "longname": "江西 赣州市 寻乌县"
        },
        {
            "code": "360735",
            "name": "石城县",
            "longname": "江西 赣州市 石城县"
        },
        {
            "code": "360781",
            "name": "瑞金市",
            "longname": "江西 赣州市 瑞金市"
        },
        {
            "code": "360782",
            "name": "南康市",
            "longname": "江西 赣州市 南康市"
        },
        {
            "code": "3608",
            "name": "吉安市",
            "longname": "江西 吉安市"
        },
        {
            "code": "360801",
            "name": "市辖区",
            "longname": "江西 吉安市 市辖区"
        },
        {
            "code": "360802",
            "name": "吉州区",
            "longname": "江西 吉安市 吉州区"
        },
        {
            "code": "360803",
            "name": "青原区",
            "longname": "江西 吉安市 青原区"
        },
        {
            "code": "360821",
            "name": "吉安县",
            "longname": "江西 吉安市 吉安县"
        },
        {
            "code": "360822",
            "name": "吉水县",
            "longname": "江西 吉安市 吉水县"
        },
        {
            "code": "360823",
            "name": "峡江县",
            "longname": "江西 吉安市 峡江县"
        },
        {
            "code": "360824",
            "name": "新干县",
            "longname": "江西 吉安市 新干县"
        },
        {
            "code": "360825",
            "name": "永丰县",
            "longname": "江西 吉安市 永丰县"
        },
        {
            "code": "360826",
            "name": "泰和县",
            "longname": "江西 吉安市 泰和县"
        },
        {
            "code": "360827",
            "name": "遂川县",
            "longname": "江西 吉安市 遂川县"
        },
        {
            "code": "360828",
            "name": "万安县",
            "longname": "江西 吉安市 万安县"
        },
        {
            "code": "360829",
            "name": "安福县",
            "longname": "江西 吉安市 安福县"
        },
        {
            "code": "360830",
            "name": "永新县",
            "longname": "江西 吉安市 永新县"
        },
        {
            "code": "360881",
            "name": "井冈山市",
            "longname": "江西 吉安市 井冈山市"
        },
        {
            "code": "3609",
            "name": "宜春市",
            "longname": "江西 宜春市"
        },
        {
            "code": "360901",
            "name": "市辖区",
            "longname": "江西 宜春市 市辖区"
        },
        {
            "code": "360902",
            "name": "袁州区",
            "longname": "江西 宜春市 袁州区"
        },
        {
            "code": "360921",
            "name": "奉新县",
            "longname": "江西 宜春市 奉新县"
        },
        {
            "code": "360922",
            "name": "万载县",
            "longname": "江西 宜春市 万载县"
        },
        {
            "code": "360923",
            "name": "上高县",
            "longname": "江西 宜春市 上高县"
        },
        {
            "code": "360924",
            "name": "宜丰县",
            "longname": "江西 宜春市 宜丰县"
        },
        {
            "code": "360925",
            "name": "靖安县",
            "longname": "江西 宜春市 靖安县"
        },
        {
            "code": "360926",
            "name": "铜鼓县",
            "longname": "江西 宜春市 铜鼓县"
        },
        {
            "code": "360981",
            "name": "丰城市",
            "longname": "江西 宜春市 丰城市"
        },
        {
            "code": "360982",
            "name": "樟树市",
            "longname": "江西 宜春市 樟树市"
        },
        {
            "code": "360983",
            "name": "高安市",
            "longname": "江西 宜春市 高安市"
        },
        {
            "code": "3610",
            "name": "抚州市",
            "longname": "江西 抚州市"
        },
        {
            "code": "361001",
            "name": "市辖区",
            "longname": "江西 抚州市 市辖区"
        },
        {
            "code": "361002",
            "name": "临川区",
            "longname": "江西 抚州市 临川区"
        },
        {
            "code": "361021",
            "name": "南城县",
            "longname": "江西 抚州市 南城县"
        },
        {
            "code": "361022",
            "name": "黎川县",
            "longname": "江西 抚州市 黎川县"
        },
        {
            "code": "361023",
            "name": "南丰县",
            "longname": "江西 抚州市 南丰县"
        },
        {
            "code": "361024",
            "name": "崇仁县",
            "longname": "江西 抚州市 崇仁县"
        },
        {
            "code": "361025",
            "name": "乐安县",
            "longname": "江西 抚州市 乐安县"
        },
        {
            "code": "361026",
            "name": "宜黄县",
            "longname": "江西 抚州市 宜黄县"
        },
        {
            "code": "361027",
            "name": "金溪县",
            "longname": "江西 抚州市 金溪县"
        },
        {
            "code": "361028",
            "name": "资溪县",
            "longname": "江西 抚州市 资溪县"
        },
        {
            "code": "361029",
            "name": "东乡县",
            "longname": "江西 抚州市 东乡县"
        },
        {
            "code": "361030",
            "name": "广昌县",
            "longname": "江西 抚州市 广昌县"
        },
        {
            "code": "3611",
            "name": "上饶市",
            "longname": "江西 上饶市"
        },
        {
            "code": "361101",
            "name": "市辖区",
            "longname": "江西 上饶市 市辖区"
        },
        {
            "code": "361102",
            "name": "信州区",
            "longname": "江西 上饶市 信州区"
        },
        {
            "code": "361121",
            "name": "上饶县",
            "longname": "江西 上饶市 上饶县"
        },
        {
            "code": "361122",
            "name": "广丰县",
            "longname": "江西 上饶市 广丰县"
        },
        {
            "code": "361123",
            "name": "玉山县",
            "longname": "江西 上饶市 玉山县"
        },
        {
            "code": "361124",
            "name": "铅山县",
            "longname": "江西 上饶市 铅山县"
        },
        {
            "code": "361125",
            "name": "横峰县",
            "longname": "江西 上饶市 横峰县"
        },
        {
            "code": "361126",
            "name": "弋阳县",
            "longname": "江西 上饶市 弋阳县"
        },
        {
            "code": "361127",
            "name": "余干县",
            "longname": "江西 上饶市 余干县"
        },
        {
            "code": "361128",
            "name": "鄱阳县",
            "longname": "江西 上饶市 鄱阳县"
        },
        {
            "code": "361129",
            "name": "万年县",
            "longname": "江西 上饶市 万年县"
        },
        {
            "code": "361130",
            "name": "婺源县",
            "longname": "江西 上饶市 婺源县"
        },
        {
            "code": "361181",
            "name": "德兴市",
            "longname": "江西 上饶市 德兴市"
        },
        {
            "code": "37",
            "name": "山东",
            "longname": "山东"
        },
        {
            "code": "3701",
            "name": "济南市",
            "longname": "山东 济南市"
        },
        {
            "code": "370101",
            "name": "市辖区",
            "longname": "山东 济南市 市辖区"
        },
        {
            "code": "370102",
            "name": "历下区",
            "longname": "山东 济南市 历下区"
        },
        {
            "code": "370103",
            "name": "市中区",
            "longname": "山东 济南市 市中区"
        },
        {
            "code": "370104",
            "name": "槐荫区",
            "longname": "山东 济南市 槐荫区"
        },
        {
            "code": "370105",
            "name": "天桥区",
            "longname": "山东 济南市 天桥区"
        },
        {
            "code": "370112",
            "name": "历城区",
            "longname": "山东 济南市 历城区"
        },
        {
            "code": "370113",
            "name": "长清区",
            "longname": "山东 济南市 长清区"
        },
        {
            "code": "370124",
            "name": "平阴县",
            "longname": "山东 济南市 平阴县"
        },
        {
            "code": "370125",
            "name": "济阳县",
            "longname": "山东 济南市 济阳县"
        },
        {
            "code": "370126",
            "name": "商河县",
            "longname": "山东 济南市 商河县"
        },
        {
            "code": "370181",
            "name": "章丘市",
            "longname": "山东 济南市 章丘市"
        },
        {
            "code": "3702",
            "name": "青岛市",
            "longname": "山东 青岛市"
        },
        {
            "code": "370201",
            "name": "市辖区",
            "longname": "山东 青岛市 市辖区"
        },
        {
            "code": "370202",
            "name": "市南区",
            "longname": "山东 青岛市 市南区"
        },
        {
            "code": "370203",
            "name": "市北区",
            "longname": "山东 青岛市 市北区"
        },
        {
            "code": "370205",
            "name": "四方区",
            "longname": "山东 青岛市 四方区"
        },
        {
            "code": "370211",
            "name": "黄岛区",
            "longname": "山东 青岛市 黄岛区"
        },
        {
            "code": "370212",
            "name": "崂山区",
            "longname": "山东 青岛市 崂山区"
        },
        {
            "code": "370213",
            "name": "李沧区",
            "longname": "山东 青岛市 李沧区"
        },
        {
            "code": "370214",
            "name": "城阳区",
            "longname": "山东 青岛市 城阳区"
        },
        {
            "code": "370281",
            "name": "胶州市",
            "longname": "山东 青岛市 胶州市"
        },
        {
            "code": "370282",
            "name": "即墨市",
            "longname": "山东 青岛市 即墨市"
        },
        {
            "code": "370283",
            "name": "平度市",
            "longname": "山东 青岛市 平度市"
        },
        {
            "code": "370284",
            "name": "胶南市",
            "longname": "山东 青岛市 胶南市"
        },
        {
            "code": "370285",
            "name": "莱西市",
            "longname": "山东 青岛市 莱西市"
        },
        {
            "code": "3703",
            "name": "淄博市",
            "longname": "山东 淄博市"
        },
        {
            "code": "370301",
            "name": "市辖区",
            "longname": "山东 淄博市 市辖区"
        },
        {
            "code": "370302",
            "name": "淄川区",
            "longname": "山东 淄博市 淄川区"
        },
        {
            "code": "370303",
            "name": "张店区",
            "longname": "山东 淄博市 张店区"
        },
        {
            "code": "370304",
            "name": "博山区",
            "longname": "山东 淄博市 博山区"
        },
        {
            "code": "370305",
            "name": "临淄区",
            "longname": "山东 淄博市 临淄区"
        },
        {
            "code": "370306",
            "name": "周村区",
            "longname": "山东 淄博市 周村区"
        },
        {
            "code": "370321",
            "name": "桓台县",
            "longname": "山东 淄博市 桓台县"
        },
        {
            "code": "370322",
            "name": "高青县",
            "longname": "山东 淄博市 高青县"
        },
        {
            "code": "370323",
            "name": "沂源县",
            "longname": "山东 淄博市 沂源县"
        },
        {
            "code": "3704",
            "name": "枣庄市",
            "longname": "山东 枣庄市"
        },
        {
            "code": "370401",
            "name": "市辖区",
            "longname": "山东 枣庄市 市辖区"
        },
        {
            "code": "370402",
            "name": "市中区",
            "longname": "山东 枣庄市 市中区"
        },
        {
            "code": "370403",
            "name": "薛城区",
            "longname": "山东 枣庄市 薛城区"
        },
        {
            "code": "370404",
            "name": "峄城区",
            "longname": "山东 枣庄市 峄城区"
        },
        {
            "code": "370405",
            "name": "台儿庄区",
            "longname": "山东 枣庄市 台儿庄区"
        },
        {
            "code": "370406",
            "name": "山亭区",
            "longname": "山东 枣庄市 山亭区"
        },
        {
            "code": "370481",
            "name": "滕州市",
            "longname": "山东 枣庄市 滕州市"
        },
        {
            "code": "3705",
            "name": "东营市",
            "longname": "山东 东营市"
        },
        {
            "code": "370501",
            "name": "市辖区",
            "longname": "山东 东营市 市辖区"
        },
        {
            "code": "370502",
            "name": "东营区",
            "longname": "山东 东营市 东营区"
        },
        {
            "code": "370503",
            "name": "河口区",
            "longname": "山东 东营市 河口区"
        },
        {
            "code": "370521",
            "name": "垦利县",
            "longname": "山东 东营市 垦利县"
        },
        {
            "code": "370522",
            "name": "利津县",
            "longname": "山东 东营市 利津县"
        },
        {
            "code": "370523",
            "name": "广饶县",
            "longname": "山东 东营市 广饶县"
        },
        {
            "code": "3706",
            "name": "烟台市",
            "longname": "山东 烟台市"
        },
        {
            "code": "370601",
            "name": "市辖区",
            "longname": "山东 烟台市 市辖区"
        },
        {
            "code": "370602",
            "name": "芝罘区",
            "longname": "山东 烟台市 芝罘区"
        },
        {
            "code": "370611",
            "name": "福山区",
            "longname": "山东 烟台市 福山区"
        },
        {
            "code": "370612",
            "name": "牟平区",
            "longname": "山东 烟台市 牟平区"
        },
        {
            "code": "370613",
            "name": "莱山区",
            "longname": "山东 烟台市 莱山区"
        },
        {
            "code": "370634",
            "name": "长岛县",
            "longname": "山东 烟台市 长岛县"
        },
        {
            "code": "370681",
            "name": "龙口市",
            "longname": "山东 烟台市 龙口市"
        },
        {
            "code": "370682",
            "name": "莱阳市",
            "longname": "山东 烟台市 莱阳市"
        },
        {
            "code": "370683",
            "name": "莱州市",
            "longname": "山东 烟台市 莱州市"
        },
        {
            "code": "370684",
            "name": "蓬莱市",
            "longname": "山东 烟台市 蓬莱市"
        },
        {
            "code": "370685",
            "name": "招远市",
            "longname": "山东 烟台市 招远市"
        },
        {
            "code": "370686",
            "name": "栖霞市",
            "longname": "山东 烟台市 栖霞市"
        },
        {
            "code": "370687",
            "name": "海阳市",
            "longname": "山东 烟台市 海阳市"
        },
        {
            "code": "3707",
            "name": "潍坊市",
            "longname": "山东 潍坊市"
        },
        {
            "code": "370701",
            "name": "市辖区",
            "longname": "山东 潍坊市 市辖区"
        },
        {
            "code": "370702",
            "name": "潍城区",
            "longname": "山东 潍坊市 潍城区"
        },
        {
            "code": "370703",
            "name": "寒亭区",
            "longname": "山东 潍坊市 寒亭区"
        },
        {
            "code": "370704",
            "name": "坊子区",
            "longname": "山东 潍坊市 坊子区"
        },
        {
            "code": "370705",
            "name": "奎文区",
            "longname": "山东 潍坊市 奎文区"
        },
        {
            "code": "370724",
            "name": "临朐县",
            "longname": "山东 潍坊市 临朐县"
        },
        {
            "code": "370725",
            "name": "昌乐县",
            "longname": "山东 潍坊市 昌乐县"
        },
        {
            "code": "370781",
            "name": "青州市",
            "longname": "山东 潍坊市 青州市"
        },
        {
            "code": "370782",
            "name": "诸城市",
            "longname": "山东 潍坊市 诸城市"
        },
        {
            "code": "370783",
            "name": "寿光市",
            "longname": "山东 潍坊市 寿光市"
        },
        {
            "code": "370784",
            "name": "安丘市",
            "longname": "山东 潍坊市 安丘市"
        },
        {
            "code": "370785",
            "name": "高密市",
            "longname": "山东 潍坊市 高密市"
        },
        {
            "code": "370786",
            "name": "昌邑市",
            "longname": "山东 潍坊市 昌邑市"
        },
        {
            "code": "370787",
            "name": "高新技术产业开发区",
            "longname": "山东 潍坊市 高新技术产业开发区"
        },
        {
            "code": "370788",
            "name": "滨海经济技术开发区",
            "longname": "山东 潍坊市 滨海经济技术开发区"
        },
        {
            "code": "370789",
            "name": "经济开发区",
            "longname": "山东 潍坊市 经济开发区"
        },
        {
            "code": "370790",
            "name": "峡山生态经济发展区",
            "longname": "山东 潍坊市 峡山生态经济发展区"
        },
        {
            "code": "3708",
            "name": "济宁市",
            "longname": "山东 济宁市"
        },
        {
            "code": "370801",
            "name": "市辖区",
            "longname": "山东 济宁市 市辖区"
        },
        {
            "code": "370802",
            "name": "市中区",
            "longname": "山东 济宁市 市中区"
        },
        {
            "code": "370803",
            "name": "高新技术产业开发区",
            "longname": "山东 济宁市 高新技术产业开发区"
        },
        {
            "code": "370811",
            "name": "任城区",
            "longname": "山东 济宁市 任城区"
        },
        {
            "code": "370826",
            "name": "微山县",
            "longname": "山东 济宁市 微山县"
        },
        {
            "code": "370827",
            "name": "鱼台县",
            "longname": "山东 济宁市 鱼台县"
        },
        {
            "code": "370828",
            "name": "金乡县",
            "longname": "山东 济宁市 金乡县"
        },
        {
            "code": "370829",
            "name": "嘉祥县",
            "longname": "山东 济宁市 嘉祥县"
        },
        {
            "code": "370830",
            "name": "汶上县",
            "longname": "山东 济宁市 汶上县"
        },
        {
            "code": "370831",
            "name": "泗水县",
            "longname": "山东 济宁市 泗水县"
        },
        {
            "code": "370832",
            "name": "梁山县",
            "longname": "山东 济宁市 梁山县"
        },
        {
            "code": "370881",
            "name": "曲阜市",
            "longname": "山东 济宁市 曲阜市"
        },
        {
            "code": "370882",
            "name": "兖州市",
            "longname": "山东 济宁市 兖州市"
        },
        {
            "code": "370883",
            "name": "邹城市",
            "longname": "山东 济宁市 邹城市"
        },
        {
            "code": "370884",
            "name": "太白湖区",
            "longname": "山东 济宁市 太白湖区"
        },
        {
            "code": "3709",
            "name": "泰安市",
            "longname": "山东 泰安市"
        },
        {
            "code": "370901",
            "name": "市辖区",
            "longname": "山东 泰安市 市辖区"
        },
        {
            "code": "370902",
            "name": "泰山区",
            "longname": "山东 泰安市 泰山区"
        },
        {
            "code": "370911",
            "name": "岱岳区",
            "longname": "山东 泰安市 岱岳区"
        },
        {
            "code": "370921",
            "name": "宁阳县",
            "longname": "山东 泰安市 宁阳县"
        },
        {
            "code": "370923",
            "name": "东平县",
            "longname": "山东 泰安市 东平县"
        },
        {
            "code": "370982",
            "name": "新泰市",
            "longname": "山东 泰安市 新泰市"
        },
        {
            "code": "370983",
            "name": "肥城市",
            "longname": "山东 泰安市 肥城市"
        },
        {
            "code": "3710",
            "name": "威海市",
            "longname": "山东 威海市"
        },
        {
            "code": "371001",
            "name": "市辖区",
            "longname": "山东 威海市 市辖区"
        },
        {
            "code": "371002",
            "name": "环翠区",
            "longname": "山东 威海市 环翠区"
        },
        {
            "code": "371081",
            "name": "文登市",
            "longname": "山东 威海市 文登市"
        },
        {
            "code": "371082",
            "name": "荣成市",
            "longname": "山东 威海市 荣成市"
        },
        {
            "code": "371083",
            "name": "乳山市",
            "longname": "山东 威海市 乳山市"
        },
        {
            "code": "3711",
            "name": "日照市",
            "longname": "山东 日照市"
        },
        {
            "code": "371101",
            "name": "市辖区",
            "longname": "山东 日照市 市辖区"
        },
        {
            "code": "371102",
            "name": "东港区",
            "longname": "山东 日照市 东港区"
        },
        {
            "code": "371103",
            "name": "岚山区",
            "longname": "山东 日照市 岚山区"
        },
        {
            "code": "371121",
            "name": "五莲县",
            "longname": "山东 日照市 五莲县"
        },
        {
            "code": "371122",
            "name": "莒县",
            "longname": "山东 日照市 莒县"
        },
        {
            "code": "3712",
            "name": "莱芜市",
            "longname": "山东 莱芜市"
        },
        {
            "code": "371201",
            "name": "市辖区",
            "longname": "山东 莱芜市 市辖区"
        },
        {
            "code": "371202",
            "name": "莱城区",
            "longname": "山东 莱芜市 莱城区"
        },
        {
            "code": "371203",
            "name": "钢城区",
            "longname": "山东 莱芜市 钢城区"
        },
        {
            "code": "3713",
            "name": "临沂市",
            "longname": "山东 临沂市"
        },
        {
            "code": "371301",
            "name": "市辖区",
            "longname": "山东 临沂市 市辖区"
        },
        {
            "code": "371302",
            "name": "兰山区",
            "longname": "山东 临沂市 兰山区"
        },
        {
            "code": "371311",
            "name": "罗庄区",
            "longname": "山东 临沂市 罗庄区"
        },
        {
            "code": "371312",
            "name": "河东区",
            "longname": "山东 临沂市 河东区"
        },
        {
            "code": "371321",
            "name": "沂南县",
            "longname": "山东 临沂市 沂南县"
        },
        {
            "code": "371322",
            "name": "郯城县",
            "longname": "山东 临沂市 郯城县"
        },
        {
            "code": "371323",
            "name": "沂水县",
            "longname": "山东 临沂市 沂水县"
        },
        {
            "code": "371324",
            "name": "苍山县",
            "longname": "山东 临沂市 苍山县"
        },
        {
            "code": "371325",
            "name": "费县",
            "longname": "山东 临沂市 费县"
        },
        {
            "code": "371326",
            "name": "平邑县",
            "longname": "山东 临沂市 平邑县"
        },
        {
            "code": "371327",
            "name": "莒南县",
            "longname": "山东 临沂市 莒南县"
        },
        {
            "code": "371328",
            "name": "蒙阴县",
            "longname": "山东 临沂市 蒙阴县"
        },
        {
            "code": "371329",
            "name": "临沭县",
            "longname": "山东 临沂市 临沭县"
        },
        {
            "code": "3714",
            "name": "德州市",
            "longname": "山东 德州市"
        },
        {
            "code": "371401",
            "name": "市辖区",
            "longname": "山东 德州市 市辖区"
        },
        {
            "code": "371402",
            "name": "德城区",
            "longname": "山东 德州市 德城区"
        },
        {
            "code": "371421",
            "name": "陵县",
            "longname": "山东 德州市 陵县"
        },
        {
            "code": "371422",
            "name": "宁津县",
            "longname": "山东 德州市 宁津县"
        },
        {
            "code": "371423",
            "name": "庆云县",
            "longname": "山东 德州市 庆云县"
        },
        {
            "code": "371424",
            "name": "临邑县",
            "longname": "山东 德州市 临邑县"
        },
        {
            "code": "371425",
            "name": "齐河县",
            "longname": "山东 德州市 齐河县"
        },
        {
            "code": "371426",
            "name": "平原县",
            "longname": "山东 德州市 平原县"
        },
        {
            "code": "371427",
            "name": "夏津县",
            "longname": "山东 德州市 夏津县"
        },
        {
            "code": "371428",
            "name": "武城县",
            "longname": "山东 德州市 武城县"
        },
        {
            "code": "371481",
            "name": "乐陵市",
            "longname": "山东 德州市 乐陵市"
        },
        {
            "code": "371482",
            "name": "禹城市",
            "longname": "山东 德州市 禹城市"
        },
        {
            "code": "3715",
            "name": "聊城市",
            "longname": "山东 聊城市"
        },
        {
            "code": "371501",
            "name": "市辖区",
            "longname": "山东 聊城市 市辖区"
        },
        {
            "code": "371502",
            "name": "东昌府区",
            "longname": "山东 聊城市 东昌府区"
        },
        {
            "code": "371521",
            "name": "阳谷县",
            "longname": "山东 聊城市 阳谷县"
        },
        {
            "code": "371522",
            "name": "莘县",
            "longname": "山东 聊城市 莘县"
        },
        {
            "code": "371523",
            "name": "茌平县",
            "longname": "山东 聊城市 茌平县"
        },
        {
            "code": "371524",
            "name": "东阿县",
            "longname": "山东 聊城市 东阿县"
        },
        {
            "code": "371525",
            "name": "冠县",
            "longname": "山东 聊城市 冠县"
        },
        {
            "code": "371526",
            "name": "高唐县",
            "longname": "山东 聊城市 高唐县"
        },
        {
            "code": "371581",
            "name": "临清市",
            "longname": "山东 聊城市 临清市"
        },
        {
            "code": "3716",
            "name": "滨州市",
            "longname": "山东 滨州市"
        },
        {
            "code": "371601",
            "name": "市辖区",
            "longname": "山东 滨州市 市辖区"
        },
        {
            "code": "371602",
            "name": "滨城区",
            "longname": "山东 滨州市 滨城区"
        },
        {
            "code": "371621",
            "name": "惠民县",
            "longname": "山东 滨州市 惠民县"
        },
        {
            "code": "371622",
            "name": "阳信县",
            "longname": "山东 滨州市 阳信县"
        },
        {
            "code": "371623",
            "name": "无棣县",
            "longname": "山东 滨州市 无棣县"
        },
        {
            "code": "371624",
            "name": "沾化区",
            "longname": "山东 滨州市 沾化区"
        },
        {
            "code": "371625",
            "name": "博兴县",
            "longname": "山东 滨州市 博兴县"
        },
        {
            "code": "371626",
            "name": "邹平县",
            "longname": "山东 滨州市 邹平县"
        },
        {
            "code": "371631",
            "name": "经济开发区",
            "longname": "山东 滨州市 经济开发区"
        },
        {
            "code": "371632",
            "name": "高新技术产业开发区",
            "longname": "山东 滨州市 高新技术产业开发区"
        },
        {
            "code": "371633",
            "name": "北海经济开发区",
            "longname": "山东 滨州市 北海经济开发区"
        },
        {
            "code": "3717",
            "name": "菏泽市",
            "longname": "山东 菏泽市"
        },
        {
            "code": "371701",
            "name": "市辖区",
            "longname": "山东 菏泽市 市辖区"
        },
        {
            "code": "371702",
            "name": "牡丹区",
            "longname": "山东 菏泽市 牡丹区"
        },
        {
            "code": "371721",
            "name": "曹县",
            "longname": "山东 菏泽市 曹县"
        },
        {
            "code": "371722",
            "name": "单县",
            "longname": "山东 菏泽市 单县"
        },
        {
            "code": "371723",
            "name": "成武县",
            "longname": "山东 菏泽市 成武县"
        },
        {
            "code": "371724",
            "name": "巨野县",
            "longname": "山东 菏泽市 巨野县"
        },
        {
            "code": "371725",
            "name": "郓城县",
            "longname": "山东 菏泽市 郓城县"
        },
        {
            "code": "371726",
            "name": "鄄城县",
            "longname": "山东 菏泽市 鄄城县"
        },
        {
            "code": "371727",
            "name": "定陶县",
            "longname": "山东 菏泽市 定陶县"
        },
        {
            "code": "371728",
            "name": "东明县",
            "longname": "山东 菏泽市 东明县"
        },
        {
            "code": "41",
            "name": "河南",
            "longname": "河南"
        },
        {
            "code": "4101",
            "name": "郑州市",
            "longname": "河南 郑州市"
        },
        {
            "code": "410101",
            "name": "市辖区",
            "longname": "河南 郑州市 市辖区"
        },
        {
            "code": "410102",
            "name": "中原区",
            "longname": "河南 郑州市 中原区"
        },
        {
            "code": "410103",
            "name": "二七区",
            "longname": "河南 郑州市 二七区"
        },
        {
            "code": "410104",
            "name": "管城回族区",
            "longname": "河南 郑州市 管城回族区"
        },
        {
            "code": "410105",
            "name": "金水区",
            "longname": "河南 郑州市 金水区"
        },
        {
            "code": "410106",
            "name": "上街区",
            "longname": "河南 郑州市 上街区"
        },
        {
            "code": "410108",
            "name": "惠济区",
            "longname": "河南 郑州市 惠济区"
        },
        {
            "code": "410122",
            "name": "中牟县",
            "longname": "河南 郑州市 中牟县"
        },
        {
            "code": "410181",
            "name": "巩义市",
            "longname": "河南 郑州市 巩义市"
        },
        {
            "code": "410182",
            "name": "荥阳市",
            "longname": "河南 郑州市 荥阳市"
        },
        {
            "code": "410183",
            "name": "新密市",
            "longname": "河南 郑州市 新密市"
        },
        {
            "code": "410184",
            "name": "新郑市",
            "longname": "河南 郑州市 新郑市"
        },
        {
            "code": "410185",
            "name": "登封市",
            "longname": "河南 郑州市 登封市"
        },
        {
            "code": "4102",
            "name": "开封市",
            "longname": "河南 开封市"
        },
        {
            "code": "410201",
            "name": "市辖区",
            "longname": "河南 开封市 市辖区"
        },
        {
            "code": "410202",
            "name": "龙亭区",
            "longname": "河南 开封市 龙亭区"
        },
        {
            "code": "410203",
            "name": "顺河回族区",
            "longname": "河南 开封市 顺河回族区"
        },
        {
            "code": "410204",
            "name": "鼓楼区",
            "longname": "河南 开封市 鼓楼区"
        },
        {
            "code": "410205",
            "name": "禹王台区",
            "longname": "河南 开封市 禹王台区"
        },
        {
            "code": "410211",
            "name": "金明区",
            "longname": "河南 开封市 金明区"
        },
        {
            "code": "410221",
            "name": "杞县",
            "longname": "河南 开封市 杞县"
        },
        {
            "code": "410222",
            "name": "通许县",
            "longname": "河南 开封市 通许县"
        },
        {
            "code": "410223",
            "name": "尉氏县",
            "longname": "河南 开封市 尉氏县"
        },
        {
            "code": "410224",
            "name": "开封县",
            "longname": "河南 开封市 开封县"
        },
        {
            "code": "410225",
            "name": "兰考县",
            "longname": "河南 开封市 兰考县"
        },
        {
            "code": "4103",
            "name": "洛阳市",
            "longname": "河南 洛阳市"
        },
        {
            "code": "410301",
            "name": "市辖区",
            "longname": "河南 洛阳市 市辖区"
        },
        {
            "code": "410302",
            "name": "老城区",
            "longname": "河南 洛阳市 老城区"
        },
        {
            "code": "410303",
            "name": "西工区",
            "longname": "河南 洛阳市 西工区"
        },
        {
            "code": "410304",
            "name": "瀍河回族区",
            "longname": "河南 洛阳市 瀍河回族区"
        },
        {
            "code": "410305",
            "name": "涧西区",
            "longname": "河南 洛阳市 涧西区"
        },
        {
            "code": "410306",
            "name": "吉利区",
            "longname": "河南 洛阳市 吉利区"
        },
        {
            "code": "410311",
            "name": "洛龙区",
            "longname": "河南 洛阳市 洛龙区"
        },
        {
            "code": "410322",
            "name": "孟津县",
            "longname": "河南 洛阳市 孟津县"
        },
        {
            "code": "410323",
            "name": "新安县",
            "longname": "河南 洛阳市 新安县"
        },
        {
            "code": "410324",
            "name": "栾川县",
            "longname": "河南 洛阳市 栾川县"
        },
        {
            "code": "410325",
            "name": "嵩县",
            "longname": "河南 洛阳市 嵩县"
        },
        {
            "code": "410326",
            "name": "汝阳县",
            "longname": "河南 洛阳市 汝阳县"
        },
        {
            "code": "410327",
            "name": "宜阳县",
            "longname": "河南 洛阳市 宜阳县"
        },
        {
            "code": "410328",
            "name": "洛宁县",
            "longname": "河南 洛阳市 洛宁县"
        },
        {
            "code": "410329",
            "name": "伊川县",
            "longname": "河南 洛阳市 伊川县"
        },
        {
            "code": "410381",
            "name": "偃师市",
            "longname": "河南 洛阳市 偃师市"
        },
        {
            "code": "4104",
            "name": "平顶山市",
            "longname": "河南 平顶山市"
        },
        {
            "code": "410401",
            "name": "市辖区",
            "longname": "河南 平顶山市 市辖区"
        },
        {
            "code": "410402",
            "name": "新华区",
            "longname": "河南 平顶山市 新华区"
        },
        {
            "code": "410403",
            "name": "卫东区",
            "longname": "河南 平顶山市 卫东区"
        },
        {
            "code": "410404",
            "name": "石龙区",
            "longname": "河南 平顶山市 石龙区"
        },
        {
            "code": "410411",
            "name": "湛河区",
            "longname": "河南 平顶山市 湛河区"
        },
        {
            "code": "410421",
            "name": "宝丰县",
            "longname": "河南 平顶山市 宝丰县"
        },
        {
            "code": "410422",
            "name": "叶县",
            "longname": "河南 平顶山市 叶县"
        },
        {
            "code": "410423",
            "name": "鲁山县",
            "longname": "河南 平顶山市 鲁山县"
        },
        {
            "code": "410425",
            "name": "郏县",
            "longname": "河南 平顶山市 郏县"
        },
        {
            "code": "410481",
            "name": "舞钢市",
            "longname": "河南 平顶山市 舞钢市"
        },
        {
            "code": "410482",
            "name": "汝州市",
            "longname": "河南 平顶山市 汝州市"
        },
        {
            "code": "4105",
            "name": "安阳市",
            "longname": "河南 安阳市"
        },
        {
            "code": "410501",
            "name": "市辖区",
            "longname": "河南 安阳市 市辖区"
        },
        {
            "code": "410502",
            "name": "文峰区",
            "longname": "河南 安阳市 文峰区"
        },
        {
            "code": "410503",
            "name": "北关区",
            "longname": "河南 安阳市 北关区"
        },
        {
            "code": "410505",
            "name": "殷都区",
            "longname": "河南 安阳市 殷都区"
        },
        {
            "code": "410506",
            "name": "龙安区",
            "longname": "河南 安阳市 龙安区"
        },
        {
            "code": "410522",
            "name": "安阳县",
            "longname": "河南 安阳市 安阳县"
        },
        {
            "code": "410523",
            "name": "汤阴县",
            "longname": "河南 安阳市 汤阴县"
        },
        {
            "code": "410526",
            "name": "滑县",
            "longname": "河南 安阳市 滑县"
        },
        {
            "code": "410527",
            "name": "内黄县",
            "longname": "河南 安阳市 内黄县"
        },
        {
            "code": "410581",
            "name": "林州市",
            "longname": "河南 安阳市 林州市"
        },
        {
            "code": "4106",
            "name": "鹤壁市",
            "longname": "河南 鹤壁市"
        },
        {
            "code": "410601",
            "name": "市辖区",
            "longname": "河南 鹤壁市 市辖区"
        },
        {
            "code": "410602",
            "name": "鹤山区",
            "longname": "河南 鹤壁市 鹤山区"
        },
        {
            "code": "410603",
            "name": "山城区",
            "longname": "河南 鹤壁市 山城区"
        },
        {
            "code": "410611",
            "name": "淇滨区",
            "longname": "河南 鹤壁市 淇滨区"
        },
        {
            "code": "410621",
            "name": "浚县",
            "longname": "河南 鹤壁市 浚县"
        },
        {
            "code": "410622",
            "name": "淇县",
            "longname": "河南 鹤壁市 淇县"
        },
        {
            "code": "4107",
            "name": "新乡市",
            "longname": "河南 新乡市"
        },
        {
            "code": "410701",
            "name": "市辖区",
            "longname": "河南 新乡市 市辖区"
        },
        {
            "code": "410702",
            "name": "红旗区",
            "longname": "河南 新乡市 红旗区"
        },
        {
            "code": "410703",
            "name": "卫滨区",
            "longname": "河南 新乡市 卫滨区"
        },
        {
            "code": "410704",
            "name": "凤泉区",
            "longname": "河南 新乡市 凤泉区"
        },
        {
            "code": "410711",
            "name": "牧野区",
            "longname": "河南 新乡市 牧野区"
        },
        {
            "code": "410721",
            "name": "新乡县",
            "longname": "河南 新乡市 新乡县"
        },
        {
            "code": "410724",
            "name": "获嘉县",
            "longname": "河南 新乡市 获嘉县"
        },
        {
            "code": "410725",
            "name": "原阳县",
            "longname": "河南 新乡市 原阳县"
        },
        {
            "code": "410726",
            "name": "延津县",
            "longname": "河南 新乡市 延津县"
        },
        {
            "code": "410727",
            "name": "封丘县",
            "longname": "河南 新乡市 封丘县"
        },
        {
            "code": "410728",
            "name": "长垣县",
            "longname": "河南 新乡市 长垣县"
        },
        {
            "code": "410781",
            "name": "卫辉市",
            "longname": "河南 新乡市 卫辉市"
        },
        {
            "code": "410782",
            "name": "辉县市",
            "longname": "河南 新乡市 辉县市"
        },
        {
            "code": "4108",
            "name": "焦作市",
            "longname": "河南 焦作市"
        },
        {
            "code": "410801",
            "name": "市辖区",
            "longname": "河南 焦作市 市辖区"
        },
        {
            "code": "410802",
            "name": "解放区",
            "longname": "河南 焦作市 解放区"
        },
        {
            "code": "410803",
            "name": "中站区",
            "longname": "河南 焦作市 中站区"
        },
        {
            "code": "410804",
            "name": "马村区",
            "longname": "河南 焦作市 马村区"
        },
        {
            "code": "410811",
            "name": "山阳区",
            "longname": "河南 焦作市 山阳区"
        },
        {
            "code": "410821",
            "name": "修武县",
            "longname": "河南 焦作市 修武县"
        },
        {
            "code": "410822",
            "name": "博爱县",
            "longname": "河南 焦作市 博爱县"
        },
        {
            "code": "410823",
            "name": "武陟县",
            "longname": "河南 焦作市 武陟县"
        },
        {
            "code": "410825",
            "name": "温县",
            "longname": "河南 焦作市 温县"
        },
        {
            "code": "410882",
            "name": "沁阳市",
            "longname": "河南 焦作市 沁阳市"
        },
        {
            "code": "410883",
            "name": "孟州市",
            "longname": "河南 焦作市 孟州市"
        },
        {
            "code": "4109",
            "name": "濮阳市",
            "longname": "河南 濮阳市"
        },
        {
            "code": "410901",
            "name": "市辖区",
            "longname": "河南 濮阳市 市辖区"
        },
        {
            "code": "410902",
            "name": "华龙区",
            "longname": "河南 濮阳市 华龙区"
        },
        {
            "code": "410922",
            "name": "清丰县",
            "longname": "河南 濮阳市 清丰县"
        },
        {
            "code": "410923",
            "name": "南乐县",
            "longname": "河南 濮阳市 南乐县"
        },
        {
            "code": "410926",
            "name": "范县",
            "longname": "河南 濮阳市 范县"
        },
        {
            "code": "410927",
            "name": "台前县",
            "longname": "河南 濮阳市 台前县"
        },
        {
            "code": "410928",
            "name": "濮阳县",
            "longname": "河南 濮阳市 濮阳县"
        },
        {
            "code": "4110",
            "name": "许昌市",
            "longname": "河南 许昌市"
        },
        {
            "code": "411001",
            "name": "市辖区",
            "longname": "河南 许昌市 市辖区"
        },
        {
            "code": "411002",
            "name": "魏都区",
            "longname": "河南 许昌市 魏都区"
        },
        {
            "code": "411023",
            "name": "许昌县",
            "longname": "河南 许昌市 许昌县"
        },
        {
            "code": "411024",
            "name": "鄢陵县",
            "longname": "河南 许昌市 鄢陵县"
        },
        {
            "code": "411025",
            "name": "襄城县",
            "longname": "河南 许昌市 襄城县"
        },
        {
            "code": "411081",
            "name": "禹州市",
            "longname": "河南 许昌市 禹州市"
        },
        {
            "code": "411082",
            "name": "长葛市",
            "longname": "河南 许昌市 长葛市"
        },
        {
            "code": "4111",
            "name": "漯河市",
            "longname": "河南 漯河市"
        },
        {
            "code": "411101",
            "name": "市辖区",
            "longname": "河南 漯河市 市辖区"
        },
        {
            "code": "411102",
            "name": "源汇区",
            "longname": "河南 漯河市 源汇区"
        },
        {
            "code": "411103",
            "name": "郾城区",
            "longname": "河南 漯河市 郾城区"
        },
        {
            "code": "411104",
            "name": "召陵区",
            "longname": "河南 漯河市 召陵区"
        },
        {
            "code": "411121",
            "name": "舞阳县",
            "longname": "河南 漯河市 舞阳县"
        },
        {
            "code": "411122",
            "name": "临颍县",
            "longname": "河南 漯河市 临颍县"
        },
        {
            "code": "4112",
            "name": "三门峡市",
            "longname": "河南 三门峡市"
        },
        {
            "code": "411201",
            "name": "市辖区",
            "longname": "河南 三门峡市 市辖区"
        },
        {
            "code": "411202",
            "name": "湖滨区",
            "longname": "河南 三门峡市 湖滨区"
        },
        {
            "code": "411221",
            "name": "渑池县",
            "longname": "河南 三门峡市 渑池县"
        },
        {
            "code": "411222",
            "name": "陕县",
            "longname": "河南 三门峡市 陕县"
        },
        {
            "code": "411224",
            "name": "卢氏县",
            "longname": "河南 三门峡市 卢氏县"
        },
        {
            "code": "411281",
            "name": "义马市",
            "longname": "河南 三门峡市 义马市"
        },
        {
            "code": "411282",
            "name": "灵宝市",
            "longname": "河南 三门峡市 灵宝市"
        },
        {
            "code": "4113",
            "name": "南阳市",
            "longname": "河南 南阳市"
        },
        {
            "code": "411301",
            "name": "市辖区",
            "longname": "河南 南阳市 市辖区"
        },
        {
            "code": "411302",
            "name": "宛城区",
            "longname": "河南 南阳市 宛城区"
        },
        {
            "code": "411303",
            "name": "卧龙区",
            "longname": "河南 南阳市 卧龙区"
        },
        {
            "code": "411321",
            "name": "南召县",
            "longname": "河南 南阳市 南召县"
        },
        {
            "code": "411322",
            "name": "方城县",
            "longname": "河南 南阳市 方城县"
        },
        {
            "code": "411323",
            "name": "西峡县",
            "longname": "河南 南阳市 西峡县"
        },
        {
            "code": "411324",
            "name": "镇平县",
            "longname": "河南 南阳市 镇平县"
        },
        {
            "code": "411325",
            "name": "内乡县",
            "longname": "河南 南阳市 内乡县"
        },
        {
            "code": "411326",
            "name": "淅川县",
            "longname": "河南 南阳市 淅川县"
        },
        {
            "code": "411327",
            "name": "社旗县",
            "longname": "河南 南阳市 社旗县"
        },
        {
            "code": "411328",
            "name": "唐河县",
            "longname": "河南 南阳市 唐河县"
        },
        {
            "code": "411329",
            "name": "新野县",
            "longname": "河南 南阳市 新野县"
        },
        {
            "code": "411330",
            "name": "桐柏县",
            "longname": "河南 南阳市 桐柏县"
        },
        {
            "code": "411381",
            "name": "邓州市",
            "longname": "河南 南阳市 邓州市"
        },
        {
            "code": "4114",
            "name": "商丘市",
            "longname": "河南 商丘市"
        },
        {
            "code": "411401",
            "name": "市辖区",
            "longname": "河南 商丘市 市辖区"
        },
        {
            "code": "411402",
            "name": "梁园区",
            "longname": "河南 商丘市 梁园区"
        },
        {
            "code": "411403",
            "name": "睢阳区",
            "longname": "河南 商丘市 睢阳区"
        },
        {
            "code": "411421",
            "name": "民权县",
            "longname": "河南 商丘市 民权县"
        },
        {
            "code": "411422",
            "name": "睢县",
            "longname": "河南 商丘市 睢县"
        },
        {
            "code": "411423",
            "name": "宁陵县",
            "longname": "河南 商丘市 宁陵县"
        },
        {
            "code": "411424",
            "name": "柘城县",
            "longname": "河南 商丘市 柘城县"
        },
        {
            "code": "411425",
            "name": "虞城县",
            "longname": "河南 商丘市 虞城县"
        },
        {
            "code": "411426",
            "name": "夏邑县",
            "longname": "河南 商丘市 夏邑县"
        },
        {
            "code": "411481",
            "name": "永城市",
            "longname": "河南 商丘市 永城市"
        },
        {
            "code": "4115",
            "name": "信阳市",
            "longname": "河南 信阳市"
        },
        {
            "code": "411501",
            "name": "市辖区",
            "longname": "河南 信阳市 市辖区"
        },
        {
            "code": "411502",
            "name": "浉河区",
            "longname": "河南 信阳市 浉河区"
        },
        {
            "code": "411503",
            "name": "平桥区",
            "longname": "河南 信阳市 平桥区"
        },
        {
            "code": "411521",
            "name": "罗山县",
            "longname": "河南 信阳市 罗山县"
        },
        {
            "code": "411522",
            "name": "光山县",
            "longname": "河南 信阳市 光山县"
        },
        {
            "code": "411523",
            "name": "新县",
            "longname": "河南 信阳市 新县"
        },
        {
            "code": "411524",
            "name": "商城县",
            "longname": "河南 信阳市 商城县"
        },
        {
            "code": "411525",
            "name": "固始县",
            "longname": "河南 信阳市 固始县"
        },
        {
            "code": "411526",
            "name": "潢川县",
            "longname": "河南 信阳市 潢川县"
        },
        {
            "code": "411527",
            "name": "淮滨县",
            "longname": "河南 信阳市 淮滨县"
        },
        {
            "code": "411528",
            "name": "息县",
            "longname": "河南 信阳市 息县"
        },
        {
            "code": "4116",
            "name": "周口市",
            "longname": "河南 周口市"
        },
        {
            "code": "411601",
            "name": "市辖区",
            "longname": "河南 周口市 市辖区"
        },
        {
            "code": "411602",
            "name": "川汇区",
            "longname": "河南 周口市 川汇区"
        },
        {
            "code": "411621",
            "name": "扶沟县",
            "longname": "河南 周口市 扶沟县"
        },
        {
            "code": "411622",
            "name": "西华县",
            "longname": "河南 周口市 西华县"
        },
        {
            "code": "411623",
            "name": "商水县",
            "longname": "河南 周口市 商水县"
        },
        {
            "code": "411624",
            "name": "沈丘县",
            "longname": "河南 周口市 沈丘县"
        },
        {
            "code": "411625",
            "name": "郸城县",
            "longname": "河南 周口市 郸城县"
        },
        {
            "code": "411626",
            "name": "淮阳县",
            "longname": "河南 周口市 淮阳县"
        },
        {
            "code": "411627",
            "name": "太康县",
            "longname": "河南 周口市 太康县"
        },
        {
            "code": "411628",
            "name": "鹿邑县",
            "longname": "河南 周口市 鹿邑县"
        },
        {
            "code": "411681",
            "name": "项城市",
            "longname": "河南 周口市 项城市"
        },
        {
            "code": "4117",
            "name": "驻马店市",
            "longname": "河南 驻马店市"
        },
        {
            "code": "411701",
            "name": "市辖区",
            "longname": "河南 驻马店市 市辖区"
        },
        {
            "code": "411702",
            "name": "驿城区",
            "longname": "河南 驻马店市 驿城区"
        },
        {
            "code": "411721",
            "name": "西平县",
            "longname": "河南 驻马店市 西平县"
        },
        {
            "code": "411722",
            "name": "上蔡县",
            "longname": "河南 驻马店市 上蔡县"
        },
        {
            "code": "411723",
            "name": "平舆县",
            "longname": "河南 驻马店市 平舆县"
        },
        {
            "code": "411724",
            "name": "正阳县",
            "longname": "河南 驻马店市 正阳县"
        },
        {
            "code": "411725",
            "name": "确山县",
            "longname": "河南 驻马店市 确山县"
        },
        {
            "code": "411726",
            "name": "泌阳县",
            "longname": "河南 驻马店市 泌阳县"
        },
        {
            "code": "411727",
            "name": "汝南县",
            "longname": "河南 驻马店市 汝南县"
        },
        {
            "code": "411728",
            "name": "遂平县",
            "longname": "河南 驻马店市 遂平县"
        },
        {
            "code": "411729",
            "name": "新蔡县",
            "longname": "河南 驻马店市 新蔡县"
        },
        {
            "code": "4190",
            "name": "省直辖县级行政区划",
            "longname": "河南 省直辖县级行政区划"
        },
        {
            "code": "419001",
            "name": "济源市",
            "longname": "河南 省直辖县级行政区划 济源市"
        },
        {
            "code": "42",
            "name": "湖北",
            "longname": "湖北"
        },
        {
            "code": "4201",
            "name": "武汉市",
            "longname": "湖北 武汉市"
        },
        {
            "code": "420101",
            "name": "市辖区",
            "longname": "湖北 武汉市 市辖区"
        },
        {
            "code": "420102",
            "name": "江岸区",
            "longname": "湖北 武汉市 江岸区"
        },
        {
            "code": "420103",
            "name": "江汉区",
            "longname": "湖北 武汉市 江汉区"
        },
        {
            "code": "420104",
            "name": "硚口区",
            "longname": "湖北 武汉市 硚口区"
        },
        {
            "code": "420105",
            "name": "汉阳区",
            "longname": "湖北 武汉市 汉阳区"
        },
        {
            "code": "420106",
            "name": "武昌区",
            "longname": "湖北 武汉市 武昌区"
        },
        {
            "code": "420107",
            "name": "青山区",
            "longname": "湖北 武汉市 青山区"
        },
        {
            "code": "420111",
            "name": "洪山区",
            "longname": "湖北 武汉市 洪山区"
        },
        {
            "code": "420112",
            "name": "东西湖区",
            "longname": "湖北 武汉市 东西湖区"
        },
        {
            "code": "420113",
            "name": "汉南区",
            "longname": "湖北 武汉市 汉南区"
        },
        {
            "code": "420114",
            "name": "蔡甸区",
            "longname": "湖北 武汉市 蔡甸区"
        },
        {
            "code": "420115",
            "name": "江夏区",
            "longname": "湖北 武汉市 江夏区"
        },
        {
            "code": "420116",
            "name": "黄陂区",
            "longname": "湖北 武汉市 黄陂区"
        },
        {
            "code": "420117",
            "name": "新洲区",
            "longname": "湖北 武汉市 新洲区"
        },
        {
            "code": "4202",
            "name": "黄石市",
            "longname": "湖北 黄石市"
        },
        {
            "code": "420201",
            "name": "市辖区",
            "longname": "湖北 黄石市 市辖区"
        },
        {
            "code": "420202",
            "name": "黄石港区",
            "longname": "湖北 黄石市 黄石港区"
        },
        {
            "code": "420203",
            "name": "西塞山区",
            "longname": "湖北 黄石市 西塞山区"
        },
        {
            "code": "420204",
            "name": "下陆区",
            "longname": "湖北 黄石市 下陆区"
        },
        {
            "code": "420205",
            "name": "铁山区",
            "longname": "湖北 黄石市 铁山区"
        },
        {
            "code": "420222",
            "name": "阳新县",
            "longname": "湖北 黄石市 阳新县"
        },
        {
            "code": "420281",
            "name": "大冶市",
            "longname": "湖北 黄石市 大冶市"
        },
        {
            "code": "4203",
            "name": "十堰市",
            "longname": "湖北 十堰市"
        },
        {
            "code": "420301",
            "name": "市辖区",
            "longname": "湖北 十堰市 市辖区"
        },
        {
            "code": "420302",
            "name": "茅箭区",
            "longname": "湖北 十堰市 茅箭区"
        },
        {
            "code": "420303",
            "name": "张湾区",
            "longname": "湖北 十堰市 张湾区"
        },
        {
            "code": "420321",
            "name": "郧阳区",
            "longname": "湖北 十堰市 郧阳区"
        },
        {
            "code": "420322",
            "name": "郧西县",
            "longname": "湖北 十堰市 郧西县"
        },
        {
            "code": "420323",
            "name": "竹山县",
            "longname": "湖北 十堰市 竹山县"
        },
        {
            "code": "420324",
            "name": "竹溪县",
            "longname": "湖北 十堰市 竹溪县"
        },
        {
            "code": "420325",
            "name": "房县",
            "longname": "湖北 十堰市 房县"
        },
        {
            "code": "420341",
            "name": "东风分局",
            "longname": "湖北 十堰市 东风分局"
        },
        {
            "code": "420342",
            "name": "经济开发区",
            "longname": "湖北 十堰市 经济开发区"
        },
        {
            "code": "420343",
            "name": "武当山特区",
            "longname": "湖北 十堰市 武当山特区"
        },
        {
            "code": "420381",
            "name": "丹江口市",
            "longname": "湖北 十堰市 丹江口市"
        },
        {
            "code": "4205",
            "name": "宜昌市",
            "longname": "湖北 宜昌市"
        },
        {
            "code": "420501",
            "name": "市辖区",
            "longname": "湖北 宜昌市 市辖区"
        },
        {
            "code": "420502",
            "name": "西陵区",
            "longname": "湖北 宜昌市 西陵区"
        },
        {
            "code": "420503",
            "name": "伍家岗区",
            "longname": "湖北 宜昌市 伍家岗区"
        },
        {
            "code": "420504",
            "name": "点军区",
            "longname": "湖北 宜昌市 点军区"
        },
        {
            "code": "420505",
            "name": "猇亭区",
            "longname": "湖北 宜昌市 猇亭区"
        },
        {
            "code": "420506",
            "name": "夷陵区",
            "longname": "湖北 宜昌市 夷陵区"
        },
        {
            "code": "420525",
            "name": "远安县",
            "longname": "湖北 宜昌市 远安县"
        },
        {
            "code": "420526",
            "name": "兴山县",
            "longname": "湖北 宜昌市 兴山县"
        },
        {
            "code": "420527",
            "name": "秭归县",
            "longname": "湖北 宜昌市 秭归县"
        },
        {
            "code": "420528",
            "name": "长阳土家族自治县",
            "longname": "湖北 宜昌市 长阳土家族自治县"
        },
        {
            "code": "420529",
            "name": "五峰土家族自治县",
            "longname": "湖北 宜昌市 五峰土家族自治县"
        },
        {
            "code": "420581",
            "name": "宜都市",
            "longname": "湖北 宜昌市 宜都市"
        },
        {
            "code": "420582",
            "name": "当阳市",
            "longname": "湖北 宜昌市 当阳市"
        },
        {
            "code": "420583",
            "name": "枝江市",
            "longname": "湖北 宜昌市 枝江市"
        },
        {
            "code": "4206",
            "name": "襄樊市",
            "longname": "湖北 襄樊市"
        },
        {
            "code": "420601",
            "name": "市辖区",
            "longname": "湖北 襄樊市 市辖区"
        },
        {
            "code": "420602",
            "name": "襄城区",
            "longname": "湖北 襄樊市 襄城区"
        },
        {
            "code": "420606",
            "name": "樊城区",
            "longname": "湖北 襄樊市 樊城区"
        },
        {
            "code": "420607",
            "name": "襄阳区",
            "longname": "湖北 襄樊市 襄阳区"
        },
        {
            "code": "420624",
            "name": "南漳县",
            "longname": "湖北 襄樊市 南漳县"
        },
        {
            "code": "420625",
            "name": "谷城县",
            "longname": "湖北 襄樊市 谷城县"
        },
        {
            "code": "420626",
            "name": "保康县",
            "longname": "湖北 襄樊市 保康县"
        },
        {
            "code": "420682",
            "name": "老河口市",
            "longname": "湖北 襄樊市 老河口市"
        },
        {
            "code": "420683",
            "name": "枣阳市",
            "longname": "湖北 襄樊市 枣阳市"
        },
        {
            "code": "420684",
            "name": "宜城市",
            "longname": "湖北 襄樊市 宜城市"
        },
        {
            "code": "4207",
            "name": "鄂州市",
            "longname": "湖北 鄂州市"
        },
        {
            "code": "420701",
            "name": "市辖区",
            "longname": "湖北 鄂州市 市辖区"
        },
        {
            "code": "420702",
            "name": "梁子湖区",
            "longname": "湖北 鄂州市 梁子湖区"
        },
        {
            "code": "420703",
            "name": "华容区",
            "longname": "湖北 鄂州市 华容区"
        },
        {
            "code": "420704",
            "name": "鄂城区",
            "longname": "湖北 鄂州市 鄂城区"
        },
        {
            "code": "4208",
            "name": "荆门市",
            "longname": "湖北 荆门市"
        },
        {
            "code": "420801",
            "name": "市辖区",
            "longname": "湖北 荆门市 市辖区"
        },
        {
            "code": "420802",
            "name": "东宝区",
            "longname": "湖北 荆门市 东宝区"
        },
        {
            "code": "420804",
            "name": "掇刀区",
            "longname": "湖北 荆门市 掇刀区"
        },
        {
            "code": "420821",
            "name": "京山县",
            "longname": "湖北 荆门市 京山县"
        },
        {
            "code": "420822",
            "name": "沙洋县",
            "longname": "湖北 荆门市 沙洋县"
        },
        {
            "code": "420881",
            "name": "钟祥市",
            "longname": "湖北 荆门市 钟祥市"
        },
        {
            "code": "4209",
            "name": "孝感市",
            "longname": "湖北 孝感市"
        },
        {
            "code": "420901",
            "name": "市辖区",
            "longname": "湖北 孝感市 市辖区"
        },
        {
            "code": "420902",
            "name": "孝南区",
            "longname": "湖北 孝感市 孝南区"
        },
        {
            "code": "420921",
            "name": "孝昌县",
            "longname": "湖北 孝感市 孝昌县"
        },
        {
            "code": "420922",
            "name": "大悟县",
            "longname": "湖北 孝感市 大悟县"
        },
        {
            "code": "420923",
            "name": "云梦县",
            "longname": "湖北 孝感市 云梦县"
        },
        {
            "code": "420981",
            "name": "应城市",
            "longname": "湖北 孝感市 应城市"
        },
        {
            "code": "420982",
            "name": "安陆市",
            "longname": "湖北 孝感市 安陆市"
        },
        {
            "code": "420984",
            "name": "汉川市",
            "longname": "湖北 孝感市 汉川市"
        },
        {
            "code": "4210",
            "name": "荆州市",
            "longname": "湖北 荆州市"
        },
        {
            "code": "421001",
            "name": "市辖区",
            "longname": "湖北 荆州市 市辖区"
        },
        {
            "code": "421002",
            "name": "沙市区",
            "longname": "湖北 荆州市 沙市区"
        },
        {
            "code": "421003",
            "name": "荆州区",
            "longname": "湖北 荆州市 荆州区"
        },
        {
            "code": "421022",
            "name": "公安县",
            "longname": "湖北 荆州市 公安县"
        },
        {
            "code": "421023",
            "name": "监利县",
            "longname": "湖北 荆州市 监利县"
        },
        {
            "code": "421024",
            "name": "江陵县",
            "longname": "湖北 荆州市 江陵县"
        },
        {
            "code": "421081",
            "name": "石首市",
            "longname": "湖北 荆州市 石首市"
        },
        {
            "code": "421083",
            "name": "洪湖市",
            "longname": "湖北 荆州市 洪湖市"
        },
        {
            "code": "421087",
            "name": "松滋市",
            "longname": "湖北 荆州市 松滋市"
        },
        {
            "code": "4211",
            "name": "黄冈市",
            "longname": "湖北 黄冈市"
        },
        {
            "code": "421101",
            "name": "市辖区",
            "longname": "湖北 黄冈市 市辖区"
        },
        {
            "code": "421102",
            "name": "黄州区",
            "longname": "湖北 黄冈市 黄州区"
        },
        {
            "code": "421121",
            "name": "团风县",
            "longname": "湖北 黄冈市 团风县"
        },
        {
            "code": "421122",
            "name": "红安县",
            "longname": "湖北 黄冈市 红安县"
        },
        {
            "code": "421123",
            "name": "罗田县",
            "longname": "湖北 黄冈市 罗田县"
        },
        {
            "code": "421124",
            "name": "英山县",
            "longname": "湖北 黄冈市 英山县"
        },
        {
            "code": "421125",
            "name": "浠水县",
            "longname": "湖北 黄冈市 浠水县"
        },
        {
            "code": "421126",
            "name": "蕲春县",
            "longname": "湖北 黄冈市 蕲春县"
        },
        {
            "code": "421127",
            "name": "黄梅县",
            "longname": "湖北 黄冈市 黄梅县"
        },
        {
            "code": "421181",
            "name": "麻城市",
            "longname": "湖北 黄冈市 麻城市"
        },
        {
            "code": "421182",
            "name": "武穴市",
            "longname": "湖北 黄冈市 武穴市"
        },
        {
            "code": "4212",
            "name": "咸宁市",
            "longname": "湖北 咸宁市"
        },
        {
            "code": "421201",
            "name": "市辖区",
            "longname": "湖北 咸宁市 市辖区"
        },
        {
            "code": "421202",
            "name": "咸安区",
            "longname": "湖北 咸宁市 咸安区"
        },
        {
            "code": "421221",
            "name": "嘉鱼县",
            "longname": "湖北 咸宁市 嘉鱼县"
        },
        {
            "code": "421222",
            "name": "通城县",
            "longname": "湖北 咸宁市 通城县"
        },
        {
            "code": "421223",
            "name": "崇阳县",
            "longname": "湖北 咸宁市 崇阳县"
        },
        {
            "code": "421224",
            "name": "通山县",
            "longname": "湖北 咸宁市 通山县"
        },
        {
            "code": "421281",
            "name": "赤壁市",
            "longname": "湖北 咸宁市 赤壁市"
        },
        {
            "code": "4213",
            "name": "随州市",
            "longname": "湖北 随州市"
        },
        {
            "code": "421301",
            "name": "市辖区",
            "longname": "湖北 随州市 市辖区"
        },
        {
            "code": "421303",
            "name": "曾都区",
            "longname": "湖北 随州市 曾都区"
        },
        {
            "code": "421321",
            "name": "随县",
            "longname": "湖北 随州市 随县"
        },
        {
            "code": "421381",
            "name": "广水市",
            "longname": "湖北 随州市 广水市"
        },
        {
            "code": "4228",
            "name": "恩施土家族苗族自治州",
            "longname": "湖北 恩施土家族苗族自治州"
        },
        {
            "code": "422801",
            "name": "恩施市",
            "longname": "湖北 恩施土家族苗族自治州 恩施市"
        },
        {
            "code": "422802",
            "name": "利川市",
            "longname": "湖北 恩施土家族苗族自治州 利川市"
        },
        {
            "code": "422822",
            "name": "建始县",
            "longname": "湖北 恩施土家族苗族自治州 建始县"
        },
        {
            "code": "422823",
            "name": "巴东县",
            "longname": "湖北 恩施土家族苗族自治州 巴东县"
        },
        {
            "code": "422825",
            "name": "宣恩县",
            "longname": "湖北 恩施土家族苗族自治州 宣恩县"
        },
        {
            "code": "422826",
            "name": "咸丰县",
            "longname": "湖北 恩施土家族苗族自治州 咸丰县"
        },
        {
            "code": "422827",
            "name": "来凤县",
            "longname": "湖北 恩施土家族苗族自治州 来凤县"
        },
        {
            "code": "422828",
            "name": "鹤峰县",
            "longname": "湖北 恩施土家族苗族自治州 鹤峰县"
        },
        {
            "code": "4290",
            "name": "省直辖县级行政区划",
            "longname": "湖北 省直辖县级行政区划"
        },
        {
            "code": "429004",
            "name": "仙桃市",
            "longname": "湖北 省直辖县级行政区划 仙桃市"
        },
        {
            "code": "429005",
            "name": "潜江市",
            "longname": "湖北 省直辖县级行政区划 潜江市"
        },
        {
            "code": "429006",
            "name": "天门市",
            "longname": "湖北 省直辖县级行政区划 天门市"
        },
        {
            "code": "429021",
            "name": "神农架林区",
            "longname": "湖北 省直辖县级行政区划 神农架林区"
        },
        {
            "code": "43",
            "name": "湖南",
            "longname": "湖南"
        },
        {
            "code": "4301",
            "name": "长沙市",
            "longname": "湖南 长沙市"
        },
        {
            "code": "430101",
            "name": "市辖区",
            "longname": "湖南 长沙市 市辖区"
        },
        {
            "code": "430102",
            "name": "芙蓉区",
            "longname": "湖南 长沙市 芙蓉区"
        },
        {
            "code": "430103",
            "name": "天心区",
            "longname": "湖南 长沙市 天心区"
        },
        {
            "code": "430104",
            "name": "岳麓区",
            "longname": "湖南 长沙市 岳麓区"
        },
        {
            "code": "430105",
            "name": "开福区",
            "longname": "湖南 长沙市 开福区"
        },
        {
            "code": "430111",
            "name": "雨花区",
            "longname": "湖南 长沙市 雨花区"
        },
        {
            "code": "430121",
            "name": "长沙县",
            "longname": "湖南 长沙市 长沙县"
        },
        {
            "code": "430122",
            "name": "望城县",
            "longname": "湖南 长沙市 望城县"
        },
        {
            "code": "430124",
            "name": "宁乡县",
            "longname": "湖南 长沙市 宁乡县"
        },
        {
            "code": "430181",
            "name": "浏阳市",
            "longname": "湖南 长沙市 浏阳市"
        },
        {
            "code": "4302",
            "name": "株洲市",
            "longname": "湖南 株洲市"
        },
        {
            "code": "430201",
            "name": "市辖区",
            "longname": "湖南 株洲市 市辖区"
        },
        {
            "code": "430202",
            "name": "荷塘区",
            "longname": "湖南 株洲市 荷塘区"
        },
        {
            "code": "430203",
            "name": "芦淞区",
            "longname": "湖南 株洲市 芦淞区"
        },
        {
            "code": "430204",
            "name": "石峰区",
            "longname": "湖南 株洲市 石峰区"
        },
        {
            "code": "430211",
            "name": "天元区",
            "longname": "湖南 株洲市 天元区"
        },
        {
            "code": "430221",
            "name": "株洲县",
            "longname": "湖南 株洲市 株洲县"
        },
        {
            "code": "430223",
            "name": "攸县",
            "longname": "湖南 株洲市 攸县"
        },
        {
            "code": "430224",
            "name": "茶陵县",
            "longname": "湖南 株洲市 茶陵县"
        },
        {
            "code": "430225",
            "name": "炎陵县",
            "longname": "湖南 株洲市 炎陵县"
        },
        {
            "code": "430281",
            "name": "醴陵市",
            "longname": "湖南 株洲市 醴陵市"
        },
        {
            "code": "4303",
            "name": "湘潭市",
            "longname": "湖南 湘潭市"
        },
        {
            "code": "430301",
            "name": "市辖区",
            "longname": "湖南 湘潭市 市辖区"
        },
        {
            "code": "430302",
            "name": "雨湖区",
            "longname": "湖南 湘潭市 雨湖区"
        },
        {
            "code": "430304",
            "name": "岳塘区",
            "longname": "湖南 湘潭市 岳塘区"
        },
        {
            "code": "430321",
            "name": "湘潭县",
            "longname": "湖南 湘潭市 湘潭县"
        },
        {
            "code": "430381",
            "name": "湘乡市",
            "longname": "湖南 湘潭市 湘乡市"
        },
        {
            "code": "430382",
            "name": "韶山市",
            "longname": "湖南 湘潭市 韶山市"
        },
        {
            "code": "4304",
            "name": "衡阳市",
            "longname": "湖南 衡阳市"
        },
        {
            "code": "430401",
            "name": "市辖区",
            "longname": "湖南 衡阳市 市辖区"
        },
        {
            "code": "430405",
            "name": "珠晖区",
            "longname": "湖南 衡阳市 珠晖区"
        },
        {
            "code": "430406",
            "name": "雁峰区",
            "longname": "湖南 衡阳市 雁峰区"
        },
        {
            "code": "430407",
            "name": "石鼓区",
            "longname": "湖南 衡阳市 石鼓区"
        },
        {
            "code": "430408",
            "name": "蒸湘区",
            "longname": "湖南 衡阳市 蒸湘区"
        },
        {
            "code": "430412",
            "name": "南岳区",
            "longname": "湖南 衡阳市 南岳区"
        },
        {
            "code": "430421",
            "name": "衡阳县",
            "longname": "湖南 衡阳市 衡阳县"
        },
        {
            "code": "430422",
            "name": "衡南县",
            "longname": "湖南 衡阳市 衡南县"
        },
        {
            "code": "430423",
            "name": "衡山县",
            "longname": "湖南 衡阳市 衡山县"
        },
        {
            "code": "430424",
            "name": "衡东县",
            "longname": "湖南 衡阳市 衡东县"
        },
        {
            "code": "430426",
            "name": "祁东县",
            "longname": "湖南 衡阳市 祁东县"
        },
        {
            "code": "430481",
            "name": "耒阳市",
            "longname": "湖南 衡阳市 耒阳市"
        },
        {
            "code": "430482",
            "name": "常宁市",
            "longname": "湖南 衡阳市 常宁市"
        },
        {
            "code": "4305",
            "name": "邵阳市",
            "longname": "湖南 邵阳市"
        },
        {
            "code": "430501",
            "name": "市辖区",
            "longname": "湖南 邵阳市 市辖区"
        },
        {
            "code": "430502",
            "name": "双清区",
            "longname": "湖南 邵阳市 双清区"
        },
        {
            "code": "430503",
            "name": "大祥区",
            "longname": "湖南 邵阳市 大祥区"
        },
        {
            "code": "430511",
            "name": "北塔区",
            "longname": "湖南 邵阳市 北塔区"
        },
        {
            "code": "430521",
            "name": "邵东县",
            "longname": "湖南 邵阳市 邵东县"
        },
        {
            "code": "430522",
            "name": "新邵县",
            "longname": "湖南 邵阳市 新邵县"
        },
        {
            "code": "430523",
            "name": "邵阳县",
            "longname": "湖南 邵阳市 邵阳县"
        },
        {
            "code": "430524",
            "name": "隆回县",
            "longname": "湖南 邵阳市 隆回县"
        },
        {
            "code": "430525",
            "name": "洞口县",
            "longname": "湖南 邵阳市 洞口县"
        },
        {
            "code": "430527",
            "name": "绥宁县",
            "longname": "湖南 邵阳市 绥宁县"
        },
        {
            "code": "430528",
            "name": "新宁县",
            "longname": "湖南 邵阳市 新宁县"
        },
        {
            "code": "430529",
            "name": "城步苗族自治县",
            "longname": "湖南 邵阳市 城步苗族自治县"
        },
        {
            "code": "430581",
            "name": "武冈市",
            "longname": "湖南 邵阳市 武冈市"
        },
        {
            "code": "4306",
            "name": "岳阳市",
            "longname": "湖南 岳阳市"
        },
        {
            "code": "430601",
            "name": "市辖区",
            "longname": "湖南 岳阳市 市辖区"
        },
        {
            "code": "430602",
            "name": "岳阳楼区",
            "longname": "湖南 岳阳市 岳阳楼区"
        },
        {
            "code": "430603",
            "name": "云溪区",
            "longname": "湖南 岳阳市 云溪区"
        },
        {
            "code": "430611",
            "name": "君山区",
            "longname": "湖南 岳阳市 君山区"
        },
        {
            "code": "430621",
            "name": "岳阳县",
            "longname": "湖南 岳阳市 岳阳县"
        },
        {
            "code": "430623",
            "name": "华容县",
            "longname": "湖南 岳阳市 华容县"
        },
        {
            "code": "430624",
            "name": "湘阴县",
            "longname": "湖南 岳阳市 湘阴县"
        },
        {
            "code": "430626",
            "name": "平江县",
            "longname": "湖南 岳阳市 平江县"
        },
        {
            "code": "430681",
            "name": "汨罗市",
            "longname": "湖南 岳阳市 汨罗市"
        },
        {
            "code": "430682",
            "name": "临湘市",
            "longname": "湖南 岳阳市 临湘市"
        },
        {
            "code": "4307",
            "name": "常德市",
            "longname": "湖南 常德市"
        },
        {
            "code": "430701",
            "name": "市辖区",
            "longname": "湖南 常德市 市辖区"
        },
        {
            "code": "430702",
            "name": "武陵区",
            "longname": "湖南 常德市 武陵区"
        },
        {
            "code": "430703",
            "name": "鼎城区",
            "longname": "湖南 常德市 鼎城区"
        },
        {
            "code": "430721",
            "name": "安乡县",
            "longname": "湖南 常德市 安乡县"
        },
        {
            "code": "430722",
            "name": "汉寿县",
            "longname": "湖南 常德市 汉寿县"
        },
        {
            "code": "430723",
            "name": "澧县",
            "longname": "湖南 常德市 澧县"
        },
        {
            "code": "430724",
            "name": "临澧县",
            "longname": "湖南 常德市 临澧县"
        },
        {
            "code": "430725",
            "name": "桃源县",
            "longname": "湖南 常德市 桃源县"
        },
        {
            "code": "430726",
            "name": "石门县",
            "longname": "湖南 常德市 石门县"
        },
        {
            "code": "430781",
            "name": "津市市",
            "longname": "湖南 常德市 津市市"
        },
        {
            "code": "4308",
            "name": "张家界市",
            "longname": "湖南 张家界市"
        },
        {
            "code": "430801",
            "name": "市辖区",
            "longname": "湖南 张家界市 市辖区"
        },
        {
            "code": "430802",
            "name": "永定区",
            "longname": "湖南 张家界市 永定区"
        },
        {
            "code": "430811",
            "name": "武陵源区",
            "longname": "湖南 张家界市 武陵源区"
        },
        {
            "code": "430821",
            "name": "慈利县",
            "longname": "湖南 张家界市 慈利县"
        },
        {
            "code": "430822",
            "name": "桑植县",
            "longname": "湖南 张家界市 桑植县"
        },
        {
            "code": "4309",
            "name": "益阳市",
            "longname": "湖南 益阳市"
        },
        {
            "code": "430901",
            "name": "市辖区",
            "longname": "湖南 益阳市 市辖区"
        },
        {
            "code": "430902",
            "name": "资阳区",
            "longname": "湖南 益阳市 资阳区"
        },
        {
            "code": "430903",
            "name": "赫山区",
            "longname": "湖南 益阳市 赫山区"
        },
        {
            "code": "430921",
            "name": "南县",
            "longname": "湖南 益阳市 南县"
        },
        {
            "code": "430922",
            "name": "桃江县",
            "longname": "湖南 益阳市 桃江县"
        },
        {
            "code": "430923",
            "name": "安化县",
            "longname": "湖南 益阳市 安化县"
        },
        {
            "code": "430981",
            "name": "沅江市",
            "longname": "湖南 益阳市 沅江市"
        },
        {
            "code": "4310",
            "name": "郴州市",
            "longname": "湖南 郴州市"
        },
        {
            "code": "431001",
            "name": "市辖区",
            "longname": "湖南 郴州市 市辖区"
        },
        {
            "code": "431002",
            "name": "北湖区",
            "longname": "湖南 郴州市 北湖区"
        },
        {
            "code": "431003",
            "name": "苏仙区",
            "longname": "湖南 郴州市 苏仙区"
        },
        {
            "code": "431021",
            "name": "桂阳县",
            "longname": "湖南 郴州市 桂阳县"
        },
        {
            "code": "431022",
            "name": "宜章县",
            "longname": "湖南 郴州市 宜章县"
        },
        {
            "code": "431023",
            "name": "永兴县",
            "longname": "湖南 郴州市 永兴县"
        },
        {
            "code": "431024",
            "name": "嘉禾县",
            "longname": "湖南 郴州市 嘉禾县"
        },
        {
            "code": "431025",
            "name": "临武县",
            "longname": "湖南 郴州市 临武县"
        },
        {
            "code": "431026",
            "name": "汝城县",
            "longname": "湖南 郴州市 汝城县"
        },
        {
            "code": "431027",
            "name": "桂东县",
            "longname": "湖南 郴州市 桂东县"
        },
        {
            "code": "431028",
            "name": "安仁县",
            "longname": "湖南 郴州市 安仁县"
        },
        {
            "code": "431081",
            "name": "资兴市",
            "longname": "湖南 郴州市 资兴市"
        },
        {
            "code": "4311",
            "name": "永州市",
            "longname": "湖南 永州市"
        },
        {
            "code": "431101",
            "name": "市辖区",
            "longname": "湖南 永州市 市辖区"
        },
        {
            "code": "431102",
            "name": "零陵区",
            "longname": "湖南 永州市 零陵区"
        },
        {
            "code": "431103",
            "name": "冷水滩区",
            "longname": "湖南 永州市 冷水滩区"
        },
        {
            "code": "431121",
            "name": "祁阳县",
            "longname": "湖南 永州市 祁阳县"
        },
        {
            "code": "431122",
            "name": "东安县",
            "longname": "湖南 永州市 东安县"
        },
        {
            "code": "431123",
            "name": "双牌县",
            "longname": "湖南 永州市 双牌县"
        },
        {
            "code": "431124",
            "name": "道县",
            "longname": "湖南 永州市 道县"
        },
        {
            "code": "431125",
            "name": "江永县",
            "longname": "湖南 永州市 江永县"
        },
        {
            "code": "431126",
            "name": "宁远县",
            "longname": "湖南 永州市 宁远县"
        },
        {
            "code": "431127",
            "name": "蓝山县",
            "longname": "湖南 永州市 蓝山县"
        },
        {
            "code": "431128",
            "name": "新田县",
            "longname": "湖南 永州市 新田县"
        },
        {
            "code": "431129",
            "name": "江华瑶族自治县",
            "longname": "湖南 永州市 江华瑶族自治县"
        },
        {
            "code": "4312",
            "name": "怀化市",
            "longname": "湖南 怀化市"
        },
        {
            "code": "431201",
            "name": "市辖区",
            "longname": "湖南 怀化市 市辖区"
        },
        {
            "code": "431202",
            "name": "鹤城区",
            "longname": "湖南 怀化市 鹤城区"
        },
        {
            "code": "431221",
            "name": "中方县",
            "longname": "湖南 怀化市 中方县"
        },
        {
            "code": "431222",
            "name": "沅陵县",
            "longname": "湖南 怀化市 沅陵县"
        },
        {
            "code": "431223",
            "name": "辰溪县",
            "longname": "湖南 怀化市 辰溪县"
        },
        {
            "code": "431224",
            "name": "溆浦县",
            "longname": "湖南 怀化市 溆浦县"
        },
        {
            "code": "431225",
            "name": "会同县",
            "longname": "湖南 怀化市 会同县"
        },
        {
            "code": "431226",
            "name": "麻阳苗族自治县",
            "longname": "湖南 怀化市 麻阳苗族自治县"
        },
        {
            "code": "431227",
            "name": "新晃侗族自治县",
            "longname": "湖南 怀化市 新晃侗族自治县"
        },
        {
            "code": "431228",
            "name": "芷江侗族自治县",
            "longname": "湖南 怀化市 芷江侗族自治县"
        },
        {
            "code": "431229",
            "name": "靖州苗族侗族自治县",
            "longname": "湖南 怀化市 靖州苗族侗族自治县"
        },
        {
            "code": "431230",
            "name": "通道侗族自治县",
            "longname": "湖南 怀化市 通道侗族自治县"
        },
        {
            "code": "431281",
            "name": "洪江市",
            "longname": "湖南 怀化市 洪江市"
        },
        {
            "code": "4313",
            "name": "娄底市",
            "longname": "湖南 娄底市"
        },
        {
            "code": "431301",
            "name": "市辖区",
            "longname": "湖南 娄底市 市辖区"
        },
        {
            "code": "431302",
            "name": "娄星区",
            "longname": "湖南 娄底市 娄星区"
        },
        {
            "code": "431321",
            "name": "双峰县",
            "longname": "湖南 娄底市 双峰县"
        },
        {
            "code": "431322",
            "name": "新化县",
            "longname": "湖南 娄底市 新化县"
        },
        {
            "code": "431381",
            "name": "冷水江市",
            "longname": "湖南 娄底市 冷水江市"
        },
        {
            "code": "431382",
            "name": "涟源市",
            "longname": "湖南 娄底市 涟源市"
        },
        {
            "code": "4331",
            "name": "湘西土家族苗族自治州",
            "longname": "湖南 湘西土家族苗族自治州"
        },
        {
            "code": "433101",
            "name": "吉首市",
            "longname": "湖南 湘西土家族苗族自治州 吉首市"
        },
        {
            "code": "433122",
            "name": "泸溪县",
            "longname": "湖南 湘西土家族苗族自治州 泸溪县"
        },
        {
            "code": "433123",
            "name": "凤凰县",
            "longname": "湖南 湘西土家族苗族自治州 凤凰县"
        },
        {
            "code": "433124",
            "name": "花垣县",
            "longname": "湖南 湘西土家族苗族自治州 花垣县"
        },
        {
            "code": "433125",
            "name": "保靖县",
            "longname": "湖南 湘西土家族苗族自治州 保靖县"
        },
        {
            "code": "433126",
            "name": "古丈县",
            "longname": "湖南 湘西土家族苗族自治州 古丈县"
        },
        {
            "code": "433127",
            "name": "永顺县",
            "longname": "湖南 湘西土家族苗族自治州 永顺县"
        },
        {
            "code": "433130",
            "name": "龙山县",
            "longname": "湖南 湘西土家族苗族自治州 龙山县"
        },
        {
            "code": "44",
            "name": "广东",
            "longname": "广东"
        },
        {
            "code": "4401",
            "name": "广州市",
            "longname": "广东 广州市"
        },
        {
            "code": "440101",
            "name": "市辖区",
            "longname": "广东 广州市 市辖区"
        },
        {
            "code": "440103",
            "name": "荔湾区",
            "longname": "广东 广州市 荔湾区"
        },
        {
            "code": "440104",
            "name": "越秀区",
            "longname": "广东 广州市 越秀区"
        },
        {
            "code": "440105",
            "name": "海珠区",
            "longname": "广东 广州市 海珠区"
        },
        {
            "code": "440106",
            "name": "天河区",
            "longname": "广东 广州市 天河区"
        },
        {
            "code": "440111",
            "name": "白云区",
            "longname": "广东 广州市 白云区"
        },
        {
            "code": "440112",
            "name": "黄埔区",
            "longname": "广东 广州市 黄埔区"
        },
        {
            "code": "440113",
            "name": "番禺区",
            "longname": "广东 广州市 番禺区"
        },
        {
            "code": "440114",
            "name": "花都区",
            "longname": "广东 广州市 花都区"
        },
        {
            "code": "440115",
            "name": "南沙区",
            "longname": "广东 广州市 南沙区"
        },
        {
            "code": "440116",
            "name": "萝岗区",
            "longname": "广东 广州市 萝岗区"
        },
        {
            "code": "440183",
            "name": "增城市",
            "longname": "广东 广州市 增城市"
        },
        {
            "code": "440184",
            "name": "从化市",
            "longname": "广东 广州市 从化市"
        },
        {
            "code": "4402",
            "name": "韶关市",
            "longname": "广东 韶关市"
        },
        {
            "code": "440201",
            "name": "市辖区",
            "longname": "广东 韶关市 市辖区"
        },
        {
            "code": "440203",
            "name": "武江区",
            "longname": "广东 韶关市 武江区"
        },
        {
            "code": "440204",
            "name": "浈江区",
            "longname": "广东 韶关市 浈江区"
        },
        {
            "code": "440205",
            "name": "曲江区",
            "longname": "广东 韶关市 曲江区"
        },
        {
            "code": "440222",
            "name": "始兴县",
            "longname": "广东 韶关市 始兴县"
        },
        {
            "code": "440224",
            "name": "仁化县",
            "longname": "广东 韶关市 仁化县"
        },
        {
            "code": "440229",
            "name": "翁源县",
            "longname": "广东 韶关市 翁源县"
        },
        {
            "code": "440232",
            "name": "乳源瑶族自治县",
            "longname": "广东 韶关市 乳源瑶族自治县"
        },
        {
            "code": "440233",
            "name": "新丰县",
            "longname": "广东 韶关市 新丰县"
        },
        {
            "code": "440281",
            "name": "乐昌市",
            "longname": "广东 韶关市 乐昌市"
        },
        {
            "code": "440282",
            "name": "南雄市",
            "longname": "广东 韶关市 南雄市"
        },
        {
            "code": "4403",
            "name": "深圳市",
            "longname": "广东 深圳市"
        },
        {
            "code": "440301",
            "name": "市辖区",
            "longname": "广东 深圳市 市辖区"
        },
        {
            "code": "440303",
            "name": "罗湖区",
            "longname": "广东 深圳市 罗湖区"
        },
        {
            "code": "440304",
            "name": "福田区",
            "longname": "广东 深圳市 福田区"
        },
        {
            "code": "440305",
            "name": "南山区",
            "longname": "广东 深圳市 南山区"
        },
        {
            "code": "440306",
            "name": "宝安区",
            "longname": "广东 深圳市 宝安区"
        },
        {
            "code": "440307",
            "name": "龙岗区",
            "longname": "广东 深圳市 龙岗区"
        },
        {
            "code": "440308",
            "name": "盐田区",
            "longname": "广东 深圳市 盐田区"
        },
        {
            "code": "4404",
            "name": "珠海市",
            "longname": "广东 珠海市"
        },
        {
            "code": "440401",
            "name": "市辖区",
            "longname": "广东 珠海市 市辖区"
        },
        {
            "code": "440402",
            "name": "香洲区",
            "longname": "广东 珠海市 香洲区"
        },
        {
            "code": "440403",
            "name": "斗门区",
            "longname": "广东 珠海市 斗门区"
        },
        {
            "code": "440404",
            "name": "金湾区",
            "longname": "广东 珠海市 金湾区"
        },
        {
            "code": "4405",
            "name": "汕头市",
            "longname": "广东 汕头市"
        },
        {
            "code": "440501",
            "name": "市辖区",
            "longname": "广东 汕头市 市辖区"
        },
        {
            "code": "440507",
            "name": "龙湖区",
            "longname": "广东 汕头市 龙湖区"
        },
        {
            "code": "440511",
            "name": "金平区",
            "longname": "广东 汕头市 金平区"
        },
        {
            "code": "440512",
            "name": "濠江区",
            "longname": "广东 汕头市 濠江区"
        },
        {
            "code": "440513",
            "name": "潮阳区",
            "longname": "广东 汕头市 潮阳区"
        },
        {
            "code": "440514",
            "name": "潮南区",
            "longname": "广东 汕头市 潮南区"
        },
        {
            "code": "440515",
            "name": "澄海区",
            "longname": "广东 汕头市 澄海区"
        },
        {
            "code": "440523",
            "name": "南澳县",
            "longname": "广东 汕头市 南澳县"
        },
        {
            "code": "4406",
            "name": "佛山市",
            "longname": "广东 佛山市"
        },
        {
            "code": "440601",
            "name": "市辖区",
            "longname": "广东 佛山市 市辖区"
        },
        {
            "code": "440604",
            "name": "禅城区",
            "longname": "广东 佛山市 禅城区"
        },
        {
            "code": "440605",
            "name": "南海区",
            "longname": "广东 佛山市 南海区"
        },
        {
            "code": "440606",
            "name": "顺德区",
            "longname": "广东 佛山市 顺德区"
        },
        {
            "code": "440607",
            "name": "三水区",
            "longname": "广东 佛山市 三水区"
        },
        {
            "code": "440608",
            "name": "高明区",
            "longname": "广东 佛山市 高明区"
        },
        {
            "code": "4407",
            "name": "江门市",
            "longname": "广东 江门市"
        },
        {
            "code": "440701",
            "name": "市辖区",
            "longname": "广东 江门市 市辖区"
        },
        {
            "code": "440703",
            "name": "蓬江区",
            "longname": "广东 江门市 蓬江区"
        },
        {
            "code": "440704",
            "name": "江海区",
            "longname": "广东 江门市 江海区"
        },
        {
            "code": "440705",
            "name": "新会区",
            "longname": "广东 江门市 新会区"
        },
        {
            "code": "440781",
            "name": "台山市",
            "longname": "广东 江门市 台山市"
        },
        {
            "code": "440783",
            "name": "开平市",
            "longname": "广东 江门市 开平市"
        },
        {
            "code": "440784",
            "name": "鹤山市",
            "longname": "广东 江门市 鹤山市"
        },
        {
            "code": "440785",
            "name": "恩平市",
            "longname": "广东 江门市 恩平市"
        },
        {
            "code": "4408",
            "name": "湛江市",
            "longname": "广东 湛江市"
        },
        {
            "code": "440801",
            "name": "市辖区",
            "longname": "广东 湛江市 市辖区"
        },
        {
            "code": "440802",
            "name": "赤坎区",
            "longname": "广东 湛江市 赤坎区"
        },
        {
            "code": "440803",
            "name": "霞山区",
            "longname": "广东 湛江市 霞山区"
        },
        {
            "code": "440804",
            "name": "坡头区",
            "longname": "广东 湛江市 坡头区"
        },
        {
            "code": "440811",
            "name": "麻章区",
            "longname": "广东 湛江市 麻章区"
        },
        {
            "code": "440823",
            "name": "遂溪县",
            "longname": "广东 湛江市 遂溪县"
        },
        {
            "code": "440825",
            "name": "徐闻县",
            "longname": "广东 湛江市 徐闻县"
        },
        {
            "code": "440881",
            "name": "廉江市",
            "longname": "广东 湛江市 廉江市"
        },
        {
            "code": "440882",
            "name": "雷州市",
            "longname": "广东 湛江市 雷州市"
        },
        {
            "code": "440883",
            "name": "吴川市",
            "longname": "广东 湛江市 吴川市"
        },
        {
            "code": "4409",
            "name": "茂名市",
            "longname": "广东 茂名市"
        },
        {
            "code": "440901",
            "name": "市辖区",
            "longname": "广东 茂名市 市辖区"
        },
        {
            "code": "440902",
            "name": "茂南区",
            "longname": "广东 茂名市 茂南区"
        },
        {
            "code": "440903",
            "name": "茂港区",
            "longname": "广东 茂名市 茂港区"
        },
        {
            "code": "440923",
            "name": "电白县",
            "longname": "广东 茂名市 电白县"
        },
        {
            "code": "440981",
            "name": "高州市",
            "longname": "广东 茂名市 高州市"
        },
        {
            "code": "440982",
            "name": "化州市",
            "longname": "广东 茂名市 化州市"
        },
        {
            "code": "440983",
            "name": "信宜市",
            "longname": "广东 茂名市 信宜市"
        },
        {
            "code": "4412",
            "name": "肇庆市",
            "longname": "广东 肇庆市"
        },
        {
            "code": "441201",
            "name": "市辖区",
            "longname": "广东 肇庆市 市辖区"
        },
        {
            "code": "441202",
            "name": "端州区",
            "longname": "广东 肇庆市 端州区"
        },
        {
            "code": "441203",
            "name": "鼎湖区",
            "longname": "广东 肇庆市 鼎湖区"
        },
        {
            "code": "441223",
            "name": "广宁县",
            "longname": "广东 肇庆市 广宁县"
        },
        {
            "code": "441224",
            "name": "怀集县",
            "longname": "广东 肇庆市 怀集县"
        },
        {
            "code": "441225",
            "name": "封开县",
            "longname": "广东 肇庆市 封开县"
        },
        {
            "code": "441226",
            "name": "德庆县",
            "longname": "广东 肇庆市 德庆县"
        },
        {
            "code": "441231",
            "name": "高新技术产业开发区",
            "longname": "广东 肇庆市 高新技术产业开发区"
        },
        {
            "code": "441283",
            "name": "高要市",
            "longname": "广东 肇庆市 高要市"
        },
        {
            "code": "441284",
            "name": "四会市",
            "longname": "广东 肇庆市 四会市"
        },
        {
            "code": "4413",
            "name": "惠州市",
            "longname": "广东 惠州市"
        },
        {
            "code": "441301",
            "name": "市辖区",
            "longname": "广东 惠州市 市辖区"
        },
        {
            "code": "441302",
            "name": "惠城区",
            "longname": "广东 惠州市 惠城区"
        },
        {
            "code": "441303",
            "name": "惠阳区",
            "longname": "广东 惠州市 惠阳区"
        },
        {
            "code": "441322",
            "name": "博罗县",
            "longname": "广东 惠州市 博罗县"
        },
        {
            "code": "441323",
            "name": "惠东县",
            "longname": "广东 惠州市 惠东县"
        },
        {
            "code": "441324",
            "name": "龙门县",
            "longname": "广东 惠州市 龙门县"
        },
        {
            "code": "441325",
            "name": "仲恺区",
            "longname": "广东 惠州市 仲恺区"
        },
        {
            "code": "441331",
            "name": "大亚湾经济开发区",
            "longname": "广东 惠州市 大亚湾经济开发区"
        },
        {
            "code": "4414",
            "name": "梅州市",
            "longname": "广东 梅州市"
        },
        {
            "code": "441401",
            "name": "市辖区",
            "longname": "广东 梅州市 市辖区"
        },
        {
            "code": "441402",
            "name": "梅江区",
            "longname": "广东 梅州市 梅江区"
        },
        {
            "code": "441421",
            "name": "梅县",
            "longname": "广东 梅州市 梅县"
        },
        {
            "code": "441422",
            "name": "大埔县",
            "longname": "广东 梅州市 大埔县"
        },
        {
            "code": "441423",
            "name": "丰顺县",
            "longname": "广东 梅州市 丰顺县"
        },
        {
            "code": "441424",
            "name": "五华县",
            "longname": "广东 梅州市 五华县"
        },
        {
            "code": "441426",
            "name": "平远县",
            "longname": "广东 梅州市 平远县"
        },
        {
            "code": "441427",
            "name": "蕉岭县",
            "longname": "广东 梅州市 蕉岭县"
        },
        {
            "code": "441481",
            "name": "兴宁市",
            "longname": "广东 梅州市 兴宁市"
        },
        {
            "code": "4415",
            "name": "汕尾市",
            "longname": "广东 汕尾市"
        },
        {
            "code": "441501",
            "name": "市辖区",
            "longname": "广东 汕尾市 市辖区"
        },
        {
            "code": "441502",
            "name": "城区",
            "longname": "广东 汕尾市 城区"
        },
        {
            "code": "441521",
            "name": "海丰县",
            "longname": "广东 汕尾市 海丰县"
        },
        {
            "code": "441523",
            "name": "陆河县",
            "longname": "广东 汕尾市 陆河县"
        },
        {
            "code": "441531",
            "name": "红海湾区",
            "longname": "广东 汕尾市 红海湾区"
        },
        {
            "code": "441581",
            "name": "陆丰市",
            "longname": "广东 汕尾市 陆丰市"
        },
        {
            "code": "4416",
            "name": "河源市",
            "longname": "广东 河源市"
        },
        {
            "code": "441601",
            "name": "市辖区",
            "longname": "广东 河源市 市辖区"
        },
        {
            "code": "441602",
            "name": "源城区",
            "longname": "广东 河源市 源城区"
        },
        {
            "code": "441621",
            "name": "紫金县",
            "longname": "广东 河源市 紫金县"
        },
        {
            "code": "441622",
            "name": "龙川县",
            "longname": "广东 河源市 龙川县"
        },
        {
            "code": "441623",
            "name": "连平县",
            "longname": "广东 河源市 连平县"
        },
        {
            "code": "441624",
            "name": "和平县",
            "longname": "广东 河源市 和平县"
        },
        {
            "code": "441625",
            "name": "东源县",
            "longname": "广东 河源市 东源县"
        },
        {
            "code": "4417",
            "name": "阳江市",
            "longname": "广东 阳江市"
        },
        {
            "code": "441701",
            "name": "市辖区",
            "longname": "广东 阳江市 市辖区"
        },
        {
            "code": "441702",
            "name": "江城区",
            "longname": "广东 阳江市 江城区"
        },
        {
            "code": "441721",
            "name": "阳西县",
            "longname": "广东 阳江市 阳西县"
        },
        {
            "code": "441723",
            "name": "阳东县",
            "longname": "广东 阳江市 阳东县"
        },
        {
            "code": "441781",
            "name": "阳春市",
            "longname": "广东 阳江市 阳春市"
        },
        {
            "code": "4418",
            "name": "清远市",
            "longname": "广东 清远市"
        },
        {
            "code": "441801",
            "name": "市辖区",
            "longname": "广东 清远市 市辖区"
        },
        {
            "code": "441802",
            "name": "清城区",
            "longname": "广东 清远市 清城区"
        },
        {
            "code": "441821",
            "name": "佛冈县",
            "longname": "广东 清远市 佛冈县"
        },
        {
            "code": "441823",
            "name": "阳山县",
            "longname": "广东 清远市 阳山县"
        },
        {
            "code": "441825",
            "name": "连山壮族瑶族自治县",
            "longname": "广东 清远市 连山壮族瑶族自治县"
        },
        {
            "code": "441826",
            "name": "连南瑶族自治县",
            "longname": "广东 清远市 连南瑶族自治县"
        },
        {
            "code": "441827",
            "name": "清新县",
            "longname": "广东 清远市 清新县"
        },
        {
            "code": "441881",
            "name": "英德市",
            "longname": "广东 清远市 英德市"
        },
        {
            "code": "441882",
            "name": "连州市",
            "longname": "广东 清远市 连州市"
        },
        {
            "code": "4419",
            "name": "东莞市",
            "longname": "广东 东莞市"
        },
        {
            "code": "441901",
            "name": "市辖区",
            "longname": "广东 东莞市 市辖区"
        },
        {
            "code": "4420",
            "name": "中山市",
            "longname": "广东 中山市"
        },
        {
            "code": "442001",
            "name": "市辖区",
            "longname": "广东 中山市 市辖区"
        },
        {
            "code": "4451",
            "name": "潮州市",
            "longname": "广东 潮州市"
        },
        {
            "code": "445101",
            "name": "市辖区",
            "longname": "广东 潮州市 市辖区"
        },
        {
            "code": "445102",
            "name": "湘桥区",
            "longname": "广东 潮州市 湘桥区"
        },
        {
            "code": "445121",
            "name": "潮安县",
            "longname": "广东 潮州市 潮安县"
        },
        {
            "code": "445122",
            "name": "饶平县",
            "longname": "广东 潮州市 饶平县"
        },
        {
            "code": "4452",
            "name": "揭阳市",
            "longname": "广东 揭阳市"
        },
        {
            "code": "445201",
            "name": "市辖区",
            "longname": "广东 揭阳市 市辖区"
        },
        {
            "code": "445202",
            "name": "榕城区",
            "longname": "广东 揭阳市 榕城区"
        },
        {
            "code": "445221",
            "name": "揭东县",
            "longname": "广东 揭阳市 揭东县"
        },
        {
            "code": "445222",
            "name": "揭西县",
            "longname": "广东 揭阳市 揭西县"
        },
        {
            "code": "445224",
            "name": "惠来县",
            "longname": "广东 揭阳市 惠来县"
        },
        {
            "code": "445281",
            "name": "普宁市",
            "longname": "广东 揭阳市 普宁市"
        },
        {
            "code": "4453",
            "name": "云浮市",
            "longname": "广东 云浮市"
        },
        {
            "code": "445301",
            "name": "市辖区",
            "longname": "广东 云浮市 市辖区"
        },
        {
            "code": "445302",
            "name": "云城区",
            "longname": "广东 云浮市 云城区"
        },
        {
            "code": "445321",
            "name": "新兴县",
            "longname": "广东 云浮市 新兴县"
        },
        {
            "code": "445322",
            "name": "郁南县",
            "longname": "广东 云浮市 郁南县"
        },
        {
            "code": "445323",
            "name": "云安县",
            "longname": "广东 云浮市 云安县"
        },
        {
            "code": "445381",
            "name": "罗定市",
            "longname": "广东 云浮市 罗定市"
        },
        {
            "code": "45",
            "name": "广西",
            "longname": "广西"
        },
        {
            "code": "4501",
            "name": "南宁市",
            "longname": "广西 南宁市"
        },
        {
            "code": "450101",
            "name": "市辖区",
            "longname": "广西 南宁市 市辖区"
        },
        {
            "code": "450102",
            "name": "兴宁区",
            "longname": "广西 南宁市 兴宁区"
        },
        {
            "code": "450103",
            "name": "青秀区",
            "longname": "广西 南宁市 青秀区"
        },
        {
            "code": "450105",
            "name": "江南区",
            "longname": "广西 南宁市 江南区"
        },
        {
            "code": "450107",
            "name": "西乡塘区",
            "longname": "广西 南宁市 西乡塘区"
        },
        {
            "code": "450108",
            "name": "良庆区",
            "longname": "广西 南宁市 良庆区"
        },
        {
            "code": "450109",
            "name": "邕宁区",
            "longname": "广西 南宁市 邕宁区"
        },
        {
            "code": "450122",
            "name": "武鸣县",
            "longname": "广西 南宁市 武鸣县"
        },
        {
            "code": "450123",
            "name": "隆安县",
            "longname": "广西 南宁市 隆安县"
        },
        {
            "code": "450124",
            "name": "马山县",
            "longname": "广西 南宁市 马山县"
        },
        {
            "code": "450125",
            "name": "上林县",
            "longname": "广西 南宁市 上林县"
        },
        {
            "code": "450126",
            "name": "宾阳县",
            "longname": "广西 南宁市 宾阳县"
        },
        {
            "code": "450127",
            "name": "横县",
            "longname": "广西 南宁市 横县"
        },
        {
            "code": "4502",
            "name": "柳州市",
            "longname": "广西 柳州市"
        },
        {
            "code": "450201",
            "name": "市辖区",
            "longname": "广西 柳州市 市辖区"
        },
        {
            "code": "450202",
            "name": "城中区",
            "longname": "广西 柳州市 城中区"
        },
        {
            "code": "450203",
            "name": "鱼峰区",
            "longname": "广西 柳州市 鱼峰区"
        },
        {
            "code": "450204",
            "name": "柳南区",
            "longname": "广西 柳州市 柳南区"
        },
        {
            "code": "450205",
            "name": "柳北区",
            "longname": "广西 柳州市 柳北区"
        },
        {
            "code": "450221",
            "name": "柳江县",
            "longname": "广西 柳州市 柳江县"
        },
        {
            "code": "450222",
            "name": "柳城县",
            "longname": "广西 柳州市 柳城县"
        },
        {
            "code": "450223",
            "name": "鹿寨县",
            "longname": "广西 柳州市 鹿寨县"
        },
        {
            "code": "450224",
            "name": "融安县",
            "longname": "广西 柳州市 融安县"
        },
        {
            "code": "450225",
            "name": "融水苗族自治县",
            "longname": "广西 柳州市 融水苗族自治县"
        },
        {
            "code": "450226",
            "name": "三江侗族自治县",
            "longname": "广西 柳州市 三江侗族自治县"
        },
        {
            "code": "4503",
            "name": "桂林市",
            "longname": "广西 桂林市"
        },
        {
            "code": "450301",
            "name": "市辖区",
            "longname": "广西 桂林市 市辖区"
        },
        {
            "code": "450302",
            "name": "秀峰区",
            "longname": "广西 桂林市 秀峰区"
        },
        {
            "code": "450303",
            "name": "叠彩区",
            "longname": "广西 桂林市 叠彩区"
        },
        {
            "code": "450304",
            "name": "象山区",
            "longname": "广西 桂林市 象山区"
        },
        {
            "code": "450305",
            "name": "七星区",
            "longname": "广西 桂林市 七星区"
        },
        {
            "code": "450311",
            "name": "雁山区",
            "longname": "广西 桂林市 雁山区"
        },
        {
            "code": "450321",
            "name": "阳朔县",
            "longname": "广西 桂林市 阳朔县"
        },
        {
            "code": "450322",
            "name": "临桂县",
            "longname": "广西 桂林市 临桂县"
        },
        {
            "code": "450323",
            "name": "灵川县",
            "longname": "广西 桂林市 灵川县"
        },
        {
            "code": "450324",
            "name": "全州县",
            "longname": "广西 桂林市 全州县"
        },
        {
            "code": "450325",
            "name": "兴安县",
            "longname": "广西 桂林市 兴安县"
        },
        {
            "code": "450326",
            "name": "永福县",
            "longname": "广西 桂林市 永福县"
        },
        {
            "code": "450327",
            "name": "灌阳县",
            "longname": "广西 桂林市 灌阳县"
        },
        {
            "code": "450328",
            "name": "龙胜各族自治县",
            "longname": "广西 桂林市 龙胜各族自治县"
        },
        {
            "code": "450329",
            "name": "资源县",
            "longname": "广西 桂林市 资源县"
        },
        {
            "code": "450330",
            "name": "平乐县",
            "longname": "广西 桂林市 平乐县"
        },
        {
            "code": "450331",
            "name": "荔蒲县",
            "longname": "广西 桂林市 荔蒲县"
        },
        {
            "code": "450332",
            "name": "恭城瑶族自治县",
            "longname": "广西 桂林市 恭城瑶族自治县"
        },
        {
            "code": "4504",
            "name": "梧州市",
            "longname": "广西 梧州市"
        },
        {
            "code": "450401",
            "name": "市辖区",
            "longname": "广西 梧州市 市辖区"
        },
        {
            "code": "450403",
            "name": "万秀区",
            "longname": "广西 梧州市 万秀区"
        },
        {
            "code": "450404",
            "name": "蝶山区",
            "longname": "广西 梧州市 蝶山区"
        },
        {
            "code": "450405",
            "name": "长洲区",
            "longname": "广西 梧州市 长洲区"
        },
        {
            "code": "450421",
            "name": "苍梧县",
            "longname": "广西 梧州市 苍梧县"
        },
        {
            "code": "450422",
            "name": "藤县",
            "longname": "广西 梧州市 藤县"
        },
        {
            "code": "450423",
            "name": "蒙山县",
            "longname": "广西 梧州市 蒙山县"
        },
        {
            "code": "450481",
            "name": "岑溪市",
            "longname": "广西 梧州市 岑溪市"
        },
        {
            "code": "4505",
            "name": "北海市",
            "longname": "广西 北海市"
        },
        {
            "code": "450501",
            "name": "市辖区",
            "longname": "广西 北海市 市辖区"
        },
        {
            "code": "450502",
            "name": "海城区",
            "longname": "广西 北海市 海城区"
        },
        {
            "code": "450503",
            "name": "银海区",
            "longname": "广西 北海市 银海区"
        },
        {
            "code": "450512",
            "name": "铁山港区",
            "longname": "广西 北海市 铁山港区"
        },
        {
            "code": "450521",
            "name": "合浦县",
            "longname": "广西 北海市 合浦县"
        },
        {
            "code": "4506",
            "name": "防城港市",
            "longname": "广西 防城港市"
        },
        {
            "code": "450601",
            "name": "市辖区",
            "longname": "广西 防城港市 市辖区"
        },
        {
            "code": "450602",
            "name": "港口区",
            "longname": "广西 防城港市 港口区"
        },
        {
            "code": "450603",
            "name": "防城区",
            "longname": "广西 防城港市 防城区"
        },
        {
            "code": "450621",
            "name": "上思县",
            "longname": "广西 防城港市 上思县"
        },
        {
            "code": "450681",
            "name": "东兴市",
            "longname": "广西 防城港市 东兴市"
        },
        {
            "code": "4507",
            "name": "钦州市",
            "longname": "广西 钦州市"
        },
        {
            "code": "450701",
            "name": "市辖区",
            "longname": "广西 钦州市 市辖区"
        },
        {
            "code": "450702",
            "name": "钦南区",
            "longname": "广西 钦州市 钦南区"
        },
        {
            "code": "450703",
            "name": "钦北区",
            "longname": "广西 钦州市 钦北区"
        },
        {
            "code": "450721",
            "name": "灵山县",
            "longname": "广西 钦州市 灵山县"
        },
        {
            "code": "450722",
            "name": "浦北县",
            "longname": "广西 钦州市 浦北县"
        },
        {
            "code": "4508",
            "name": "贵港市",
            "longname": "广西 贵港市"
        },
        {
            "code": "450801",
            "name": "市辖区",
            "longname": "广西 贵港市 市辖区"
        },
        {
            "code": "450802",
            "name": "港北区",
            "longname": "广西 贵港市 港北区"
        },
        {
            "code": "450803",
            "name": "港南区",
            "longname": "广西 贵港市 港南区"
        },
        {
            "code": "450804",
            "name": "覃塘区",
            "longname": "广西 贵港市 覃塘区"
        },
        {
            "code": "450821",
            "name": "平南县",
            "longname": "广西 贵港市 平南县"
        },
        {
            "code": "450881",
            "name": "桂平市",
            "longname": "广西 贵港市 桂平市"
        },
        {
            "code": "4509",
            "name": "玉林市",
            "longname": "广西 玉林市"
        },
        {
            "code": "450901",
            "name": "市辖区",
            "longname": "广西 玉林市 市辖区"
        },
        {
            "code": "450902",
            "name": "玉州区",
            "longname": "广西 玉林市 玉州区"
        },
        {
            "code": "450921",
            "name": "容县",
            "longname": "广西 玉林市 容县"
        },
        {
            "code": "450922",
            "name": "陆川县",
            "longname": "广西 玉林市 陆川县"
        },
        {
            "code": "450923",
            "name": "博白县",
            "longname": "广西 玉林市 博白县"
        },
        {
            "code": "450924",
            "name": "兴业县",
            "longname": "广西 玉林市 兴业县"
        },
        {
            "code": "450981",
            "name": "北流市",
            "longname": "广西 玉林市 北流市"
        },
        {
            "code": "4510",
            "name": "百色市",
            "longname": "广西 百色市"
        },
        {
            "code": "451001",
            "name": "市辖区",
            "longname": "广西 百色市 市辖区"
        },
        {
            "code": "451002",
            "name": "右江区",
            "longname": "广西 百色市 右江区"
        },
        {
            "code": "451021",
            "name": "田阳县",
            "longname": "广西 百色市 田阳县"
        },
        {
            "code": "451022",
            "name": "田东县",
            "longname": "广西 百色市 田东县"
        },
        {
            "code": "451023",
            "name": "平果县",
            "longname": "广西 百色市 平果县"
        },
        {
            "code": "451024",
            "name": "德保县",
            "longname": "广西 百色市 德保县"
        },
        {
            "code": "451025",
            "name": "靖西县",
            "longname": "广西 百色市 靖西县"
        },
        {
            "code": "451026",
            "name": "那坡县",
            "longname": "广西 百色市 那坡县"
        },
        {
            "code": "451027",
            "name": "凌云县",
            "longname": "广西 百色市 凌云县"
        },
        {
            "code": "451028",
            "name": "乐业县",
            "longname": "广西 百色市 乐业县"
        },
        {
            "code": "451029",
            "name": "田林县",
            "longname": "广西 百色市 田林县"
        },
        {
            "code": "451030",
            "name": "西林县",
            "longname": "广西 百色市 西林县"
        },
        {
            "code": "451031",
            "name": "隆林各族自治县",
            "longname": "广西 百色市 隆林各族自治县"
        },
        {
            "code": "4511",
            "name": "贺州市",
            "longname": "广西 贺州市"
        },
        {
            "code": "451101",
            "name": "市辖区",
            "longname": "广西 贺州市 市辖区"
        },
        {
            "code": "451102",
            "name": "八步区",
            "longname": "广西 贺州市 八步区"
        },
        {
            "code": "451119",
            "name": "平桂管理区",
            "longname": "广西 贺州市 平桂管理区"
        },
        {
            "code": "451121",
            "name": "昭平县",
            "longname": "广西 贺州市 昭平县"
        },
        {
            "code": "451122",
            "name": "钟山县",
            "longname": "广西 贺州市 钟山县"
        },
        {
            "code": "451123",
            "name": "富川瑶族自治县",
            "longname": "广西 贺州市 富川瑶族自治县"
        },
        {
            "code": "4512",
            "name": "河池市",
            "longname": "广西 河池市"
        },
        {
            "code": "451201",
            "name": "市辖区",
            "longname": "广西 河池市 市辖区"
        },
        {
            "code": "451202",
            "name": "金城江区",
            "longname": "广西 河池市 金城江区"
        },
        {
            "code": "451221",
            "name": "南丹县",
            "longname": "广西 河池市 南丹县"
        },
        {
            "code": "451222",
            "name": "天峨县",
            "longname": "广西 河池市 天峨县"
        },
        {
            "code": "451223",
            "name": "凤山县",
            "longname": "广西 河池市 凤山县"
        },
        {
            "code": "451224",
            "name": "东兰县",
            "longname": "广西 河池市 东兰县"
        },
        {
            "code": "451225",
            "name": "罗城仫佬族自治县",
            "longname": "广西 河池市 罗城仫佬族自治县"
        },
        {
            "code": "451226",
            "name": "环江毛南族自治县",
            "longname": "广西 河池市 环江毛南族自治县"
        },
        {
            "code": "451227",
            "name": "巴马瑶族自治县",
            "longname": "广西 河池市 巴马瑶族自治县"
        },
        {
            "code": "451228",
            "name": "都安瑶族自治县",
            "longname": "广西 河池市 都安瑶族自治县"
        },
        {
            "code": "451229",
            "name": "大化瑶族自治县",
            "longname": "广西 河池市 大化瑶族自治县"
        },
        {
            "code": "451281",
            "name": "宜州市",
            "longname": "广西 河池市 宜州市"
        },
        {
            "code": "4513",
            "name": "来宾市",
            "longname": "广西 来宾市"
        },
        {
            "code": "451301",
            "name": "市辖区",
            "longname": "广西 来宾市 市辖区"
        },
        {
            "code": "451302",
            "name": "兴宾区",
            "longname": "广西 来宾市 兴宾区"
        },
        {
            "code": "451321",
            "name": "忻城县",
            "longname": "广西 来宾市 忻城县"
        },
        {
            "code": "451322",
            "name": "象州县",
            "longname": "广西 来宾市 象州县"
        },
        {
            "code": "451323",
            "name": "武宣县",
            "longname": "广西 来宾市 武宣县"
        },
        {
            "code": "451324",
            "name": "金秀瑶族自治县",
            "longname": "广西 来宾市 金秀瑶族自治县"
        },
        {
            "code": "451381",
            "name": "合山市",
            "longname": "广西 来宾市 合山市"
        },
        {
            "code": "4514",
            "name": "崇左市",
            "longname": "广西 崇左市"
        },
        {
            "code": "451401",
            "name": "市辖区",
            "longname": "广西 崇左市 市辖区"
        },
        {
            "code": "451402",
            "name": "江洲区",
            "longname": "广西 崇左市 江洲区"
        },
        {
            "code": "451421",
            "name": "扶绥县",
            "longname": "广西 崇左市 扶绥县"
        },
        {
            "code": "451422",
            "name": "宁明县",
            "longname": "广西 崇左市 宁明县"
        },
        {
            "code": "451423",
            "name": "龙州县",
            "longname": "广西 崇左市 龙州县"
        },
        {
            "code": "451424",
            "name": "大新县",
            "longname": "广西 崇左市 大新县"
        },
        {
            "code": "451425",
            "name": "天等县",
            "longname": "广西 崇左市 天等县"
        },
        {
            "code": "451481",
            "name": "凭祥市",
            "longname": "广西 崇左市 凭祥市"
        },
        {
            "code": "46",
            "name": "海南",
            "longname": "海南"
        },
        {
            "code": "4601",
            "name": "海口市",
            "longname": "海南 海口市"
        },
        {
            "code": "460101",
            "name": "市辖区",
            "longname": "海南 海口市 市辖区"
        },
        {
            "code": "460105",
            "name": "秀英区",
            "longname": "海南 海口市 秀英区"
        },
        {
            "code": "460106",
            "name": "龙华区",
            "longname": "海南 海口市 龙华区"
        },
        {
            "code": "460107",
            "name": "琼山区",
            "longname": "海南 海口市 琼山区"
        },
        {
            "code": "460108",
            "name": "美兰区",
            "longname": "海南 海口市 美兰区"
        },
        {
            "code": "4602",
            "name": "三亚市",
            "longname": "海南 三亚市"
        },
        {
            "code": "460201",
            "name": "市辖区",
            "longname": "海南 三亚市 市辖区"
        },
        {
            "code": "4690",
            "name": "省直辖县级行政区划",
            "longname": "海南 省直辖县级行政区划"
        },
        {
            "code": "469001",
            "name": "五指山市",
            "longname": "海南 省直辖县级行政区划 五指山市"
        },
        {
            "code": "469002",
            "name": "琼海市",
            "longname": "海南 省直辖县级行政区划 琼海市"
        },
        {
            "code": "469003",
            "name": "儋州市",
            "longname": "海南 省直辖县级行政区划 儋州市"
        },
        {
            "code": "469005",
            "name": "文昌市",
            "longname": "海南 省直辖县级行政区划 文昌市"
        },
        {
            "code": "469006",
            "name": "万宁市",
            "longname": "海南 省直辖县级行政区划 万宁市"
        },
        {
            "code": "469007",
            "name": "东方市",
            "longname": "海南 省直辖县级行政区划 东方市"
        },
        {
            "code": "469021",
            "name": "定安县",
            "longname": "海南 省直辖县级行政区划 定安县"
        },
        {
            "code": "469022",
            "name": "屯昌县",
            "longname": "海南 省直辖县级行政区划 屯昌县"
        },
        {
            "code": "469023",
            "name": "澄迈县",
            "longname": "海南 省直辖县级行政区划 澄迈县"
        },
        {
            "code": "469024",
            "name": "临高县",
            "longname": "海南 省直辖县级行政区划 临高县"
        },
        {
            "code": "469025",
            "name": "白沙黎族自治县",
            "longname": "海南 省直辖县级行政区划 白沙黎族自治县"
        },
        {
            "code": "469026",
            "name": "昌江黎族自治县",
            "longname": "海南 省直辖县级行政区划 昌江黎族自治县"
        },
        {
            "code": "469027",
            "name": "乐东黎族自治县",
            "longname": "海南 省直辖县级行政区划 乐东黎族自治县"
        },
        {
            "code": "469028",
            "name": "陵水黎族自治县",
            "longname": "海南 省直辖县级行政区划 陵水黎族自治县"
        },
        {
            "code": "469029",
            "name": "保亭黎族苗族自治县",
            "longname": "海南 省直辖县级行政区划 保亭黎族苗族自治县"
        },
        {
            "code": "469030",
            "name": "琼中黎族苗族自治县",
            "longname": "海南 省直辖县级行政区划 琼中黎族苗族自治县"
        },
        {
            "code": "469031",
            "name": "西沙群岛",
            "longname": "海南 省直辖县级行政区划 西沙群岛"
        },
        {
            "code": "469032",
            "name": "南沙群岛",
            "longname": "海南 省直辖县级行政区划 南沙群岛"
        },
        {
            "code": "469033",
            "name": "中沙群岛的岛礁及其海域",
            "longname": "海南 省直辖县级行政区划 中沙群岛的岛礁及其海域"
        },
        {
            "code": "50",
            "name": "重庆",
            "longname": "重庆"
        },
        {
            "code": "5001",
            "name": "市辖区",
            "longname": "重庆 市辖区"
        },
        {
            "code": "500101",
            "name": "万州区",
            "longname": "重庆 市辖区 万州区"
        },
        {
            "code": "500102",
            "name": "涪陵区",
            "longname": "重庆 市辖区 涪陵区"
        },
        {
            "code": "500103",
            "name": "渝中区",
            "longname": "重庆 市辖区 渝中区"
        },
        {
            "code": "500104",
            "name": "大渡口区",
            "longname": "重庆 市辖区 大渡口区"
        },
        {
            "code": "500105",
            "name": "江北区",
            "longname": "重庆 市辖区 江北区"
        },
        {
            "code": "500106",
            "name": "沙坪坝区",
            "longname": "重庆 市辖区 沙坪坝区"
        },
        {
            "code": "500107",
            "name": "九龙坡区",
            "longname": "重庆 市辖区 九龙坡区"
        },
        {
            "code": "500108",
            "name": "南岸区",
            "longname": "重庆 市辖区 南岸区"
        },
        {
            "code": "500109",
            "name": "北碚区",
            "longname": "重庆 市辖区 北碚区"
        },
        {
            "code": "500110",
            "name": "万盛区",
            "longname": "重庆 市辖区 万盛区"
        },
        {
            "code": "500111",
            "name": "双桥区",
            "longname": "重庆 市辖区 双桥区"
        },
        {
            "code": "500112",
            "name": "渝北区",
            "longname": "重庆 市辖区 渝北区"
        },
        {
            "code": "500113",
            "name": "巴南区",
            "longname": "重庆 市辖区 巴南区"
        },
        {
            "code": "500114",
            "name": "黔江区",
            "longname": "重庆 市辖区 黔江区"
        },
        {
            "code": "500115",
            "name": "长寿区",
            "longname": "重庆 市辖区 长寿区"
        },
        {
            "code": "500116",
            "name": "江津区",
            "longname": "重庆 市辖区 江津区"
        },
        {
            "code": "500117",
            "name": "合川区",
            "longname": "重庆 市辖区 合川区"
        },
        {
            "code": "500118",
            "name": "永川区",
            "longname": "重庆 市辖区 永川区"
        },
        {
            "code": "500119",
            "name": "南川区",
            "longname": "重庆 市辖区 南川区"
        },
        {
            "code": "5002",
            "name": "县",
            "longname": "重庆 县"
        },
        {
            "code": "500222",
            "name": "綦江县",
            "longname": "重庆 县 綦江县"
        },
        {
            "code": "500223",
            "name": "潼南县",
            "longname": "重庆 县 潼南县"
        },
        {
            "code": "500224",
            "name": "铜梁县",
            "longname": "重庆 县 铜梁县"
        },
        {
            "code": "500225",
            "name": "大足县",
            "longname": "重庆 县 大足县"
        },
        {
            "code": "500226",
            "name": "荣昌县",
            "longname": "重庆 县 荣昌县"
        },
        {
            "code": "500227",
            "name": "璧山县",
            "longname": "重庆 县 璧山县"
        },
        {
            "code": "500228",
            "name": "梁平县",
            "longname": "重庆 县 梁平县"
        },
        {
            "code": "500229",
            "name": "城口县",
            "longname": "重庆 县 城口县"
        },
        {
            "code": "500230",
            "name": "丰都县",
            "longname": "重庆 县 丰都县"
        },
        {
            "code": "500231",
            "name": "垫江县",
            "longname": "重庆 县 垫江县"
        },
        {
            "code": "500232",
            "name": "武隆县",
            "longname": "重庆 县 武隆县"
        },
        {
            "code": "500233",
            "name": "忠县",
            "longname": "重庆 县 忠县"
        },
        {
            "code": "500234",
            "name": "开县",
            "longname": "重庆 县 开县"
        },
        {
            "code": "500235",
            "name": "云阳县",
            "longname": "重庆 县 云阳县"
        },
        {
            "code": "500236",
            "name": "奉节县",
            "longname": "重庆 县 奉节县"
        },
        {
            "code": "500237",
            "name": "巫山县",
            "longname": "重庆 县 巫山县"
        },
        {
            "code": "500238",
            "name": "巫溪县",
            "longname": "重庆 县 巫溪县"
        },
        {
            "code": "500240",
            "name": "石柱土家族自治县",
            "longname": "重庆 县 石柱土家族自治县"
        },
        {
            "code": "500241",
            "name": "秀山土家族苗族自治县",
            "longname": "重庆 县 秀山土家族苗族自治县"
        },
        {
            "code": "500242",
            "name": "酉阳土家族苗族自治县",
            "longname": "重庆 县 酉阳土家族苗族自治县"
        },
        {
            "code": "500243",
            "name": "彭水苗族土家族自治县",
            "longname": "重庆 县 彭水苗族土家族自治县"
        },
        {
            "code": "51",
            "name": "四川",
            "longname": "四川"
        },
        {
            "code": "5101",
            "name": "成都市",
            "longname": "四川 成都市"
        },
        {
            "code": "510101",
            "name": "市辖区",
            "longname": "四川 成都市 市辖区"
        },
        {
            "code": "510104",
            "name": "锦江区",
            "longname": "四川 成都市 锦江区"
        },
        {
            "code": "510105",
            "name": "青羊区",
            "longname": "四川 成都市 青羊区"
        },
        {
            "code": "510106",
            "name": "金牛区",
            "longname": "四川 成都市 金牛区"
        },
        {
            "code": "510107",
            "name": "武侯区",
            "longname": "四川 成都市 武侯区"
        },
        {
            "code": "510108",
            "name": "成华区",
            "longname": "四川 成都市 成华区"
        },
        {
            "code": "510112",
            "name": "龙泉驿区",
            "longname": "四川 成都市 龙泉驿区"
        },
        {
            "code": "510113",
            "name": "青白江区",
            "longname": "四川 成都市 青白江区"
        },
        {
            "code": "510114",
            "name": "新都区",
            "longname": "四川 成都市 新都区"
        },
        {
            "code": "510115",
            "name": "温江区",
            "longname": "四川 成都市 温江区"
        },
        {
            "code": "510121",
            "name": "金堂县",
            "longname": "四川 成都市 金堂县"
        },
        {
            "code": "510122",
            "name": "双流县",
            "longname": "四川 成都市 双流县"
        },
        {
            "code": "510124",
            "name": "郫县",
            "longname": "四川 成都市 郫县"
        },
        {
            "code": "510129",
            "name": "大邑县",
            "longname": "四川 成都市 大邑县"
        },
        {
            "code": "510131",
            "name": "蒲江县",
            "longname": "四川 成都市 蒲江县"
        },
        {
            "code": "510132",
            "name": "新津县",
            "longname": "四川 成都市 新津县"
        },
        {
            "code": "510181",
            "name": "都江堰市",
            "longname": "四川 成都市 都江堰市"
        },
        {
            "code": "510182",
            "name": "彭州市",
            "longname": "四川 成都市 彭州市"
        },
        {
            "code": "510183",
            "name": "邛崃市",
            "longname": "四川 成都市 邛崃市"
        },
        {
            "code": "510184",
            "name": "崇州市",
            "longname": "四川 成都市 崇州市"
        },
        {
            "code": "5103",
            "name": "自贡市",
            "longname": "四川 自贡市"
        },
        {
            "code": "510301",
            "name": "市辖区",
            "longname": "四川 自贡市 市辖区"
        },
        {
            "code": "510302",
            "name": "自流井区",
            "longname": "四川 自贡市 自流井区"
        },
        {
            "code": "510303",
            "name": "贡井区",
            "longname": "四川 自贡市 贡井区"
        },
        {
            "code": "510304",
            "name": "大安区",
            "longname": "四川 自贡市 大安区"
        },
        {
            "code": "510311",
            "name": "沿滩区",
            "longname": "四川 自贡市 沿滩区"
        },
        {
            "code": "510321",
            "name": "荣县",
            "longname": "四川 自贡市 荣县"
        },
        {
            "code": "510322",
            "name": "富顺县",
            "longname": "四川 自贡市 富顺县"
        },
        {
            "code": "5104",
            "name": "攀枝花市",
            "longname": "四川 攀枝花市"
        },
        {
            "code": "510401",
            "name": "市辖区",
            "longname": "四川 攀枝花市 市辖区"
        },
        {
            "code": "510402",
            "name": "东区",
            "longname": "四川 攀枝花市 东区"
        },
        {
            "code": "510403",
            "name": "西区",
            "longname": "四川 攀枝花市 西区"
        },
        {
            "code": "510411",
            "name": "仁和区",
            "longname": "四川 攀枝花市 仁和区"
        },
        {
            "code": "510421",
            "name": "米易县",
            "longname": "四川 攀枝花市 米易县"
        },
        {
            "code": "510422",
            "name": "盐边县",
            "longname": "四川 攀枝花市 盐边县"
        },
        {
            "code": "5105",
            "name": "泸州市",
            "longname": "四川 泸州市"
        },
        {
            "code": "510501",
            "name": "市辖区",
            "longname": "四川 泸州市 市辖区"
        },
        {
            "code": "510502",
            "name": "江阳区",
            "longname": "四川 泸州市 江阳区"
        },
        {
            "code": "510503",
            "name": "纳溪区",
            "longname": "四川 泸州市 纳溪区"
        },
        {
            "code": "510504",
            "name": "龙马潭区",
            "longname": "四川 泸州市 龙马潭区"
        },
        {
            "code": "510521",
            "name": "泸县",
            "longname": "四川 泸州市 泸县"
        },
        {
            "code": "510522",
            "name": "合江县",
            "longname": "四川 泸州市 合江县"
        },
        {
            "code": "510524",
            "name": "叙永县",
            "longname": "四川 泸州市 叙永县"
        },
        {
            "code": "510525",
            "name": "古蔺县",
            "longname": "四川 泸州市 古蔺县"
        },
        {
            "code": "5106",
            "name": "德阳市",
            "longname": "四川 德阳市"
        },
        {
            "code": "510601",
            "name": "市辖区",
            "longname": "四川 德阳市 市辖区"
        },
        {
            "code": "510603",
            "name": "旌阳区",
            "longname": "四川 德阳市 旌阳区"
        },
        {
            "code": "510623",
            "name": "中江县",
            "longname": "四川 德阳市 中江县"
        },
        {
            "code": "510626",
            "name": "罗江县",
            "longname": "四川 德阳市 罗江县"
        },
        {
            "code": "510681",
            "name": "广汉市",
            "longname": "四川 德阳市 广汉市"
        },
        {
            "code": "510682",
            "name": "什邡市",
            "longname": "四川 德阳市 什邡市"
        },
        {
            "code": "510683",
            "name": "绵竹市",
            "longname": "四川 德阳市 绵竹市"
        },
        {
            "code": "5107",
            "name": "绵阳市",
            "longname": "四川 绵阳市"
        },
        {
            "code": "510701",
            "name": "市辖区",
            "longname": "四川 绵阳市 市辖区"
        },
        {
            "code": "510703",
            "name": "涪城区",
            "longname": "四川 绵阳市 涪城区"
        },
        {
            "code": "510704",
            "name": "游仙区",
            "longname": "四川 绵阳市 游仙区"
        },
        {
            "code": "510722",
            "name": "三台县",
            "longname": "四川 绵阳市 三台县"
        },
        {
            "code": "510723",
            "name": "盐亭县",
            "longname": "四川 绵阳市 盐亭县"
        },
        {
            "code": "510724",
            "name": "安县",
            "longname": "四川 绵阳市 安县"
        },
        {
            "code": "510725",
            "name": "梓潼县",
            "longname": "四川 绵阳市 梓潼县"
        },
        {
            "code": "510726",
            "name": "北川羌族自治县",
            "longname": "四川 绵阳市 北川羌族自治县"
        },
        {
            "code": "510727",
            "name": "平武县",
            "longname": "四川 绵阳市 平武县"
        },
        {
            "code": "510781",
            "name": "江油市",
            "longname": "四川 绵阳市 江油市"
        },
        {
            "code": "5108",
            "name": "广元市",
            "longname": "四川 广元市"
        },
        {
            "code": "510801",
            "name": "市辖区",
            "longname": "四川 广元市 市辖区"
        },
        {
            "code": "510802",
            "name": "利州区",
            "longname": "四川 广元市 利州区"
        },
        {
            "code": "510811",
            "name": "元坝区",
            "longname": "四川 广元市 元坝区"
        },
        {
            "code": "510812",
            "name": "朝天区",
            "longname": "四川 广元市 朝天区"
        },
        {
            "code": "510821",
            "name": "旺苍县",
            "longname": "四川 广元市 旺苍县"
        },
        {
            "code": "510822",
            "name": "青川县",
            "longname": "四川 广元市 青川县"
        },
        {
            "code": "510823",
            "name": "剑阁县",
            "longname": "四川 广元市 剑阁县"
        },
        {
            "code": "510824",
            "name": "苍溪县",
            "longname": "四川 广元市 苍溪县"
        },
        {
            "code": "5109",
            "name": "遂宁市",
            "longname": "四川 遂宁市"
        },
        {
            "code": "510901",
            "name": "市辖区",
            "longname": "四川 遂宁市 市辖区"
        },
        {
            "code": "510903",
            "name": "船山区",
            "longname": "四川 遂宁市 船山区"
        },
        {
            "code": "510904",
            "name": "安居区",
            "longname": "四川 遂宁市 安居区"
        },
        {
            "code": "510921",
            "name": "蓬溪县",
            "longname": "四川 遂宁市 蓬溪县"
        },
        {
            "code": "510922",
            "name": "射洪县",
            "longname": "四川 遂宁市 射洪县"
        },
        {
            "code": "510923",
            "name": "大英县",
            "longname": "四川 遂宁市 大英县"
        },
        {
            "code": "5110",
            "name": "内江市",
            "longname": "四川 内江市"
        },
        {
            "code": "511001",
            "name": "市辖区",
            "longname": "四川 内江市 市辖区"
        },
        {
            "code": "511002",
            "name": "市中区",
            "longname": "四川 内江市 市中区"
        },
        {
            "code": "511011",
            "name": "东兴区",
            "longname": "四川 内江市 东兴区"
        },
        {
            "code": "511024",
            "name": "威远县",
            "longname": "四川 内江市 威远县"
        },
        {
            "code": "511025",
            "name": "资中县",
            "longname": "四川 内江市 资中县"
        },
        {
            "code": "511028",
            "name": "隆昌县",
            "longname": "四川 内江市 隆昌县"
        },
        {
            "code": "5111",
            "name": "乐山市",
            "longname": "四川 乐山市"
        },
        {
            "code": "511101",
            "name": "市辖区",
            "longname": "四川 乐山市 市辖区"
        },
        {
            "code": "511102",
            "name": "市中区",
            "longname": "四川 乐山市 市中区"
        },
        {
            "code": "511111",
            "name": "沙湾区",
            "longname": "四川 乐山市 沙湾区"
        },
        {
            "code": "511112",
            "name": "五通桥区",
            "longname": "四川 乐山市 五通桥区"
        },
        {
            "code": "511113",
            "name": "金口河区",
            "longname": "四川 乐山市 金口河区"
        },
        {
            "code": "511123",
            "name": "犍为县",
            "longname": "四川 乐山市 犍为县"
        },
        {
            "code": "511124",
            "name": "井研县",
            "longname": "四川 乐山市 井研县"
        },
        {
            "code": "511126",
            "name": "夹江县",
            "longname": "四川 乐山市 夹江县"
        },
        {
            "code": "511129",
            "name": "沐川县",
            "longname": "四川 乐山市 沐川县"
        },
        {
            "code": "511132",
            "name": "峨边彝族自治县",
            "longname": "四川 乐山市 峨边彝族自治县"
        },
        {
            "code": "511133",
            "name": "马边彝族自治县",
            "longname": "四川 乐山市 马边彝族自治县"
        },
        {
            "code": "511181",
            "name": "峨眉山市",
            "longname": "四川 乐山市 峨眉山市"
        },
        {
            "code": "5113",
            "name": "南充市",
            "longname": "四川 南充市"
        },
        {
            "code": "511301",
            "name": "市辖区",
            "longname": "四川 南充市 市辖区"
        },
        {
            "code": "511302",
            "name": "顺庆区",
            "longname": "四川 南充市 顺庆区"
        },
        {
            "code": "511303",
            "name": "高坪区",
            "longname": "四川 南充市 高坪区"
        },
        {
            "code": "511304",
            "name": "嘉陵区",
            "longname": "四川 南充市 嘉陵区"
        },
        {
            "code": "511321",
            "name": "南部县",
            "longname": "四川 南充市 南部县"
        },
        {
            "code": "511322",
            "name": "营山县",
            "longname": "四川 南充市 营山县"
        },
        {
            "code": "511323",
            "name": "蓬安县",
            "longname": "四川 南充市 蓬安县"
        },
        {
            "code": "511324",
            "name": "仪陇县",
            "longname": "四川 南充市 仪陇县"
        },
        {
            "code": "511325",
            "name": "西充县",
            "longname": "四川 南充市 西充县"
        },
        {
            "code": "511381",
            "name": "阆中市",
            "longname": "四川 南充市 阆中市"
        },
        {
            "code": "5114",
            "name": "眉山市",
            "longname": "四川 眉山市"
        },
        {
            "code": "511401",
            "name": "市辖区",
            "longname": "四川 眉山市 市辖区"
        },
        {
            "code": "511402",
            "name": "东坡区",
            "longname": "四川 眉山市 东坡区"
        },
        {
            "code": "511421",
            "name": "仁寿县",
            "longname": "四川 眉山市 仁寿县"
        },
        {
            "code": "511422",
            "name": "彭山县",
            "longname": "四川 眉山市 彭山县"
        },
        {
            "code": "511423",
            "name": "洪雅县",
            "longname": "四川 眉山市 洪雅县"
        },
        {
            "code": "511424",
            "name": "丹棱县",
            "longname": "四川 眉山市 丹棱县"
        },
        {
            "code": "511425",
            "name": "青神县",
            "longname": "四川 眉山市 青神县"
        },
        {
            "code": "5115",
            "name": "宜宾市",
            "longname": "四川 宜宾市"
        },
        {
            "code": "511501",
            "name": "市辖区",
            "longname": "四川 宜宾市 市辖区"
        },
        {
            "code": "511502",
            "name": "翠屏区",
            "longname": "四川 宜宾市 翠屏区"
        },
        {
            "code": "511521",
            "name": "宜宾县",
            "longname": "四川 宜宾市 宜宾县"
        },
        {
            "code": "511522",
            "name": "南溪县",
            "longname": "四川 宜宾市 南溪县"
        },
        {
            "code": "511523",
            "name": "江安县",
            "longname": "四川 宜宾市 江安县"
        },
        {
            "code": "511524",
            "name": "长宁县",
            "longname": "四川 宜宾市 长宁县"
        },
        {
            "code": "511525",
            "name": "高县",
            "longname": "四川 宜宾市 高县"
        },
        {
            "code": "511526",
            "name": "珙县",
            "longname": "四川 宜宾市 珙县"
        },
        {
            "code": "511527",
            "name": "筠连县",
            "longname": "四川 宜宾市 筠连县"
        },
        {
            "code": "511528",
            "name": "兴文县",
            "longname": "四川 宜宾市 兴文县"
        },
        {
            "code": "511529",
            "name": "屏山县",
            "longname": "四川 宜宾市 屏山县"
        },
        {
            "code": "5116",
            "name": "广安市",
            "longname": "四川 广安市"
        },
        {
            "code": "511601",
            "name": "市辖区",
            "longname": "四川 广安市 市辖区"
        },
        {
            "code": "511602",
            "name": "广安区",
            "longname": "四川 广安市 广安区"
        },
        {
            "code": "511621",
            "name": "岳池县",
            "longname": "四川 广安市 岳池县"
        },
        {
            "code": "511622",
            "name": "武胜县",
            "longname": "四川 广安市 武胜县"
        },
        {
            "code": "511623",
            "name": "邻水县",
            "longname": "四川 广安市 邻水县"
        },
        {
            "code": "511681",
            "name": "华蓥市",
            "longname": "四川 广安市 华蓥市"
        },
        {
            "code": "5117",
            "name": "达州市",
            "longname": "四川 达州市"
        },
        {
            "code": "511701",
            "name": "市辖区",
            "longname": "四川 达州市 市辖区"
        },
        {
            "code": "511702",
            "name": "通川区",
            "longname": "四川 达州市 通川区"
        },
        {
            "code": "511721",
            "name": "达县",
            "longname": "四川 达州市 达县"
        },
        {
            "code": "511722",
            "name": "宣汉县",
            "longname": "四川 达州市 宣汉县"
        },
        {
            "code": "511723",
            "name": "开江县",
            "longname": "四川 达州市 开江县"
        },
        {
            "code": "511724",
            "name": "大竹县",
            "longname": "四川 达州市 大竹县"
        },
        {
            "code": "511725",
            "name": "渠县",
            "longname": "四川 达州市 渠县"
        },
        {
            "code": "511781",
            "name": "万源市",
            "longname": "四川 达州市 万源市"
        },
        {
            "code": "5118",
            "name": "雅安市",
            "longname": "四川 雅安市"
        },
        {
            "code": "511801",
            "name": "市辖区",
            "longname": "四川 雅安市 市辖区"
        },
        {
            "code": "511802",
            "name": "雨城区",
            "longname": "四川 雅安市 雨城区"
        },
        {
            "code": "511821",
            "name": "名山县",
            "longname": "四川 雅安市 名山县"
        },
        {
            "code": "511822",
            "name": "荥经县",
            "longname": "四川 雅安市 荥经县"
        },
        {
            "code": "511823",
            "name": "汉源县",
            "longname": "四川 雅安市 汉源县"
        },
        {
            "code": "511824",
            "name": "石棉县",
            "longname": "四川 雅安市 石棉县"
        },
        {
            "code": "511825",
            "name": "天全县",
            "longname": "四川 雅安市 天全县"
        },
        {
            "code": "511826",
            "name": "芦山县",
            "longname": "四川 雅安市 芦山县"
        },
        {
            "code": "511827",
            "name": "宝兴县",
            "longname": "四川 雅安市 宝兴县"
        },
        {
            "code": "5119",
            "name": "巴中市",
            "longname": "四川 巴中市"
        },
        {
            "code": "511901",
            "name": "市辖区",
            "longname": "四川 巴中市 市辖区"
        },
        {
            "code": "511902",
            "name": "巴州区",
            "longname": "四川 巴中市 巴州区"
        },
        {
            "code": "511903",
            "name": "恩阳区",
            "longname": "四川 巴中市 恩阳区"
        },
        {
            "code": "511921",
            "name": "通江县",
            "longname": "四川 巴中市 通江县"
        },
        {
            "code": "511922",
            "name": "南江县",
            "longname": "四川 巴中市 南江县"
        },
        {
            "code": "511923",
            "name": "平昌县",
            "longname": "四川 巴中市 平昌县"
        },
        {
            "code": "5120",
            "name": "资阳市",
            "longname": "四川 资阳市"
        },
        {
            "code": "512001",
            "name": "市辖区",
            "longname": "四川 资阳市 市辖区"
        },
        {
            "code": "512002",
            "name": "雁江区",
            "longname": "四川 资阳市 雁江区"
        },
        {
            "code": "512021",
            "name": "安岳县",
            "longname": "四川 资阳市 安岳县"
        },
        {
            "code": "512022",
            "name": "乐至县",
            "longname": "四川 资阳市 乐至县"
        },
        {
            "code": "512081",
            "name": "简阳市",
            "longname": "四川 资阳市 简阳市"
        },
        {
            "code": "5132",
            "name": "阿坝藏族羌族自治州",
            "longname": "四川 阿坝藏族羌族自治州"
        },
        {
            "code": "513221",
            "name": "汶川县",
            "longname": "四川 阿坝藏族羌族自治州 汶川县"
        },
        {
            "code": "513222",
            "name": "理县",
            "longname": "四川 阿坝藏族羌族自治州 理县"
        },
        {
            "code": "513223",
            "name": "茂县",
            "longname": "四川 阿坝藏族羌族自治州 茂县"
        },
        {
            "code": "513224",
            "name": "松潘县",
            "longname": "四川 阿坝藏族羌族自治州 松潘县"
        },
        {
            "code": "513225",
            "name": "九寨沟县",
            "longname": "四川 阿坝藏族羌族自治州 九寨沟县"
        },
        {
            "code": "513226",
            "name": "金川县",
            "longname": "四川 阿坝藏族羌族自治州 金川县"
        },
        {
            "code": "513227",
            "name": "小金县",
            "longname": "四川 阿坝藏族羌族自治州 小金县"
        },
        {
            "code": "513228",
            "name": "黑水县",
            "longname": "四川 阿坝藏族羌族自治州 黑水县"
        },
        {
            "code": "513229",
            "name": "马尔康县",
            "longname": "四川 阿坝藏族羌族自治州 马尔康县"
        },
        {
            "code": "513230",
            "name": "壤塘县",
            "longname": "四川 阿坝藏族羌族自治州 壤塘县"
        },
        {
            "code": "513231",
            "name": "阿坝县",
            "longname": "四川 阿坝藏族羌族自治州 阿坝县"
        },
        {
            "code": "513232",
            "name": "若尔盖县",
            "longname": "四川 阿坝藏族羌族自治州 若尔盖县"
        },
        {
            "code": "513233",
            "name": "红原县",
            "longname": "四川 阿坝藏族羌族自治州 红原县"
        },
        {
            "code": "5133",
            "name": "甘孜藏族自治州",
            "longname": "四川 甘孜藏族自治州"
        },
        {
            "code": "513321",
            "name": "康定县",
            "longname": "四川 甘孜藏族自治州 康定县"
        },
        {
            "code": "513322",
            "name": "泸定县",
            "longname": "四川 甘孜藏族自治州 泸定县"
        },
        {
            "code": "513323",
            "name": "丹巴县",
            "longname": "四川 甘孜藏族自治州 丹巴县"
        },
        {
            "code": "513324",
            "name": "九龙县",
            "longname": "四川 甘孜藏族自治州 九龙县"
        },
        {
            "code": "513325",
            "name": "雅江县",
            "longname": "四川 甘孜藏族自治州 雅江县"
        },
        {
            "code": "513326",
            "name": "道孚县",
            "longname": "四川 甘孜藏族自治州 道孚县"
        },
        {
            "code": "513327",
            "name": "炉霍县",
            "longname": "四川 甘孜藏族自治州 炉霍县"
        },
        {
            "code": "513328",
            "name": "甘孜县",
            "longname": "四川 甘孜藏族自治州 甘孜县"
        },
        {
            "code": "513329",
            "name": "新龙县",
            "longname": "四川 甘孜藏族自治州 新龙县"
        },
        {
            "code": "513330",
            "name": "德格县",
            "longname": "四川 甘孜藏族自治州 德格县"
        },
        {
            "code": "513331",
            "name": "白玉县",
            "longname": "四川 甘孜藏族自治州 白玉县"
        },
        {
            "code": "513332",
            "name": "石渠县",
            "longname": "四川 甘孜藏族自治州 石渠县"
        },
        {
            "code": "513333",
            "name": "色达县",
            "longname": "四川 甘孜藏族自治州 色达县"
        },
        {
            "code": "513334",
            "name": "理塘县",
            "longname": "四川 甘孜藏族自治州 理塘县"
        },
        {
            "code": "513335",
            "name": "巴塘县",
            "longname": "四川 甘孜藏族自治州 巴塘县"
        },
        {
            "code": "513336",
            "name": "乡城县",
            "longname": "四川 甘孜藏族自治州 乡城县"
        },
        {
            "code": "513337",
            "name": "稻城县",
            "longname": "四川 甘孜藏族自治州 稻城县"
        },
        {
            "code": "513338",
            "name": "得荣县",
            "longname": "四川 甘孜藏族自治州 得荣县"
        },
        {
            "code": "5134",
            "name": "凉山彝族自治州",
            "longname": "四川 凉山彝族自治州"
        },
        {
            "code": "513401",
            "name": "西昌市",
            "longname": "四川 凉山彝族自治州 西昌市"
        },
        {
            "code": "513422",
            "name": "木里藏族自治县",
            "longname": "四川 凉山彝族自治州 木里藏族自治县"
        },
        {
            "code": "513423",
            "name": "盐源县",
            "longname": "四川 凉山彝族自治州 盐源县"
        },
        {
            "code": "513424",
            "name": "德昌县",
            "longname": "四川 凉山彝族自治州 德昌县"
        },
        {
            "code": "513425",
            "name": "会理县",
            "longname": "四川 凉山彝族自治州 会理县"
        },
        {
            "code": "513426",
            "name": "会东县",
            "longname": "四川 凉山彝族自治州 会东县"
        },
        {
            "code": "513427",
            "name": "宁南县",
            "longname": "四川 凉山彝族自治州 宁南县"
        },
        {
            "code": "513428",
            "name": "普格县",
            "longname": "四川 凉山彝族自治州 普格县"
        },
        {
            "code": "513429",
            "name": "布拖县",
            "longname": "四川 凉山彝族自治州 布拖县"
        },
        {
            "code": "513430",
            "name": "金阳县",
            "longname": "四川 凉山彝族自治州 金阳县"
        },
        {
            "code": "513431",
            "name": "昭觉县",
            "longname": "四川 凉山彝族自治州 昭觉县"
        },
        {
            "code": "513432",
            "name": "喜德县",
            "longname": "四川 凉山彝族自治州 喜德县"
        },
        {
            "code": "513433",
            "name": "冕宁县",
            "longname": "四川 凉山彝族自治州 冕宁县"
        },
        {
            "code": "513434",
            "name": "越西县",
            "longname": "四川 凉山彝族自治州 越西县"
        },
        {
            "code": "513435",
            "name": "甘洛县",
            "longname": "四川 凉山彝族自治州 甘洛县"
        },
        {
            "code": "513436",
            "name": "美姑县",
            "longname": "四川 凉山彝族自治州 美姑县"
        },
        {
            "code": "513437",
            "name": "雷波县",
            "longname": "四川 凉山彝族自治州 雷波县"
        },
        {
            "code": "52",
            "name": "贵州",
            "longname": "贵州"
        },
        {
            "code": "5201",
            "name": "贵阳市",
            "longname": "贵州 贵阳市"
        },
        {
            "code": "520101",
            "name": "市辖区",
            "longname": "贵州 贵阳市 市辖区"
        },
        {
            "code": "520102",
            "name": "南明区",
            "longname": "贵州 贵阳市 南明区"
        },
        {
            "code": "520103",
            "name": "云岩区",
            "longname": "贵州 贵阳市 云岩区"
        },
        {
            "code": "520111",
            "name": "花溪区",
            "longname": "贵州 贵阳市 花溪区"
        },
        {
            "code": "520112",
            "name": "乌当区",
            "longname": "贵州 贵阳市 乌当区"
        },
        {
            "code": "520113",
            "name": "白云区",
            "longname": "贵州 贵阳市 白云区"
        },
        {
            "code": "520114",
            "name": "小河区",
            "longname": "贵州 贵阳市 小河区"
        },
        {
            "code": "520121",
            "name": "开阳县",
            "longname": "贵州 贵阳市 开阳县"
        },
        {
            "code": "520122",
            "name": "息烽县",
            "longname": "贵州 贵阳市 息烽县"
        },
        {
            "code": "520123",
            "name": "修文县",
            "longname": "贵州 贵阳市 修文县"
        },
        {
            "code": "520181",
            "name": "清镇市",
            "longname": "贵州 贵阳市 清镇市"
        },
        {
            "code": "5202",
            "name": "六盘水市",
            "longname": "贵州 六盘水市"
        },
        {
            "code": "520201",
            "name": "钟山区",
            "longname": "贵州 六盘水市 钟山区"
        },
        {
            "code": "520203",
            "name": "六枝特区",
            "longname": "贵州 六盘水市 六枝特区"
        },
        {
            "code": "520221",
            "name": "水城县",
            "longname": "贵州 六盘水市 水城县"
        },
        {
            "code": "520222",
            "name": "盘县",
            "longname": "贵州 六盘水市 盘县"
        },
        {
            "code": "5203",
            "name": "遵义市",
            "longname": "贵州 遵义市"
        },
        {
            "code": "520301",
            "name": "市辖区",
            "longname": "贵州 遵义市 市辖区"
        },
        {
            "code": "520302",
            "name": "红花岗区",
            "longname": "贵州 遵义市 红花岗区"
        },
        {
            "code": "520303",
            "name": "汇川区",
            "longname": "贵州 遵义市 汇川区"
        },
        {
            "code": "520321",
            "name": "遵义县",
            "longname": "贵州 遵义市 遵义县"
        },
        {
            "code": "520322",
            "name": "桐梓县",
            "longname": "贵州 遵义市 桐梓县"
        },
        {
            "code": "520323",
            "name": "绥阳县",
            "longname": "贵州 遵义市 绥阳县"
        },
        {
            "code": "520324",
            "name": "正安县",
            "longname": "贵州 遵义市 正安县"
        },
        {
            "code": "520325",
            "name": "道真仡佬族苗族自治县",
            "longname": "贵州 遵义市 道真仡佬族苗族自治县"
        },
        {
            "code": "520326",
            "name": "务川仡佬族苗族自治县",
            "longname": "贵州 遵义市 务川仡佬族苗族自治县"
        },
        {
            "code": "520327",
            "name": "凤冈县",
            "longname": "贵州 遵义市 凤冈县"
        },
        {
            "code": "520328",
            "name": "湄潭县",
            "longname": "贵州 遵义市 湄潭县"
        },
        {
            "code": "520329",
            "name": "余庆县",
            "longname": "贵州 遵义市 余庆县"
        },
        {
            "code": "520330",
            "name": "习水县",
            "longname": "贵州 遵义市 习水县"
        },
        {
            "code": "520381",
            "name": "赤水市",
            "longname": "贵州 遵义市 赤水市"
        },
        {
            "code": "520382",
            "name": "仁怀市",
            "longname": "贵州 遵义市 仁怀市"
        },
        {
            "code": "5204",
            "name": "安顺市",
            "longname": "贵州 安顺市"
        },
        {
            "code": "520401",
            "name": "市辖区",
            "longname": "贵州 安顺市 市辖区"
        },
        {
            "code": "520402",
            "name": "西秀区",
            "longname": "贵州 安顺市 西秀区"
        },
        {
            "code": "520421",
            "name": "平坝县",
            "longname": "贵州 安顺市 平坝县"
        },
        {
            "code": "520422",
            "name": "普定县",
            "longname": "贵州 安顺市 普定县"
        },
        {
            "code": "520423",
            "name": "镇宁布依族苗族自治县",
            "longname": "贵州 安顺市 镇宁布依族苗族自治县"
        },
        {
            "code": "520424",
            "name": "关岭布依族苗族自治县",
            "longname": "贵州 安顺市 关岭布依族苗族自治县"
        },
        {
            "code": "520425",
            "name": "紫云苗族布依族自治县",
            "longname": "贵州 安顺市 紫云苗族布依族自治县"
        },
        {
            "code": "5222",
            "name": "铜仁地区",
            "longname": "贵州 铜仁地区"
        },
        {
            "code": "522201",
            "name": "铜仁市",
            "longname": "贵州 铜仁地区 铜仁市"
        },
        {
            "code": "522222",
            "name": "江口县",
            "longname": "贵州 铜仁地区 江口县"
        },
        {
            "code": "522223",
            "name": "玉屏侗族自治县",
            "longname": "贵州 铜仁地区 玉屏侗族自治县"
        },
        {
            "code": "522224",
            "name": "石阡县",
            "longname": "贵州 铜仁地区 石阡县"
        },
        {
            "code": "522225",
            "name": "思南县",
            "longname": "贵州 铜仁地区 思南县"
        },
        {
            "code": "522226",
            "name": "印江土家族苗族自治县",
            "longname": "贵州 铜仁地区 印江土家族苗族自治县"
        },
        {
            "code": "522227",
            "name": "德江县",
            "longname": "贵州 铜仁地区 德江县"
        },
        {
            "code": "522228",
            "name": "沿河土家族自治县",
            "longname": "贵州 铜仁地区 沿河土家族自治县"
        },
        {
            "code": "522229",
            "name": "松桃苗族自治县",
            "longname": "贵州 铜仁地区 松桃苗族自治县"
        },
        {
            "code": "522230",
            "name": "万山特区",
            "longname": "贵州 铜仁地区 万山特区"
        },
        {
            "code": "5223",
            "name": "黔西南布依族苗族自治州",
            "longname": "贵州 黔西南布依族苗族自治州"
        },
        {
            "code": "522301",
            "name": "兴义市",
            "longname": "贵州 黔西南布依族苗族自治州 兴义市"
        },
        {
            "code": "522322",
            "name": "兴仁县",
            "longname": "贵州 黔西南布依族苗族自治州 兴仁县"
        },
        {
            "code": "522323",
            "name": "普安县",
            "longname": "贵州 黔西南布依族苗族自治州 普安县"
        },
        {
            "code": "522324",
            "name": "晴隆县",
            "longname": "贵州 黔西南布依族苗族自治州 晴隆县"
        },
        {
            "code": "522325",
            "name": "贞丰县",
            "longname": "贵州 黔西南布依族苗族自治州 贞丰县"
        },
        {
            "code": "522326",
            "name": "望谟县",
            "longname": "贵州 黔西南布依族苗族自治州 望谟县"
        },
        {
            "code": "522327",
            "name": "册亨县",
            "longname": "贵州 黔西南布依族苗族自治州 册亨县"
        },
        {
            "code": "522328",
            "name": "安龙县",
            "longname": "贵州 黔西南布依族苗族自治州 安龙县"
        },
        {
            "code": "5224",
            "name": "毕节地区",
            "longname": "贵州 毕节地区"
        },
        {
            "code": "522401",
            "name": "毕节市",
            "longname": "贵州 毕节地区 毕节市"
        },
        {
            "code": "522422",
            "name": "大方县",
            "longname": "贵州 毕节地区 大方县"
        },
        {
            "code": "522423",
            "name": "黔西县",
            "longname": "贵州 毕节地区 黔西县"
        },
        {
            "code": "522424",
            "name": "金沙县",
            "longname": "贵州 毕节地区 金沙县"
        },
        {
            "code": "522425",
            "name": "织金县",
            "longname": "贵州 毕节地区 织金县"
        },
        {
            "code": "522426",
            "name": "纳雍县",
            "longname": "贵州 毕节地区 纳雍县"
        },
        {
            "code": "522427",
            "name": "威宁彝族回族苗族自治县",
            "longname": "贵州 毕节地区 威宁彝族回族苗族自治县"
        },
        {
            "code": "522428",
            "name": "赫章县",
            "longname": "贵州 毕节地区 赫章县"
        },
        {
            "code": "5226",
            "name": "黔东南苗族侗族自治州",
            "longname": "贵州 黔东南苗族侗族自治州"
        },
        {
            "code": "522601",
            "name": "凯里市",
            "longname": "贵州 黔东南苗族侗族自治州 凯里市"
        },
        {
            "code": "522622",
            "name": "黄平县",
            "longname": "贵州 黔东南苗族侗族自治州 黄平县"
        },
        {
            "code": "522623",
            "name": "施秉县",
            "longname": "贵州 黔东南苗族侗族自治州 施秉县"
        },
        {
            "code": "522624",
            "name": "三穗县",
            "longname": "贵州 黔东南苗族侗族自治州 三穗县"
        },
        {
            "code": "522625",
            "name": "镇远县",
            "longname": "贵州 黔东南苗族侗族自治州 镇远县"
        },
        {
            "code": "522626",
            "name": "岑巩县",
            "longname": "贵州 黔东南苗族侗族自治州 岑巩县"
        },
        {
            "code": "522627",
            "name": "天柱县",
            "longname": "贵州 黔东南苗族侗族自治州 天柱县"
        },
        {
            "code": "522628",
            "name": "锦屏县",
            "longname": "贵州 黔东南苗族侗族自治州 锦屏县"
        },
        {
            "code": "522629",
            "name": "剑河县",
            "longname": "贵州 黔东南苗族侗族自治州 剑河县"
        },
        {
            "code": "522630",
            "name": "台江县",
            "longname": "贵州 黔东南苗族侗族自治州 台江县"
        },
        {
            "code": "522631",
            "name": "黎平县",
            "longname": "贵州 黔东南苗族侗族自治州 黎平县"
        },
        {
            "code": "522632",
            "name": "榕江县",
            "longname": "贵州 黔东南苗族侗族自治州 榕江县"
        },
        {
            "code": "522633",
            "name": "从江县",
            "longname": "贵州 黔东南苗族侗族自治州 从江县"
        },
        {
            "code": "522634",
            "name": "雷山县",
            "longname": "贵州 黔东南苗族侗族自治州 雷山县"
        },
        {
            "code": "522635",
            "name": "麻江县",
            "longname": "贵州 黔东南苗族侗族自治州 麻江县"
        },
        {
            "code": "522636",
            "name": "丹寨县",
            "longname": "贵州 黔东南苗族侗族自治州 丹寨县"
        },
        {
            "code": "5227",
            "name": "黔南布依族苗族自治州",
            "longname": "贵州 黔南布依族苗族自治州"
        },
        {
            "code": "522701",
            "name": "都匀市",
            "longname": "贵州 黔南布依族苗族自治州 都匀市"
        },
        {
            "code": "522702",
            "name": "福泉市",
            "longname": "贵州 黔南布依族苗族自治州 福泉市"
        },
        {
            "code": "522722",
            "name": "荔波县",
            "longname": "贵州 黔南布依族苗族自治州 荔波县"
        },
        {
            "code": "522723",
            "name": "贵定县",
            "longname": "贵州 黔南布依族苗族自治州 贵定县"
        },
        {
            "code": "522725",
            "name": "瓮安县",
            "longname": "贵州 黔南布依族苗族自治州 瓮安县"
        },
        {
            "code": "522726",
            "name": "独山县",
            "longname": "贵州 黔南布依族苗族自治州 独山县"
        },
        {
            "code": "522727",
            "name": "平塘县",
            "longname": "贵州 黔南布依族苗族自治州 平塘县"
        },
        {
            "code": "522728",
            "name": "罗甸县",
            "longname": "贵州 黔南布依族苗族自治州 罗甸县"
        },
        {
            "code": "522729",
            "name": "长顺县",
            "longname": "贵州 黔南布依族苗族自治州 长顺县"
        },
        {
            "code": "522730",
            "name": "龙里县",
            "longname": "贵州 黔南布依族苗族自治州 龙里县"
        },
        {
            "code": "522731",
            "name": "惠水县",
            "longname": "贵州 黔南布依族苗族自治州 惠水县"
        },
        {
            "code": "522732",
            "name": "三都水族自治县",
            "longname": "贵州 黔南布依族苗族自治州 三都水族自治县"
        },
        {
            "code": "53",
            "name": "云南",
            "longname": "云南"
        },
        {
            "code": "5301",
            "name": "昆明市",
            "longname": "云南 昆明市"
        },
        {
            "code": "530101",
            "name": "市辖区",
            "longname": "云南 昆明市 市辖区"
        },
        {
            "code": "530102",
            "name": "五华区",
            "longname": "云南 昆明市 五华区"
        },
        {
            "code": "530103",
            "name": "盘龙区",
            "longname": "云南 昆明市 盘龙区"
        },
        {
            "code": "530111",
            "name": "官渡区",
            "longname": "云南 昆明市 官渡区"
        },
        {
            "code": "530112",
            "name": "西山区",
            "longname": "云南 昆明市 西山区"
        },
        {
            "code": "530113",
            "name": "东川区",
            "longname": "云南 昆明市 东川区"
        },
        {
            "code": "530121",
            "name": "呈贡县",
            "longname": "云南 昆明市 呈贡县"
        },
        {
            "code": "530122",
            "name": "晋宁县",
            "longname": "云南 昆明市 晋宁县"
        },
        {
            "code": "530124",
            "name": "富民县",
            "longname": "云南 昆明市 富民县"
        },
        {
            "code": "530125",
            "name": "宜良县",
            "longname": "云南 昆明市 宜良县"
        },
        {
            "code": "530126",
            "name": "石林彝族自治县",
            "longname": "云南 昆明市 石林彝族自治县"
        },
        {
            "code": "530127",
            "name": "嵩明县",
            "longname": "云南 昆明市 嵩明县"
        },
        {
            "code": "530128",
            "name": "禄劝彝族苗族自治县",
            "longname": "云南 昆明市 禄劝彝族苗族自治县"
        },
        {
            "code": "530129",
            "name": "寻甸回族彝族自治县",
            "longname": "云南 昆明市 寻甸回族彝族自治县"
        },
        {
            "code": "530181",
            "name": "安宁市",
            "longname": "云南 昆明市 安宁市"
        },
        {
            "code": "5303",
            "name": "曲靖市",
            "longname": "云南 曲靖市"
        },
        {
            "code": "530301",
            "name": "市辖区",
            "longname": "云南 曲靖市 市辖区"
        },
        {
            "code": "530302",
            "name": "麒麟区",
            "longname": "云南 曲靖市 麒麟区"
        },
        {
            "code": "530304",
            "name": "经济技术开发区",
            "longname": "云南 曲靖市 经济技术开发区"
        },
        {
            "code": "530321",
            "name": "马龙县",
            "longname": "云南 曲靖市 马龙县"
        },
        {
            "code": "530322",
            "name": "陆良县",
            "longname": "云南 曲靖市 陆良县"
        },
        {
            "code": "530323",
            "name": "师宗县",
            "longname": "云南 曲靖市 师宗县"
        },
        {
            "code": "530324",
            "name": "罗平县",
            "longname": "云南 曲靖市 罗平县"
        },
        {
            "code": "530325",
            "name": "富源县",
            "longname": "云南 曲靖市 富源县"
        },
        {
            "code": "530326",
            "name": "会泽县",
            "longname": "云南 曲靖市 会泽县"
        },
        {
            "code": "530328",
            "name": "沾益县",
            "longname": "云南 曲靖市 沾益县"
        },
        {
            "code": "530381",
            "name": "宣威市",
            "longname": "云南 曲靖市 宣威市"
        },
        {
            "code": "5304",
            "name": "玉溪市",
            "longname": "云南 玉溪市"
        },
        {
            "code": "530401",
            "name": "市辖区",
            "longname": "云南 玉溪市 市辖区"
        },
        {
            "code": "530402",
            "name": "红塔区",
            "longname": "云南 玉溪市 红塔区"
        },
        {
            "code": "530421",
            "name": "江川县",
            "longname": "云南 玉溪市 江川县"
        },
        {
            "code": "530422",
            "name": "澄江县",
            "longname": "云南 玉溪市 澄江县"
        },
        {
            "code": "530423",
            "name": "通海县",
            "longname": "云南 玉溪市 通海县"
        },
        {
            "code": "530424",
            "name": "华宁县",
            "longname": "云南 玉溪市 华宁县"
        },
        {
            "code": "530425",
            "name": "易门县",
            "longname": "云南 玉溪市 易门县"
        },
        {
            "code": "530426",
            "name": "峨山彝族自治县",
            "longname": "云南 玉溪市 峨山彝族自治县"
        },
        {
            "code": "530427",
            "name": "新平彝族傣族自治县",
            "longname": "云南 玉溪市 新平彝族傣族自治县"
        },
        {
            "code": "530428",
            "name": "元江哈尼族彝族傣族自治县",
            "longname": "云南 玉溪市 元江哈尼族彝族傣族自治县"
        },
        {
            "code": "5305",
            "name": "保山市",
            "longname": "云南 保山市"
        },
        {
            "code": "530501",
            "name": "市辖区",
            "longname": "云南 保山市 市辖区"
        },
        {
            "code": "530502",
            "name": "隆阳区",
            "longname": "云南 保山市 隆阳区"
        },
        {
            "code": "530521",
            "name": "施甸县",
            "longname": "云南 保山市 施甸县"
        },
        {
            "code": "530522",
            "name": "腾冲县",
            "longname": "云南 保山市 腾冲县"
        },
        {
            "code": "530523",
            "name": "龙陵县",
            "longname": "云南 保山市 龙陵县"
        },
        {
            "code": "530524",
            "name": "昌宁县",
            "longname": "云南 保山市 昌宁县"
        },
        {
            "code": "5306",
            "name": "昭通市",
            "longname": "云南 昭通市"
        },
        {
            "code": "530601",
            "name": "市辖区",
            "longname": "云南 昭通市 市辖区"
        },
        {
            "code": "530602",
            "name": "昭阳区",
            "longname": "云南 昭通市 昭阳区"
        },
        {
            "code": "530621",
            "name": "鲁甸县",
            "longname": "云南 昭通市 鲁甸县"
        },
        {
            "code": "530622",
            "name": "巧家县",
            "longname": "云南 昭通市 巧家县"
        },
        {
            "code": "530623",
            "name": "盐津县",
            "longname": "云南 昭通市 盐津县"
        },
        {
            "code": "530624",
            "name": "大关县",
            "longname": "云南 昭通市 大关县"
        },
        {
            "code": "530625",
            "name": "永善县",
            "longname": "云南 昭通市 永善县"
        },
        {
            "code": "530626",
            "name": "绥江县",
            "longname": "云南 昭通市 绥江县"
        },
        {
            "code": "530627",
            "name": "镇雄县",
            "longname": "云南 昭通市 镇雄县"
        },
        {
            "code": "530628",
            "name": "彝良县",
            "longname": "云南 昭通市 彝良县"
        },
        {
            "code": "530629",
            "name": "威信县",
            "longname": "云南 昭通市 威信县"
        },
        {
            "code": "530630",
            "name": "水富县",
            "longname": "云南 昭通市 水富县"
        },
        {
            "code": "5307",
            "name": "丽江市",
            "longname": "云南 丽江市"
        },
        {
            "code": "530701",
            "name": "市辖区",
            "longname": "云南 丽江市 市辖区"
        },
        {
            "code": "530702",
            "name": "古城区",
            "longname": "云南 丽江市 古城区"
        },
        {
            "code": "530721",
            "name": "玉龙纳西族自治县",
            "longname": "云南 丽江市 玉龙纳西族自治县"
        },
        {
            "code": "530722",
            "name": "永胜县",
            "longname": "云南 丽江市 永胜县"
        },
        {
            "code": "530723",
            "name": "华坪县",
            "longname": "云南 丽江市 华坪县"
        },
        {
            "code": "530724",
            "name": "宁蒗彝族自治县",
            "longname": "云南 丽江市 宁蒗彝族自治县"
        },
        {
            "code": "5308",
            "name": "普洱市",
            "longname": "云南 普洱市"
        },
        {
            "code": "530801",
            "name": "市辖区",
            "longname": "云南 普洱市 市辖区"
        },
        {
            "code": "530802",
            "name": "思茅区",
            "longname": "云南 普洱市 思茅区"
        },
        {
            "code": "530821",
            "name": "宁洱哈尼族彝族自治县",
            "longname": "云南 普洱市 宁洱哈尼族彝族自治县"
        },
        {
            "code": "530822",
            "name": "墨江哈尼族自治县",
            "longname": "云南 普洱市 墨江哈尼族自治县"
        },
        {
            "code": "530823",
            "name": "景东彝族自治县",
            "longname": "云南 普洱市 景东彝族自治县"
        },
        {
            "code": "530824",
            "name": "景谷傣族彝族自治县",
            "longname": "云南 普洱市 景谷傣族彝族自治县"
        },
        {
            "code": "530825",
            "name": "镇沅彝族哈尼族拉祜族自治县",
            "longname": "云南 普洱市 镇沅彝族哈尼族拉祜族自治县"
        },
        {
            "code": "530826",
            "name": "江城哈尼族彝族自治县",
            "longname": "云南 普洱市 江城哈尼族彝族自治县"
        },
        {
            "code": "530827",
            "name": "孟连傣族拉祜族佤族自治县",
            "longname": "云南 普洱市 孟连傣族拉祜族佤族自治县"
        },
        {
            "code": "530828",
            "name": "澜沧拉祜族自治县",
            "longname": "云南 普洱市 澜沧拉祜族自治县"
        },
        {
            "code": "530829",
            "name": "西盟佤族自治县",
            "longname": "云南 普洱市 西盟佤族自治县"
        },
        {
            "code": "5309",
            "name": "临沧市",
            "longname": "云南 临沧市"
        },
        {
            "code": "530901",
            "name": "市辖区",
            "longname": "云南 临沧市 市辖区"
        },
        {
            "code": "530902",
            "name": "临翔区",
            "longname": "云南 临沧市 临翔区"
        },
        {
            "code": "530921",
            "name": "凤庆县",
            "longname": "云南 临沧市 凤庆县"
        },
        {
            "code": "530922",
            "name": "云县",
            "longname": "云南 临沧市 云县"
        },
        {
            "code": "530923",
            "name": "永德县",
            "longname": "云南 临沧市 永德县"
        },
        {
            "code": "530924",
            "name": "镇康县",
            "longname": "云南 临沧市 镇康县"
        },
        {
            "code": "530925",
            "name": "双江拉祜族佤族布朗族傣族自治县",
            "longname": "云南 临沧市 双江拉祜族佤族布朗族傣族自治县"
        },
        {
            "code": "530926",
            "name": "耿马傣族佤族自治县",
            "longname": "云南 临沧市 耿马傣族佤族自治县"
        },
        {
            "code": "530927",
            "name": "沧源佤族自治县",
            "longname": "云南 临沧市 沧源佤族自治县"
        },
        {
            "code": "5323",
            "name": "楚雄彝族自治州",
            "longname": "云南 楚雄彝族自治州"
        },
        {
            "code": "532301",
            "name": "楚雄市",
            "longname": "云南 楚雄彝族自治州 楚雄市"
        },
        {
            "code": "532322",
            "name": "双柏县",
            "longname": "云南 楚雄彝族自治州 双柏县"
        },
        {
            "code": "532323",
            "name": "牟定县",
            "longname": "云南 楚雄彝族自治州 牟定县"
        },
        {
            "code": "532324",
            "name": "南华县",
            "longname": "云南 楚雄彝族自治州 南华县"
        },
        {
            "code": "532325",
            "name": "姚安县",
            "longname": "云南 楚雄彝族自治州 姚安县"
        },
        {
            "code": "532326",
            "name": "大姚县",
            "longname": "云南 楚雄彝族自治州 大姚县"
        },
        {
            "code": "532327",
            "name": "永仁县",
            "longname": "云南 楚雄彝族自治州 永仁县"
        },
        {
            "code": "532328",
            "name": "元谋县",
            "longname": "云南 楚雄彝族自治州 元谋县"
        },
        {
            "code": "532329",
            "name": "武定县",
            "longname": "云南 楚雄彝族自治州 武定县"
        },
        {
            "code": "532331",
            "name": "禄丰县",
            "longname": "云南 楚雄彝族自治州 禄丰县"
        },
        {
            "code": "5325",
            "name": "红河哈尼族彝族自治州",
            "longname": "云南 红河哈尼族彝族自治州"
        },
        {
            "code": "532501",
            "name": "个旧市",
            "longname": "云南 红河哈尼族彝族自治州 个旧市"
        },
        {
            "code": "532502",
            "name": "开远市",
            "longname": "云南 红河哈尼族彝族自治州 开远市"
        },
        {
            "code": "532503",
            "name": "蒙自市",
            "longname": "云南 红河哈尼族彝族自治州 蒙自市"
        },
        {
            "code": "532523",
            "name": "屏边苗族自治县",
            "longname": "云南 红河哈尼族彝族自治州 屏边苗族自治县"
        },
        {
            "code": "532524",
            "name": "建水县",
            "longname": "云南 红河哈尼族彝族自治州 建水县"
        },
        {
            "code": "532525",
            "name": "石屏县",
            "longname": "云南 红河哈尼族彝族自治州 石屏县"
        },
        {
            "code": "532526",
            "name": "弥勒县",
            "longname": "云南 红河哈尼族彝族自治州 弥勒县"
        },
        {
            "code": "532527",
            "name": "泸西县",
            "longname": "云南 红河哈尼族彝族自治州 泸西县"
        },
        {
            "code": "532528",
            "name": "元阳县",
            "longname": "云南 红河哈尼族彝族自治州 元阳县"
        },
        {
            "code": "532529",
            "name": "红河县",
            "longname": "云南 红河哈尼族彝族自治州 红河县"
        },
        {
            "code": "532530",
            "name": "金平苗族瑶族傣族自治县",
            "longname": "云南 红河哈尼族彝族自治州 金平苗族瑶族傣族自治县"
        },
        {
            "code": "532531",
            "name": "绿春县",
            "longname": "云南 红河哈尼族彝族自治州 绿春县"
        },
        {
            "code": "532532",
            "name": "河口瑶族自治县",
            "longname": "云南 红河哈尼族彝族自治州 河口瑶族自治县"
        },
        {
            "code": "5326",
            "name": "文山壮族苗族自治州",
            "longname": "云南 文山壮族苗族自治州"
        },
        {
            "code": "532621",
            "name": "文山县",
            "longname": "云南 文山壮族苗族自治州 文山县"
        },
        {
            "code": "532622",
            "name": "砚山县",
            "longname": "云南 文山壮族苗族自治州 砚山县"
        },
        {
            "code": "532623",
            "name": "西畴县",
            "longname": "云南 文山壮族苗族自治州 西畴县"
        },
        {
            "code": "532624",
            "name": "麻栗坡县",
            "longname": "云南 文山壮族苗族自治州 麻栗坡县"
        },
        {
            "code": "532625",
            "name": "马关县",
            "longname": "云南 文山壮族苗族自治州 马关县"
        },
        {
            "code": "532626",
            "name": "丘北县",
            "longname": "云南 文山壮族苗族自治州 丘北县"
        },
        {
            "code": "532627",
            "name": "广南县",
            "longname": "云南 文山壮族苗族自治州 广南县"
        },
        {
            "code": "532628",
            "name": "富宁县",
            "longname": "云南 文山壮族苗族自治州 富宁县"
        },
        {
            "code": "5328",
            "name": "西双版纳傣族自治州",
            "longname": "云南 西双版纳傣族自治州"
        },
        {
            "code": "532801",
            "name": "景洪市",
            "longname": "云南 西双版纳傣族自治州 景洪市"
        },
        {
            "code": "532822",
            "name": "勐海县",
            "longname": "云南 西双版纳傣族自治州 勐海县"
        },
        {
            "code": "532823",
            "name": "勐腊县",
            "longname": "云南 西双版纳傣族自治州 勐腊县"
        },
        {
            "code": "5329",
            "name": "大理白族自治州",
            "longname": "云南 大理白族自治州"
        },
        {
            "code": "532901",
            "name": "大理市",
            "longname": "云南 大理白族自治州 大理市"
        },
        {
            "code": "532922",
            "name": "漾濞彝族自治县",
            "longname": "云南 大理白族自治州 漾濞彝族自治县"
        },
        {
            "code": "532923",
            "name": "祥云县",
            "longname": "云南 大理白族自治州 祥云县"
        },
        {
            "code": "532924",
            "name": "宾川县",
            "longname": "云南 大理白族自治州 宾川县"
        },
        {
            "code": "532925",
            "name": "弥渡县",
            "longname": "云南 大理白族自治州 弥渡县"
        },
        {
            "code": "532926",
            "name": "南涧彝族自治县",
            "longname": "云南 大理白族自治州 南涧彝族自治县"
        },
        {
            "code": "532927",
            "name": "巍山彝族回族自治县",
            "longname": "云南 大理白族自治州 巍山彝族回族自治县"
        },
        {
            "code": "532928",
            "name": "永平县",
            "longname": "云南 大理白族自治州 永平县"
        },
        {
            "code": "532929",
            "name": "云龙县",
            "longname": "云南 大理白族自治州 云龙县"
        },
        {
            "code": "532930",
            "name": "洱源县",
            "longname": "云南 大理白族自治州 洱源县"
        },
        {
            "code": "532931",
            "name": "剑川县",
            "longname": "云南 大理白族自治州 剑川县"
        },
        {
            "code": "532932",
            "name": "鹤庆县",
            "longname": "云南 大理白族自治州 鹤庆县"
        },
        {
            "code": "5331",
            "name": "德宏傣族景颇族自治州",
            "longname": "云南 德宏傣族景颇族自治州"
        },
        {
            "code": "533102",
            "name": "瑞丽市",
            "longname": "云南 德宏傣族景颇族自治州 瑞丽市"
        },
        {
            "code": "533103",
            "name": "芒市",
            "longname": "云南 德宏傣族景颇族自治州 芒市"
        },
        {
            "code": "533122",
            "name": "梁河县",
            "longname": "云南 德宏傣族景颇族自治州 梁河县"
        },
        {
            "code": "533123",
            "name": "盈江县",
            "longname": "云南 德宏傣族景颇族自治州 盈江县"
        },
        {
            "code": "533124",
            "name": "陇川县",
            "longname": "云南 德宏傣族景颇族自治州 陇川县"
        },
        {
            "code": "5333",
            "name": "怒江傈僳族自治州",
            "longname": "云南 怒江傈僳族自治州"
        },
        {
            "code": "533321",
            "name": "泸水县",
            "longname": "云南 怒江傈僳族自治州 泸水县"
        },
        {
            "code": "533323",
            "name": "福贡县",
            "longname": "云南 怒江傈僳族自治州 福贡县"
        },
        {
            "code": "533324",
            "name": "贡山独龙族怒族自治县",
            "longname": "云南 怒江傈僳族自治州 贡山独龙族怒族自治县"
        },
        {
            "code": "533325",
            "name": "兰坪白族普米族自治县",
            "longname": "云南 怒江傈僳族自治州 兰坪白族普米族自治县"
        },
        {
            "code": "5334",
            "name": "迪庆藏族自治州",
            "longname": "云南 迪庆藏族自治州"
        },
        {
            "code": "533421",
            "name": "香格里拉县",
            "longname": "云南 迪庆藏族自治州 香格里拉县"
        },
        {
            "code": "533422",
            "name": "德钦县",
            "longname": "云南 迪庆藏族自治州 德钦县"
        },
        {
            "code": "533423",
            "name": "维西傈僳族自治县",
            "longname": "云南 迪庆藏族自治州 维西傈僳族自治县"
        },
        {
            "code": "54",
            "name": "西藏",
            "longname": "西藏"
        },
        {
            "code": "5401",
            "name": "拉萨市",
            "longname": "西藏 拉萨市"
        },
        {
            "code": "540101",
            "name": "市辖区",
            "longname": "西藏 拉萨市 市辖区"
        },
        {
            "code": "540102",
            "name": "城关区",
            "longname": "西藏 拉萨市 城关区"
        },
        {
            "code": "540121",
            "name": "林周县",
            "longname": "西藏 拉萨市 林周县"
        },
        {
            "code": "540122",
            "name": "当雄县",
            "longname": "西藏 拉萨市 当雄县"
        },
        {
            "code": "540123",
            "name": "尼木县",
            "longname": "西藏 拉萨市 尼木县"
        },
        {
            "code": "540124",
            "name": "曲水县",
            "longname": "西藏 拉萨市 曲水县"
        },
        {
            "code": "540125",
            "name": "堆龙德庆县",
            "longname": "西藏 拉萨市 堆龙德庆县"
        },
        {
            "code": "540126",
            "name": "达孜县",
            "longname": "西藏 拉萨市 达孜县"
        },
        {
            "code": "540127",
            "name": "墨竹工卡县",
            "longname": "西藏 拉萨市 墨竹工卡县"
        },
        {
            "code": "5421",
            "name": "昌都地区",
            "longname": "西藏 昌都地区"
        },
        {
            "code": "542121",
            "name": "昌都县",
            "longname": "西藏 昌都地区 昌都县"
        },
        {
            "code": "542122",
            "name": "江达县",
            "longname": "西藏 昌都地区 江达县"
        },
        {
            "code": "542123",
            "name": "贡觉县",
            "longname": "西藏 昌都地区 贡觉县"
        },
        {
            "code": "542124",
            "name": "类乌齐县",
            "longname": "西藏 昌都地区 类乌齐县"
        },
        {
            "code": "542125",
            "name": "丁青县",
            "longname": "西藏 昌都地区 丁青县"
        },
        {
            "code": "542126",
            "name": "察雅县",
            "longname": "西藏 昌都地区 察雅县"
        },
        {
            "code": "542127",
            "name": "八宿县",
            "longname": "西藏 昌都地区 八宿县"
        },
        {
            "code": "542128",
            "name": "左贡县",
            "longname": "西藏 昌都地区 左贡县"
        },
        {
            "code": "542129",
            "name": "芒康县",
            "longname": "西藏 昌都地区 芒康县"
        },
        {
            "code": "542132",
            "name": "洛隆县",
            "longname": "西藏 昌都地区 洛隆县"
        },
        {
            "code": "542133",
            "name": "边坝县",
            "longname": "西藏 昌都地区 边坝县"
        },
        {
            "code": "5422",
            "name": "山南地区",
            "longname": "西藏 山南地区"
        },
        {
            "code": "542221",
            "name": "乃东县",
            "longname": "西藏 山南地区 乃东县"
        },
        {
            "code": "542222",
            "name": "扎囊县",
            "longname": "西藏 山南地区 扎囊县"
        },
        {
            "code": "542223",
            "name": "贡嘎县",
            "longname": "西藏 山南地区 贡嘎县"
        },
        {
            "code": "542224",
            "name": "桑日县",
            "longname": "西藏 山南地区 桑日县"
        },
        {
            "code": "542225",
            "name": "琼结县",
            "longname": "西藏 山南地区 琼结县"
        },
        {
            "code": "542226",
            "name": "曲松县",
            "longname": "西藏 山南地区 曲松县"
        },
        {
            "code": "542227",
            "name": "措美县",
            "longname": "西藏 山南地区 措美县"
        },
        {
            "code": "542228",
            "name": "洛扎县",
            "longname": "西藏 山南地区 洛扎县"
        },
        {
            "code": "542229",
            "name": "加查县",
            "longname": "西藏 山南地区 加查县"
        },
        {
            "code": "542231",
            "name": "隆子县",
            "longname": "西藏 山南地区 隆子县"
        },
        {
            "code": "542232",
            "name": "错那县",
            "longname": "西藏 山南地区 错那县"
        },
        {
            "code": "542233",
            "name": "浪卡子县",
            "longname": "西藏 山南地区 浪卡子县"
        },
        {
            "code": "5423",
            "name": "日喀则地区",
            "longname": "西藏 日喀则地区"
        },
        {
            "code": "542301",
            "name": "日喀则市",
            "longname": "西藏 日喀则地区 日喀则市"
        },
        {
            "code": "542322",
            "name": "南木林县",
            "longname": "西藏 日喀则地区 南木林县"
        },
        {
            "code": "542323",
            "name": "江孜县",
            "longname": "西藏 日喀则地区 江孜县"
        },
        {
            "code": "542324",
            "name": "定日县",
            "longname": "西藏 日喀则地区 定日县"
        },
        {
            "code": "542325",
            "name": "萨迦县",
            "longname": "西藏 日喀则地区 萨迦县"
        },
        {
            "code": "542326",
            "name": "拉孜县",
            "longname": "西藏 日喀则地区 拉孜县"
        },
        {
            "code": "542327",
            "name": "昂仁县",
            "longname": "西藏 日喀则地区 昂仁县"
        },
        {
            "code": "542328",
            "name": "谢通门县",
            "longname": "西藏 日喀则地区 谢通门县"
        },
        {
            "code": "542329",
            "name": "白朗县",
            "longname": "西藏 日喀则地区 白朗县"
        },
        {
            "code": "542330",
            "name": "仁布县",
            "longname": "西藏 日喀则地区 仁布县"
        },
        {
            "code": "542331",
            "name": "康马县",
            "longname": "西藏 日喀则地区 康马县"
        },
        {
            "code": "542332",
            "name": "定结县",
            "longname": "西藏 日喀则地区 定结县"
        },
        {
            "code": "542333",
            "name": "仲巴县",
            "longname": "西藏 日喀则地区 仲巴县"
        },
        {
            "code": "542334",
            "name": "亚东县",
            "longname": "西藏 日喀则地区 亚东县"
        },
        {
            "code": "542335",
            "name": "吉隆县",
            "longname": "西藏 日喀则地区 吉隆县"
        },
        {
            "code": "542336",
            "name": "聂拉木县",
            "longname": "西藏 日喀则地区 聂拉木县"
        },
        {
            "code": "542337",
            "name": "萨嘎县",
            "longname": "西藏 日喀则地区 萨嘎县"
        },
        {
            "code": "542338",
            "name": "岗巴县",
            "longname": "西藏 日喀则地区 岗巴县"
        },
        {
            "code": "5424",
            "name": "那曲地区",
            "longname": "西藏 那曲地区"
        },
        {
            "code": "542421",
            "name": "那曲县",
            "longname": "西藏 那曲地区 那曲县"
        },
        {
            "code": "542422",
            "name": "嘉黎县",
            "longname": "西藏 那曲地区 嘉黎县"
        },
        {
            "code": "542423",
            "name": "比如县",
            "longname": "西藏 那曲地区 比如县"
        },
        {
            "code": "542424",
            "name": "聂荣县",
            "longname": "西藏 那曲地区 聂荣县"
        },
        {
            "code": "542425",
            "name": "安多县",
            "longname": "西藏 那曲地区 安多县"
        },
        {
            "code": "542426",
            "name": "申扎县",
            "longname": "西藏 那曲地区 申扎县"
        },
        {
            "code": "542427",
            "name": "索县",
            "longname": "西藏 那曲地区 索县"
        },
        {
            "code": "542428",
            "name": "班戈县",
            "longname": "西藏 那曲地区 班戈县"
        },
        {
            "code": "542429",
            "name": "巴青县",
            "longname": "西藏 那曲地区 巴青县"
        },
        {
            "code": "542430",
            "name": "尼玛县",
            "longname": "西藏 那曲地区 尼玛县"
        },
        {
            "code": "5425",
            "name": "阿里地区",
            "longname": "西藏 阿里地区"
        },
        {
            "code": "542521",
            "name": "普兰县",
            "longname": "西藏 阿里地区 普兰县"
        },
        {
            "code": "542522",
            "name": "札达县",
            "longname": "西藏 阿里地区 札达县"
        },
        {
            "code": "542523",
            "name": "噶尔县",
            "longname": "西藏 阿里地区 噶尔县"
        },
        {
            "code": "542524",
            "name": "日土县",
            "longname": "西藏 阿里地区 日土县"
        },
        {
            "code": "542525",
            "name": "革吉县",
            "longname": "西藏 阿里地区 革吉县"
        },
        {
            "code": "542526",
            "name": "改则县",
            "longname": "西藏 阿里地区 改则县"
        },
        {
            "code": "542527",
            "name": "措勤县",
            "longname": "西藏 阿里地区 措勤县"
        },
        {
            "code": "5426",
            "name": "林芝地区",
            "longname": "西藏 林芝地区"
        },
        {
            "code": "542621",
            "name": "林芝县",
            "longname": "西藏 林芝地区 林芝县"
        },
        {
            "code": "542622",
            "name": "工布江达县",
            "longname": "西藏 林芝地区 工布江达县"
        },
        {
            "code": "542623",
            "name": "米林县",
            "longname": "西藏 林芝地区 米林县"
        },
        {
            "code": "542624",
            "name": "墨脱县",
            "longname": "西藏 林芝地区 墨脱县"
        },
        {
            "code": "542625",
            "name": "波密县",
            "longname": "西藏 林芝地区 波密县"
        },
        {
            "code": "542626",
            "name": "察隅县",
            "longname": "西藏 林芝地区 察隅县"
        },
        {
            "code": "542627",
            "name": "朗县",
            "longname": "西藏 林芝地区 朗县"
        },
        {
            "code": "61",
            "name": "陕西",
            "longname": "陕西"
        },
        {
            "code": "6101",
            "name": "西安市",
            "longname": "陕西 西安市"
        },
        {
            "code": "610101",
            "name": "市辖区",
            "longname": "陕西 西安市 市辖区"
        },
        {
            "code": "610102",
            "name": "新城区",
            "longname": "陕西 西安市 新城区"
        },
        {
            "code": "610103",
            "name": "碑林区",
            "longname": "陕西 西安市 碑林区"
        },
        {
            "code": "610104",
            "name": "莲湖区",
            "longname": "陕西 西安市 莲湖区"
        },
        {
            "code": "610111",
            "name": "灞桥区",
            "longname": "陕西 西安市 灞桥区"
        },
        {
            "code": "610112",
            "name": "未央区",
            "longname": "陕西 西安市 未央区"
        },
        {
            "code": "610113",
            "name": "雁塔区",
            "longname": "陕西 西安市 雁塔区"
        },
        {
            "code": "610114",
            "name": "阎良区",
            "longname": "陕西 西安市 阎良区"
        },
        {
            "code": "610115",
            "name": "临潼区",
            "longname": "陕西 西安市 临潼区"
        },
        {
            "code": "610116",
            "name": "长安区",
            "longname": "陕西 西安市 长安区"
        },
        {
            "code": "610122",
            "name": "蓝田县",
            "longname": "陕西 西安市 蓝田县"
        },
        {
            "code": "610124",
            "name": "周至县",
            "longname": "陕西 西安市 周至县"
        },
        {
            "code": "610125",
            "name": "户县",
            "longname": "陕西 西安市 户县"
        },
        {
            "code": "610126",
            "name": "高陵县",
            "longname": "陕西 西安市 高陵县"
        },
        {
            "code": "6102",
            "name": "铜川市",
            "longname": "陕西 铜川市"
        },
        {
            "code": "610201",
            "name": "市辖区",
            "longname": "陕西 铜川市 市辖区"
        },
        {
            "code": "610202",
            "name": "王益区",
            "longname": "陕西 铜川市 王益区"
        },
        {
            "code": "610203",
            "name": "印台区",
            "longname": "陕西 铜川市 印台区"
        },
        {
            "code": "610204",
            "name": "耀州区",
            "longname": "陕西 铜川市 耀州区"
        },
        {
            "code": "610222",
            "name": "宜君县",
            "longname": "陕西 铜川市 宜君县"
        },
        {
            "code": "6103",
            "name": "宝鸡市",
            "longname": "陕西 宝鸡市"
        },
        {
            "code": "610301",
            "name": "市辖区",
            "longname": "陕西 宝鸡市 市辖区"
        },
        {
            "code": "610302",
            "name": "渭滨区",
            "longname": "陕西 宝鸡市 渭滨区"
        },
        {
            "code": "610303",
            "name": "金台区",
            "longname": "陕西 宝鸡市 金台区"
        },
        {
            "code": "610304",
            "name": "陈仓区",
            "longname": "陕西 宝鸡市 陈仓区"
        },
        {
            "code": "610322",
            "name": "凤翔县",
            "longname": "陕西 宝鸡市 凤翔县"
        },
        {
            "code": "610323",
            "name": "岐山县",
            "longname": "陕西 宝鸡市 岐山县"
        },
        {
            "code": "610324",
            "name": "扶风县",
            "longname": "陕西 宝鸡市 扶风县"
        },
        {
            "code": "610326",
            "name": "眉县",
            "longname": "陕西 宝鸡市 眉县"
        },
        {
            "code": "610327",
            "name": "陇县",
            "longname": "陕西 宝鸡市 陇县"
        },
        {
            "code": "610328",
            "name": "千阳县",
            "longname": "陕西 宝鸡市 千阳县"
        },
        {
            "code": "610329",
            "name": "麟游县",
            "longname": "陕西 宝鸡市 麟游县"
        },
        {
            "code": "610330",
            "name": "凤县",
            "longname": "陕西 宝鸡市 凤县"
        },
        {
            "code": "610331",
            "name": "太白县",
            "longname": "陕西 宝鸡市 太白县"
        },
        {
            "code": "6104",
            "name": "咸阳市",
            "longname": "陕西 咸阳市"
        },
        {
            "code": "610401",
            "name": "市辖区",
            "longname": "陕西 咸阳市 市辖区"
        },
        {
            "code": "610402",
            "name": "秦都区",
            "longname": "陕西 咸阳市 秦都区"
        },
        {
            "code": "610403",
            "name": "杨陵区",
            "longname": "陕西 咸阳市 杨陵区"
        },
        {
            "code": "610404",
            "name": "渭城区",
            "longname": "陕西 咸阳市 渭城区"
        },
        {
            "code": "610422",
            "name": "三原县",
            "longname": "陕西 咸阳市 三原县"
        },
        {
            "code": "610423",
            "name": "泾阳县",
            "longname": "陕西 咸阳市 泾阳县"
        },
        {
            "code": "610424",
            "name": "乾县",
            "longname": "陕西 咸阳市 乾县"
        },
        {
            "code": "610425",
            "name": "礼泉县",
            "longname": "陕西 咸阳市 礼泉县"
        },
        {
            "code": "610426",
            "name": "永寿县",
            "longname": "陕西 咸阳市 永寿县"
        },
        {
            "code": "610427",
            "name": "彬县",
            "longname": "陕西 咸阳市 彬县"
        },
        {
            "code": "610428",
            "name": "长武县",
            "longname": "陕西 咸阳市 长武县"
        },
        {
            "code": "610429",
            "name": "旬邑县",
            "longname": "陕西 咸阳市 旬邑县"
        },
        {
            "code": "610430",
            "name": "淳化县",
            "longname": "陕西 咸阳市 淳化县"
        },
        {
            "code": "610431",
            "name": "武功县",
            "longname": "陕西 咸阳市 武功县"
        },
        {
            "code": "610481",
            "name": "兴平市",
            "longname": "陕西 咸阳市 兴平市"
        },
        {
            "code": "6105",
            "name": "渭南市",
            "longname": "陕西 渭南市"
        },
        {
            "code": "610501",
            "name": "市辖区",
            "longname": "陕西 渭南市 市辖区"
        },
        {
            "code": "610502",
            "name": "临渭区",
            "longname": "陕西 渭南市 临渭区"
        },
        {
            "code": "610521",
            "name": "华县",
            "longname": "陕西 渭南市 华县"
        },
        {
            "code": "610522",
            "name": "潼关县",
            "longname": "陕西 渭南市 潼关县"
        },
        {
            "code": "610523",
            "name": "大荔县",
            "longname": "陕西 渭南市 大荔县"
        },
        {
            "code": "610524",
            "name": "合阳县",
            "longname": "陕西 渭南市 合阳县"
        },
        {
            "code": "610525",
            "name": "澄城县",
            "longname": "陕西 渭南市 澄城县"
        },
        {
            "code": "610526",
            "name": "蒲城县",
            "longname": "陕西 渭南市 蒲城县"
        },
        {
            "code": "610527",
            "name": "白水县",
            "longname": "陕西 渭南市 白水县"
        },
        {
            "code": "610528",
            "name": "富平县",
            "longname": "陕西 渭南市 富平县"
        },
        {
            "code": "610581",
            "name": "韩城市",
            "longname": "陕西 渭南市 韩城市"
        },
        {
            "code": "610582",
            "name": "华阴市",
            "longname": "陕西 渭南市 华阴市"
        },
        {
            "code": "6106",
            "name": "延安市",
            "longname": "陕西 延安市"
        },
        {
            "code": "610601",
            "name": "市辖区",
            "longname": "陕西 延安市 市辖区"
        },
        {
            "code": "610602",
            "name": "宝塔区",
            "longname": "陕西 延安市 宝塔区"
        },
        {
            "code": "610621",
            "name": "延长县",
            "longname": "陕西 延安市 延长县"
        },
        {
            "code": "610622",
            "name": "延川县",
            "longname": "陕西 延安市 延川县"
        },
        {
            "code": "610623",
            "name": "子长县",
            "longname": "陕西 延安市 子长县"
        },
        {
            "code": "610624",
            "name": "安塞县",
            "longname": "陕西 延安市 安塞县"
        },
        {
            "code": "610625",
            "name": "志丹县",
            "longname": "陕西 延安市 志丹县"
        },
        {
            "code": "610626",
            "name": "吴起县",
            "longname": "陕西 延安市 吴起县"
        },
        {
            "code": "610627",
            "name": "甘泉县",
            "longname": "陕西 延安市 甘泉县"
        },
        {
            "code": "610628",
            "name": "富县",
            "longname": "陕西 延安市 富县"
        },
        {
            "code": "610629",
            "name": "洛川县",
            "longname": "陕西 延安市 洛川县"
        },
        {
            "code": "610630",
            "name": "宜川县",
            "longname": "陕西 延安市 宜川县"
        },
        {
            "code": "610631",
            "name": "黄龙县",
            "longname": "陕西 延安市 黄龙县"
        },
        {
            "code": "610632",
            "name": "黄陵县",
            "longname": "陕西 延安市 黄陵县"
        },
        {
            "code": "6107",
            "name": "汉中市",
            "longname": "陕西 汉中市"
        },
        {
            "code": "610701",
            "name": "市辖区",
            "longname": "陕西 汉中市 市辖区"
        },
        {
            "code": "610702",
            "name": "汉台区",
            "longname": "陕西 汉中市 汉台区"
        },
        {
            "code": "610721",
            "name": "南郑县",
            "longname": "陕西 汉中市 南郑县"
        },
        {
            "code": "610722",
            "name": "城固县",
            "longname": "陕西 汉中市 城固县"
        },
        {
            "code": "610723",
            "name": "洋县",
            "longname": "陕西 汉中市 洋县"
        },
        {
            "code": "610724",
            "name": "西乡县",
            "longname": "陕西 汉中市 西乡县"
        },
        {
            "code": "610725",
            "name": "勉县",
            "longname": "陕西 汉中市 勉县"
        },
        {
            "code": "610726",
            "name": "宁强县",
            "longname": "陕西 汉中市 宁强县"
        },
        {
            "code": "610727",
            "name": "略阳县",
            "longname": "陕西 汉中市 略阳县"
        },
        {
            "code": "610728",
            "name": "镇巴县",
            "longname": "陕西 汉中市 镇巴县"
        },
        {
            "code": "610729",
            "name": "留坝县",
            "longname": "陕西 汉中市 留坝县"
        },
        {
            "code": "610730",
            "name": "佛坪县",
            "longname": "陕西 汉中市 佛坪县"
        },
        {
            "code": "6108",
            "name": "榆林市",
            "longname": "陕西 榆林市"
        },
        {
            "code": "610801",
            "name": "市辖区",
            "longname": "陕西 榆林市 市辖区"
        },
        {
            "code": "610802",
            "name": "榆阳区",
            "longname": "陕西 榆林市 榆阳区"
        },
        {
            "code": "610821",
            "name": "神木县",
            "longname": "陕西 榆林市 神木县"
        },
        {
            "code": "610822",
            "name": "府谷县",
            "longname": "陕西 榆林市 府谷县"
        },
        {
            "code": "610823",
            "name": "横山县",
            "longname": "陕西 榆林市 横山县"
        },
        {
            "code": "610824",
            "name": "靖边县",
            "longname": "陕西 榆林市 靖边县"
        },
        {
            "code": "610825",
            "name": "定边县",
            "longname": "陕西 榆林市 定边县"
        },
        {
            "code": "610826",
            "name": "绥德县",
            "longname": "陕西 榆林市 绥德县"
        },
        {
            "code": "610827",
            "name": "米脂县",
            "longname": "陕西 榆林市 米脂县"
        },
        {
            "code": "610828",
            "name": "佳县",
            "longname": "陕西 榆林市 佳县"
        },
        {
            "code": "610829",
            "name": "吴堡县",
            "longname": "陕西 榆林市 吴堡县"
        },
        {
            "code": "610830",
            "name": "清涧县",
            "longname": "陕西 榆林市 清涧县"
        },
        {
            "code": "610831",
            "name": "子洲县",
            "longname": "陕西 榆林市 子洲县"
        },
        {
            "code": "6109",
            "name": "安康市",
            "longname": "陕西 安康市"
        },
        {
            "code": "610901",
            "name": "市辖区",
            "longname": "陕西 安康市 市辖区"
        },
        {
            "code": "610902",
            "name": "汉滨区",
            "longname": "陕西 安康市 汉滨区"
        },
        {
            "code": "610921",
            "name": "汉阴县",
            "longname": "陕西 安康市 汉阴县"
        },
        {
            "code": "610922",
            "name": "石泉县",
            "longname": "陕西 安康市 石泉县"
        },
        {
            "code": "610923",
            "name": "宁陕县",
            "longname": "陕西 安康市 宁陕县"
        },
        {
            "code": "610924",
            "name": "紫阳县",
            "longname": "陕西 安康市 紫阳县"
        },
        {
            "code": "610925",
            "name": "岚皋县",
            "longname": "陕西 安康市 岚皋县"
        },
        {
            "code": "610926",
            "name": "平利县",
            "longname": "陕西 安康市 平利县"
        },
        {
            "code": "610927",
            "name": "镇坪县",
            "longname": "陕西 安康市 镇坪县"
        },
        {
            "code": "610928",
            "name": "旬阳县",
            "longname": "陕西 安康市 旬阳县"
        },
        {
            "code": "610929",
            "name": "白河县",
            "longname": "陕西 安康市 白河县"
        },
        {
            "code": "6110",
            "name": "商洛市",
            "longname": "陕西 商洛市"
        },
        {
            "code": "611001",
            "name": "市辖区",
            "longname": "陕西 商洛市 市辖区"
        },
        {
            "code": "611002",
            "name": "商州区",
            "longname": "陕西 商洛市 商州区"
        },
        {
            "code": "611021",
            "name": "洛南县",
            "longname": "陕西 商洛市 洛南县"
        },
        {
            "code": "611022",
            "name": "丹凤县",
            "longname": "陕西 商洛市 丹凤县"
        },
        {
            "code": "611023",
            "name": "商南县",
            "longname": "陕西 商洛市 商南县"
        },
        {
            "code": "611024",
            "name": "山阳县",
            "longname": "陕西 商洛市 山阳县"
        },
        {
            "code": "611025",
            "name": "镇安县",
            "longname": "陕西 商洛市 镇安县"
        },
        {
            "code": "611026",
            "name": "柞水县",
            "longname": "陕西 商洛市 柞水县"
        },
        {
            "code": "62",
            "name": "甘肃",
            "longname": "甘肃"
        },
        {
            "code": "6201",
            "name": "兰州市",
            "longname": "甘肃 兰州市"
        },
        {
            "code": "620101",
            "name": "市辖区",
            "longname": "甘肃 兰州市 市辖区"
        },
        {
            "code": "620102",
            "name": "城关区",
            "longname": "甘肃 兰州市 城关区"
        },
        {
            "code": "620103",
            "name": "七里河区",
            "longname": "甘肃 兰州市 七里河区"
        },
        {
            "code": "620104",
            "name": "西固区",
            "longname": "甘肃 兰州市 西固区"
        },
        {
            "code": "620105",
            "name": "安宁区",
            "longname": "甘肃 兰州市 安宁区"
        },
        {
            "code": "620106",
            "name": "兰州新区",
            "longname": "甘肃 兰州市 兰州新区"
        },
        {
            "code": "620108",
            "name": "兰州高新区",
            "longname": "甘肃 兰州市 兰州高新区"
        },
        {
            "code": "620111",
            "name": "红古区",
            "longname": "甘肃 兰州市 红古区"
        },
        {
            "code": "620121",
            "name": "永登县",
            "longname": "甘肃 兰州市 永登县"
        },
        {
            "code": "620122",
            "name": "皋兰县",
            "longname": "甘肃 兰州市 皋兰县"
        },
        {
            "code": "620123",
            "name": "榆中县",
            "longname": "甘肃 兰州市 榆中县"
        },
        {
            "code": "6202",
            "name": "嘉峪关市",
            "longname": "甘肃 嘉峪关市"
        },
        {
            "code": "620201",
            "name": "市辖区",
            "longname": "甘肃 嘉峪关市 市辖区"
        },
        {
            "code": "6203",
            "name": "金昌市",
            "longname": "甘肃 金昌市"
        },
        {
            "code": "620301",
            "name": "市辖区",
            "longname": "甘肃 金昌市 市辖区"
        },
        {
            "code": "620302",
            "name": "金川区",
            "longname": "甘肃 金昌市 金川区"
        },
        {
            "code": "620321",
            "name": "永昌县",
            "longname": "甘肃 金昌市 永昌县"
        },
        {
            "code": "6204",
            "name": "白银市",
            "longname": "甘肃 白银市"
        },
        {
            "code": "620401",
            "name": "市辖区",
            "longname": "甘肃 白银市 市辖区"
        },
        {
            "code": "620402",
            "name": "白银区",
            "longname": "甘肃 白银市 白银区"
        },
        {
            "code": "620403",
            "name": "平川区",
            "longname": "甘肃 白银市 平川区"
        },
        {
            "code": "620421",
            "name": "靖远县",
            "longname": "甘肃 白银市 靖远县"
        },
        {
            "code": "620422",
            "name": "会宁县",
            "longname": "甘肃 白银市 会宁县"
        },
        {
            "code": "620423",
            "name": "景泰县",
            "longname": "甘肃 白银市 景泰县"
        },
        {
            "code": "6205",
            "name": "天水市",
            "longname": "甘肃 天水市"
        },
        {
            "code": "620501",
            "name": "市辖区",
            "longname": "甘肃 天水市 市辖区"
        },
        {
            "code": "620502",
            "name": "秦州区",
            "longname": "甘肃 天水市 秦州区"
        },
        {
            "code": "620503",
            "name": "麦积区",
            "longname": "甘肃 天水市 麦积区"
        },
        {
            "code": "620521",
            "name": "清水县",
            "longname": "甘肃 天水市 清水县"
        },
        {
            "code": "620522",
            "name": "秦安县",
            "longname": "甘肃 天水市 秦安县"
        },
        {
            "code": "620523",
            "name": "甘谷县",
            "longname": "甘肃 天水市 甘谷县"
        },
        {
            "code": "620524",
            "name": "武山县",
            "longname": "甘肃 天水市 武山县"
        },
        {
            "code": "620525",
            "name": "张家川回族自治县",
            "longname": "甘肃 天水市 张家川回族自治县"
        },
        {
            "code": "6206",
            "name": "武威市",
            "longname": "甘肃 武威市"
        },
        {
            "code": "620601",
            "name": "市辖区",
            "longname": "甘肃 武威市 市辖区"
        },
        {
            "code": "620602",
            "name": "凉州区",
            "longname": "甘肃 武威市 凉州区"
        },
        {
            "code": "620621",
            "name": "民勤县",
            "longname": "甘肃 武威市 民勤县"
        },
        {
            "code": "620622",
            "name": "古浪县",
            "longname": "甘肃 武威市 古浪县"
        },
        {
            "code": "620623",
            "name": "天祝藏族自治县",
            "longname": "甘肃 武威市 天祝藏族自治县"
        },
        {
            "code": "6207",
            "name": "张掖市",
            "longname": "甘肃 张掖市"
        },
        {
            "code": "620701",
            "name": "市辖区",
            "longname": "甘肃 张掖市 市辖区"
        },
        {
            "code": "620702",
            "name": "甘州区",
            "longname": "甘肃 张掖市 甘州区"
        },
        {
            "code": "620721",
            "name": "肃南裕固族自治县",
            "longname": "甘肃 张掖市 肃南裕固族自治县"
        },
        {
            "code": "620722",
            "name": "民乐县",
            "longname": "甘肃 张掖市 民乐县"
        },
        {
            "code": "620723",
            "name": "临泽县",
            "longname": "甘肃 张掖市 临泽县"
        },
        {
            "code": "620724",
            "name": "高台县",
            "longname": "甘肃 张掖市 高台县"
        },
        {
            "code": "620725",
            "name": "山丹县",
            "longname": "甘肃 张掖市 山丹县"
        },
        {
            "code": "6208",
            "name": "平凉市",
            "longname": "甘肃 平凉市"
        },
        {
            "code": "620801",
            "name": "市辖区",
            "longname": "甘肃 平凉市 市辖区"
        },
        {
            "code": "620802",
            "name": "崆峒区",
            "longname": "甘肃 平凉市 崆峒区"
        },
        {
            "code": "620821",
            "name": "泾川县",
            "longname": "甘肃 平凉市 泾川县"
        },
        {
            "code": "620822",
            "name": "灵台县",
            "longname": "甘肃 平凉市 灵台县"
        },
        {
            "code": "620823",
            "name": "崇信县",
            "longname": "甘肃 平凉市 崇信县"
        },
        {
            "code": "620824",
            "name": "华亭县",
            "longname": "甘肃 平凉市 华亭县"
        },
        {
            "code": "620825",
            "name": "庄浪县",
            "longname": "甘肃 平凉市 庄浪县"
        },
        {
            "code": "620826",
            "name": "静宁县",
            "longname": "甘肃 平凉市 静宁县"
        },
        {
            "code": "6209",
            "name": "酒泉市",
            "longname": "甘肃 酒泉市"
        },
        {
            "code": "620901",
            "name": "市辖区",
            "longname": "甘肃 酒泉市 市辖区"
        },
        {
            "code": "620902",
            "name": "肃州区",
            "longname": "甘肃 酒泉市 肃州区"
        },
        {
            "code": "620921",
            "name": "金塔县",
            "longname": "甘肃 酒泉市 金塔县"
        },
        {
            "code": "620922",
            "name": "瓜州县",
            "longname": "甘肃 酒泉市 瓜州县"
        },
        {
            "code": "620923",
            "name": "肃北蒙古族自治县",
            "longname": "甘肃 酒泉市 肃北蒙古族自治县"
        },
        {
            "code": "620924",
            "name": "阿克塞哈萨克族自治县",
            "longname": "甘肃 酒泉市 阿克塞哈萨克族自治县"
        },
        {
            "code": "620981",
            "name": "玉门市",
            "longname": "甘肃 酒泉市 玉门市"
        },
        {
            "code": "620982",
            "name": "敦煌市",
            "longname": "甘肃 酒泉市 敦煌市"
        },
        {
            "code": "6210",
            "name": "庆阳市",
            "longname": "甘肃 庆阳市"
        },
        {
            "code": "621001",
            "name": "市辖区",
            "longname": "甘肃 庆阳市 市辖区"
        },
        {
            "code": "621002",
            "name": "西峰区",
            "longname": "甘肃 庆阳市 西峰区"
        },
        {
            "code": "621021",
            "name": "庆城县",
            "longname": "甘肃 庆阳市 庆城县"
        },
        {
            "code": "621022",
            "name": "环县",
            "longname": "甘肃 庆阳市 环县"
        },
        {
            "code": "621023",
            "name": "华池县",
            "longname": "甘肃 庆阳市 华池县"
        },
        {
            "code": "621024",
            "name": "合水县",
            "longname": "甘肃 庆阳市 合水县"
        },
        {
            "code": "621025",
            "name": "正宁县",
            "longname": "甘肃 庆阳市 正宁县"
        },
        {
            "code": "621026",
            "name": "宁县",
            "longname": "甘肃 庆阳市 宁县"
        },
        {
            "code": "621027",
            "name": "镇原县",
            "longname": "甘肃 庆阳市 镇原县"
        },
        {
            "code": "6211",
            "name": "定西市",
            "longname": "甘肃 定西市"
        },
        {
            "code": "621101",
            "name": "市辖区",
            "longname": "甘肃 定西市 市辖区"
        },
        {
            "code": "621102",
            "name": "安定区",
            "longname": "甘肃 定西市 安定区"
        },
        {
            "code": "621121",
            "name": "通渭县",
            "longname": "甘肃 定西市 通渭县"
        },
        {
            "code": "621122",
            "name": "陇西县",
            "longname": "甘肃 定西市 陇西县"
        },
        {
            "code": "621123",
            "name": "渭源县",
            "longname": "甘肃 定西市 渭源县"
        },
        {
            "code": "621124",
            "name": "临洮县",
            "longname": "甘肃 定西市 临洮县"
        },
        {
            "code": "621125",
            "name": "漳县",
            "longname": "甘肃 定西市 漳县"
        },
        {
            "code": "621126",
            "name": "岷县",
            "longname": "甘肃 定西市 岷县"
        },
        {
            "code": "6212",
            "name": "陇南市",
            "longname": "甘肃 陇南市"
        },
        {
            "code": "621201",
            "name": "市辖区",
            "longname": "甘肃 陇南市 市辖区"
        },
        {
            "code": "621202",
            "name": "武都区",
            "longname": "甘肃 陇南市 武都区"
        },
        {
            "code": "621221",
            "name": "成县",
            "longname": "甘肃 陇南市 成县"
        },
        {
            "code": "621222",
            "name": "文县",
            "longname": "甘肃 陇南市 文县"
        },
        {
            "code": "621223",
            "name": "宕昌县",
            "longname": "甘肃 陇南市 宕昌县"
        },
        {
            "code": "621224",
            "name": "康县",
            "longname": "甘肃 陇南市 康县"
        },
        {
            "code": "621225",
            "name": "西和县",
            "longname": "甘肃 陇南市 西和县"
        },
        {
            "code": "621226",
            "name": "礼县",
            "longname": "甘肃 陇南市 礼县"
        },
        {
            "code": "621227",
            "name": "徽县",
            "longname": "甘肃 陇南市 徽县"
        },
        {
            "code": "621228",
            "name": "两当县",
            "longname": "甘肃 陇南市 两当县"
        },
        {
            "code": "6229",
            "name": "临夏回族自治州",
            "longname": "甘肃 临夏回族自治州"
        },
        {
            "code": "622901",
            "name": "临夏市",
            "longname": "甘肃 临夏回族自治州 临夏市"
        },
        {
            "code": "622921",
            "name": "临夏县",
            "longname": "甘肃 临夏回族自治州 临夏县"
        },
        {
            "code": "622922",
            "name": "康乐县",
            "longname": "甘肃 临夏回族自治州 康乐县"
        },
        {
            "code": "622923",
            "name": "永靖县",
            "longname": "甘肃 临夏回族自治州 永靖县"
        },
        {
            "code": "622924",
            "name": "广河县",
            "longname": "甘肃 临夏回族自治州 广河县"
        },
        {
            "code": "622925",
            "name": "和政县",
            "longname": "甘肃 临夏回族自治州 和政县"
        },
        {
            "code": "622926",
            "name": "东乡族自治县",
            "longname": "甘肃 临夏回族自治州 东乡族自治县"
        },
        {
            "code": "622927",
            "name": "积石山保安族东乡族撒拉族自治县",
            "longname": "甘肃 临夏回族自治州 积石山保安族东乡族撒拉族自治县"
        },
        {
            "code": "6230",
            "name": "甘南藏族自治州",
            "longname": "甘肃 甘南藏族自治州"
        },
        {
            "code": "623001",
            "name": "合作市",
            "longname": "甘肃 甘南藏族自治州 合作市"
        },
        {
            "code": "623021",
            "name": "临潭县",
            "longname": "甘肃 甘南藏族自治州 临潭县"
        },
        {
            "code": "623022",
            "name": "卓尼县",
            "longname": "甘肃 甘南藏族自治州 卓尼县"
        },
        {
            "code": "623023",
            "name": "舟曲县",
            "longname": "甘肃 甘南藏族自治州 舟曲县"
        },
        {
            "code": "623024",
            "name": "迭部县",
            "longname": "甘肃 甘南藏族自治州 迭部县"
        },
        {
            "code": "623025",
            "name": "玛曲县",
            "longname": "甘肃 甘南藏族自治州 玛曲县"
        },
        {
            "code": "623026",
            "name": "碌曲县",
            "longname": "甘肃 甘南藏族自治州 碌曲县"
        },
        {
            "code": "623027",
            "name": "夏河县",
            "longname": "甘肃 甘南藏族自治州 夏河县"
        },
        {
            "code": "63",
            "name": "青海",
            "longname": "青海"
        },
        {
            "code": "6301",
            "name": "西宁市",
            "longname": "青海 西宁市"
        },
        {
            "code": "630101",
            "name": "市辖区",
            "longname": "青海 西宁市 市辖区"
        },
        {
            "code": "630102",
            "name": "城东区",
            "longname": "青海 西宁市 城东区"
        },
        {
            "code": "630103",
            "name": "城中区",
            "longname": "青海 西宁市 城中区"
        },
        {
            "code": "630104",
            "name": "城西区",
            "longname": "青海 西宁市 城西区"
        },
        {
            "code": "630105",
            "name": "城北区",
            "longname": "青海 西宁市 城北区"
        },
        {
            "code": "630121",
            "name": "大通回族土族自治县",
            "longname": "青海 西宁市 大通回族土族自治县"
        },
        {
            "code": "630122",
            "name": "湟中县",
            "longname": "青海 西宁市 湟中县"
        },
        {
            "code": "630123",
            "name": "湟源县",
            "longname": "青海 西宁市 湟源县"
        },
        {
            "code": "6321",
            "name": "海东地区",
            "longname": "青海 海东地区"
        },
        {
            "code": "632121",
            "name": "平安县",
            "longname": "青海 海东地区 平安县"
        },
        {
            "code": "632122",
            "name": "民和回族土族自治县",
            "longname": "青海 海东地区 民和回族土族自治县"
        },
        {
            "code": "632123",
            "name": "乐都县",
            "longname": "青海 海东地区 乐都县"
        },
        {
            "code": "632126",
            "name": "互助土族自治县",
            "longname": "青海 海东地区 互助土族自治县"
        },
        {
            "code": "632127",
            "name": "化隆回族自治县",
            "longname": "青海 海东地区 化隆回族自治县"
        },
        {
            "code": "632128",
            "name": "循化撒拉族自治县",
            "longname": "青海 海东地区 循化撒拉族自治县"
        },
        {
            "code": "6322",
            "name": "海北藏族自治州",
            "longname": "青海 海北藏族自治州"
        },
        {
            "code": "632221",
            "name": "门源回族自治县",
            "longname": "青海 海北藏族自治州 门源回族自治县"
        },
        {
            "code": "632222",
            "name": "祁连县",
            "longname": "青海 海北藏族自治州 祁连县"
        },
        {
            "code": "632223",
            "name": "海晏县",
            "longname": "青海 海北藏族自治州 海晏县"
        },
        {
            "code": "632224",
            "name": "刚察县",
            "longname": "青海 海北藏族自治州 刚察县"
        },
        {
            "code": "6323",
            "name": "黄南藏族自治州",
            "longname": "青海 黄南藏族自治州"
        },
        {
            "code": "632321",
            "name": "同仁县",
            "longname": "青海 黄南藏族自治州 同仁县"
        },
        {
            "code": "632322",
            "name": "尖扎县",
            "longname": "青海 黄南藏族自治州 尖扎县"
        },
        {
            "code": "632323",
            "name": "泽库县",
            "longname": "青海 黄南藏族自治州 泽库县"
        },
        {
            "code": "632324",
            "name": "河南蒙古族自治县",
            "longname": "青海 黄南藏族自治州 河南蒙古族自治县"
        },
        {
            "code": "6325",
            "name": "海南藏族自治州",
            "longname": "青海 海南藏族自治州"
        },
        {
            "code": "632521",
            "name": "共和县",
            "longname": "青海 海南藏族自治州 共和县"
        },
        {
            "code": "632522",
            "name": "同德县",
            "longname": "青海 海南藏族自治州 同德县"
        },
        {
            "code": "632523",
            "name": "贵德县",
            "longname": "青海 海南藏族自治州 贵德县"
        },
        {
            "code": "632524",
            "name": "兴海县",
            "longname": "青海 海南藏族自治州 兴海县"
        },
        {
            "code": "632525",
            "name": "贵南县",
            "longname": "青海 海南藏族自治州 贵南县"
        },
        {
            "code": "6326",
            "name": "果洛藏族自治州",
            "longname": "青海 果洛藏族自治州"
        },
        {
            "code": "632621",
            "name": "玛沁县",
            "longname": "青海 果洛藏族自治州 玛沁县"
        },
        {
            "code": "632622",
            "name": "班玛县",
            "longname": "青海 果洛藏族自治州 班玛县"
        },
        {
            "code": "632623",
            "name": "甘德县",
            "longname": "青海 果洛藏族自治州 甘德县"
        },
        {
            "code": "632624",
            "name": "达日县",
            "longname": "青海 果洛藏族自治州 达日县"
        },
        {
            "code": "632625",
            "name": "久治县",
            "longname": "青海 果洛藏族自治州 久治县"
        },
        {
            "code": "632626",
            "name": "玛多县",
            "longname": "青海 果洛藏族自治州 玛多县"
        },
        {
            "code": "6327",
            "name": "玉树藏族自治州",
            "longname": "青海 玉树藏族自治州"
        },
        {
            "code": "632721",
            "name": "玉树县",
            "longname": "青海 玉树藏族自治州 玉树县"
        },
        {
            "code": "632722",
            "name": "杂多县",
            "longname": "青海 玉树藏族自治州 杂多县"
        },
        {
            "code": "632723",
            "name": "称多县",
            "longname": "青海 玉树藏族自治州 称多县"
        },
        {
            "code": "632724",
            "name": "治多县",
            "longname": "青海 玉树藏族自治州 治多县"
        },
        {
            "code": "632725",
            "name": "囊谦县",
            "longname": "青海 玉树藏族自治州 囊谦县"
        },
        {
            "code": "632726",
            "name": "曲麻莱县",
            "longname": "青海 玉树藏族自治州 曲麻莱县"
        },
        {
            "code": "6328",
            "name": "海西蒙古族藏族自治州",
            "longname": "青海 海西蒙古族藏族自治州"
        },
        {
            "code": "632801",
            "name": "格尔木市",
            "longname": "青海 海西蒙古族藏族自治州 格尔木市"
        },
        {
            "code": "632802",
            "name": "德令哈市",
            "longname": "青海 海西蒙古族藏族自治州 德令哈市"
        },
        {
            "code": "632821",
            "name": "乌兰县",
            "longname": "青海 海西蒙古族藏族自治州 乌兰县"
        },
        {
            "code": "632822",
            "name": "都兰县",
            "longname": "青海 海西蒙古族藏族自治州 都兰县"
        },
        {
            "code": "632823",
            "name": "天峻县",
            "longname": "青海 海西蒙古族藏族自治州 天峻县"
        },
        {
            "code": "64",
            "name": "宁夏",
            "longname": "宁夏"
        },
        {
            "code": "6401",
            "name": "银川市",
            "longname": "宁夏 银川市"
        },
        {
            "code": "640101",
            "name": "市辖区",
            "longname": "宁夏 银川市 市辖区"
        },
        {
            "code": "640104",
            "name": "兴庆区",
            "longname": "宁夏 银川市 兴庆区"
        },
        {
            "code": "640105",
            "name": "西夏区",
            "longname": "宁夏 银川市 西夏区"
        },
        {
            "code": "640106",
            "name": "金凤区",
            "longname": "宁夏 银川市 金凤区"
        },
        {
            "code": "640121",
            "name": "永宁县",
            "longname": "宁夏 银川市 永宁县"
        },
        {
            "code": "640122",
            "name": "贺兰县",
            "longname": "宁夏 银川市 贺兰县"
        },
        {
            "code": "640181",
            "name": "灵武市",
            "longname": "宁夏 银川市 灵武市"
        },
        {
            "code": "6402",
            "name": "石嘴山市",
            "longname": "宁夏 石嘴山市"
        },
        {
            "code": "640201",
            "name": "市辖区",
            "longname": "宁夏 石嘴山市 市辖区"
        },
        {
            "code": "640202",
            "name": "大武口区",
            "longname": "宁夏 石嘴山市 大武口区"
        },
        {
            "code": "640205",
            "name": "惠农区",
            "longname": "宁夏 石嘴山市 惠农区"
        },
        {
            "code": "640221",
            "name": "平罗县",
            "longname": "宁夏 石嘴山市 平罗县"
        },
        {
            "code": "6403",
            "name": "吴忠市",
            "longname": "宁夏 吴忠市"
        },
        {
            "code": "640301",
            "name": "市辖区",
            "longname": "宁夏 吴忠市 市辖区"
        },
        {
            "code": "640302",
            "name": "利通区",
            "longname": "宁夏 吴忠市 利通区"
        },
        {
            "code": "640303",
            "name": "红寺堡区",
            "longname": "宁夏 吴忠市 红寺堡区"
        },
        {
            "code": "640323",
            "name": "盐池县",
            "longname": "宁夏 吴忠市 盐池县"
        },
        {
            "code": "640324",
            "name": "同心县",
            "longname": "宁夏 吴忠市 同心县"
        },
        {
            "code": "640381",
            "name": "青铜峡市",
            "longname": "宁夏 吴忠市 青铜峡市"
        },
        {
            "code": "6404",
            "name": "固原市",
            "longname": "宁夏 固原市"
        },
        {
            "code": "640401",
            "name": "市辖区",
            "longname": "宁夏 固原市 市辖区"
        },
        {
            "code": "640402",
            "name": "原州区",
            "longname": "宁夏 固原市 原州区"
        },
        {
            "code": "640422",
            "name": "西吉县",
            "longname": "宁夏 固原市 西吉县"
        },
        {
            "code": "640423",
            "name": "隆德县",
            "longname": "宁夏 固原市 隆德县"
        },
        {
            "code": "640424",
            "name": "泾源县",
            "longname": "宁夏 固原市 泾源县"
        },
        {
            "code": "640425",
            "name": "彭阳县",
            "longname": "宁夏 固原市 彭阳县"
        },
        {
            "code": "6405",
            "name": "中卫市",
            "longname": "宁夏 中卫市"
        },
        {
            "code": "640501",
            "name": "市辖区",
            "longname": "宁夏 中卫市 市辖区"
        },
        {
            "code": "640502",
            "name": "沙坡头区",
            "longname": "宁夏 中卫市 沙坡头区"
        },
        {
            "code": "640521",
            "name": "中宁县",
            "longname": "宁夏 中卫市 中宁县"
        },
        {
            "code": "640522",
            "name": "海原县",
            "longname": "宁夏 中卫市 海原县"
        },
        {
            "code": "65",
            "name": "新疆",
            "longname": "新疆"
        },
        {
            "code": "6501",
            "name": "乌鲁木齐市",
            "longname": "新疆 乌鲁木齐市"
        },
        {
            "code": "650101",
            "name": "市辖区",
            "longname": "新疆 乌鲁木齐市 市辖区"
        },
        {
            "code": "650102",
            "name": "天山区",
            "longname": "新疆 乌鲁木齐市 天山区"
        },
        {
            "code": "650103",
            "name": "沙依巴克区",
            "longname": "新疆 乌鲁木齐市 沙依巴克区"
        },
        {
            "code": "650104",
            "name": "新市区",
            "longname": "新疆 乌鲁木齐市 新市区"
        },
        {
            "code": "650105",
            "name": "水磨沟区",
            "longname": "新疆 乌鲁木齐市 水磨沟区"
        },
        {
            "code": "650106",
            "name": "头屯河区",
            "longname": "新疆 乌鲁木齐市 头屯河区"
        },
        {
            "code": "650107",
            "name": "达坂城区",
            "longname": "新疆 乌鲁木齐市 达坂城区"
        },
        {
            "code": "650109",
            "name": "米东区",
            "longname": "新疆 乌鲁木齐市 米东区"
        },
        {
            "code": "650121",
            "name": "乌鲁木齐县",
            "longname": "新疆 乌鲁木齐市 乌鲁木齐县"
        },
        {
            "code": "6502",
            "name": "克拉玛依市",
            "longname": "新疆 克拉玛依市"
        },
        {
            "code": "650201",
            "name": "市辖区",
            "longname": "新疆 克拉玛依市 市辖区"
        },
        {
            "code": "650202",
            "name": "独山子区",
            "longname": "新疆 克拉玛依市 独山子区"
        },
        {
            "code": "650203",
            "name": "克拉玛依区",
            "longname": "新疆 克拉玛依市 克拉玛依区"
        },
        {
            "code": "650204",
            "name": "白碱滩区",
            "longname": "新疆 克拉玛依市 白碱滩区"
        },
        {
            "code": "650205",
            "name": "乌尔禾区",
            "longname": "新疆 克拉玛依市 乌尔禾区"
        },
        {
            "code": "6521",
            "name": "吐鲁番地区",
            "longname": "新疆 吐鲁番地区"
        },
        {
            "code": "652101",
            "name": "吐鲁番市",
            "longname": "新疆 吐鲁番地区 吐鲁番市"
        },
        {
            "code": "652122",
            "name": "鄯善县",
            "longname": "新疆 吐鲁番地区 鄯善县"
        },
        {
            "code": "652123",
            "name": "托克逊县",
            "longname": "新疆 吐鲁番地区 托克逊县"
        },
        {
            "code": "6522",
            "name": "哈密地区",
            "longname": "新疆 哈密地区"
        },
        {
            "code": "652201",
            "name": "哈密市",
            "longname": "新疆 哈密地区 哈密市"
        },
        {
            "code": "652222",
            "name": "巴里坤哈萨克自治县",
            "longname": "新疆 哈密地区 巴里坤哈萨克自治县"
        },
        {
            "code": "652223",
            "name": "伊吾县",
            "longname": "新疆 哈密地区 伊吾县"
        },
        {
            "code": "6523",
            "name": "昌吉回族自治州",
            "longname": "新疆 昌吉回族自治州"
        },
        {
            "code": "652301",
            "name": "昌吉市",
            "longname": "新疆 昌吉回族自治州 昌吉市"
        },
        {
            "code": "652302",
            "name": "阜康市",
            "longname": "新疆 昌吉回族自治州 阜康市"
        },
        {
            "code": "652323",
            "name": "呼图壁县",
            "longname": "新疆 昌吉回族自治州 呼图壁县"
        },
        {
            "code": "652324",
            "name": "玛纳斯县",
            "longname": "新疆 昌吉回族自治州 玛纳斯县"
        },
        {
            "code": "652325",
            "name": "奇台县",
            "longname": "新疆 昌吉回族自治州 奇台县"
        },
        {
            "code": "652327",
            "name": "吉木萨尔县",
            "longname": "新疆 昌吉回族自治州 吉木萨尔县"
        },
        {
            "code": "652328",
            "name": "木垒哈萨克自治县",
            "longname": "新疆 昌吉回族自治州 木垒哈萨克自治县"
        },
        {
            "code": "6527",
            "name": "博尔塔拉蒙古自治州",
            "longname": "新疆 博尔塔拉蒙古自治州"
        },
        {
            "code": "652701",
            "name": "博乐市",
            "longname": "新疆 博尔塔拉蒙古自治州 博乐市"
        },
        {
            "code": "652722",
            "name": "精河县",
            "longname": "新疆 博尔塔拉蒙古自治州 精河县"
        },
        {
            "code": "652723",
            "name": "温泉县",
            "longname": "新疆 博尔塔拉蒙古自治州 温泉县"
        },
        {
            "code": "6528",
            "name": "巴音郭楞蒙古自治州",
            "longname": "新疆 巴音郭楞蒙古自治州"
        },
        {
            "code": "652801",
            "name": "库尔勒市",
            "longname": "新疆 巴音郭楞蒙古自治州 库尔勒市"
        },
        {
            "code": "652822",
            "name": "轮台县",
            "longname": "新疆 巴音郭楞蒙古自治州 轮台县"
        },
        {
            "code": "652823",
            "name": "尉犁县",
            "longname": "新疆 巴音郭楞蒙古自治州 尉犁县"
        },
        {
            "code": "652824",
            "name": "若羌县",
            "longname": "新疆 巴音郭楞蒙古自治州 若羌县"
        },
        {
            "code": "652825",
            "name": "且末县",
            "longname": "新疆 巴音郭楞蒙古自治州 且末县"
        },
        {
            "code": "652826",
            "name": "焉耆回族自治县",
            "longname": "新疆 巴音郭楞蒙古自治州 焉耆回族自治县"
        },
        {
            "code": "652827",
            "name": "和静县",
            "longname": "新疆 巴音郭楞蒙古自治州 和静县"
        },
        {
            "code": "652828",
            "name": "和硕县",
            "longname": "新疆 巴音郭楞蒙古自治州 和硕县"
        },
        {
            "code": "652829",
            "name": "博湖县",
            "longname": "新疆 巴音郭楞蒙古自治州 博湖县"
        },
        {
            "code": "6529",
            "name": "阿克苏地区",
            "longname": "新疆 阿克苏地区"
        },
        {
            "code": "652901",
            "name": "阿克苏市",
            "longname": "新疆 阿克苏地区 阿克苏市"
        },
        {
            "code": "652922",
            "name": "温宿县",
            "longname": "新疆 阿克苏地区 温宿县"
        },
        {
            "code": "652923",
            "name": "库车县",
            "longname": "新疆 阿克苏地区 库车县"
        },
        {
            "code": "652924",
            "name": "沙雅县",
            "longname": "新疆 阿克苏地区 沙雅县"
        },
        {
            "code": "652925",
            "name": "新和县",
            "longname": "新疆 阿克苏地区 新和县"
        },
        {
            "code": "652926",
            "name": "拜城县",
            "longname": "新疆 阿克苏地区 拜城县"
        },
        {
            "code": "652927",
            "name": "乌什县",
            "longname": "新疆 阿克苏地区 乌什县"
        },
        {
            "code": "652928",
            "name": "阿瓦提县",
            "longname": "新疆 阿克苏地区 阿瓦提县"
        },
        {
            "code": "652929",
            "name": "柯坪县",
            "longname": "新疆 阿克苏地区 柯坪县"
        },
        {
            "code": "6530",
            "name": "克孜勒苏柯尔克孜自治州",
            "longname": "新疆 克孜勒苏柯尔克孜自治州"
        },
        {
            "code": "653001",
            "name": "阿图什市",
            "longname": "新疆 克孜勒苏柯尔克孜自治州 阿图什市"
        },
        {
            "code": "653022",
            "name": "阿克陶县",
            "longname": "新疆 克孜勒苏柯尔克孜自治州 阿克陶县"
        },
        {
            "code": "653023",
            "name": "阿合奇县",
            "longname": "新疆 克孜勒苏柯尔克孜自治州 阿合奇县"
        },
        {
            "code": "653024",
            "name": "乌恰县",
            "longname": "新疆 克孜勒苏柯尔克孜自治州 乌恰县"
        },
        {
            "code": "6531",
            "name": "喀什地区",
            "longname": "新疆 喀什地区"
        },
        {
            "code": "653101",
            "name": "喀什市",
            "longname": "新疆 喀什地区 喀什市"
        },
        {
            "code": "653121",
            "name": "疏附县",
            "longname": "新疆 喀什地区 疏附县"
        },
        {
            "code": "653122",
            "name": "疏勒县",
            "longname": "新疆 喀什地区 疏勒县"
        },
        {
            "code": "653123",
            "name": "英吉沙县",
            "longname": "新疆 喀什地区 英吉沙县"
        },
        {
            "code": "653124",
            "name": "泽普县",
            "longname": "新疆 喀什地区 泽普县"
        },
        {
            "code": "653125",
            "name": "莎车县",
            "longname": "新疆 喀什地区 莎车县"
        },
        {
            "code": "653126",
            "name": "叶城县",
            "longname": "新疆 喀什地区 叶城县"
        },
        {
            "code": "653127",
            "name": "麦盖提县",
            "longname": "新疆 喀什地区 麦盖提县"
        },
        {
            "code": "653128",
            "name": "岳普湖县",
            "longname": "新疆 喀什地区 岳普湖县"
        },
        {
            "code": "653129",
            "name": "伽师县",
            "longname": "新疆 喀什地区 伽师县"
        },
        {
            "code": "653130",
            "name": "巴楚县",
            "longname": "新疆 喀什地区 巴楚县"
        },
        {
            "code": "653131",
            "name": "塔什库尔干塔吉克自治县",
            "longname": "新疆 喀什地区 塔什库尔干塔吉克自治县"
        },
        {
            "code": "6532",
            "name": "和田地区",
            "longname": "新疆 和田地区"
        },
        {
            "code": "653201",
            "name": "和田市",
            "longname": "新疆 和田地区 和田市"
        },
        {
            "code": "653221",
            "name": "和田县",
            "longname": "新疆 和田地区 和田县"
        },
        {
            "code": "653222",
            "name": "墨玉县",
            "longname": "新疆 和田地区 墨玉县"
        },
        {
            "code": "653223",
            "name": "皮山县",
            "longname": "新疆 和田地区 皮山县"
        },
        {
            "code": "653224",
            "name": "洛浦县",
            "longname": "新疆 和田地区 洛浦县"
        },
        {
            "code": "653225",
            "name": "策勒县",
            "longname": "新疆 和田地区 策勒县"
        },
        {
            "code": "653226",
            "name": "于田县",
            "longname": "新疆 和田地区 于田县"
        },
        {
            "code": "653227",
            "name": "民丰县",
            "longname": "新疆 和田地区 民丰县"
        },
        {
            "code": "6540",
            "name": "伊犁哈萨克自治州",
            "longname": "新疆 伊犁哈萨克自治州"
        },
        {
            "code": "654002",
            "name": "伊宁市",
            "longname": "新疆 伊犁哈萨克自治州 伊宁市"
        },
        {
            "code": "654003",
            "name": "奎屯市",
            "longname": "新疆 伊犁哈萨克自治州 奎屯市"
        },
        {
            "code": "654021",
            "name": "伊宁县",
            "longname": "新疆 伊犁哈萨克自治州 伊宁县"
        },
        {
            "code": "654022",
            "name": "察布查尔锡伯自治县",
            "longname": "新疆 伊犁哈萨克自治州 察布查尔锡伯自治县"
        },
        {
            "code": "654023",
            "name": "霍城县",
            "longname": "新疆 伊犁哈萨克自治州 霍城县"
        },
        {
            "code": "654024",
            "name": "巩留县",
            "longname": "新疆 伊犁哈萨克自治州 巩留县"
        },
        {
            "code": "654025",
            "name": "新源县",
            "longname": "新疆 伊犁哈萨克自治州 新源县"
        },
        {
            "code": "654026",
            "name": "昭苏县",
            "longname": "新疆 伊犁哈萨克自治州 昭苏县"
        },
        {
            "code": "654027",
            "name": "特克斯县",
            "longname": "新疆 伊犁哈萨克自治州 特克斯县"
        },
        {
            "code": "654028",
            "name": "尼勒克县",
            "longname": "新疆 伊犁哈萨克自治州 尼勒克县"
        },
        {
            "code": "6542",
            "name": "塔城地区",
            "longname": "新疆 塔城地区"
        },
        {
            "code": "654201",
            "name": "塔城市",
            "longname": "新疆 塔城地区 塔城市"
        },
        {
            "code": "654202",
            "name": "乌苏市",
            "longname": "新疆 塔城地区 乌苏市"
        },
        {
            "code": "654221",
            "name": "额敏县",
            "longname": "新疆 塔城地区 额敏县"
        },
        {
            "code": "654223",
            "name": "沙湾县",
            "longname": "新疆 塔城地区 沙湾县"
        },
        {
            "code": "654224",
            "name": "托里县",
            "longname": "新疆 塔城地区 托里县"
        },
        {
            "code": "654225",
            "name": "裕民县",
            "longname": "新疆 塔城地区 裕民县"
        },
        {
            "code": "654226",
            "name": "和布克赛尔蒙古自治县",
            "longname": "新疆 塔城地区 和布克赛尔蒙古自治县"
        },
        {
            "code": "6543",
            "name": "阿勒泰地区",
            "longname": "新疆 阿勒泰地区"
        },
        {
            "code": "654301",
            "name": "阿勒泰市",
            "longname": "新疆 阿勒泰地区 阿勒泰市"
        },
        {
            "code": "654321",
            "name": "布尔津县",
            "longname": "新疆 阿勒泰地区 布尔津县"
        },
        {
            "code": "654322",
            "name": "富蕴县",
            "longname": "新疆 阿勒泰地区 富蕴县"
        },
        {
            "code": "654323",
            "name": "福海县",
            "longname": "新疆 阿勒泰地区 福海县"
        },
        {
            "code": "654324",
            "name": "哈巴河县",
            "longname": "新疆 阿勒泰地区 哈巴河县"
        },
        {
            "code": "654325",
            "name": "青河县",
            "longname": "新疆 阿勒泰地区 青河县"
        },
        {
            "code": "654326",
            "name": "吉木乃县",
            "longname": "新疆 阿勒泰地区 吉木乃县"
        },
        {
            "code": "6590",
            "name": "自治区直辖县级行政区划",
            "longname": "新疆 自治区直辖县级行政区划"
        },
        {
            "code": "659001",
            "name": "石河子市",
            "longname": "新疆 自治区直辖县级行政区划 石河子市"
        },
        {
            "code": "659002",
            "name": "阿拉尔市",
            "longname": "新疆 自治区直辖县级行政区划 阿拉尔市"
        },
        {
            "code": "659003",
            "name": "图木舒克市",
            "longname": "新疆 自治区直辖县级行政区划 图木舒克市"
        },
        {
            "code": "659004",
            "name": "五家渠市",
            "longname": "新疆 自治区直辖县级行政区划 五家渠市"
        }
    ];

    var c1 = [], c2 = [], c3 = [];

    var formatCityData = function(){
        var rtn, item, obj;
        for(var i = 0, len = cityData.length; i < len; i++){
            item = cityData[i];
            if(item.code.length == 2){
                c1.push(item);
            }
            if(item.code.length == 4){
                c2.push(item);
            }
            if(item.code.length == 6){
                c3.push(item);
            }
        }

        // 找出6位中，前4位相同的数据
        var c46 = {}, sp;
        for(var i = 0, len = c3.length; i < len; i++){
            sp = c3[i].code.substring(0, 4);
            if(!c46[sp]){
                c46[sp] = [];
            }
            c46[sp].push(c3[i]);
        }

        // 找出4位中，前2位相同的数据
        // 6位往4位拼合
        var c24 = {};
        for(var i = 0, len = c2.length; i < len; i++){
            var code = c2[i].code;
            if(c46[code]){
                c2[i].sub = c46[code];
            }
            sp = c2[i].code.substring(0, 2);
            if(!c24[sp]){
                c24[sp] = [];
            }
            c24[sp].push(c2[i]);
        }

        // 4位向2位拼
        for(var i = 0, len = c1.length; i < len; i++){
            var code = c1[i].code;
            if(c24[code]){
                c1[i].sub = c24[code];
            }
        }
        return c1;

    }
    $.smConfig.rawCitiesData = formatCityData();
    $.smConfig.cityData = cityData;

}($);
// jshint ignore: end

/* global $:true */
/* jshint unused:false*/

+ function($) {
    "use strict";

    $.fn.cityPicker = function(params) {

        return this.each(function() {
            if(!this) return;

            var format = function(data) {
                var result = [];
                for(var i=0;i<data.length;i++) {
                    var d = data[i];
                    if(d.name === "请选择") continue;
                    result.push(d.name);
                }
                if(result.length) return result;
                return [""];
            };
            var sub = function(data) {
                if(!data.sub) return [""];
                return format(data.sub);
            };
            var getCities = function(d) {
                for(var i=0;i< raw.length;i++) {
                    if(raw[i].name === d) return sub(raw[i]);
                }
                return [""];
            };
            var getDistricts = function(p, c) {
                for(var i=0;i< raw.length;i++) {
                    if(raw[i].name === p) {
                        for(var j=0;j< raw[i].sub.length;j++) {
                            if(raw[i].sub[j].name === c) {
                                return sub(raw[i].sub[j]);
                            }
                        }
                    }
                }
                return [""];
            };

            var raw = $.smConfig.rawCitiesData;
            var provinces = raw.map(function(d) {
                return d.name;
            });

            var initCities = sub(raw[0]);
            var initDistricts = [""];


            var currentProvince = provinces[0];
            var currentCity = initCities[0];
            var currentDistrict = initDistricts[0];


            var _this = this;

            var setCurrentAreaCode = function(values){
                var raw = $.smConfig.cityData;
                //var val = $(_this).val();
                var code = '';
                //var arrVal = val.split(' ');
                var arrVal = values;
                var currentCode = '';
                for(var i = 0, len = raw.length; i < len; i++){
                    if(arrVal.length == 1){
                        if(raw[i].name == arrVal[0]){
                            code = raw[i].code;
                        }
                    }
                    if(arrVal.length == 2){
                        if(raw[i].name == arrVal[0]){
                            currentCode = raw[i].code;
                        }else if(currentCode != '' && raw[i].code.substring(0, 2) == currentCode && raw[i].name == arrVal[1]){
                            code = raw[i].code;
                            currentCode == '';
                        }
                    }
                    if(arrVal.length == 3){
                        if(raw[i].name == arrVal[0]){
                            currentCode = raw[i].code;
                        }else if(currentCode != '' && raw[i].code.substring(0, 2) == currentCode && raw[i].name == arrVal[1]){
                            currentCode = raw[i].code;
                        }else if(currentCode != '' && raw[i].code.substring(0, 4) == currentCode && raw[i].name == arrVal[2]){
                            code = raw[i].code;
                            currentCode == '';
                        }
                    }
                }
                //console.log('code: ', code)
                $(_this).data('code', code);
            };

            var defaults = {

                cssClass: "city-picker",
                rotateEffect: false,  //为了性能

                onChange: function (picker, values, displayValues) {
                    // 只要有change，重新赋值
                    setCurrentAreaCode(values)

                    var newProvince = values[0];
                    var newCity, newDist, currentDist;
                    if(newProvince !== currentProvince) {
                        var newCities = getCities(newProvince);
                        newCity = newCities[0];
                        var newDistricts = getDistricts(newProvince, newCity);
                        picker.cols[1].replaceValues(newCities);
                        picker.cols[2].replaceValues(newDistricts);
                        currentProvince = newProvince;
                        currentCity = newCity;
                        picker.updateValue();
                        return;
                    }
                    newCity = picker.cols[1].value;
                    if(newCity !== currentCity) {
                        picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
                        currentCity = newCity;
                        picker.updateValue();
                    }

                },

                cols: [
                    {
                        values: provinces,
                        cssClass: "col-province"
                    },
                    {
                        values: initCities,
                        cssClass: "col-city"
                    },
                    {
                        values: initDistricts,
                        cssClass: "col-district"
                    }
                ]
            };

            var p = $.extend(defaults, params);
            //计算value
            var val = $(this).val();
            if(val) {
                p.value = val.split(" ");
                if(p.value[0]) {
                    currentProvince = p.value[0];
                    p.cols[1].values = getCities(p.value[0]);
                }
                if(p.value[1]) {
                    currentCity = p.value[1];
                    p.cols[2].values = getDistricts(p.value[0], p.value[1]);
                } else {
                    currentDistrict = p.value[2];
                    p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
                }
            }
            $(this).picker(p);
        });

    };

}($);
