#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')
const commander = require('commander')
const packageJson = require('./package.json')

const endWithError = err => {
  console.error('\n' + err)
  process.exit(1)
}

const createApp = () => {
  let appDir

  const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('<project-directory>')
    .usage(`<project-directory>`)
    .action(name => (appDir = name))
    .parse(process.argv)

  if (!appDir) endWithError('Specify app directory')

  appDir = path.resolve(appDir)

  if (fs.existsSync(appDir)) endWithError('Directory already exists')

  console.log(`\nCreating a new Gnarly app in ${appDir}.\n`)
  fs.mkdirSync(appDir)

  const appName = path.basename(appDir)
  const appPackageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
  }

  fs.writeFileSync(
    path.join(appDir, 'package.json'),
    JSON.stringify(appPackageJson, null, 2) + '\n',
  )

  process.chdir(appDir)

  const depName = '@gnarlycode/react-app-tools'

  const args = ['install', '--save', depName]

  const proc = spawn.sync('npm', args, { stdio: 'inherit' })

  if (proc.status !== 0) endWithError(`Error while installing ${depName}`)

  const initPath = path.resolve(
    process.cwd(),
    'node_modules',
    depName,
    'bin',
    'init.js',
  )

  require(initPath)
}

createApp()
