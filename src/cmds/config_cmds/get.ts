import i18n from 'i18n'
import stringify from 'json-stringify-safe'
import { config } from '../../config'

type ConfigGetArguments = {
  configname: string
}

export const command = 'get <configname>'
export const desc = i18n.__('Get a single configuration parameter')
export const builder = {}
export const handler = function (argv: ConfigGetArguments): void {
  const result = config.get(argv.configname)
  // eslint-disable-next-line no-console
  console.log(stringify(result))
}
