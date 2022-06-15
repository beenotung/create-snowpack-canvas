#!/usr/bin/env node

import { copyTemplate, getDest } from 'npm-init-helper'
import { join } from 'path'

async function main() {
  let dest = await getDest()
  let srcDir = join(__dirname, 'template')
  console.log('Copying snowpack-canvas template to:', dest, '...')
  copyTemplate({ srcDir, dest, updatePackageJson: false })
  console.log(
    `
Done.
Inside that directory, you can run several commands:

  npm start
    Starts the auto-refresh development server.

  npm run build
    Builds the web project into 'build' folder.


Get started by typing:

  cd ${dest}
  pnpm i
  npm start


Installation Alternatives:

  pnpm i
  or
  yarn install
  or
  npm install
`.trim(),
  )
}

main().catch(e => console.error(e))
