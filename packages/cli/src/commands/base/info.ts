// ESM

import { logger } from '../../utils/logger'
// import pc from 'picocolors'
// import pkg from '../../../package.json'
import { Command } from 'commander'

export function info(program: Command) {
  // 打印日志
  // 颜色控制
  // 提问
  return program
    .createCommand('info')
    .description('info')
    .action(() => {
      logger.info('Usage')
      logger.info('111  $ tigerdone-cli-v1 <command>')
      logger.info('')
      logger.info('Available commands')
      logger.info('  create, serve, build, greet, info, preview')
      logger.info('')
      logger.info('Options')
      logger.info('  --version, -v   Version number')
      logger.info('  --help, -h      Displays this message')
      logger.info('')
      logger.info('For more information run a command with the --help flag')
      logger.info('  $ tigerdone-cli-v1 build --help')
      logger.info('')
      logger.info('Version:')
      // logger.log(pc.green(`v${pkg.version}`))
    })
}
