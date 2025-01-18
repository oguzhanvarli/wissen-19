export interface GerCharacterResponse {
  info: GerCharacterInfoResponse
  results: GetCharacterResultsResponse[]
}

export interface GerCharacterInfoResponse {
  count: number
  pages: number
  next: string
  prev: any
}

export interface GetCharacterResultsResponse {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: NameUrl
  location: NameUrl
  image: string
  episode: string[]
  url: string
  created: string
}

export interface NameUrl {
  name: string
  url: string
}

