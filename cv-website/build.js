const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const rootDir = __dirname;
const sourceData = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'data', 'siteData.json'), 'utf8')
);
const distDir = path.resolve(rootDir, '..', 'docs');

const emptyDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      emptyDirectory(entryPath);
      fs.rmSync(entryPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(entryPath);
    }
  }
};

emptyDirectory(distDir);

const copyDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDir(path.join(rootDir, 'public'), path.join(distDir, 'public'));

const pages = [
  { file: 'index.html', view: 'landing' },
  { file: 'portfolio.html', view: 'portfolio' }
];

for (const page of pages) {
  const templatePath = path.join(rootDir, 'views', `${page.view}.ejs`);
  const template = fs.readFileSync(templatePath, 'utf8');
  const html = ejs.render(template, { siteData: sourceData });
  fs.writeFileSync(path.join(distDir, page.file), html);
}

console.log(`Static site generated in ${distDir}`);
