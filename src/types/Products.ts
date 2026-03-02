export interface Product {
  id: string
  title: string
  price: number
  category: string
  description: string
  rating: number
  stock: number
}

export interface ProductInCart {
  id: string
  title: string
  price: number
  category: string
  description: string
  rating: number
  stock: number
  quantity: number
}
