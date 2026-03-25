# Data Structure

This directory contains all the data used throughout the SculptDerma application.

## Structure

```
src/data/
├── doctors/
│   ├── drSwarali.ts      # Dr. Swarali's data
│   ├── drDhanashree.ts   # Dr. Dhanashree's data
│   ├── drRohini.ts       # Dr. Rohini's data
│   ├── drAkash.ts        # Dr. Akash Tarkase's data
│   ├── drSomnath.ts      # Dr. Somnath Karad's data
│   ├── drAzhar.ts        # Dr. Azhar's data
│   ├── drPranil.ts       # Dr. Pranil's data
│   ├── drShrenik.ts      # Dr. Shrenik Oswal's data
│   ├── drNitin.ts        # Dr. Nitin Maske's data
│   ├── drBhushan.ts      # Dr. Bhushan Darkase's data
│   └── index.ts          # Export all doctors data
├── priceGuide/
│   ├── faceCosmetology.ts # Face cosmetology services and prices
│   ├── injections.ts      # Injection services and prices
│   ├── skinTreatment.ts  # Skin treatment services and prices
│   ├── general.ts         # General consultation services and prices
│   ├── types.ts           # Price guide type definitions
│   └── index.ts          # Export all price guide data
├── types.ts              # Main TypeScript type definitions
├── index.ts              # Main data export
└── README.md             # This file
```

## Usage

### Doctors Data

#### Importing All Doctors
```typescript
import { allDoctors } from '../data'
```

#### Importing Specific Doctor
```typescript
import { drAkash } from '../data/doctors'
```

#### Getting Doctor by ID
```typescript
import { getDoctorById } from '../data'
const doctor = getDoctorById('dr-akash')
```

#### Getting Doctors by Specialty
```typescript
import { getDoctorsBySpecialty } from '../data'
const dermatologists = getDoctorsBySpecialty('Dermatology')
```

### Price Guide Data

#### Importing All Price Categories
```typescript
import { allPriceCategories } from '../data'
```

#### Importing Specific Category
```typescript
import { faceCosmetology } from '../data/priceGuide'
```

#### Getting Complete Price Guide
```typescript
import { getPriceGuideData } from '../data'
const priceGuide = getPriceGuideData()
```

#### Finding Service by Name
```typescript
import { getServiceByName } from '../data'
const service = getServiceByName('face lifting')
```

#### Getting Services by Category
```typescript
import { getServicesByCategory } from '../data'
const faceServices = getServicesByCategory('face cosmetology')
```

## Data Structures

### Doctor Object
Each doctor object contains:
- **Basic Info**: id, name, specialty, experience, education, description
- **Media**: image, achievements
- **Contact**: phone, office, email
- **Social**: facebook, twitter, linkedin
- **Content**: biography, education details, working hours

### Price Guide Object
Each price category contains:
- **Title**: Category name
- **Description**: Category description
- **Services**: Array of services with name and price

## Type Definitions

All types are defined in respective `types.ts` files for better type safety and code completion.

## Adding New Data

### Adding New Doctors
1. Create a new file in the `doctors/` directory following the naming convention `dr[Name].ts`
2. Export the doctor data using the defined interface
3. Add import and export to `doctors/index.ts`
4. Add to the `allDoctors` array in `doctors/index.ts`

### Adding New Price Categories
1. Create a new file in the `priceGuide/` directory
2. Export the category data using the defined interface
3. Add import and export to `priceGuide/index.ts`
4. Add to the `allPriceCategories` array in `priceGuide/index.ts`
