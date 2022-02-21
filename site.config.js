module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'd8c8c86bb0d242399ab121a395de8b86',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "b6374e43-34fc-49c7-8ef9-26c47811d396",

  // basic site info (required)
  name: '工具箱',
  domain: 'lizhimiao.com',
  author: 'DionysusZ',

  // open graph metadata (optional)
  description: '数据库与工具箱',
  socialImageTitle: 'lizhimiao的博客',
  socialImageSubtitle: '👋',

  // social usernames (optional)
  twitter: '_lizhimiao',
  github: 'zhimiaoli',
  linkedin: 'lizhimiao',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: "zhimiaoli/lizhimiao-dot-com-comment",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: 
  {
    '/notion-as-blog': '2ac48272b7644cb0b0f8d19a104ddf05',
    '/refers': '68892ddbd87341a5940b08fe9f3d079f',
    '/digital-noting-tools-i-use': '7a26482a6a774a8dbd4872d9023b3957',
    '/about': '0da3484664b44dcaa555509e3eb927f1',
    '/archive': '299f3286fd3643ddbf6f4489b4813e81'
  }
}
