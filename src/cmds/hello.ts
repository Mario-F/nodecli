import i18n from 'i18n'

export const command = 'hello'
export const desc = 'Greet with a hello world'
export const builder = {}
export const handler = function (): void {
  // eslint-disable-next-line no-console
  console.log(i18n.__('Hello world!'))
}
