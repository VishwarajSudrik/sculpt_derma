import { drSwarali } from './drSwarali'
import { drDhanashree } from './drDhanashree'
import { drRohini } from './drRohini'
import { drAkash } from './drAkash'
import { drSomnath } from './drSomnath'
import { drAzhar } from './drAzhar'
import { drPranil } from './drPranil'
import { drShrenik } from './drShrenik'
import { drNitin } from './drNitin'
import { drBhushan } from './drBhushan'

export {
  drSwarali,
  drDhanashree,
  drRohini,
  drAkash,
  drSomnath,
  drAzhar,
  drPranil,
  drShrenik,
  drNitin,
  drBhushan
}

export const allDoctors = [
  drSwarali,
  drDhanashree,
  drRohini,
  drAkash,
  drSomnath,
  drAzhar,
  drPranil,
  drShrenik,
  drNitin,
  drBhushan
]

export const getDoctorById = (id: string) => {
  return allDoctors.find(doctor => doctor.id === id)
}

export const getDoctorsBySpecialty = (specialty: string) => {
  return allDoctors.filter(doctor => 
    doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
  )
}
