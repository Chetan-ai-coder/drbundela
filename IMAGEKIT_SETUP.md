# ImageKit Integration Setup Guide

## Current Status

Your ImageKit integration is **configured** and ready to use! 

**Environment Variables Set:**
```
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_8GJgy5qcmlvJk8nVgKkZLAMcey4=
IMAGEKIT_PRIVATE_KEY=private_N/swYfY+Q8EJGXoHcmSuoRMK2cw=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/agenticimg/
```

---

## What Images Need to Be Uploaded?

Your application expects these image paths in ImageKit:

### Doctor Images (3 images)
1. **Dr Bundela/Doctor/doctor-Hero.JPG**
   - Used on: Homepage hero section
   - Size: Ideally 500x600px or larger
   - Format: JPG
   - Purpose: Main doctor portrait on hero

2. **Dr Bundela/Doctor/doctor-about.jpg**
   - Used on: Doctor intro section (home page)
   - Size: Ideally 400x500px
   - Format: JPG
   - Purpose: Doctor introduction card

3. **Dr Bundela/Doctor/doctor-about-full.jpg**
   - Used on: About page hero section
   - Size: Ideally 600x800px
   - Format: JPG
   - Purpose: Full body doctor portrait

### Testimonial Images (5+ images)
Located in: `Dr Bundela/Testimonials/`
- testimonial-1.jpg
- testimonial-2.jpg
- testimonial-3.jpg
- testimonial-4.jpg
- testimonial-5.jpg
- (and more as you add testimonials)

### Treatment Service Images (7+ images)
Located in: `Dr Bundela/Treatment/`
- treatment-hair.jpg
- treatment-skin.jpg
- treatment-wellness.jpg
- treatment-thyroid.jpg
- treatment-pcos.jpg
- treatment-allergy.jpg
- treatment-digestive.jpg

### Gallery Images
Located in: `Dr Bundela/Gallery/`
- Any number of clinic/facility photos
- Tagged with categories (Clinic, Facility, etc.)

---

## How to Upload Images to ImageKit

### Step 1: Log In to ImageKit
1. Go to [ImageKit Dashboard](https://imagekit.io/dashboard)
2. Log in with your credentials
3. You should see your media library

### Step 2: Create Folder Structure
1. Click "Create Folder" in the media library
2. Create these folders in order:
   - `Dr Bundela/`
   - `Dr Bundela/Doctor/`
   - `Dr Bundela/Testimonials/`
   - `Dr Bundela/Treatment/`
   - `Dr Bundela/Gallery/`

### Step 3: Upload Doctor Images
1. Navigate to `Dr Bundela/Doctor/` folder
2. Upload your original doctor images:
   - **doctor-Hero.JPG** (hero portrait)
   - **doctor-about.jpg** (intro section portrait)
   - **doctor-about-full.jpg** (about page full body)

### Step 4: Upload Testimonial Images
1. Navigate to `Dr Bundela/Testimonials/`
2. Upload patient testimonial photos:
   - testimonial-1.jpg through testimonial-5.jpg (at minimum)

### Step 5: Upload Treatment Images
1. Navigate to `Dr Bundela/Treatment/`
2. Upload treatment category images:
   - treatment-hair.jpg
   - treatment-skin.jpg
   - treatment-wellness.jpg
   - treatment-thyroid.jpg
   - treatment-pcos.jpg
   - treatment-allergy.jpg
   - treatment-digestive.jpg

### Step 6: Upload Gallery Images
1. Navigate to `Dr Bundela/Gallery/`
2. Upload clinic/facility photos
3. Add tags to images (e.g., "Clinic", "Facility", "Treatment Room")

---

## How Images Are Rendered

### The ImageKit Loader
Your app uses a custom ImageKit loader (`lib/imagekitLoader.ts`) that:
1. Takes image paths from your code
2. Automatically appends ImageKit URL endpoint
3. Adds optimization parameters (width, quality)
4. Returns optimized image URLs

### Example:
```typescript
// In your code:
src="Dr Bundela/Doctor/doctor-Hero.JPG"

// Becomes:
https://ik.imagekit.io/agenticimg/Dr Bundela/Doctor/doctor-Hero.JPG?tr=w-800,q-75
```

The parameters:
- `w-800` = width 800px (auto-scaled based on component)
- `q-75` = quality 75% (balanced for speed and appearance)

---

## Testing Images Locally

### 1. Check if ImageKit URL Endpoint Works
Open this in your browser:
```
https://ik.imagekit.io/agenticimg/
```

You should see ImageKit's media library interface.

### 2. Test an Image URL Directly
After uploading, test the image by visiting:
```
https://ik.imagekit.io/agenticimg/Dr Bundela/Doctor/doctor-Hero.JPG?tr=w-500,q-75
```

---

## Common Issues & Solutions

### Issue: "Image not found" or broken images
**Solution:**
1. Check the exact file path in ImageKit
2. Ensure folder structure matches: `Dr Bundela/Doctor/`
3. Verify file name matches exactly (case-sensitive)
4. Check ImageKit URL endpoint in `.env.local`

### Issue: Images load slowly
**Solution:**
1. Optimize images before uploading (max 2MB)
2. Use modern formats (JPG, WebP)
3. ImageKit will auto-optimize; wait 10-20 seconds after upload

### Issue: Images appear stretched or wrong aspect ratio
**Solution:**
1. Check source image dimensions
2. Ensure image has proper width/height ratio
3. The component's CSS might need adjustment

---

## Image Optimization Best Practices

1. **Compress Before Upload**
   - Use tools like TinyPNG, ImageOptim
   - Aim for: <500KB per image

2. **Use Appropriate Dimensions**
   - Hero images: 1200x800px or larger
   - Thumbnails: 400x400px
   - Profile pics: 600x600px

3. **Let ImageKit Optimize**
   - Don't worry about format (JPG vs WebP)
   - ImageKit auto-selects best format per browser
   - The loader adds ?tr=w-X,q-75 for automatic optimization

4. **Use Modern Formats**
   - JPG for photos (preferred)
   - PNG for images with transparency
   - WebP is auto-handled by ImageKit

---

## Monitoring & Analytics

In ImageKit Dashboard:
1. Go to "Analytics" to see image usage
2. Check "Optimization" to see bandwidth saved
3. View upload history in Media Library

---

## Support & Next Steps

1. **After uploading images:**
   - Test on localhost: `npm run dev`
   - Visit http://localhost:3000 to see images render

2. **Before deployment:**
   - Ensure all required images are uploaded
   - Test on a staging environment
   - Verify all image paths are correct

3. **If images don't show:**
   - Check ImageKit Media Library for uploaded files
   - Verify folder structure and file names
   - Check browser console for error messages

---

## Quick Reference

| Component | Image Path | Size |
|-----------|------------|------|
| Hero Section | Dr Bundela/Doctor/doctor-Hero.JPG | 500x600+ |
| Doctor Intro | Dr Bundela/Doctor/doctor-about.jpg | 400x500 |
| About Page | Dr Bundela/Doctor/doctor-about-full.jpg | 600x800 |
| Testimonials | Dr Bundela/Testimonials/testimonial-{1-5}.jpg | 300x300+ |
| Services | Dr Bundela/Treatment/treatment-*.jpg | 400x300 |
| Gallery | Dr Bundela/Gallery/*.jpg | Variable |

---

**Your website is ready for ImageKit! Upload the images following the folder structure above and your site will display them automatically.**
