# Google Analytics 4 Setup Guide

## Quick Setup Instructions

### 1. Get Your Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your portfolio
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Update the Measurement ID
The Measurement ID `G-533505623` is already configured in `src/app/layout.tsx`:

```tsx
// Line 36
src="https://www.googletagmanager.com/gtag/js?id=G-533505623"

// Line 44
gtag('config', 'G-533505623');
```

If you need to change it, simply replace `G-533505623` with your new Measurement ID.

### 3. Verify Installation
After deployment, check:
- Real-time reports in Google Analytics
- Network tab for gtag.js requests
- Google Tag Assistant extension

## What's Included

### Script Configuration
- **Strategy**: `afterInteractive` - Loads after page becomes interactive
- **Performance**: Non-blocking, won't affect page load speed
- **Compatibility**: Works with Next.js 14 App Router

### Tracking Features
- Page views automatically tracked
- User engagement metrics
- Real-time visitor data
- Geographic and device analytics
- Traffic source attribution

## Privacy Notes
- No personal data collected beyond standard GA4
- Anonymous IP addresses by default
- Compliant with GDPR/CCPA requirements
- Users can opt-out via browser settings

## Optional Enhancements

### Custom Events (Add to components as needed)
```tsx
// Track button clicks
gtag('event', 'click', {
  'event_category': 'engagement',
  'event_label': 'contact_form_submit'
});

// Track portfolio section views
gtag('event', 'section_view', {
  'event_category': 'engagement',
  'event_label': 'projects_section'
});
```

### Enhanced Measurement
Enable in GA4 dashboard:
- Scroll tracking
- Outbound clicks
- File downloads
- Video engagement
- Site search

## Deployment Notes
- Analytics works in both development and production
- No additional configuration needed
- Automatic data collection starts immediately

## Testing
```bash
# Build and test locally
npm run build
npm start

# Check browser console for gtag requests
# Verify in GA4 real-time reports
```

---

**Ready to track your portfolio visitors!** Replace the placeholder ID with your actual GA4 Measurement ID.
