export interface MenuItemType {
  title: string
  icon: string
  path: string
  children?: MenuItemType[]
}