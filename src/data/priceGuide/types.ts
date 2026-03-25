export interface PriceService {
  name: string
  price: string
}

export interface PriceCategory {
  title: string
  description: string
  services: PriceService[]
}

export interface PriceGuideData {
  title: string
  subtitle: string
  footer: string
  categories: PriceCategory[]
}

export interface ServiceWithCategory extends PriceService {
  category: string
}
