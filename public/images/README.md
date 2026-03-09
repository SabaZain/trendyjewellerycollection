# Images Setup Guide

## Current Setup
✅ **Placeholder SVG images** are included for testing
✅ **Background images** still use Unsplash URLs (hero sections)
✅ **Product images** use local paths from `public/images/`

## Folder Structure
```
public/images/
├── products/
│   ├── earrings/          # earrings-1.jpg, earrings-2.svg, etc.
│   ├── necklace/          # necklace-1.svg, etc.
│   ├── locket-sets/       # locket-1.svg, etc.
│   ├── rings/             # rings-1.svg, etc.
│   └── watches/           # watches-1.svg, etc.
├── hero/
│   └── featured.svg       # Hero section featured image
├── collections/
│   ├── bridal.svg
│   ├── everyday.svg
│   └── statement.svg
└── about/
    └── craftsmanship.svg
```

## How to Add Your Real Product Images

### Step 1: Prepare Your Images
- **Format**: JPG or PNG
- **Size**: 500x500px (square) recommended
- **Quality**: High resolution for zoom effect
- **Background**: White or neutral recommended

### Step 2: Add Images to Folders
Place your images in the appropriate folders:
```
public/images/products/earrings/your-earring-image.jpg
public/images/products/necklace/your-necklace-image.jpg
```

### Step 3: Update Product Data
Edit `src/data/products.ts` and change the image paths:

```typescript
{
  id: 1,
  name: "Pearl Drop Earrings",
  code: "EAR001",
  price: 549,
  image: "/images/products/earrings/your-image.jpg",  // Update this
  category: "earrings"
}
```

### Step 4: Restart Dev Server
```bash
npm run dev
```

## Tips

1. **Keep SVG Placeholders**: Keep the `.svg` files as backup while testing
2. **Naming**: Use descriptive names (e.g., `pearl-drop-earrings.jpg`)
3. **Optimization**: Compress images before uploading (TinyPNG, Squoosh)
4. **Consistency**: Keep similar lighting across all product photos

## Background Images (Unsplash)

Hero and section background images still use Unsplash URLs. To change these:

1. Add your background images to `public/images/hero/`
2. Update the background image URLs in the respective page components

Example for home page hero:
```tsx
// In src/app/page.tsx
backgroundImage: `url('/images/hero/my-background.jpg')`
```

## File Extensions

- Current setup uses `.svg` for placeholders
- You can use `.jpg`, `.png`, `.webp` for real images
- Next.js Image component supports all common formats
