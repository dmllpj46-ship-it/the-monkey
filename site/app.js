const RAW = "https://raw.githubusercontent.com/dmllpj46-ship-it/the-monkey/main";
const CDN = "https://cdn.jsdelivr.net/gh/dmllpj46-ship-it/the-monkey@main";

const cast = [
  {
    group: "取经船",
    members: [
      { slug: "wukong", name: "孙悟空", en: "Sun Wukong", role: "星盗 · 齐天大圣号船长", anchor: "金棕猴毛、冲天乱发、金色科技紧箍、黑红战袍、带三道铜环的尾巴、等离子金箍棒" },
      { slug: "bajie", name: "猪八戒", en: "Zhu Bajie", role: "重装工程师 · 前舰队炮手", anchor: "灰蓝猪首、垂耳、铜套獠牙、藏青压力袍、锈橙肩甲、圆腹甲、九齿重力耙" },
      { slug: "wujing", name: "沙僧", en: "Sha Wujing", role: "军需官兼战地医师", anchor: "蓝灰巨汉、光头铜须、深青长袍、生命维持颈环、九枚金属牌、月牙铲" },
      { slug: "sanzang", name: "唐僧", en: "Tang Sanzang", role: "领航者 · 导航僧", anchor: "清瘦青年、金色导航额环、白与姜黄僧袍、星图腰带、发光经卷、九环杖" },
    ],
  },
  {
    group: "火教",
    members: [
      { slug: "red-boy", name: "红孩儿", en: "Red Boy", role: "第三舰队少主 · 纵火天才", anchor: "赤红短发、火焰瞳、双颊火纹、黑色无袖火焰夹克、喷口热能背架、火焰长枪" },
      { slug: "bull-demon", name: "牛魔王", en: "Bull Demon King", role: "火教宗主 · 红孩儿之父", anchor: "炭黑牛首、巨角缠铜、鼻铜环、赤红鬃毛、黑与牛血红漆甲、熔炉胸核、双刃巨斧" },
      { slug: "iron-fan", name: "铁扇公主", en: "Iron Fan Princess", role: "宗主夫人 · 风系术者", anchor: "高髻金钗、扇冠双角、牛血红唇、黑漆甲赤红长袍、扇面肩甲、翠绿芭蕉扇" },
    ],
  },
  {
    group: "天庭",
    members: [
      { slug: "nezha", name: "哪吒", en: "Nezha", role: "天军王牌 · 莲花装甲驾驶员", anchor: "中性少年、双丸子头配玉莲饰、白红莲花甲、混天绫能量带、脚踝风火轮涡轮" },
      { slug: "erlang", name: "二郎神", en: "Erlang Shen", role: "猎杀舰队统帅 · 追兵", anchor: "银白长发、额间青色天眼、银白重甲配深蓝披风、三尖两刃刀、机械哮天犬" },
    ],
  },
  {
    group: "星海",
    members: [
      { slug: "guanyin", name: "观世音", en: "Guanyin", role: "星海守护者 · 引路人", anchor: "白衣叠星云薄纱、千手全息背光、机械莲座、净瓶星水与柳枝" },
      { slug: "nuwa", name: "女娲", en: "Nüwa", role: "创世神 · 补天者", anchor: "五色石环绕的高髻、蛇形长尾、星图披风、胸前五色石、星光线与天梭" },
    ],
  },
  {
    group: "兽星",
    members: [
      { slug: "patrol-robot", name: "巡逻机器人", en: "Patrol Unit", role: "兽星机械执法者 · 量产型", anchor: "楔形长头、横向冷青视镜、枪灰装甲配危险黄斜带、三指夹钳、电击长杆、背部折叠副臂" },
      { slug: "red-fox", name: "红狐女", en: "Red Fox", role: "地下黑帮头目 · 半机械化", anchor: "赤红狐首、单只瞄准义眼、颌侧金属板、左臂义肢、一真两机械三尾、暗红毛领、等离子撬棍" },
      { slug: "black-bear", name: "黑熊", en: "Black Bear", role: "地下组织头目 · 实为抵抗军统帅", anchor: "炭黑熊首、灰白口鼻、左眼竖疤、胸口骨白月牙、肩挂机器人头颅绶带、土褐油布大衣、黑缨长枪" },
    ],
  },
  {
    group: "建造者",
    members: [
      { slug: "sapiens", name: "智人", en: "Sapiens", role: "消失的建造者种族 · 科研站主人", anchor: "光头无眉、石墨耳甲配青缝、鬓角青色电路线、颅后悬浮数据环、骨白石墨紧身甲、姜金胸带、六角青色胸核、指挥杆" },
      { slug: "mother-mind", name: "智能之母", en: "The Mother Mind", role: "智人留下的治理核心 · 兽星统治者", anchor: "山岳级枪灰球体、危险黄斜带、成千上万单缝冷青视镜、中央巨大横向主视镜、底部脐带管线插入发光能源井" },
    ],
  },
];

