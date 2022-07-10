import i18n from 'i18n'
import { config } from '../config'

export const command = 'hello'
export const desc = 'Greet with a hello world'
export const builder = {}
export const handler = function (): void {
  // eslint-disable-next-line no-console
  console.log(i18n.__('Hello world!'))
  const additionalText = config.get('hello')
  if (!additionalText) {
    // eslint-disable-next-line no-console
    console.log(i18n.__('No additional text configured, use command config set hello "your text here"'))
    return
  }
  // eslint-disable-next-line no-console
  console.log(additionalText)
}
