import picocolors from 'picocolors'
import { loadTemplate } from '../../utils/loadTemplate'
import { logger } from '../../utils/logger'
import { Command } from 'commander'
import prompts from 'prompts';

export function create(program: Command) {
  return program
    .createCommand('create')
    .description('create')
    .arguments('<name>')
    .option('-t, --template <template>', 'project template')
    .action(async (name, {template}) => {

      const isRemoteRes = await prompts({
        type: 'toggle',
        name: 'isRemote',
        message: '是否使用远程模板?',
      })

      if(!isRemoteRes.isRemote) {
        if (!template) {
          const templateRes = await prompts({
            type: 'select',
            name: 'template',
            message: '请选择一个模板：',
            choices: [
              { title: 'React', value: 'react' },
              { title: 'React-typescript', value: 'react-ts' },
              { title: 'Vue', value: 'vue' },
              { title: 'Vue-typescript', value: 'vue-ts' },
              { title: 'Vanilla', value: 'vanilla' },
              { title: 'Vanilla-typescript', value: 'vanilla-ts' }
            ]
          })
          template = templateRes.template;
        }
        logger.info(picocolors
          .bgCyan(`create project ${name}, ${template}`));

      }
      loadTemplate({
        projectName: name,
        templateName: template,
        local: !isRemoteRes.isRemote
      });
    })
}
