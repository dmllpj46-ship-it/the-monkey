# THE MONKEY · 星际西游记

A Japanese-manga-style space opera retelling of *Journey to the West* — a comic about a pilgrimage across a war-torn galaxy.

**[在线阅读 → the-monkey-2z2.pages.dev](https://the-monkey-2z2.pages.dev/)** · 站点图片直连本仓库，推送到 `main` 后重新部署即同步。

## Logline

The scriptures are gone. In their place, a signal older than the stars pulses at the galactic core. A monkey-shaped outlaw, a fire-cult prince, an imperial ace and a three-eyed hunter-general are dragged onto the same ship, escorting a relic they do not understand — while the celestial armada, the fire fleets and the void itself close in.

## Cast

| 角色 | Slug | Role | Visual anchor |
| --- | --- | --- | --- |
| 孙悟空 | `wukong` | 星盗 / 齐天大圣号船长 · 反英雄主角 | 金棕猴毛、冲天乱发、金色科技紧箍、黑红战袍、带三道铜环的尾巴、等离子金箍棒 |
| 红孩儿 | `red-boy` | 火教舰队少主 · 纵火天才 | 15 岁少年、赤红短发、火焰瞳、双颊火纹、黑色无袖火焰夹克、喷口热能背架、火焰长枪 |
| 哪吒 | `nezha` | 天军王牌 · 莲花装甲驾驶员 | 中性少年、双丸子头配玉莲饰、白红莲花甲、混天绫能量带、脚踝风火轮涡轮、火尖枪 |
| 二郎神 | `erlang` | 天军猎杀舰队统帅 · 追兵 | 银白长发、额间青色天眼（瞄准 HUD）、银白重甲配深蓝披风、三尖两刃刀、机械哮天犬 |
| 观世音 | `guanyin` | 星海守护者 · 引路人 | 白衣叠星云薄纱、千手全息背光、机械莲座、净瓶星水与柳枝 |
| 猪八戒 | `bajie` | 取经船重装工程师 · 前舰队炮手 | 灰蓝猪首、铜套獠牙、藏青压力袍、锈橙肩甲、圆腹甲、九齿重力耙 |
| 沙僧 | `wujing` | 取经船军需官兼战地医师 | 蓝灰巨汉、光头铜须、深青长袍、生命维持颈环、九枚金属牌、月牙铲 |
| 唐僧 | `sanzang` | 取经船领航者 · 导航僧 | 清瘦青年、金色导航额环、白与姜黄僧袍、星图腰带、发光经卷、九环杖 |
| 牛魔王 | `bull-demon` | 火教宗主 · 红孩儿之父 | 炭黑牛首、巨角缠铜、鼻铜环、赤红鬃毛、黑与牛血红漆甲、熔炉胸核、双刃巨斧 |
| 铁扇公主 | `iron-fan` | 火教宗主夫人 · 风系术者 | 高髻金钗、扇冠双角、牛血红唇、赤红高领长袍配黑漆甲、扇面肩甲、翠绿芭蕉扇 |
| 女娲 | `nuwa` | 创世神 · 补天者 | 五色石环绕的高髻、蛇形长尾、星图披风、胸前五色石、星光线与天梭 |
| 巡逻机器人 | `patrol-robot` | 兽星机械执法者 · 量产型 | 楔形长头、横向冷青视镜、枪灰装甲配危险黄斜带、三指夹钳、电击长杆、背部折叠副臂 |
| 红狐女 | `red-fox` | 兽星地下黑帮头目 · 半机械化 | 赤红狐首、单只瞄准义眼、颌侧金属板、左臂义肢、一真两机械三尾、暗红毛领、等离子撬棍 |
| 黑熊 | `black-bear` | 兽星地下组织头目 · 实为抵抗军统帅 | 炭黑熊首、灰白口鼻、左眼竖疤、胸口骨白月牙、肩挂机器人头颅绶带、土褐油布大衣、黑缨长枪 |
| 智人 | `sapiens` | 消失的建造者种族 · 科研站主人 | 光头无眉、石墨耳甲配青缝、鬓角青色电路线、颅后悬浮数据环、骨白石墨紧身甲、姜金胸带、六角青色胸核、指挥杆 |
| 智能之母 | `mother-mind` | 兽星统治者 · 巨型球形运算中枢 | 山岳级枪灰球体、危险黄斜带、成千上万单缝冷青视镜、中央巨大横向主视镜、底部脐带管线插入发光能源井 |

Full design specs — colors, silhouettes, props, do-not-change list — live in [`assets/characters/design-bible.md`](assets/characters/design-bible.md). **Those sixteen anchors are the single source of truth for character consistency.**

## Visual style

- 日式少年漫画（shonen）质感：干净的黑墨线、网点纸阴影、赛璐璐上色、有限高饱和配色。
- 神话 × 太空歌剧：汉服剪裁的战甲、法器改为能量武器、飞船与星云做背景。
- 所有角色设定图统一为「左侧全身 + 右侧大头像 + 米白网点星空纸」的版式，便于比对。
- 画面内不生成对白/标题文字（生成模型渲染文字不稳定），文字排版留到后期单独处理。

## Repository layout

```
assets/characters/   角色设定图（一致性基准）+ 设计圣经
assets/cover.png     第一话封面
comic/               正篇漫画分页与分镜脚本（pNN.png + pNN.md）
site/                在线阅读站（Cloudflare Pages 部署源）
```

## Roadmap

1. ✅ 主要角色视觉锚点（悟空 / 红孩儿 / 哪吒 / 二郎神 / 观音）
2. ✅ 取经组三师徒（八戒 / 沙僧 / 唐僧）
3. ✅ 第一话「裂空」001–009：红孩儿劫道 → 三徒被投入多元宇宙 → 悟空败 → 观音收押红孩儿
4. ✅ 火教宗主夫妇：牛魔王 / 铁扇公主
5. ✅ 第一话封面 + Cloudflare Pages 在线阅读站
6. ✅ 女娲定妆；第一话 010–012：拜别观音 → 五彩石 → 空殿
7. ✅ 第一话 013–018：洗石 → 你从哪来 → 叩拜 → 哪个师傅 → 结界 → 被困
8. ✅ 第一话 019–022：红孩儿囚于口袋宇宙、忆天庭旧战与父亲离场、火焰山父母的内疚
9. ✅ 巡逻机器人定妆；第一话 023–026：泥沼被捕 → 兽星牢房 → 地下劳力 → 八戒独行待机
10. ✅ 红狐女定妆；第一话 027–031：看中力气 → 盲抢被拒 → 遭劫持 → 交易 → 「不杀人」与「没有真人」
11. ✅ 黑熊定妆；第一话 032–037：隧道劫车 → 八戒一耙定局 → 头功 → 引见黑熊 → 「不是帮派」→ 为找师父入伙
12. ✅ 智能之母定妆（球形运算中枢）；第一话 038–042：智人传说 → 货物是高爆炸药 → 定向爆破能源井 → 地面总攻 → 拔掉干线缆、关掉智能之母
13. ✅ 智人定妆；第一话 043–047：黑熊主政、八戒封先锋将军 → 资料库揭底（科研站）→ 智人撤离与那条指令 → 「重启它，但切断网络」→ 成立科研署，红狐女主事
14. ✅ 第一话 048–052：切到唐僧与沙僧线——原始森林星醒来 → 水与食物干净得反常 → 徒步无头绪、遇几何洞口 → 洞里低吟、只见美石 → 石头活过来听沙僧使唤
15. ✅ 第一话 053–057：切到红孩儿线——虚空里的声音教他一句咒 → 从内部掰开莲花逃出 → 回火焰山逼问父亲 → 父子交手、牛魔王落败 → 铁扇公主指向五彩石星
16. ✅ 第一话 058–060：切到哪吒线——溺亡星上收拾水龙怪 → 观音法相报信「莲花里的火灭了」→ 冷笑领命，只问一句「活的？」
17. ✅ 第一话 061–063：回到八戒线——科研署造出星空探测仪、锁定五彩星 → 智能之母警告五色结界、船接触后十一秒解体 → 红狐女定量子穿越方案、需要时间，八戒只能等
18. 第二话「同囚」：四条线（悟空 / 红孩儿 / 八戒 / 唐僧与沙僧）各自的起头
19. 补全其他反派与配角：白骨精（赏金猎人）；对白上字

## License

Artwork and text © the contributors. All rights reserved unless stated otherwise.
