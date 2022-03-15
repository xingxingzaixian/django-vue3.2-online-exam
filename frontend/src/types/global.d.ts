declare type Nullable<T> = T | null
declare type Optional<T> = T | undefined

// 元素类型定义
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
declare type Recordable<T = any> = Record<string, T>
