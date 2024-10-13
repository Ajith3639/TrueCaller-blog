import endpoints from './endpoints'

export const getAllPosts = async (page) => {
  const response = await fetch(`${endpoints.COMMON_ENDPOINT}${endpoints.GET_ALL_POSTS}${page}`)

  if (!response.ok) {
    throw new Error(`Error fetching posts: ${response.status}`)
  }

  const data = await response.json()

  return data
}

export const getCategories = async () => {
  const response = await fetch(`${endpoints.COMMON_ENDPOINT}${endpoints.GET_CATEGORIES}`)

  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.status}`)
  }

  const data = await response.json()
  return data
}

export const getTotalPages = async () => {
  const response = await fetch(`${endpoints.COMMON_ENDPOINT}${endpoints.GET_TOTAL_PAGES}`)
  const data = await response.json()
  return data
}

export const getPostsByCategory = async (category) => {
  const response = await fetch(
    `${endpoints.COMMON_ENDPOINT}${endpoints.GET_POSTS_BY_CATEGORY}${category}`
  )
  const data = await response.json()
  return data
}

export const getDetailedArticle = async (slug) => {
  const response = await fetch(`${endpoints.COMMON_ENDPOINT}${endpoints.GET_POST_DETAILS}${slug}`)

  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.status}`)
  }

  const data = await response.json()
  return data
}
