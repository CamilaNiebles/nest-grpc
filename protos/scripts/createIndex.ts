const fsAsync = require('fs/promises')
const fs = require('fs')
const path = require('path')

const FOLDERS_EXCLUDED = ['node_modules', 'src', '.husky']

async function createIndexFiles() {
  const directories = await getDirectories(FOLDERS_EXCLUDED)
  await createFiles(directories)
  return 'INDEX FILES CREATED'
}

async function createFiles(directories) {
  let contentSrc = ''
  const srcPath = path.join(__dirname, '..', `${process.env.PACKAGE_NAME}/src`)
  directories.forEach(async (dir) => {
    contentSrc = `${contentSrc} export * from './${dir}' \n`
    let content = ''
    const files = await getFiles(dir)
    files.forEach((file) => {
      const { name } = file
      content = `${content} export * from './${name.replace('.ts', '')}' \n`
    })
    fs.writeFile(`${srcPath}/${dir}/index.ts`, content, (err) => {
      console.log(err)
    })
    fs.writeFile(`${srcPath}/index.ts`, contentSrc, (err) => {
      console.log(err)
    })
  })
}

async function getFiles(dir) {
  const dirPath = path.join(
    __dirname,
    '..',
    `${process.env.PACKAGE_NAME}/src/${dir}`
  )
  return fsAsync.readdir(dirPath, { withFileTypes: true })
}

async function getDirectories(searchPath) {
  const packagePath = searchPath
    ? path.join(__dirname, '..', process.env.PACKAGE_NAME, searchPath)
    : path.join(__dirname, '..', process.env.PACKAGE_NAME)
  const folders = await fsAsync.readdir(packagePath, { withFileTypes: true })
  return folders
    .filter((e) => e.isDirectory())
    .map((dirent) => dirent.name)
    .filter((dir) => !FOLDERS_EXCLUDED.includes(dir))
}

createIndexFiles().then((response) => console.log({ response }))
