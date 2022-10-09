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