
# Add Portfolio Presentation Download CTA

## Overview
Add a new "Portfolio" download button alongside the existing Resume CTA in both the Hero section and Footer. The portfolio will be downloadable as a PDF from Google Slides.

## Changes Required

### 1. Update Data Model (`src/data/portfolio-data.ts`)

**Add new field to PersonalInfo interface:**
```typescript
portfolioUrl: string;
```

**Add the portfolio URL to personal data:**
```typescript
portfolioUrl: "https://docs.google.com/presentation/d/13UhZUHKB1PQhKN6eRoJE7jubAwtRd75e14L_6Z4uimU/export/pdf"
```

The `/export/pdf` suffix enables direct PDF download from Google Slides.

### 2. Update Hero Section (`src/components/portfolio/Hero.tsx`)

**Add new import:**
- Import `Presentation` icon from lucide-react (or use `FileText` as alternative)

**Add Portfolio button after Resume button:**
```
[Get in Touch] [LinkedIn] [Resume] [Portfolio]
```

The Portfolio button will use `variant="ghost"` styling to match the Resume button.

### 3. Update Footer (`src/components/portfolio/Footer.tsx`)

**Add new import:**
- Import `Presentation` icon from lucide-react

**Add Portfolio button in the CTA section:**
```
[Send me an email] [View LinkedIn] [Download Resume] [Download Portfolio]
```

The Portfolio button will use `variant="secondary"` to differentiate from Resume.

## Visual Layout

### Hero Section (4 buttons)
| Button | Variant | Icon |
|--------|---------|------|
| Get in Touch | default (primary) | Mail |
| LinkedIn | outline | Linkedin |
| Resume | ghost | FileDown |
| Portfolio | ghost | Presentation |

### Footer Section (4 buttons)
| Button | Variant | Icon |
|--------|---------|------|
| Send me an email | default (primary) | Mail |
| View LinkedIn | outline | Linkedin |
| Download Resume | secondary | FileDown |
| Download Portfolio | secondary | Presentation |

## Technical Notes
- The Google Slides export URL will trigger an automatic PDF download when clicked
- Both buttons open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Mobile responsiveness maintained with `flex-wrap` on button containers

## Files to Modify
1. `src/data/portfolio-data.ts` - Add `portfolioUrl` field
2. `src/components/portfolio/Hero.tsx` - Add Portfolio button
3. `src/components/portfolio/Footer.tsx` - Add Portfolio button
