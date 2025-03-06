import prompts from 'prompts'
import { logger } from '../../utils/logger'
import { Command } from 'commander'


// text
// password
// invisible
// number
// confirm
// list
// toggle
// select
// multiselect
// autocompleteMultiselect
// autocomplete
// date
export function greet(program: Command) {
  return program
    .createCommand('greet')
    .description('greet')
    .action(async () => {
      const nameRes = await prompts({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      })

      const isOpenRes = await prompts({
        type: 'toggle',
        name: 'isOpen',
        message: 'isOpen?',
      })

      const hobbyRes = await prompts({
        type: 'select',
        name: 'hobby',
        message: 'What is your favorite hobby?',
        choices: [
          { title: 'coding', value: 'coding' },
          { title: 'sleeping', value: 'sleeping' },
          { title: 'eating', value: 'eating' }
        ]
      })
      logger.log(`
        Hello ${nameRes.name},
        your favorite hobby is ${hobbyRes.hobby}
        isOpen: ${isOpenRes.isOpen}`)
    })
}
