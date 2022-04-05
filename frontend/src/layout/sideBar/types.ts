export interface MenuItemType {
  title: string
  icon: string
  path: string
  order: number
  children?: MenuItemType[]
}