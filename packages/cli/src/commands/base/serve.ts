import { Command } from 'commander'
import { logger } from '../../utils/logger'
import { spawn } from 'child_process';


export function serve(program: Command) {

  // 启动服务
  return program
    .createCommand('serve')
    .description('启动服务')
    .action(() => {
      logger.log('启动服务')
      const command = 'npm';
      const params = ['run', 'dev'];

      const child = spawn(command, params, {
        stdio: 'inherit'
      });
      child.on('close', (code) => {
        logger.log(`child process exited with code ${code}`)
      })
    })
}
