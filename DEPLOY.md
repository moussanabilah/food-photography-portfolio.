# Deploying the portfolio

## 1. Put the project on GitHub

### Option A: in the browser (no tools needed)
1. Go to https://github.com/new.
2. Name the repository, for example `portfolio`. Set it to Public. Click Create repository.
3. On the new repository page, click "uploading an existing file".
4. Unzip the ZIP on your computer. Open the unzipped folder.
5. Select everything inside the folder (`index.html`, `css`, `js`, `images`, `vercel.json`, `README.md`, `DEPLOY.md`, `.gitignore`) and drag it into the GitHub page. Drag the folders themselves so the structure is kept.
6. Click Commit changes.

`index.html` must sit at the top level of the repository, not inside another folder.

### Option B: with Git
```
cd path/to/unzipped-folder
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/moussanabilah/portfolio.git
git push -u origin main
```

## 2. Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub.
2. Click Add New → Project.
3. Import the `portfolio` repository.
4. Leave the settings as they are: Framework Preset "Other", no build command, no output directory.
5. Click Deploy. In under a minute you get a link like `portfolio-xxxx.vercel.app`.

Every later push to the `main` branch redeploys the site automatically.

## 3. Optional: use a free GitHub address instead
In the repository go to Settings → Pages, choose the `main` branch and the root folder, and save. The site goes live at `https://moussanabilah.github.io/portfolio/`.

## Troubleshooting
- Images missing: the `images` folder must be uploaded with the same file names.
- 404 on Vercel: `index.html` is probably inside a subfolder. Move it to the top level.
- Changes not showing: hard refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac).