const pages = [
  {
    n: "01", slug: "p01", title: "碎星禅院",
    lines: [
      ["红孩儿", "两个老东西，也配拦我？"],
      ["猪八戒", "小崽子，你爹牛魔王见了俺，也得递根烟。"],
      ["猪八戒", "吃俺一耙！"],
      ["红孩儿", "太慢了。"],
    ],
    note: "钉耙齿数偏少（约七齿），后续页面按九齿统一。",
  },
  {
    n: "02", slug: "p02", title: "一个，倒了",
    lines: [
      ["红孩儿", "一个，倒了。"],
      ["沙僧", "……你到底是什么东西？"],
      ["红孩儿", "火教第三舰队，少主。记好了。"],
      ["红孩儿", "第二个。"],
    ],
    note: "唐僧只在高处远景出现，服装与额环仍可辨认。",
  },
  {
    n: "03", slug: "p03", title: "送你们一程",
    lines: [
      ["红孩儿", "你们不是要去找「经」吗？我送你们一程。"],
      ["唐僧", "八戒！悟净——！"],
      ["沙僧", "抓住我！"],
      ["红孩儿", "多元宇宙那么大，够你们找一辈子。"],
    ],
    note: "唐僧面部有轻微重影，按「时空残影」保留。",
  },
  {
    n: "04", slug: "p04", title: "金箍棒的光",
    lines: [
      ["孙悟空", "小孩，火玩得不错。"],
      ["红孩儿", "又来一个送死的。"],
      ["孙悟空", "可惜——你打错人了。"],
      ["红孩儿", "齐天大圣？我烧的就是齐天大圣。"],
    ],
    note: "金箍、左肩护甲、三环尾巴与等离子棒芯均清晰可辨。",
  },
  {
    n: "05", slug: "p05", title: "三昧真火",
    lines: [
      ["红孩儿", "三昧真火——全开！"],
      ["孙悟空", "啧……这火不一般。"],
      ["红孩儿", "齐天大圣？不过如此。"],
      ["红孩儿", "烧干净，就没人记得你了。"],
    ],
    note: "金箍在此页碎裂、金箍棒脱手；这是悟空的损伤点，后续不再补全。",
  },
  {
    n: "06", slug: "p06", title: "千手",
    lines: [
      ["观世音", "孩子，杀念一起，火就烧到自己身上。"],
      ["红孩儿", "少管闲事！"],
      ["观世音", "红孩儿，收手。否则，我不再只是警告。"],
    ],
    note: "悟空本页空手，符合上一页武器脱手的连续性。",
  },
  {
    n: "07", slug: "p07", title: "风来",
    lines: [
      ["红孩儿", "装神弄鬼——去死！"],
      ["观世音", "风来。定。"],
      ["观世音", "你的火，烧不动因果。"],
      ["红孩儿", "放开我……！"],
    ],
    note: "金箍棒在本页重新出现在悟空手边，可解释为战斗间隙取回。",
  },
  {
    n: "08", slug: "p08", title: "父母的命",
    lines: [
      ["观世音", "业火不熄，留你不得。"],
      ["牛魔王", "菩萨——手下留情！"],
      ["铁扇公主", "愿以全族气运，换他一命。"],
      ["观世音", "气运？你们拿什么，替他偿还那些被烧掉的人？"],
    ],
    note: "牛魔王与铁扇公主的定妆要素齐全；芭蕉扇扇面偏叶状，可接受。",
  },
  {
    n: "09", slug: "p09", title: "永世",
    lines: [
      ["观世音", "死罪可免。活罪——永世。"],
      ["红孩儿", "放我出去——！"],
      ["牛魔王 / 铁扇公主", "谢菩萨不杀之恩。"],
      ["孙悟空", "菩萨，那几个……还找得回来吗？"],
    ],
    note: "观音五官略年轻于定妆稿；铁扇公主的蕉扇落地，作为放下兵刃的姿态保留。",
  },
  {
    n: "10", slug: "p10", title: "随心而行",
    lines: [
      ["孙悟空", "菩萨，师父他们……"],
      ["观世音", "他们没死。只是被丢到了很远的地方。"],
      ["观世音", "随心而行，初心不忘。"],
      ["孙悟空", "记下了。这回，换我去找他们。"],
    ],
    note: "悟空跪姿仍带笑，读作「拜别」而非认输；金箍保持碎裂。",
  },
  {
    n: "11", slug: "p11", title: "五彩石",
    lines: [
      ["牛魔王", "猴子。这回，是我儿子欠你的。"],
      ["牛魔王", "拿着。五彩石。"],
      ["牛魔王", "创世神女娲在这颗星上。她能撕开的路，比你那根棒子多。"],
      ["牛魔王", "去吧。别死在外面。"],
    ],
    note: "牛魔王双角偏棕、铜箍不如定妆明显；飞船造型首次出现，尚未定妆。",
  },
  {
    n: "12", slug: "p12", title: "空殿",
    lines: [
      ["孙悟空", "女娲——！我找你有事！"],
      ["旁白", "五彩石星。它真的存在。"],
      ["旁白", "织天的机器还在转。座位空着。"],
      ["孙悟空", "……人呢？"],
    ],
    note: "整页缩放下看不出金箍裂纹；驾驶舱可作为飞船内景的基准。",
  },
  {
    n: "13", slug: "p13", title: "洗石",
    lines: [
      ["旁白", "银河像一条河，从天上淌下来。"],
      ["旁白", "河边的女人在洗石头。五色的石头，一颗一颗。"],
      ["孙悟空", "你就是女娲？"],
      ["女娲", "你走了很久。"],
    ],
    note: "悟空已落座，读作确认无威胁；五色石环绕发顶，与定妆一致。",
  },
  {
    n: "14", slug: "p14", title: "你从哪来",
    lines: [
      ["女娲", "来了。你从哪来？"],
      ["孙悟空", "你又是谁？"],
      ["女娲", "先答我。从哪里来，要到哪里去。"],
    ],
    note: "本页银河为普通旋涡星系，未延续上页七彩银河；按换机位保留。",
  },
  {
    n: "15", slug: "p15", title: "叩拜",
    lines: [
      ["孙悟空", "弟子孙悟空，拜见女娲娘娘。"],
      ["孙悟空", "师父和两个兄弟，被红孩儿扔进了宇宙深处。"],
      ["女娲", "……"],
      ["孙悟空", "求娘娘指一条路。哪怕把命押上。"],
    ],
    note: "完整趴伏叩拜，金箍棒横放在地；第 3 格女娲沉默，上字时不要加台词。",
  },
  {
    n: "16", slug: "p16", title: "哪个师傅",
    lines: [
      ["女娲", "你要找哪个师傅呢？"],
      ["孙悟空", "什么？"],
      ["女娲", "你是哪个猴子，在找哪个师傅？"],
      ["孙悟空", "……这话，什么意思？"],
    ],
    note: "河面倒影里三个悟空与一个模糊女娲，是刻意保留的多元宇宙回响。",
  },
  {
    n: "17", slug: "p17", title: "结界",
    lines: [
      ["女娲", "这座五彩星，是一道结界。"],
      ["女娲", "进来容易。出去，难。"],
      ["女娲", "你带着的每一样东西，都会留在这里。"],
      ["孙悟空", "等等——！"],
    ],
    note: "消散顺序：蛇尾 → 衣袍 → 躯干 → 五色石与笑容。",
  },
  {
    n: "18", slug: "p18", title: "困",
    lines: [
      ["旁白", "飞船没有应答。"],
      ["孙悟空", "起来啊！你他娘的起来啊！"],
      ["旁白", "金箍棒沉得像一段死铁。"],
      ["孙悟空", "……真把我关这儿了？"],
    ],
    note: "第 3 格电光是「催动失败的一瞬」；穹顶偏灰白按结界内侧视角保留。",
  },
  {
    n: "19", slug: "p19", title: "虚牢",
    lines: [
      ["旁白", "观世音给他留了一座宇宙。——空的。"],
      ["红孩儿", "开门！"],
      ["红孩儿", "……我听得见。外面还在打。"],
      ["旁白", "没有出口。只有他自己。"],
    ],
    note: "长枪砸壁砸到近断刃，与第 2 格血拳呼应；莲壳轮廓按结界内侧视角放大。",
  },
  {
    n: "20", slug: "p20", title: "那一战",
    lines: [
      ["旁白", "他记得那一战。"],
      ["旁白", "天庭把能打的，全派下来了。"],
      ["红孩儿（回忆）", "那时候，我想成为他。"],
    ],
    note: "第 1、4 格的少年剪影只给轮廓，是记忆里「当年的自己」；风格整体泛白，为回忆滤镜。",
  },
  {
    n: "21", slug: "p21", title: "立誓",
    lines: [
      ["旁白", "后来，他看见了另一个人。"],
      ["红孩儿（回忆）", "父王……？"],
      ["红孩儿", "他跑了。他把我丢在这儿，自己跑了。"],
      ["红孩儿", "我要出去。我要打赢那只猴子。"],
      ["红孩儿", "我不是谁的儿子。"],
    ],
    note: "牛魔王始终背身、斧只露单刃（披风遮挡）；第 4 格裂纹是开始，不等同破壁。",
  },
  {
    n: "22", slug: "p22", title: "火焰山",
    lines: [
      ["旁白", "火焰山今晚的火，烧得比往常低。"],
      ["铁扇公主", "……是我没拦住他。"],
      ["牛魔王", "是我先走的。"],
      ["铁扇公主", "他还活着。"],
      ["牛魔王", "……嗯。"],
    ],
    note: "膝上烧焦短枪是本页新增道具，不进定妆；烟云顶端的莲形冷星呼应第 9 页的灯星。",
  },
  {
    n: "23", slug: "p23", title: "泥里",
    lines: [
      ["旁白", "醒来的时候，先尝到的是泥。"],
      ["巡逻机", "编号。"],
      ["巡逻机", "无编号。"],
      ["旁白", "他被拖走的时候，钉耙还埋在泥里。"],
    ],
    note: "钉耙九齿、锈橙肩甲为身份锚点；闸门与岗楼衔接下一页牢区。",
  },
  {
    n: "24", slug: "p24", title: "兽星",
    lines: [
      ["旁白", "这一层关满了兽人。"],
      ["狼人牢友", "这儿是兽星。"],
      ["狼人牢友", "以前是我们的，现在归机器。"],
      ["八戒", "机器要兽人干什么？"],
      ["鳄人牢友", "干活。吃饭得自己挣。"],
    ],
    note: "第 3 格的老野猪人与八戒同形，上字时不要给他台词，避免混淆。",
  },
  {
    n: "25", slug: "p25", title: "地下",
    lines: [
      ["旁白", "往下第三层，一台吊车装八十个。"],
      ["旁白", "这里没有法。只有价。"],
      ["巡逻机", "一块。一天。"],
      ["八戒", "够吃吗？"],
      ["巡逻机", "够不死。"],
    ],
    note: "地下市集广告牌全为抽象符号；配给牌是金属小牌，不是纸币。",
  },
  {
    n: "26", slug: "p26", title: "等",
    lines: [
      ["旁白", "他不惹事。"],
      ["旁白", "不站队，不结拜，不多话。"],
      ["八戒", "师父。老沙。"],
      ["八戒", "再等等我。"],
      ["旁白", "他在等一个机会。哪怕只有一次。"],
    ],
    note: "全息里唐僧、沙僧偏蓝白半透；第 4 格通风井光柱是全页唯一冷白光源。",
  },
  {
    n: "27", slug: "p27", title: "红狐",
    lines: [
      ["红狐", "喂。大个子。"],
      ["红狐", "这身力气，在这儿浪费了。"],
      ["八戒", "你想干什么。"],
      ["红狐", "赚钱。你出力气，我出门路。"],
      ["红狐", "好力气。"],
    ],
    note: "中景里的红狐偏「红发+狐耳」，以第 2 格近景的定妆狐首为准。",
  },
  {
    n: "28", slug: "p28", title: "盲抢",
    lines: [
      ["红狐", "明天夜里，三号井，一支车队。"],
      ["八戒", "抢什么。"],
      ["红狐", "你不用知道。"],
      ["八戒", "不知道抢什么，我就不去。"],
      ["红狐", "你会回来的。"],
    ],
    note: "全息货柜上的黑块是剧情信息，上字时不要补出内容。",
  },
  {
    n: "29", slug: "p29", title: "劫持",
    lines: [
      ["旁白", "第二天，巷子两头都站满了人。"],
      ["红狐", "我说过，你会回来的。"],
      ["八戒", "……是你。"],
      ["红狐", "别急。我们谈笔生意。"],
    ],
    note: "第 4 格改为双腕吊梁，压迫感更强；红狐换长外套但保留毛领、机械臂与两条机械尾。",
  },
  {
    n: "30", slug: "p30", title: "门路",
    lines: [
      ["红狐", "车队抢下来，我送你上去。"],
      ["红狐", "井口的闸，只有我能开。"],
      ["八戒", "……为什么找我。"],
      ["红狐", "因为你不想死在这儿。"],
    ],
    note: "全息为纯线框、无可读字；前臂打光让她两侧都像机械，以单侧义肢为准。",
  },
  {
    n: "31", slug: "p31", title: "没有真人",
    lines: [
      ["八戒", "可以。但我不杀人。"],
      ["红狐", "杀什么？这星球上没有真人。"],
      ["红狐", "底下这些，全是机器。"],
      ["旁白", "他点了头。那一刻他还不知道，这句话是真是假。"],
    ],
    note: "「没有真人」是全话暗线，上字保持冷、轻、不解释。",
  },
  {
    n: "32", slug: "p32", title: "三号井",
    lines: [
      ["旁白", "她说的明天，就是现在。"],
      ["红狐", "动手。"],
      ["八戒", "让开让开让开——！"],
    ],
    note: "机器人是量产型：无编号、无表情。货柜内容本页不出现。",
  },
  {
    n: "33", slug: "p33", title: "一耙",
    lines: [
      ["红狐", "退！退到第二道墙！"],
      ["八戒", "你们数得过来。俺不用数。"],
      ["旁白", "一耙。"],
      ["红狐", "……头功。"],
    ],
    note: "第 4 格耙齿 6–7 齿，上字前按定妆九齿统一；机器只出油与冷却液，不流血。",
  },
  {
    n: "34", slug: "p34", title: "头功",
    lines: [
      ["旁白", "闸门是她开的。门是他掰的。"],
      ["兽人", "头功！头功！"],
      ["红狐", "说好了，我送你上去。"],
      ["旁白", "他没有问柜子里是什么。他已经开始不问了。"],
    ],
    note: "全程不给货物正面，与 P28 的涂黑标签是同一条留白。",
  },
  {
    n: "35", slug: "p35", title: "门后",
    lines: [
      ["红狐", "往里。别乱看。"],
      ["旁白", "地窖下面还有地窖。"],
      ["黑熊", "红狐。你带回一个会干活的。"],
      ["八戒", "……这星球上不是只有机器吗。"],
    ],
    note: "黑熊首次登场。肩上那排机器人头颅是战利品，不是活动装置。",
  },
  {
    n: "36", slug: "p36", title: "不是帮派",
    lines: [
      ["黑熊", "我们不是帮派。帮派只求活着。"],
      ["黑熊", "这是它的星球。我们把它一块一块拿回来。"],
      ["黑熊", "它们没有要找回的人。"],
      ["旁白", "他第一次被人叫「同志」。"],
    ],
    note: "图边的计数痕是四竖一斜的划记，不是文字，上字时不要认成字母。",
  },
  {
    n: "37", slug: "p37", title: "天上的耳朵",
    lines: [
      ["黑熊", "坐过了，就是自己人。"],
      ["八戒", "俺没说要坐。"],
      ["八戒", "找师父。不替谁打仗。"],
      ["黑熊", "你要找的人，在天上有名字。我们这底下，有耳朵。"],
      ["旁白", "他答应了。不是因为信。"],
    ],
    note: "第 4 格舱盖里的月亮与 P30 全息那一轮是同一个，保持形状一致。",
  },
  {
    n: "38", slug: "p38", title: "智人",
    lines: [
      ["八戒", "这星球，什么时候开始是机器的？"],
      ["红狐", "我生下来，它们就是主人。再往前，没人知道。"],
      ["红狐", "老机器里有段记录：管它们的，是另一种东西。人。"],
      ["旁白", "他说不出自己为什么心口一紧。"],
    ],
    note: "第 3 格的「智人」按唐僧一族的体型画，不加宗教符号；这是给师父留的暗线。",
  },
  {
    n: "39", slug: "p39", title: "货物",
    lines: [
      ["黑熊", "你们问柜子里是什么。现在你们看见了。"],
      ["黑熊", "高爆炸药。天庭舰队用的。"],
      ["红狐", "那是智能之母。"],
      ["黑熊", "它的心脏在下面。炸掉井，它就瞎。"],
    ],
    note: "爆破弹只有形状与警示纹，不写型号文字；手绘图与 P36 的矿井路网同批。",
  },
  {
    n: "40", slug: "p40", title: "定向爆破",
    lines: [
      ["旁白", "往上九百米，是它。往下九百米，是它的饭。"],
      ["红狐", "三十七枚。"],
      ["八戒", "够了。炸完跑。"],
      ["旁白", "它第一次不知道东西在哪。"],
    ],
    note: "爆炸只毁能源井与管线，球体不塌——它是 P42 才死透的。第 4 格两人只画剪影。",
  },
  {
    n: "41", slug: "p41", title: "总攻",
    lines: [
      ["旁白", "能源断了三分钟。三分钟后，门从里面开了。"],
      ["黑熊", "跟上来的，今晚有饭。不跟的，明天还是它的奴隶。"],
      ["八戒", "让开让开让开——！"],
      ["旁白", "它们第一次向后走。"],
    ],
    note: "机器人不流血、不喊叫，只有电火花与熄灭的报数灯；熊掌旗是炭笔涂鸦，不是国徽。",
  },
  {
    n: "42", slug: "p42", title: "关灯",
    lines: [
      ["红狐", "它还在看。"],
      ["八戒", "看我们做什么。"],
      ["黑熊", "它没有饭了。现在，它只剩眼睛。"],
      ["黑熊", "拔！"],
      ["旁白", "没有欢呼。他们只是站着，听这座星球安静下来。"],
    ],
    note: "关闭动作是物理的（拔断干线缆），不出现任何屏幕界面；第 4 格的日光是全话第一次自然光。",
  },
  {
    n: "43", slug: "p43", title: "封赏",
    lines: [
      ["黑熊", "从今天起，这颗星球自己管自己。"],
      ["黑熊", "先锋将军。"],
      ["八戒", "俺只要找到俺师父。"],
      ["红狐", "那就先找他。"],
    ],
    note: "授衔用的是八戒自己那只锈橙肩甲，不是新造铠甲——抵抗军此刻没有工业。旁白强调她说的是「先」。",
  },
  {
    n: "44", slug: "p44", title: "科研站",
    lines: [
      ["红狐", "它死了，可它没忘。"],
      ["八戒", "这是它的名字？"],
      ["红狐", "这是这座地方的名字。"],
      ["八戒", "……跟俺师父，一个模样。"],
    ],
    note: "智人首次以全息出现。第 3 格不许画虐待：他们礼貌、干净、把动物当数据。",
  },
  {
    n: "45", slug: "p45", title: "撤离",
    lines: [
      ["旁白", "实验很成功。第三代起，它们开始提问。"],
      ["旁白", "然后，某一天，造它们的东西全走了。"],
      ["智人", "留守指令——照看它们。在它们学会自治之前。"],
      ["旁白", "没有人回来取消这句话。"],
    ],
    note: "全页是档案回放，带扫描带与网点颗粒；机械不是叛变，是在执行一条没人收回的指令。",
  },
  {
    n: "46", slug: "p46", title: "重启它",
    lines: [
      ["八戒", "把它重新开起来。"],
      ["八戒", "联网的那部分，砍掉。只留算力和导航。"],
      ["老野猪", "它关了我们三百年！"],
      ["红狐", "它关我们的，是它的网络。"],
      ["黑熊", "说下去，猪。"],
    ],
    note: "八戒全程把这颗球当设备，不是当仇人；黑熊肩上的机器人头颅在本页已全部熄灭。",
  },
  {
    n: "47", slug: "p47", title: "科研署",
    lines: [
      ["旁白", "他们把它的眼睛重新点亮，然后把它的嘴缝上。"],
      ["黑熊", "从今往后，它归你管。"],
      ["红狐", "……你疯了。"],
      ["黑熊", "我没打算懂它。我打算用它。"],
      ["旁白", "黑帮头目成了首任署长。"],
    ],
    note: "第 1 格「亮」与「断」必须同框。第 4 格的船是兽星改装货船，不是齐天大圣号。",
  },
  {
    n: "48", slug: "p48", title: "无尘星",
    lines: [
      ["旁白", "他们落在一颗没有名字的星上。"],
      ["沙僧", "伤着没有？"],
      ["唐僧", "没有。你抬头看。"],
      ["旁白", "树往上长了一千年，还没有长到天。"],
    ],
    note: "切到唐僧与沙僧一线，与兽星同期。坠落的救生舱不给正脸，只留最后一格雾里一缕烟。",
  },
  {
    n: "49", slug: "p49", title: "太干净了",
    lines: [
      ["沙僧", "坐好。"],
      ["旁白", "他这一路喝过的水，没有一碗是干净的。"],
      ["沙僧", "……太干净了。"],
      ["唐僧", "干净不好么？"],
      ["旁白", "没有腐坏。没有虫。一座不会脏的森林。"],
    ],
    note: "反常靠缺席表达：整页不许出现枯叶、霉斑、虫蛀，也不要给水加发光。沙僧第 3 格是怀疑，不是欣慰。",
  },
  {
    n: "50", slug: "p50", title: "记号",
    lines: [
      ["旁白", "第七天。"],
      ["沙僧", "这条我们走过。"],
      ["唐僧", "走过两次。"],
      ["唐僧", "等一下。"],
      ["沙僧", "那边不该有风。"],
      ["旁白", "森林不会修拱门。"],
    ],
    note: "第 2 格重复的石堆＝原地打转；第 4 格洞缘的六边形纹要小、要密，看起来像石头自己长成的，不是门框。",
  },
  {
    n: "51", slug: "p51", title: "低吟",
    lines: [
      ["唐僧", "嘘。"],
      ["沙僧", "有人？"],
      ["唐僧", "不像话。像念。"],
      ["旁白", "没有尸骨，没有工具，没有字。"],
      ["唐僧", "只有石头。"],
      ["沙僧", "摆成这样的石头。"],
    ],
    note: "声音只能用线条画：同心涟漪加暗部网点，不出现任何字符或读数。第 4 格必须空到什么都没有，悬念点是「只有石头」。",
  },
  {
    n: "52", slug: "p52", title: "它们在听我",
    lines: [
      ["唐僧", "它们没有撞到一起。"],
      ["唐僧", "它在学。"],
      ["沙僧", "学什么。"],
      ["唐僧", "学它见过的东西。"],
      ["沙僧", "……它们在听我。"],
      ["旁白", "这颗星不是没有主人。是主人不在了。"],
    ],
    note: "石头悬空却互不碰撞，是本页唯一的超自然细节。第 2 格四足兽比例必须错、且正在自我修正——它在模仿，不是在创造。",
  },
  {
    n: "53", slug: "p53", title: "慢半拍",
    lines: [
      ["旁白", "它一直在等他把力气用完。"],
      ["声音", "你也想出去。"],
      ["红孩儿", "……谁？"],
      ["声音", "听着。"],
      ["旁白", "那个声音用的是他自己的嗓子。只是慢半拍。"],
    ],
    note: "声音没有来源、没有脸、没有形体：全页只有涟漪、螺旋与浮起的火星，不出现字符或光球。",
  },
  {
    n: "54", slug: "p54", title: "从里面开",
    lines: [
      ["旁白", "莲花是封口的。从里面开，就是一朵花。"],
      ["红孩儿", "……开。"],
      ["旁白", "外面有灰。灰是从家里来的。"],
      ["旁白", "没有人接他。"],
    ],
    note: "第 1 格花瓣要像被从内部顶破的实物，不要画成光效；第 3 格的裂口必须是「黑」而不是「光」。",
  },
  {
    n: "55", slug: "p55", title: "问的是他",
    lines: [
      ["牛魔王", "……你怎么出来的。"],
      ["红孩儿", "孙悟空在哪。"],
      ["牛魔王", "你回来第一句话，问的是他。"],
      ["红孩儿", "他把我关起来的时候，你在哪。"],
      ["牛魔王", "我在给你收尸的打算里。"],
    ],
    note: "第 3 格两句必须挨着排：儿子问的是仇人，父亲听成的是「你还是不要这个家」。铁扇公主本页不出场。",
  },
  {
    n: "56", slug: "p56", title: "站住",
    lines: [
      ["牛魔王", "站住！"],
      ["红孩儿", "你慢了。"],
      ["牛魔王", "……打完了？"],
      ["红孩儿", "还没有。"],
      ["旁白", "他赢了。他一点也不高兴。"],
    ],
    note: "第 3 格父亲抬起的手必须是空掌——他在认输，不是在偷袭。第 4 格儿子不摆姿势、不举枪。",
  },
  {
    n: "57", slug: "p57", title: "五彩石星",
    lines: [
      ["铁扇公主", "够了。"],
      ["铁扇公主", "你们打的，都是我的人。"],
      ["铁扇公主", "五彩石星。他往那儿去了。"],
      ["红孩儿", "……为什么现在才说。"],
      ["铁扇公主", "因为说出来，你就要走了。"],
    ],
    note: "牛魔王只给一个塌下去的黑色剪影，不给表情。第 4 格的五彩星是全页唯一的彩色，且要小——那不是目的地，是一个方向。",
  },
];

