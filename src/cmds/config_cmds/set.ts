import i18n from 'i18n'
import { config } from '../../config'

type ConfigSetArguments = {
  configname: string
  configvalue: string
}

export const command = 'set <configname> <configvalue>'
export const desc = i18n.__('Set a single configuration parameter')
export const builder = {}
export const handler = function (argv: ConfigSetArguments): void {
  config.set(argv.configname, argv.configvalue)
}
