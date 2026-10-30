const RAW = "https://raw.githubusercontent.com/dmllpj46-ship-it/the-monkey/main";
const CDN = "https://cdn.jsdelivr.net/gh/dmllpj46-ship-it/the-monkey@main";

const cast = [
  {
    group: "取经船",
    members: [
      { name: "孙悟空", en: "Sun Wukong", role: "星盗 · 齐天大圣号船长", anchor: "金棕猴毛、冲天乱发、金色科技紧箍、黑红战袍、带三道铜环的尾巴、等离子金箍棒" },
      { name: "猪八戒", en: "Zhu Bajie", role: "重装工程师 · 前舰队炮手", anchor: "灰蓝猪首、垂耳、铜套獠牙、藏青压力袍、锈橙肩甲、圆腹甲、九齿重力耙" },
      { name: "沙僧", en: "Sha Wujing", role: "军需官兼战地医师", anchor: "蓝灰巨汉、光头铜须、深青长袍、生命维持颈环、九枚金属牌、月牙铲" },
      { name: "唐僧", en: "Tang Sanzang", role: "领航者 · 导航僧", anchor: "清瘦青年、金色导航额环、白与姜黄僧袍、星图腰带、发光经卷、九环杖" },
    ],
  },
  {
    group: "火教",
    members: [
      { name: "红孩儿", en: "Red Boy", role: "第三舰队少主 · 纵火天才", anchor: "赤红短发、火焰瞳、双颊火纹、黑色无袖火焰夹克、喷口热能背架、火焰长枪" },
      { name: "牛魔王", en: "Bull Demon King", role: "火教宗主 · 红孩儿之父", anchor: "炭黑牛首、巨角缠铜、鼻铜环、赤红鬃毛、黑与牛血红漆甲、熔炉胸核、双刃巨斧" },
      { name: "铁扇公主", en: "Iron Fan Princess", role: "宗主夫人 · 风系术者", anchor: "高髻金钗、扇冠双角、牛血红唇、黑漆甲赤红长袍、扇面肩甲、翠绿芭蕉扇" },
    ],
  },
  {
    group: "天庭",
    members: [
      { name: "哪吒", en: "Nezha", role: "天军王牌 · 莲花装甲驾驶员", anchor: "中性少年、双丸子头配玉莲饰、白红莲花甲、混天绫能量带、脚踝风火轮涡轮" },
      { name: "二郎神", en: "Erlang Shen", role: "猎杀舰队统帅 · 追兵", anchor: "银白长发、额间青色天眼、银白重甲配深蓝披风、三尖两刃刀、机械哮天犬" },
    ],
  },
  {
    group: "星海",
    members: [
      { name: "观世音", en: "Guanyin", role: "星海守护者 · 引路人", anchor: "白衣叠星云薄纱、千手全息背光、机械莲座、净瓶星水与柳枝" },
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
      card.innerHTML = `
        <p class="idx">${String(i + 1).padStart(2, "0")}</p>
        <h4 class="name"></h4>
        <p class="en"></p>
        <p class="role"></p>
        <p class="anchor"></p>`;
      card.querySelector(".name").textContent = m.name;
      card.querySelector(".en").textContent = m.en;
      card.querySelector(".role").textContent = m.role;
      card.querySelector(".anchor").textContent = m.anchor;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });
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
let current = 0;

function openLightbox(index) {
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
  current = (current + delta + pages.length) % pages.length;
  updateLightbox();
}

function updateLightbox() {
  const page = pages[current];
  const path = `comic/ch01/${page.slug}.png`;
  lbImg.dataset.fallback = "";
  withFallback(lbImg, path);
  lbImg.src = repoUrl(path);
  lbImg.alt = `第一话 ${page.title}，第 ${page.n} 页`;
  lbCap.textContent = `P${page.n} · ${page.title}`;
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
