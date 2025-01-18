export interface GetCharacterResponse {
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

