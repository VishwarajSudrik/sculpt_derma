// Centralized image imports for production optimization
// These imports ensure images are properly bundled by Vite

// Helper function to get image URL dynamically
export const getImageUrl = (path: string, folder = 'general') => {
  return new URL(`../assets/images/${folder}/${path}`, import.meta.url).href
}

// Export specific images for services
export const serviceImages = {
  breastAugmentation: getImageUrl('Breast-Augmentation-with-Implant.jpg'),
  mommyMakeover: getImageUrl('Mommy-Makeover.jpg'),
  rhinoplasty: getImageUrl('Rhinoplasty-1.jpg'),
  breastImplantSurgery: getImageUrl('Breast-Implant-Surgery.jpg'),
  liposuction: getImageUrl('Liposuction-2-1.jpg'),
  gynecomastia: getImageUrl('Gynecomastia-Surgery-Pune.jpg'),
  tummyTuck: getImageUrl('Tummy-Tuck-Abdominoplasty.jpg'),
  neckLift: getImageUrl('50.jpg'),
  labiaplasty: getImageUrl('Labioplasty.jpg'),
  cheekAugmentation: getImageUrl('52.jpg'),
  armLift: getImageUrl('Arm-Lift.jpg'),
  vaginoplasty: getImageUrl('Vaginoplasty.jpg'),
  vaginalReconstruction: getImageUrl('Vaginal-Resconstruction.jpg'),
  dermalFillers: getImageUrl('Dermal-Fillers.jpg'),
  botox: getImageUrl('57.jpg'),
  laserHairRemoval: getImageUrl('58.jpg'),
  acneScars: getImageUrl('59.jpg'),
  melasma: getImageUrl('60.jpg'),
  freckles: getImageUrl('61.jpg'),
  chemicalPeels: getImageUrl('62.jpg'),
  lipFillers: getImageUrl('Lip-Fillers.jpg'),
  nonSurgicalFacelift: getImageUrl('64.jpg'),
  liposuction360: getImageUrl('360-Deg.-Lepictomy.jpg')
}

export const processImages = {
  consultation: getImageUrl('66.jpg'),
  planning: getImageUrl('67.jpg'),
  treatment: getImageUrl('68.jpg'),
  aftercare: getImageUrl('69.jpg')
}

export const clinicImages = {
  kharadi: getImageUrl('80.jpg'),
  wakad: getImageUrl('81.jpg'),
  baner: getImageUrl('82.jpg')
}

// Team images
export const teamImages = {
  drAkashTarkase: getImageUrl('Dr. Akash Tarkase.jpg', 'team'),
  drAzhar: getImageUrl('Dr. Azhar.jpg', 'team'),
  drBhushanDarkase: getImageUrl('Dr. Bhushan Darkase.jpg', 'team'),
  drDhanashree: getImageUrl('Dr. Dhanashree.jpg', 'team'),
  drNitinMaske: getImageUrl('Dr. Nitin Maske.jpg', 'team'),
  drRohini: getImageUrl('Dr. Rohini.jpg', 'team'),
  drShrenikOswal: getImageUrl('Dr. Shrenik Oswal.jpg', 'team'),
  drSomnathKarad: getImageUrl('Dr. Somnath Karad.jpg', 'team'),
  drSwarali: getImageUrl('Dr. Swarali.jpg', 'team')
}

// Logo and other brand images
export const brandImages = {
  logo: getImageUrl('Sculpt-Logo-2.png')
}

// Additional numbered images for home page
export const getNumberedImage = (num: number) => {
  return getImageUrl(`${num}.jpg`)
}

export const getDetailImage = (num: number) => {
  return getImageUrl(`${num}.jpg`)
}

// Helper function to get image by filename
export const getImageByName = (filename: string, folder = 'general') => {
  return getImageUrl(filename, folder)
}
