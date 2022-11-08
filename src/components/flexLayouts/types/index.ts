export interface Article {
  createdAt: string,
  id: string,
  avatar: string,
  text: string
}

export interface ArticleItem {
  article: Article
}

export interface ArticlesResponse {
  data: Article[]
}

export interface User {
  createdAt: string,
  id: string,
  avatar: string,
  name: string,
  lastActive: string,
  phone: string
}

export interface UserItem {
  user: User
}

export interface UserResponse {
  data: User[]
}