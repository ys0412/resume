const portfolioData = {
  profile: {
    name: "喻盛",
    role: "Java 后端开发工程师 / 小程序独立开发者",
    location: "上海 · 5 年开发经验 · 能独立完成前后端落地",
    summary:
      "具备 5 年以上 Java 开发经验，拥有 3 年多基金证券行业背景，熟悉 Spring Boot、Spring Cloud、Redis、MySQL / Oracle 及国产数据库，也有微信小程序、后台管理和独立上线项目经验，能把业务流程、服务端能力和前端体验完整串起来。",
    highlights: ["Java", "Spring Boot", "Spring Cloud", "Redis", "金融系统", "微信小程序"],
    stats: [
      { value: "5年+", label: "开发经验" },
      { value: "3年+", label: "基金证券行业经验" },
      { value: "2000+", label: "独立项目累计用户" },
    ],
    contacts: [
      { label: "发邮件", href: "mailto:m13074248030@163.com", primary: true },
      { label: "打电话", href: "tel:15919677430" },
      { label: "查看项目", href: "#projects" },
    ],
  },
  projects: [
    {
      title: "摄影器材通小程序",
      category: "微信小程序",
      year: "2026",
      role: "小程序 / 后台 / 服务端全链路开发",
      summary:
        "面向摄影爱好者的摄影器材服务项目，覆盖微信小程序、后台管理、服务端接口和器材数据整理，帮助用户完成查找、对比、收藏和管理个人设备。",
      tags: ["微信小程序", "Vue / uni-app", "Java", "后台管理"],
      theme: "linear-gradient(135deg, #2a3445 0%, #0d8b84 100%)",
      caseStudy: {
        background:
          "摄影器材信息分散、参数口径不统一，用户在选购和管理设备时经常需要在多个平台间来回查资料。这个项目的目标，是把器材内容、对比能力和个人设备管理整合到同一套产品里。",
        screenshots: [
          {
            title: "微信小程序首页",
            text: "直接截自微信小程序真实页面，展示轮播推荐、快捷功能入口和热门机身内容。",
            image: "./wechat-shots/miniprogram-window-1.png"
          },
          {
            title: "器材库筛选",
            text: "通过真实小程序截图展示按相机 / 镜头、品牌、画幅和卡口等维度快速筛选。",
            image: "./wechat-shots/miniprogram-library.png"
          },
          {
            title: "详情页",
            text: "真实详情页包含产品大图、价格、标签、AI 总结入口与收藏 / 对比操作。",
            image: "./wechat-shots/miniprogram-current-step-2.png"
          },
          {
            title: "参数对比",
            text: "对比页支持多产品参数差异查看，服务用户选购与决策场景。",
            image: "./wechat-shots/miniprogram-comparison-direct.png"
          }
        ],
        ownership: [
          "负责小程序端核心页面设计与实现，包括首页推荐、器材库、相机 / 镜头列表、详情页、对比、收藏、浏览记录和我的设备。",
          "负责后台管理功能整理与接入，覆盖相机管理、镜头管理、封面上传和 Banner 维护等内容运营能力。",
          "负责 Spring Boot 服务端接口设计与功能联调，支撑搜索、推荐、设备管理、历史记录、收藏等业务能力。",
          "负责摄影器材数据采集、清洗和结构化处理，让不同品牌的数据能统一进入产品体系。"
        ],
        features: [
          "器材库覆盖相机、镜头等核心分类，支持列表浏览、详情查看和按场景快速进入。",
          "提供相机 / 镜头对比、收藏夹、浏览记录、我的设备等功能，服务真实决策和日常管理场景。",
          "后台支持相机与镜头管理、Banner 维护、数据上传，方便持续补充和运营内容。"
        ],
        architecture: [
          "小程序端基于 uni-app、Vue 3、Pinia 和 NutUI UniApp 构建。",
          "后台管理基于 Vue 3、Vite、Element Plus，承接数据维护和运营配置。",
          "服务端使用 Spring Boot、MyBatis-Plus、Redis、Meilisearch、MinIO，配合 Python 脚本处理多品牌器材数据。"
        ],
        challenge:
          "难点不在单个页面，而在整套数据和产品链路的统一。不同品牌器材字段差异大，前台需要稳定展示和对比，后台又要方便录入和修正，所以要同时处理数据标准化、多端一致性和功能扩展性。",
        result:
          "最终沉淀出一套从器材数据采集、内容维护到小程序消费的完整闭环，让项目不只是一个展示页，而是一套可持续迭代的摄影器材产品。",
        modules: [
          {
            title: "小程序端",
            text: "基于 uni-app 与 Vue 3，覆盖首页、器材库、相机列表、镜头列表、详情、对比、收藏、浏览记录、我的设备等 11 个核心页面。"
          },
          {
            title: "管理后台",
            text: "基于 Vue 3、Vite、Element Plus，包含相机管理、镜头管理、封面上传、Banner 管理等内容维护入口。"
          },
          {
            title: "服务端",
            text: "基于 Spring Boot、MyBatis-Plus、Redis、Meilisearch、MinIO，提供相机、镜头、品牌、推荐、搜索、设备库、浏览记录等接口能力。"
          },
          {
            title: "数据处理",
            text: "使用 Python 脚本完成多品牌器材数据抓取、清洗、字段标准化和补充，为前台展示与搜索提供统一数据源。"
          }
        ]
      },
      highlights: [
        {
          title: "完整的器材查询与对比链路",
          text: "小程序端已经覆盖首页推荐、器材库、相机列表、镜头列表、详情页、收藏夹、浏览记录、我的设备和器材对比等核心页面。",
        },
        {
          title: "不只是前台，还包含后台和数据能力",
          text: "项目目录里同时有后台管理系统、Spring Boot 服务端以及多品牌器材数据抓取和清洗脚本，支持内容维护和数据扩展。",
        },
      ],
      links: [
        { label: "复制项目目录", copyValue: "/Users/eson/life/project/photograph" },
        { label: "复制小程序路径", copyValue: "#小程序://摄影器材通/Ghbik73kkNdqhql" },
      ],
    },
    {
      title: "附近厕所一步导航",
      category: "微信小程序",
      year: "2025",
      role: "个人独立开发",
      summary:
        "基于微信小程序的公共厕所查询与评价产品，围绕定位、查询、打分、内容治理与外部地图导航构建完整使用闭环，累计 2000+ 用户。",
      tags: ["微信小程序", "Spring Boot", "MyBatis-Plus", "腾讯/高德地图"],
      theme: "linear-gradient(135deg, #1677ff 0%, #53b3ff 100%)",
      caseStudy: {
        background:
          "这个项目聚焦一个非常具体但高频的生活场景：人在陌生区域时，需要尽快找到附近可用厕所，并快速判断要不要去、怎么去。产品重点是缩短决策链路，而不是堆复杂功能。",
        screenshots: [
          {
            title: "附近卫生间首页",
            text: "真实微信小程序截图，展示地图点位、附近列表、评分、距离和一键导航入口。",
            image: "./toilet-shots/toilet-home.png"
          },
          {
            title: "我的页面",
            text: "包含今日记录、我的评价、建议反馈、地铁厕所与分享小程序等高频入口。",
            image: "./toilet-shots/toilet-mine.png"
          }
        ],
        ownership: [
          "独立完成 Spring Boot 后端核心服务建设，覆盖厕所、用户、评论、成就、登录记录等核心实体与接口。",
          "承担微信小程序端关键功能实现，包括附近厕所查询、详情展示、去打分、个人记录和功能入口组织。",
          "接入腾讯 / 高德地图能力，支持位置获取、附近搜索与外部地图一键导航。",
          "实现内容安全与对象存储链路，接入微信内容安全接口与 MinIO，提升评论和图片上传的稳定性。"
        ],
        features: [
          "支持附近公共厕所查找、列表浏览、评分信息展示和去打分入口。",
          "支持详情页评论、标签、图片等内容沉淀，帮助用户判断厕所质量。",
          "支持从小程序快速跳转至高德 / 百度等地图 App 完成外部导航。"
        ],
        architecture: [
          "前端基于原生微信小程序实现，并采用分包组织导航、内容和用户模块。",
          "后端基于 Spring Boot + MyBatis-Plus + MySQL 提供 RESTful API。",
          "结合 MinIO、微信内容安全接口与地图服务，构建定位、评价、审核与导航的业务闭环。"
        ],
        challenge:
          "关键难点在于把位置获取、附近查询、评分评论和导航跳转串成一条很短的用户路径，同时兼顾图片上传、审核治理和接口稳定性。",
        result:
          "项目最终形成了一个真正解决现实场景问题的生活服务小程序，不只是展示厕所点位，而是完成“找到、判断、前往、反馈”的完整闭环。",
        modules: [
          {
            title: "位置与列表",
            text: "围绕附近卫生间首页组织地图点位、评分、距离与快捷操作。"
          },
          {
            title: "评价体系",
            text: "支持评分、标签、评论和图片，帮助厕所信息不断沉淀。"
          },
          {
            title: "导航协同",
            text: "在小程序完成决策，再一键跳转外部地图 App 导航。"
          },
          {
            title: "个人记录",
            text: "提供我的评价、今日记录、建议反馈与分享入口。"
          }
        ]
      },
      highlights: [
        {
          title: "高频生活场景切入",
          text: "围绕找厕所这个明确需求做轻量但完整的产品设计，减少用户从查找到前往的决策成本。",
        },
        {
          title: "定位、评价、导航形成闭环",
          text: "既有附近查询和内容沉淀，也兼顾外部地图跳转，让产品路径更贴近真实使用习惯。",
        },
      ],
      links: [
        { label: "复制后端目录", copyValue: "/Users/eson/life/project/toilet_boot" },
        { label: "复制小程序目录", copyValue: "/Users/eson/life/project/toilet_mini" },
      ],
    },
    {
      title: "得眠音频微信小程序",
      category: "音频服务",
      year: "2025",
      role: "个人独立开发",
      summary:
        "基于微信小程序、Vue 管理后台和 Spring Boot 后端构建的音频播放系统，覆盖资源管理、认证缓存和图像智能处理。",
      tags: ["微信小程序", "Vue", "Spring Boot", "MinIO"],
      theme: "linear-gradient(135deg, #db5f45 0%, #ef9d56 100%)",
      highlights: [
        {
          title: "音频资源管理",
          text: "完成音频文件上传、存储与检索链路，结合 MinIO 与 Redis 优化媒体资源的加载与管理效率。",
        },
        {
          title: "播放器视觉增强",
          text: "实现基于 K-means++ 的封面主色分析，把颜色动态应用到播放器界面，提升沉浸式体验。",
        },
      ],
      links: [
        { label: "项目整理中", href: "#" },
        { label: "后续补截图", href: "#" },
      ],
    },
    {
      title: "XBRL 信息披露系统",
      category: "金融系统",
      year: "2022-至今",
      role: "Java 开发工程师",
      summary:
        "为头部券商打造的 XBRL 信息披露解决方案，覆盖报告管理、产品管理、导入导出、多级审核、模板管理与权限管理。",
      tags: ["Spring", "Spring MVC", "Hibernate", "Redis"],
      theme: "linear-gradient(135deg, #1f2430 0%, #4f5b72 100%)",
      caseStudy: {
        background:
          "这个项目服务于头部券商的信息披露场景，核心目标是让私募定期报告和产品运行检测表能够在统一系统中完成编辑、导入导出、审核和报送，减少人工处理成本并保证报送准确性。",
        screenshots: [],
        ownership: [
          "负责报告导入及导出功能的完整处理流程实现，包括服务初始化、合法性检查、模板与映射加载、导入逻辑执行、报告状态更新和结果反馈。",
          "负责产品自动同步功能建设，通过配置选择不同同步版本，并结合 Java 反射机制完成多版本同步逻辑调用。",
          "负责直连报送服务的开发与维护，基于定时任务轮询待处理请求，完成实例导出、压缩编码、校验码计算、发送报送和状态回写。",
          "参与日志与可维护性优化，通过 AOP 自动记录同步操作日志并根据状态码更新内容，减少冗余代码。"
        ],
        features: [
          "支持 XML、Excel、Word 等多种文件格式及不同模板版本的导入处理。",
          "支持产品数据自动同步、同步日志更新和多版本逻辑扩展。",
          "支持直连报送请求轮询、实例文档导出、压缩编码、校验与结果反馈闭环。"
        ],
        architecture: [
          "系统基于 Spring、Spring MVC、Hibernate、JSP、Redis、Shiro、Maven、Aspose、SpreadJS 构建。",
          "通过 Java IO 流处理导入文件，并结合 Redis 消息队列传输请求，支撑高效导入流程。",
          "采用 Spring 定时任务调度和多线程机制处理直连报送请求，提升并发和响应能力。"
        ],
        challenge:
          "这个项目的难点在于模板版本多、导入文件格式复杂，而且报送流程对准确性和可追溯性要求很高。实现上既要保证各环节的合法性检查和错误反馈足够清晰，也要兼顾多版本扩展和异步处理效率。",
        result:
          "最终系统能够支撑复杂报告模板的稳定导入导出、产品数据自动同步和直连报送闭环，既提升了业务处理效率，也增强了报送链路的稳定性和可维护性。",
        modules: [
          {
            title: "报告导入导出",
            text: "覆盖服务初始化、格式合法性检查、模板映射加载、导入执行、状态更新和结果反馈。"
          },
          {
            title: "产品自动同步",
            text: "基于配置与反射机制支持多版本同步逻辑，提升代码扩展性和复用性。"
          },
          {
            title: "直连报送服务",
            text: "通过定时任务、多线程和异步处理完成报送轮询、编码压缩、发送请求与结果回写。"
          },
          {
            title: "日志与运维支持",
            text: "结合 AOP 自动记录关键操作日志，提升异常排查效率和系统可追溯性。"
          }
        ]
      },
      highlights: [
        {
          title: "导入导出链路",
          text: "实现多种文件格式与不同模板版本的导入请求处理流程，覆盖合法性检查、模板映射加载、状态更新与结果反馈。",
        },
        {
          title: "自动同步与直连报送",
          text: "通过反射机制支持多版本产品同步，并维护定时轮询直连报送任务，完成实例导出、压缩编码、校验与状态回写。",
        },
      ],
      links: [
        { label: "企业项目", href: "#" },
        { label: "不公开源码", href: "#" },
      ],
    },
    {
      title: "悠惠购 APP",
      category: "电商服务",
      year: "2020-2022",
      role: "Java 开发工程师",
      summary:
        "基于 Android 客户端、CMS 后台和服务端构建的返利代下单平台，围绕订单、支付和商品上架等核心流程设计。",
      tags: ["Spring Cloud", "Spring Boot", "Vue", "Redis"],
      theme: "linear-gradient(135deg, #5d3d2e 0%, #9f7150 100%)",
      caseStudy: {
        background:
          "悠惠购是一款围绕返利代下单业务构建的电商平台，包含 Android 客户端、CMS 后台和服务端系统。项目重点是让订单、支付和商品管理形成稳定闭环，并能够支撑正式上线后的并发访问和业务扩展。",
        screenshots: [],
        ownership: [
          "负责订单管理模块设计与实现，包括订单创建、查询、修改和删除等核心流程。",
          "负责支付处理模块开发，集成第三方支付接口，完成支付请求、状态监控、异步回调和统一异常处理。",
          "负责商品上架模块实现，覆盖商品信息录入、图片上传、价格设置和数据更新。",
          "参与缓存、短信通知和幂等性设计，提升高并发场景下的稳定性和一致性。"
        ],
        features: [
          "订单模块支持全链路状态流转，满足电商业务的常规管理需求。",
          "支付模块具备请求发起、状态监听、异步回调与日志记录能力。",
          "商品上架模块支持图片上传、价格配置、数据校验和后台操作。"
        ],
        architecture: [
          "项目基于 Java、Spring Cloud、Spring Boot、Spring Data JPA、Vue、Redis、SMS、OSS 和 Maven 构建。",
          "采用微服务架构组织订单、支付和商品相关业务，增强系统扩展性。",
          "通过 Redis 缓存、短信接口和 OSS 存储组合，提升查询效率、消息触达和媒体资源管理能力。"
        ],
        challenge:
          "难点主要集中在订单与支付链路的一致性，以及商品数据和图片上传的稳定处理。既要保证支付回调与状态流转可靠，又要兼顾高并发下的查询性能和后台操作效率。",
        result:
          "项目最终形成了从商品上架、订单创建到支付完成的完整业务闭环，并通过缓存、日志和幂等机制提升了系统在正式上线场景中的稳定表现。",
        modules: [
          {
            title: "订单管理",
            text: "基于 Spring Cloud 和 Spring Data JPA 处理订单创建、查询、修改、删除及数据持久化。"
          },
          {
            title: "支付处理",
            text: "集成第三方支付接口，结合 AOP 做统一异常处理和日志记录，保障支付链路稳定。"
          },
          {
            title: "商品上架",
            text: "支持商品信息录入、价格设置、图片上传与实时校验，提升后台操作体验。"
          },
          {
            title: "缓存与通知",
            text: "通过 Redis 优化高频查询，通过短信接口完成订单状态实时通知。"
          }
        ]
      },
      highlights: [
        {
          title: "订单与支付模块",
          text: "实现订单创建、查询、修改、删除与支付状态流转，结合缓存、短信和幂等设计提升并发场景下的稳定性。",
        },
        {
          title: "商品上架与图片存储",
          text: "支持商品录入、价格设置和图片上传，结合 OSS 与数据校验机制提升后台操作效率与可靠性。",
        },
      ],
      links: [
        { label: "企业项目", href: "#" },
        { label: "不公开源码", href: "#" },
      ],
    },
  ],
  experience: [
    {
      period: "2022.07 - 至今",
      company: "上海吉贝克信息技术有限公司",
      role: "Java 开发工程师",
      description:
        "负责头部券商 XBRL 信息披露系统开发，深度参与报告导入导出、产品自动同步、直连报送、多版本模板适配和日志优化，持续服务基金证券场景下对稳定性与准确性要求较高的业务。",
    },
    {
      period: "2025.03 - 至今",
      company: "个人独立项目",
      role: "小程序 / 后端独立开发",
      description:
        "独立开发附近厕所一步导航、得眠音频微信小程序、摄影器材通等项目，负责需求梳理、后端核心服务建设、小程序端关键功能实现、后台管理和上线迭代。",
    },
    {
      period: "2020.11 - 2022.05",
      company: "广州胜鼎科技有限公司",
      role: "Java 开发工程师",
      description:
        "参与悠惠购 APP 相关开发，承担订单管理、支付处理、商品上架等模块实现，积累了电商业务、微服务架构和第三方支付接入经验。",
    },
    {
      period: "2017 - 2021",
      company: "广州软件学院",
      role: "本科 · 信息工程",
      description:
        "完成信息工程专业本科学习，建立了后端开发、数据库与工程化基础，并获得大学英语四级证书。",
    },
  ],
  capabilities: [
    {
      title: "金融与业务系统经验扎实",
      text: "具备 3 年多基金证券行业经验，熟悉信息披露、报送、产品同步等对稳定性、准确性和可追溯性要求较高的业务场景。"
    },
    {
      title: "后端与数据库基础全面",
      text: "熟悉 Java 核心基础、集合、IO、异常处理、多线程，也能熟练使用 MySQL、Oracle，以及达梦、Gauss 等数据库。"
    },
    {
      title: "能独立完成小程序项目",
      text: "不仅能写后端，也能落地微信小程序、后台管理与第三方服务接入，具备从 0 到 1 独立上线项目经验。"
    },
    {
      title: "重视性能与稳定性",
      text: "擅长结合缓存、异步任务、对象存储、内容审核和分步上传等手段，提升系统在真实业务场景下的响应速度和稳定表现。"
    },
    {
      title: "第三方能力接入经验丰富",
      text: "有短信服务、地图 API、微信内容安全接口、OSS、MinIO、UniNXG 等第三方服务集成经验，能快速把外部能力接入业务链路。"
    },
  ],
  tools: [
    "Java",
    "Spring / Spring MVC / Spring Boot",
    "Spring Cloud",
    "MyBatis-Plus / Hibernate / JPA / Shiro / JWT",
    "MySQL / Oracle / Dameng / Gauss",
    "Redis / TongRDS",
    "Linux / 云服务器",
    "微信小程序",
    "Vue / JavaScript / JSP / H5 / CSS",
    "MinIO / OSS / 高德地图 API / 腾讯地图 API / 微信内容安全接口 / 短信服务 / UniNXG",
  ],
};

