export default {
  '*.ts': (stagedFiles) => [
    'npm run type-check',
    `eslint ${stagedFiles.join(' ')}  --max-warnings 0 --fix`,
  ],
  '*.{vue,css,scss}': (stagedFiles) => [`stylelint ${stagedFiles.join(' ')} --fix`],
}
