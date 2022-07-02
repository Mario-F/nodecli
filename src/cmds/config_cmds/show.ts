import i18n from 'i18n'
import { config } from '../../config'

export const command = 'show'
export const desc = i18n.__('Shows the current config including metadata')
export const builder = {}
export const handler = function (): void {
  const result = `
Config file: ${config.path}
Config content: ${JSON.stringify(config.store, null, 2)}
  `
  // eslint-disable-next-line no-console
  console.log(result)
}