const state = {
  activeFilter: "全部",
};

const elements = {
  brandName: document.querySelector("#brand-name"),
  brandSubtitle: document.querySelector("#brand-subtitle"),
  heroSummary: document.querySelector("#hero-summary"),
  heroRole: document.querySelector("#hero-role"),
  heroLocation: document.querySelector("#hero-location"),
  heroHighlights: document.querySelector("#hero-highlights"),
  heroStats: document.querySelector("#hero-stats"),
  filters: document.querySelector("#project-filters"),
  projectGrid: document.querySelector("#project-grid"),
  timeline: document.querySelector("#timeline"),
  capabilityList: document.querySelector("#capability-list"),
  toolbox: document.querySelector("#toolbox"),
  contactActions: document.querySelector("#contact-actions"),
  currentYear: document.querySelector("#current-year"),
  lightbox: document.querySelector("#lightbox"),
  lightboxImage: document.querySelector("#lightbox-image"),
  lightboxCaption: document.querySelector("#lightbox-caption"),
  lightboxClose: document.querySelector("#lightbox-close"),
  lightboxBackdrop: document.querySelector("#lightbox-backdrop"),
};

function renderHero() {
  const { profile } = portfolioData;

  document.title = `${profile.name} | 作品集`;
  elements.brandName.textContent = profile.name;
  elements.brandSubtitle.textContent = "Portfolio";
  elements.heroSummary.textContent = profile.summary;
  elements.heroRole.textContent = profile.role;
  elements.heroLocation.textContent = profile.location;

  elements.heroHighlights.innerHTML = profile.highlights
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");

  elements.heroStats.innerHTML = profile.stats
    .map(
      (item) => `
        <div class="stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");

  elements.contactActions.innerHTML = profile.contacts
    .map((item) => {
      const classes = item.primary ? "button button-primary" : "button button-secondary";
      return `<a class="${classes}" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`;
    })
    .join("");
}

function getCategories() {
  const categories = portfolioData.projects.map((project) => project.category);
  return ["全部", ...new Set(categories)];
}

function renderFilters() {
  const categories = getCategories();

  elements.filters.innerHTML = categories
    .map((category) => {
      const activeClass = category === state.activeFilter ? "filter-button active" : "filter-button";
      return `<button class="${activeClass}" type="button" data-filter="${category}">${category}</button>`;
    })
    .join("");

  elements.filters.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const projects =
    state.activeFilter === "全部"
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === state.activeFilter);

  elements.projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card ${project.caseStudy ? "project-card-featured" : ""}">
          <div class="project-cover" style="background:${project.theme}">
            <div class="project-meta">
              <span>${project.category}</span>
              <span>${project.year}</span>
              <span>${project.role}</span>
            </div>

            <div class="project-cover-copy">
              <p class="project-kicker">Featured Case</p>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
            </div>
          </div>

          <div class="project-copy">
            <div class="project-head">
              <div>
                <h3>${project.title}</h3>
                <p class="project-description">${project.summary}</p>
              </div>
            </div>

            <div class="project-tags">
              ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>

            <div class="project-highlights">
              ${project.highlights
                .map(
                  (item) => `
                    <div class="highlight">
                      <strong>${item.title}</strong>
                      <span>${item.text}</span>
                    </div>
                  `
                )
                .join("")}
            </div>

            ${
              project.caseStudy
                ? `
                  <div class="case-study">
                    ${
                      project.caseStudy.screenshots.length
                        ? `
                          <div class="shot-grid">
                            ${project.caseStudy.screenshots
                              .map(
                                (shot) => `
                                  <figure class="shot-card">
                                    <img src="${shot.image}" alt="${shot.title}" loading="lazy" />
                                    <figcaption>
                                      <strong>${shot.title}</strong>
                                      <span>${shot.text}</span>
                                    </figcaption>
                                  </figure>
                                `
                              )
                              .join("")}
                          </div>
                        `
                        : ""
                    }

                    <div class="case-block">
                      <strong>我负责的内容</strong>
                      <div class="case-list">
                        ${project.caseStudy.ownership
                          .map((item) => `<span>${item}</span>`)
                          .join("")}
                      </div>
                    </div>

                    <div class="case-block">
                      <strong>项目背景</strong>
                      <p>${project.caseStudy.background}</p>
                    </div>

                    <div class="case-block">
                      <strong>核心功能</strong>
                      <div class="case-list">
                        ${project.caseStudy.features
                          .map((item) => `<span>${item}</span>`)
                          .join("")}
                      </div>
                    </div>

                    <div class="case-block">
                      <strong>技术架构</strong>
                      <div class="case-list">
                        ${project.caseStudy.architecture
                          .map((item) => `<span>${item}</span>`)
                          .join("")}
                      </div>
                    </div>

                    <div class="case-block">
                      <strong>关键难点</strong>
                      <p>${project.caseStudy.challenge}</p>
                    </div>

                    <div class="case-block">
                      <strong>项目价值</strong>
                      <p>${project.caseStudy.result}</p>
                    </div>

                    <div class="module-grid">
                      ${project.caseStudy.modules
                        .map(
                          (module) => `
                            <div class="module-card">
                              <strong>${module.title}</strong>
                              <p>${module.text}</p>
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                `
                : ""
            }

            <div class="project-links">
              ${project.links
                .map(
                  (link) => `
                    ${
                      link.copyValue
                        ? `<button class="inline-link inline-button" type="button" data-copy-value="${link.copyValue}">${link.label}</button>`
                        : `<a class="inline-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                    }
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  bindCopyActions();
  bindLightbox();
}

function bindCopyActions() {
  elements.projectGrid.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      const originalLabel = button.textContent;
      const value = button.dataset.copyValue || "";

      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "已复制";
      } catch (error) {
        button.textContent = "复制失败";
      }

      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1400);
    });
  });
}

