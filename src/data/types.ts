export interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  education: string
  description: string
  image: string
  achievements: string[]
  contact: {
    phone?: string
    office?: string
    email?: string
  }
  social: {
    facebook: string
    twitter: string
    linkedin: string
  }
  biography: string
  educationDetails: {
    degree: string
    boardCertification: string
    fieldOfExpertise: string
    yearsOfPractice: string
  }
  workingHours: {
    day: string
    time: string
    available: boolean
  }[]
}

export interface WorkingHours {
  day: string
  time: string
  available: boolean
}

export interface ContactInfo {
  phone?: string
  office?: string
  email?: string
}

export interface SocialLinks {
  facebook: string
  twitter: string
  linkedin: string
}

export interface EducationDetails {
  degree: string
  boardCertification: string
  fieldOfExpertise: string
  yearsOfPractice: string
}
