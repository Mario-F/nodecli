#!/usr/bin/env node
import yargs from 'yargs/yargs'
import i18n from 'i18n'
import path from 'path'

i18n.configure({
  locales: ['en', 'de'],
  directory: path.join(__dirname, '/../locales'),
})
const useLocale = process.env.LOCALE || 'en'
if (i18n.getLocales().indexOf(useLocale) !== -1) {
  i18n.setLocale(useLocale)
}

export default function main(): void {
  yargs(process.argv.slice(2)).commandDir('./cmds').demandCommand().help().completion().strict().argv
}

// default execute main program
main()
