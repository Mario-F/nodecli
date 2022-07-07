import i18n from 'i18n'
import { config } from '../../config'

type ConfigDeleteArguments = {
  configname: string
  configvalue: string
}

export const command = 'delete <configname>'
export const desc = i18n.__('Delete a single configuration parameter')
export const builder = {}
export const handler = function (argv: ConfigDeleteArguments): void {
  config.delete(argv.configname)
}
