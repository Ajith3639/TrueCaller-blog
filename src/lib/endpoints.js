export default {
  COMMON_ENDPOINT: 'https://public-api.wordpress.com/rest',
  GET_ALL_POSTS:
    '/v1.1/sites/107403796/posts/?fields=slug,categories,post_thumbnail,title,date&number=20&order&page=',
  GET_CATEGORIES: '/v1.1/sites/107403796/categories',
  GET_TOTAL_PAGES: '/v1.1/sites/107403796/dropdown-pages/',
  GET_POSTS_BY_CATEGORY:
    '/v1.1/sites/107403796/posts/?fields=slug,categories,post_thumbnail,title,date&number=20&order&category=',
  GET_POST_DETAILS: '/v1.1/sites/107403796/posts/slug:'
}
