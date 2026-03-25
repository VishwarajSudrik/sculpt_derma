import { faceCosmetology } from './faceCosmetology'
import { injections } from './injections'
import { skinTreatment } from './skinTreatment'
import { general } from './general'

export {
  faceCosmetology,
  injections,
  skinTreatment,
  general
}

export const allPriceCategories = [
  faceCosmetology,
  injections,
  skinTreatment,
  general
]

export const getPriceGuideData = () => {
  return {
    title: "Price Guide",
    subtitle: "Our expertise extends beyond plastic surgery. Our talented aesthetic providers offer the latest non-surgical treatments to rejuvenate and refine your appearance.",
    footer: "Full Range of Our Services",
    categories: allPriceCategories
  }
}

export const getServiceByName = (serviceName: string) => {
  for (const category of allPriceCategories) {
    const service = category.services.find(s => 
      s.name.toLowerCase().includes(serviceName.toLowerCase())
    )
    if (service) {
      return { ...service, category: category.title }
    }
  }
  return null
}

export const getServicesByCategory = (categoryName: string) => {
  const category = allPriceCategories.find(cat => 
    cat.title.toLowerCase().includes(categoryName.toLowerCase())
  )
  return category || null
}
