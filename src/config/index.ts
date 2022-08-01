import Conf from 'conf'

export const config = new Conf({
  projectName: process.env.PROJECT_NAME,
  projectVersion: process.env.PROJECT_VERSION,
  configName: process.env.NODE_ENV,
})
