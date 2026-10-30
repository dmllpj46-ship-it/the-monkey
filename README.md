# THE MONKEY · 星际西游记

A Japanese-manga-style space opera retelling of *Journey to the West* — a comic about a pilgrimage across a war-torn galaxy.

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

Full design specs — colors, silhouettes, props, do-not-change list — live in [`assets/characters/design-bible.md`](assets/characters/design-bible.md). **Those five sheets are the single source of truth for character consistency.**

## Visual style

- 日式少年漫画（shonen）质感：干净的黑墨线、网点纸阴影、赛璐璐上色、有限高饱和配色。
- 神话 × 太空歌剧：汉服剪裁的战甲、法器改为能量武器、飞船与星云做背景。
- 所有角色设定图统一为「左侧全身 + 右侧大头像 + 米白网点星空纸」的版式，便于比对。
- 画面内不生成对白/标题文字（生成模型渲染文字不稳定），文字排版留到后期单独处理。

## Repository layout

```
assets/characters/   角色设定图（一致性基准）+ 设计圣经
comic/               正篇漫画分页
```

## Roadmap

1. ✅ 主要角色视觉锚点（悟空 / 红孩儿 / 哪吒 / 二郎神 / 观音）
2. ✅ 取经组三师徒（八戒 / 沙僧 / 唐僧）
3. ✅ 第一话「裂空」三页（`comic/ch01/`）
4. 补全反派与配角：白骨精（赏金猎人）、牛魔王（火教宗主）
5. 对白上字、封面与宣发图

## License

Artwork and text © the contributors. All rights reserved unless stated otherwise.
