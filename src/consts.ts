// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.


/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 * asideTagsMaxSize {number}
 *    0: disable,
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */
export const site = {
  title: 'Astro Theme Yi', // required
  favicon: '/favicon.svg', // required
  description: 'Welcome to my independent blog website! ',
  author: "Astro-Yi", // required
  avatar: '/avatar.png', // required
  url: 'https://example.org', // required
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  motto: 'Actions speak louder than words.',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  asideTagsMaxSize: 0,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */
export const config = {
  lang: 'en', // en | zh-cn | zh-Hant | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect

  // memos config
  memosUrl: '', // https://xxxx.xxx.xx
  memosUsername: '', // login name
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "Feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  // {
  //   name: "Memos",
  //   iconClass: "ri-quill-pen-line",
  //   href: "/memos",
  // },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Message",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Friends',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self',
      },
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: '',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: '',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: '',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry/astro-yi',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: '',
  }
]


