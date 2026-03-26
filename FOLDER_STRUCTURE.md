# Project Folder Structure

This document outlines the organized folder structure following React/TypeScript best practices.

## 📁 src/

### 📂 components/
Reusable UI components organized by purpose.

#### 📂 components/ui/
- `Button.tsx` - Reusable button component with variants
- `index.ts` - Barrel export for UI components

#### 📂 components/layout/
- `Navbar.tsx` - Main navigation component
- `Footer.tsx` - Footer component
- `index.ts` - Barrel export for layout components

#### 📂 components/features/
Feature-specific components (to be added as needed)

### 📂 pages/
Route-level page components.

#### 📂 pages/doctors/
All doctor profile pages organized together:
- `DoctorProfile.tsx`
- `DoctorProfileAkash.tsx`
- `DoctorProfileAzhar.tsx`
- `DoctorProfileBhushan.tsx`
- `DoctorProfileDhanashree.tsx`
- `DoctorProfileNitin.tsx`
- `DoctorProfilePranil.tsx`
- `DoctorProfileRohini.tsx`
- `DoctorProfileShrenik.tsx`
- `DoctorProfileSomnath.tsx`
- `index.ts` - Barrel export for all doctor profiles

#### Root pages:
- `Home.tsx`
- `About.tsx`
- `Services.tsx`
- `Contact.tsx`
- `Appointment.tsx`
- `Blog.tsx`

### 📂 assets/
Static assets organized by type.

#### 📂 assets/images/
- `clinic/` - Clinic-related images
- `services/` - Service-related images
- `team/` - Team member photos
- `general/` - General UI images (moved from img/)

### 📂 data/
Application data and configuration.
- `doctors/` - Doctor data and profiles
- `priceGuide/` - Pricing information
- `types.ts` - TypeScript type definitions
- `index.ts` - Data exports

### 📂 constants/
Application-wide constants.
- `index.ts` - App constants, routes, contact info

### 📂 hooks/
Custom React hooks (empty, ready for use)

### 📂 types/
TypeScript type definitions (empty, ready for use)

### 📂 utils/
Utility functions (empty, ready for use)

## 📋 Best Practices Followed

1. **Feature-based organization** - Related components grouped together
2. **Barrel exports** - Index files for clean imports
3. **Separation of concerns** - UI vs layout vs feature components
4. **Scalable structure** - Easy to add new features
5. **Clear naming** - Descriptive and consistent naming conventions
6. **Asset organization** - Images grouped by purpose

## 🚀 Import Examples

```typescript
// Layout components
import { Navbar, Footer } from './components/layout'

// UI components
import { Button } from './components/ui'

// Doctor profiles
import { DoctorProfileAkash, DoctorProfileRohini } from './pages/doctors'

// Constants
import { ROUTES, CONTACT_INFO } from './constants'
```