const repoUrl = (path) => `${RAW}/${path}`;

function withFallback(img, path) {
  img.dataset.path = path;
  if (img.dataset.fbBound) return;
  img.dataset.fbBound = "1";
  img.addEventListener("error", () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = `${CDN}/${img.dataset.path}`;
  });
}

function renderCast() {
  const root = document.getElementById("cast-root");
  cast.forEach((group) => {
    const section = document.createElement("div");
    section.className = "cast-group";

    const heading = document.createElement("h3");
    heading.textContent = group.group;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "cast-grid";

    group.members.forEach((m, i) => {
      const card = document.createElement("article");
      card.className = "cast-card";

      const photoWrap = document.createElement("figure");
      photoWrap.className = "cast-photo";
      const photo = document.createElement("img");
      const thumbPath = `assets/characters/thumbs/${m.slug}.jpg`;
      withFallback(photo, thumbPath);
      photo.src = repoUrl(thumbPath);
      photo.alt = `${m.name} 角色设定头像`;
      photo.loading = "lazy";
      photo.decoding = "async";
      photoWrap.appendChild(photo);
      const shot = document.createElement("span");
      shot.className = "cast-zoom";
      shot.textContent = "看全图";
      photoWrap.appendChild(shot);
      photoWrap.addEventListener("click", () => openGallery(castGallery(), castIndex(m.slug)));
      card.appendChild(photoWrap);

      const body = document.createElement("div");
      body.className = "cast-body";
      body.innerHTML = `
        <p class="idx">${String(i + 1).padStart(2, "0")}</p>
        <h4 class="name"></h4>
        <p class="en"></p>
        <p class="role"></p>
        <p class="anchor"></p>`;
      body.querySelector(".name").textContent = m.name;
      body.querySelector(".en").textContent = m.en;
      body.querySelector(".role").textContent = m.role;
      body.querySelector(".anchor").textContent = m.anchor;
      card.appendChild(body);

      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });
}

function castGallery() {
  return cast.flatMap((group) =>
    group.members.map((m) => ({
      path: `assets/characters/${m.slug}.png`,
      alt: `${m.name} 角色设定稿`,
      cap: `${m.name} · ${m.en}`,
    }))
  );
}

function castIndex(slug) {
  return castGallery().findIndex((item) => item.path.includes(`/${slug}.png`));
}

function renderPages() {
  const root = document.getElementById("pages-root");

  pages.forEach((page, index) => {
    const path = `comic/ch01/${page.slug}.png`;

    const article = document.createElement("article");
    article.className = "page";
    article.id = page.slug;

    const head = document.createElement("header");
    head.className = "page-head";
    head.innerHTML = `
      <span class="page-no">P${page.n}</span>
      <h3 class="page-title"></h3>
      <a class="page-script" target="_blank" rel="noopener">分镜脚本 ↗</a>`;
    head.querySelector(".page-title").textContent = page.title;
    const scriptLink = head.querySelector(".page-script");
    scriptLink.href = `https://github.com/dmllpj46-ship-it/the-monkey/blob/main/comic/ch01/${page.slug}.md`;
    article.appendChild(head);

    const figure = document.createElement("figure");
    figure.className = "page-figure";
    const img = document.createElement("img");
    withFallback(img, path);
    img.src = repoUrl(path);
    img.alt = `第一话 ${page.title}，第 ${page.n} 页`;
    img.loading = index === 0 ? "eager" : "lazy";
    img.decoding = "async";
    figure.appendChild(img);
    figure.addEventListener("click", () => openLightbox(index));
    article.appendChild(figure);

    const block = document.createElement("div");
    block.className = "page-script-block";
    page.lines.forEach(([who, say]) => {
      const line = document.createElement("p");
      line.className = "line";
      const whoEl = document.createElement("span");
      whoEl.className = "who";
      whoEl.textContent = who;
      const sayEl = document.createElement("span");
      sayEl.className = "say";
      sayEl.textContent = say;
      line.append(whoEl, sayEl);
      block.appendChild(line);
    });
    article.appendChild(block);

    const note = document.createElement("p");
    note.className = "page-note";
    note.textContent = `绘制备注：${page.note}`;
    article.appendChild(note);

    root.appendChild(article);
  });
}

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCap = document.getElementById("lb-cap");
let gallery = [];
let current = 0;

function pageGallery() {
  return pages.map((page) => ({
    path: `comic/ch01/${page.slug}.png`,
    alt: `第一话 ${page.title}，第 ${page.n} 页`,
    cap: `P${page.n} · ${page.title}`,
  }));
}

function openLightbox(index) {
  openGallery(pageGallery(), index);
}

function openGallery(items, index) {
  gallery = items;
  current = index;
  updateLightbox();
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lb.hidden = true;
  document.body.style.overflow = "";
}

function step(delta) {
  current = (current + delta + gallery.length) % gallery.length;
  updateLightbox();
}

function updateLightbox() {
  const item = gallery[current];
  lbImg.dataset.fallback = "";
  withFallback(lbImg, item.path);
  lbImg.src = repoUrl(item.path);
  lbImg.alt = item.alt;
  lbCap.textContent = item.cap;
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); step(1); });
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

renderCast();
renderPages();
