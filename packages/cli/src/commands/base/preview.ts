import { spawn } from 'child_process';
import { logger } from '../../utils/logger'
import { Command } from 'commander'

export function preview(program: Command) {
  return program
    .createCommand('preview')
    .description('构建项目')
    .action(() => {
      logger.log('preview')

      const command = 'npm';
      const params = ['run', 'preview'];

      const child = spawn(command, params, {
        stdio: 'inherit'
      });
      child.on('close', (code) => {
        logger.log(`child process exited with code ${code}`)
      })
    })
}
