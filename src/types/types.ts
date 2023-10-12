

export type SubItem = {
  itemName: string
  amount: number
}

export type Cabinet = {
  id: number
  location: string
  room: string
  items: Array<SubItem>
}
