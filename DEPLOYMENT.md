# Deployment Guide for Render.com

## Prerequisites
- GitHub account
- Render.com account (free tier available)
- Git installed locally

## Step 1: Push to GitHub

```bash
cd mt5-ea-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mt5-ea-site.git
git push -u origin main
```

## Step 2: Deploy Static Site

### Via Render Dashboard

1. **Log in to Render.com**
   - Go to https://render.com
   - Sign up or log in

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect Repository**
   - Click "Connect account" (GitHub/GitLab)
   - Authorize Render
   - Select your repository: `mt5-ea-site`

4. **Configure Build**
   - **Name**: `mt5-experts` (or your choice)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - Click "Create Static Site"

5. **Wait for Build**
   - First build takes 2-5 minutes
   - Watch build logs for any errors
   - Site will be live at: `https://mt5-experts.onrender.com`

### Via render.yaml (Infrastructure as Code)

Create `render.yaml` in project root:

```yaml
services:
  - type: web
    name: mt5-experts
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

Then:
1. Push `render.yaml` to GitHub
2. In Render dashboard: New → Blueprint
3. Connect repository
4. Render will auto-configure from YAML

## Step 3: Custom Domain (Optional)

1. **In Render Dashboard**
   - Go to your site
   - Settings → Custom Domains
   - Click "Add Custom Domain"

2. **Enter Your Domain**
   - Type: `www.yoursite.com`
   - Click "Verify"

3. **Update DNS**
   - Add CNAME record in your domain registrar:
     - Type: `CNAME`
     - Name: `www`
     - Value: `your-site.onrender.com`

4. **Enable SSL**
   - Render automatically provisions SSL certificates
   - Takes 5-10 minutes to activate

## Step 4: Environment Variables (For Future Backend)

If you add a backend with sensitive data:

1. **In Render Dashboard**
   - Go to your service
   - Environment → Add Environment Variable

2. **Add Variables**
   ```
   STRIPE_SECRET_KEY=sk_test_...
   DATABASE_URL=postgres://...
   JWT_SECRET=your_secret_here
   ```

3. **Access in Code**
   ```javascript
   const stripeKey = process.env.STRIPE_SECRET_KEY;
   ```

## Step 5: Automatic Deployments

Render automatically deploys on every push to `main`:

```bash
# Make changes locally
git add .
git commit -m "Updated EA data"
git push origin main

# Render auto-detects push and rebuilds
```

### Control Auto-Deploy

In Render dashboard:
- Settings → Build & Deploy
- Toggle "Auto-Deploy" on/off

## Step 6: Performance Optimization

### Enable Compression

Render automatically compresses static assets.

### Add Custom Headers

Create `_headers` file in `public/`:

```
/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

### Optimize Build

In `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
```

## Step 7: Monitoring & Analytics

### View Logs

In Render dashboard:
- Select your service
- Logs tab
- View real-time build and runtime logs

### Add Analytics

In `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Troubleshooting

### Build Fails

**Error**: `npm install` fails
- Check `package.json` for syntax errors
- Ensure all dependencies are listed
- Try locally: `rm -rf node_modules && npm install`

**Error**: `npm run build` fails
- Check for TypeScript/lint errors
- Run build locally: `npm run build`
- Check build logs in Render

### Site Not Loading

**Blank page**:
- Check browser console for errors
- Verify `dist/index.html` exists after build
- Check Render logs for build completion

**404 errors**:
- Ensure "Publish Directory" is `dist` (not `build`)
- Add rewrite rules in `render.yaml`

**Assets not loading**:
- Check asset paths (use relative paths)
- Verify `vite.config.js` base URL

### Performance Issues

**Slow initial load**:
- Enable code splitting (already configured in vite.config)
- Optimize images (use WebP format)
- Lazy load components

**Slow navigation**:
- Check network tab for large assets
- Implement route-based code splitting

## Render Free Tier Limits

- **Static Sites**: Unlimited (100GB bandwidth/month)
- **Web Services**: 750 hours/month
- **Databases**: PostgreSQL 1GB storage
- **Builds**: Shared build resources

## Upgrading for Production

Consider upgrading when:
- Traffic exceeds 100GB/month
- Need faster builds
- Require dedicated resources

**Render Pricing**:
- Static Sites: Free → $7/month (custom domain, CDN)
- Web Services: Free → $7/month (always-on, auto-scaling)

## Next Steps After Deployment

1. **Test thoroughly** on live site
2. **Set up domain** (if not using .onrender.com)
3. **Configure analytics**
4. **Add Stripe payment** integration
5. **Implement user authentication** (Auth0, Supabase)
6. **Set up email** notifications (SendGrid, Mailgun)
7. **Monitor performance** (Lighthouse, GTmetrix)

## Support

- **Render Docs**: https://render.com/docs
- **Community**: https://community.render.com
- **Status**: https://status.render.com

---

Your site should now be live at `https://your-site.onrender.com` 🚀
