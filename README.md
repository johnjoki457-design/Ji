# Murrel Fish Videos 🐟

A dedicated video and aquaculture hub for **Murrel** (*Channa striata* / Snakehead / Korrameenu / Viral meen).

---

## Why didn't the original video open on GitHub?

There are two common reasons:

### 1. The YouTube `<iframe>` link was blocked
In standard HTML:
- ❌ **Broken:** `<iframe src="https://youtu.be/s3YFytpSuFQ">`
  - YouTube explicitly blocks `youtu.be` links inside `<iframe>` tags using `X-Frame-Options: SAMEORIGIN` / CSP.
- ✅ **Fixed:** `<iframe src="https://www.youtube.com/embed/s3YFytpSuFQ">`
  - You must use the official `/embed/` endpoint for the video to play.

### 2. GitHub shows code instead of running websites
GitHub repositories display file contents by default. To view the page as a live website, you need to enable **GitHub Pages**.

---

## Option A: Run the Standalone Single-File HTML

If you want a single file without any build step:
1. Open [`murrel-videos-github.html`](./murrel-videos-github.html)
2. Use this file as your `index.html` in your repository root.
3. Turn on **GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select branch `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.

---

## Option B: Deploy the Full React App via GitHub Pages

We have included `.github/workflows/deploy.yml`:
1. Push this repository to GitHub.
2. In your repo, go to **Settings** > **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The site will automatically build and deploy within 60 seconds!
