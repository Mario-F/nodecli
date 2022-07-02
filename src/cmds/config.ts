import i18n from 'i18n'

export const command = 'config <command>'
export const description = i18n.__('Configs provides commands to handle your user config')
export const builder = function (yargs: { commandDir: (arg0: string) => void }): void {
  yargs.commandDir('config_cmds')
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const handler = (): void => {}
