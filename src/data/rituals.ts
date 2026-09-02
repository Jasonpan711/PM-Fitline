import { WellnessRoutineItem, Testimonial } from '../types';

export const WELLNESS_ROUTINES: WellnessRoutineItem[] = [
  {
    id: 'morning',
    time: '07:00 - 08:30',
    title: '晨光初启 · 细胞激活与免疫筑基',
    subtitle: 'Morning Vitality Ritual',
    description: '空腹一杯温水冲调 PowerCocktail 与 Activize。数以亿计的果蔬活性酶与全谱维生素 B 群迅速渗透微循环，15 分钟内点亮清透气色与充沛工作精力。',
    steps: [
      '醒来后饮用 200ml 温开水，轻揉腹部唤醒胃肠微生态',
      '将 1 包 PowerCocktail 与 1 勺 Activize 溶于 180ml 常温水，充分搅拌',
      '即冲即饮，静候 10 分钟体验末梢微循环温热红润感',
    ],
    recommendedProducts: ['powercocktail', 'activize', 'omega3'],
  },
  {
    id: 'afternoon',
    time: '13:30 - 16:30',
    title: '午后清透 · 驱散脑雾与水光修护',
    subtitle: 'Midday Focus & Glow',
    description: '告别午后昏沉与视力疲劳。调制一杯 Activize 搭配 Beauty 胶原多肽美颜饮，在清爽浆果香气中为大脑注入新鲜氧气，由内而外滋养真皮层胶原网络。',
    steps: [
      '用 150ml 冰爽矿泉水冲泡 1 勺 Activize + 1 勺 Beauty',
      '在办公或小憩之余细细啜饮，重拾清晰敏锐的思维节奏',
      '配合 5 分钟深长腹式呼吸，让全身微血管舒展通畅',
    ],
    recommendedProducts: ['activize', 'beauty', 'munogen'],
  },
  {
    id: 'evening',
    time: '21:30 - 22:30',
    title: '静夜归心 · 碱性排酸与深度慢波眠',
    subtitle: 'Evening Alkaline Restoration',
    description: '睡前 45 分钟的一杯温润 Restorate 柑橘修复饮。高活性钙镁离子中和一整天累积的酸性代谢物，安抚交感神经，引领身心进入无梦深眠。',
    steps: [
      '取 1 包 Restorate 溶于 250ml 常温水，静置几秒待微气泡自然平息',
      '调暗室内光源，远离电子屏幕，以温润节奏小口慢饮',
      '感受肌肉紧绷感逐步消散，进入深度细胞自愈修复周期',
    ],
    recommendedProducts: ['restorate'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lena Oberdorf (莱娜·奥伯多夫)',
    role: '德国国家女子足球队主力中场 · 欧洲顶级联赛球星',
    country: '德国 (Germany)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: '职业足球对体能与对抗的要求极其苛刻。FitLine Activize 和 Restorate 是我每日不可或缺的黄金搭档，尤其在密集赛程中，科隆名单的零违禁保证让我无比心安。',
    favoriteProduct: 'Activize Oxyplus & Restorate',
  },
  {
    id: '2',
    name: 'Christian Sprenger (克里斯蒂安·斯普伦格)',
    role: '奥运会游泳银牌得主 · 世界游泳锦标赛冠军',
    country: '澳大利亚 (Australia)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: '在水中拼搏了十余年，我深知细胞级快速吸收对于恢复速度的关键。NTC® 专利带来的生物利用度实实在在改变了我的早晨与高强度训练后的体感。',
    favoriteProduct: 'PowerCocktail & Munogen',
  },
  {
    id: '3',
    name: 'Sophie Von Berg (苏菲·冯·伯格)',
    role: '国际知名抗衰美学顾问 & 瑜伽冥想导师',
    country: '瑞士 (Switzerland)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: '健康源于健康的生活方式，更源于身心灵的微妙平衡。饮用 FitLine 已经 6 年，不仅皮肤透出自然健康的通透微光，内心的专注与安宁感也更易寻获。',
    favoriteProduct: 'FitLine Beauty 胶原美颜饮',
  },
  {
    id: '4',
    name: 'Alexander Zverev (亚历山大·兹维列夫团队教练组)',
    role: 'ATP 职业网球体能教练 & 运动医学专家',
    country: '德国 (Germany)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: '顶级赛事决定胜负的往往是 5 小时鏖战后的最后一口气。FitLine 卓越的微循环供氧与 GMP 制药级品质，是国际顶级网球运动员竞技状态的坚固后盾。',
    favoriteProduct: 'Munogen & ProShape Amino',
  },
];
