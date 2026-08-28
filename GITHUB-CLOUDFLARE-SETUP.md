# Deploy from the Cloudflare dashboard with GitHub

This source package is preconfigured for the existing Cloudflare Worker: `proud-bird-cd98`.

1. Create a new private GitHub repository, for example `meraya-dance`.
2. Upload the contents of this folder to that repository and commit them to the `main` branch.
3. In Cloudflare, open **Workers & Pages** and select **proud-bird-cd98**.
4. Open **Settings** → **Builds** and select **Connect**.
5. Choose GitHub, authorize Cloudflare, then select the `meraya-dance` repository and the `main` branch.
6. Use these build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Production branch: `main`
7. Save and deploy. Future pushes to `main` will redeploy the site automatically.

The project’s `wrangler.json` already targets `proud-bird-cd98`, so the existing `merayadance.com` domain remains attached to the same Worker.
