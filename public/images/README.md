# PCA Praful Cricket Academy — Image Asset Manifest & Replacement Guide

## Policy & Compliance Notice
In strict accordance with intellectual property guidelines, **no photos have been scraped or bulk-downloaded from Google Maps**. 
The images currently placed in `/public/images/` are high-resolution, royalty-free/licensed sports photography and stylized SVG graphics used as placeholders to represent cricket training dimensions (batting, bowling, fielding, pitch nets, and fitness).

---

## How to Add Real Academy Photos
When official photos from PCA Praful Cricket Academy management or authorized coaching staff become available:
1. Copy the genuine JPG/PNG image into `/public/images/`
2. Update the filename matching the slots below OR edit `src/data/academy.ts` to point to the new filename.
3. Keep file sizes optimized (< 450 KB, recommended format: WebP or compressed JPG).

---

## Asset Registry

| Filename | Category | Dimensions | Current Status / Source | Usage Location | Replacement Instructions |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `hero-cricket.jpg` | Hero Background | 1920x1080 | High-impact cinematic training imagery | Homepage Hero Section | Replace with wide-angle shot of PCA Bowenpally practice ground or nets |
| `batting-drill.jpg` | Training / Batting | 800x600 | Curated cricket batting stance photo | Programs - Batting Card & Gallery | Replace with PCA batsman in net session |
| `bowling-action.jpg` | Training / Bowling | 800x600 | Curated fast/spin bowling action photo | Programs - Bowling Card & Gallery | Replace with PCA bowler run-up/release |
| `fielding-drill.jpg` | Training / Fielding | 800x600 | Curated cricket catch/agility training photo | Programs - Fielding Card & Gallery | Replace with PCA fielding catching practice |
| `fitness-conditioning.jpg` | Training / Fitness | 800x600 | Curated cricket athletic sprint/conditioning photo | Programs - Fitness Card & Gallery | Replace with PCA stamina & fitness drills |
| `nets-facility.jpg` | Ground & Facilities | 1000x700 | Curated cricket practice net cage photo | Facilities Section | Replace with actual photo of PCA Bowenpally nets |
| `ground-turf.jpg` | Ground & Facilities | 1000x700 | Curated cricket turf pitch photo | Facilities Section | Replace with photo of PCA pitch or training ground |
| `match-simulation.jpg` | Match Practice | 1000x700 | Curated junior practice match photo | Facilities & Gallery | Replace with PCA internal match simulation photo |
| `cricket-ball.svg` | Icon / Favicon | Vector | Handcrafted SVG cricket seam ball | Site favicon & brand emblem | Permanent vector asset |

---

## Updating Gallery Data in Code
Open `src/data/academy.ts` and modify the `gallery` array with custom titles and captions whenever genuine images are placed here.
