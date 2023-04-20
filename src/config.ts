export const site = {
    author: 'DORAKIKA',
    slogan: '热爱漫无边际',
    description: '',
    keywords: '',
    favicon: '/favicon.ico',
    url: 'http://wj.lzlspyxgs.asia/'
}
export const footer = {
    beian: {
        enabled: true,
        value: '皖ICP备2023001879号-1'
    },
    live: {
        enabled: true,
        from: '2023-04-20'
    }
}
export const navs = [
    {
        name: '更多',
        links: [
            {
                name: '导航',
                icon: '<img class="icon" src="/images/blog.dorakika.cn.png" alt="导航" />',
                href: 'http://wj.lzlspyxgs.asia/',
            },{
                name: 'ChatGPT',
                icon: '<img class="icon" src="/images/blog.dorakika.cn.png" alt="ChatGPT" />',
                href: 'https://ai.yjie.fun/'
            }
        ]
    }
]

export const aboutMe = {
    avatar_url: 'https://q.qlogo.cn/g?b=qq&nk=2337971460&s=640',
    left_tags: [
        '🤖️ 数码科技爱好者',
        '🔍 分享与热心帮助',
        '💻 前端开发工程师'
    ],
    right_tags: [
        '哆啦A梦一份子  🥳',
        '吃饭睡觉打游戏 🎮',
        '热爱漫无边际 ✨'
    ]
}

export const project = {
    github_name: 'dorakika',
    filter_readme: true,
    filter_fork: true
}

// use 内容在view/UseTech.astro里面改，svg图片动态导入的话页面需要加载一下，所以硬编码了

export const mediaLink = {
    links: [
        {
            name: '博客',
            icon: '/images/blog.dorakika.cn.png',
            href: 'https://ai.yjie.fun/'
        },{
            name: 'mail',
            icon: '/svg/mail.svg',
            href: '2337971460@qq.com'
        }
    ]
}

export const third = {
    use51la: {
        enabled: true,
        id: 'JfDeLdTDm4pOVeoL',
        ck: 'JfDeLdTDm4pOVeoL'
    }
}
