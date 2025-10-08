# Video Demo Setup Guide

## How to Add Your Demo Video

I've created a beautiful video demo component that replaces the previous interactive chat demo. Here's how to add your video:

### Option 1: Local Video File (Recommended)

1. **Add your video file to the `public` directory:**
   ```
   public/
   ├── demo-video.mp4    # Your main video file
   ├── demo-video.webm   # Optional: WebM version for better browser support
   └── demo-thumbnail.jpg # Optional: Custom thumbnail image
   ```

2. **Update the VideoDemo component** (`src/components/VideoDemo.tsx`):
   - Line 67: Replace `poster="/api/placeholder/800/450"` with `poster="/demo-thumbnail.jpg"`
   - Lines 71-72: Update the video sources:
     ```tsx
     <source src="/demo-video.mp4" type="video/mp4" />
     <source src="/demo-video.webm" type="video/webm" />
     ```

### Option 2: Hosted Video (YouTube, Vimeo, etc.)

If you prefer to host your video externally:

1. **Update the VideoDemo component** to use an iframe:
   ```tsx
   <iframe
     src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&controls=1"
     className="w-full h-full"
     allowFullScreen
   />
   ```

### Option 3: Video Streaming Service

For professional video hosting:
- **Vimeo**: Replace the video element with Vimeo embed
- **Wistia**: Use their embed code
- **Cloudinary**: Use their video transformation URLs

## Video Specifications

For best results, your video should be:
- **Format**: MP4 (H.264) + WebM for browser compatibility
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: 2-5 minutes (optimal for demo videos)
- **Aspect Ratio**: 16:9
- **File Size**: Under 50MB for web optimization

## Features Included

The VideoDemo component includes:
- ✅ Custom video controls (play/pause, mute, fullscreen, restart)
- ✅ Beautiful glassmorphism design matching your brand
- ✅ Responsive design for all devices
- ✅ Smooth animations and hover effects
- ✅ Professional overlay with video information
- ✅ Call-to-action buttons below the video
- ✅ Auto-hide controls on hover
- ✅ Accessibility features

## Testing Your Video

1. Start the dev server: `npm run dev`
2. Navigate to the demo section
3. Test all video controls
4. Verify the video loads and plays correctly
5. Check responsive behavior on mobile devices

## Next Steps

Once you add your video file:
1. The component will automatically display it
2. All controls will work seamlessly
3. The video will be optimized for web delivery
4. Users can interact with the demo video professionally

The new video demo will significantly enhance your website's ability to showcase LuminIQ's capabilities!
