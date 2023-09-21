interface IComment {
  color: string
  text: string
}

export interface IItem {
  label: string
  id: number
  comments?: IComment[]
}
