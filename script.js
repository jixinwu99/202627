const content = {
  about: {
    kicker: 'PROFILE / 00', title: '关于我',
    lead: '我正在岭南大学攻读艺术科技与商业硕士，关注艺术内容如何被看见、被组织，并最终转化为真实的商业项目。',
    items: [
      ['NOW', '艺术科技与商业 · 硕士', '围绕艺术行业商业化、艺术金融、设计思维和商业项目落地进行系统学习。'],
      ['BASE', '福建厦门', '可从内容策划、项目统筹、品牌包装与现场执行切入商业相关岗位。'],
      ['CONTACT', '13606030002', 'wjixinn@gmail.com']
    ]
  },
  education: {
    kicker: 'EDUCATION / 01', title: '学习轨迹',
    items: [
      ['2026.09 — 至今', '岭南大学 · 艺术科技与商业 · 硕士', '建立艺术内容、科技应用和商业运营结合的知识框架。'],
      ['2021.09 — 2025.07', '厦门大学嘉庚学院 · 音乐表演 · 本科', '长期训练艺术审美、作品理解和舞台表达能力，熟悉文艺展演与赛事运作流程。']
    ]
  },
  work: {
    kicker: 'FIELD WORK / 02', title: '实习现场',
    items: [
      ['2025.03 — 2025.05', '厦门第二实验小学 · 音乐教师', '负责音乐课程内容策划、课堂落地、师生沟通、反馈整理与现场秩序。完成 40+ 课时音乐课程、服务 200+ 人次，0 投诉记录。'],
      ['工作方法', '把复杂的现场拆成清单', '课前准备教案与素材，日常对接教务、任课老师和家长，课堂中持续跟进互动、纪律和时间进度。']
    ]
  },
  projects: {
    kicker: 'PROJECT ARCHIVE / 03', title: '项目档案',
    items: [
      ['2023.09 — 2024.06', '校园文艺活动商业化统筹项目', '从人员、场地、流程和经费四个方面完成校园文艺演出、器乐展演等活动落地。'],
      ['2024.01 — 2024.08', '国际艺术赛事品牌包装与参赛运营项目', '完成规则研究、备赛节奏安排、作品打磨、个人参赛内容包装和赛后复盘。']
    ]
  },
  skills: {
    kicker: 'TOOLKIT / 04', title: '能力工具',
    lead: '我擅长在艺术表达和项目执行之间来回切换，把模糊的想法变成清晰的节点、材料和现场动作。',
    tags: ['活动策划', '展演统筹', '项目排期', '现场协调', '个人 IP 包装', '内容定位', '人员调度', '场地对接', '流程表管理', 'Word', 'Excel', 'PowerPoint']
  }
};

const drawer = document.querySelector('#drawer');
const drawerContent = document.querySelector('#drawerContent');

function openDrawer(key) {
  const data = content[key];
  if (!data) return;
  const items = data.items ? `<div class="timeline">${data.items.map(item => `<article class="timeline-item"><div class="timeline-date">${item[0]}</div><h3 class="timeline-name">${item[1]}</h3><p class="timeline-copy">${item[2]}</p></article>`).join('')}</div>` : '';
  const tags = data.tags ? `<div class="tag-list">${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : '';
  drawerContent.innerHTML = `<p class="drawer-kicker">${data.kicker}</p><h2 class="drawer-title">${data.title}</h2>${data.lead ? `<p class="drawer-lead">${data.lead}</p>` : ''}${items}${tags}`;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openDrawer(button.dataset.open)));
document.querySelector('#closeButton').addEventListener('click', closeDrawer);
document.querySelector('[data-close]').addEventListener('click', closeDrawer);
document.querySelector('#menuButton').addEventListener('click', () => openDrawer('about'));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDrawer(); });