module.exports = {
  '*.ts': (stagedFiles) => [
    'npm run type-check',
    `eslint ${stagedFiles.join(' ')}  --max-warnings 0 --fix`,
  ],
}