function openLightbox(imageSrc, imageAlt, caption) {
  elements.lightboxImage.src = imageSrc;
  elements.lightboxImage.alt = imageAlt || "";
  elements.lightboxCaption.textContent = caption || "";
  elements.lightbox.classList.add("is-open");
  elements.lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  elements.lightbox.setAttribute("aria-hidden", "true");
  elements.lightboxImage.src = "";
  elements.lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

function bindLightbox() {
  document.querySelectorAll(".shot-card img").forEach((image) => {
    image.addEventListener("click", () => {
      const figure = image.closest(".shot-card");
      const caption =
        figure?.querySelector("figcaption")?.textContent?.replace(/\s+/g, " ").trim() || "";

      openLightbox(image.src, image.alt, caption);
    });
  });
}

function setupLightbox() {
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function renderTimeline() {
  elements.timeline.innerHTML = portfolioData.experience
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.period}</div>
          <div class="timeline-copy">
            <div class="timeline-head">
              <h3>${item.company}</h3>
              <p class="timeline-role">${item.role}</p>
            </div>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  elements.capabilityList.innerHTML = portfolioData.capabilities
    .map(
      (item) => `
        <div class="capability">
          <strong>${item.title}</strong>
          <span>${item.text}</span>
        </div>
      `
    )
    .join("");

  elements.toolbox.innerHTML = portfolioData.tools
    .map((tool) => `<span class="tool">${tool}</span>`)
    .join("");
}

function setupReveal() {
  document.querySelectorAll(".reveal").forEach((item) => {
    item.classList.remove("reveal-pending");
    item.classList.add("is-visible");
  });
}

function init() {
  renderHero();
  renderFilters();
  renderProjects();
  renderTimeline();
  renderSkills();
  setupLightbox();
  setupReveal();
  elements.currentYear.textContent = new Date().getFullYear();
}

init();
