import { spawn } from 'child_process';
import { logger } from '../../utils/logger'
import { Command } from 'commander'

export function build(program: Command) {
  return program
    .createCommand('build')
    .description('构建项目')
    .action(() => {
      logger.log('build')


      const command = 'npm';
      const params = ['run', 'build'];

      const child = spawn(command, params, {
        stdio: 'inherit'
      });
      child.on('close', (code) => {
        logger.log(`child process exited with code ${code}`)
      })
    })
}
