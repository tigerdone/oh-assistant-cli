
// import { create } from './commands/base/create';
// import { serve } from './commands/base/serve';
// import { build } from './commands/base/build';
// import { greet } from './commands/base/greet';
// import { program } from 'commander';
// import { info } from './commands/base/info';

// // export const run = (argv: string[]) => {
// //   const [,, ...runArgs] = argv;
// //   const [command, ...commandArgs] = runArgs;
// //   switch (command) {
// //     case 'create':
// //       create(commandArgs);
// //       break;
// //     case 'serve':
// //       serve(commandArgs);
// //       break;
// //     case 'build':
// //       build(commandArgs);
// //       break;
// //   }


// //   console.log(runArgs)
// // }

// program.version('0.0.1').name('oh-assistant');

// program.command('create').description('创建项目').action(create);
// program.command('serve').description('启动服务').action(serve);
// program.command('build').description('打包项目').action(build);
// program.command('greet').description('欢迎你').action(greet);
// program.command('info').description('信息').action(info);


// export const run = (argv: string[]) => {
//   program.parse(argv);

//   // const [,, ...runArgs] = argv;
//   // const [command, ...commandArgs] = runArgs;
//   // switch (command) {
//   //   case 'create':
//   //     create(commandArgs);
//   //     break;
//   //   case 'serve':
//   //     serve(commandArgs);
//   //     break;
//   //   case 'build':
//   //     build(commandArgs);
//   //     break;
//   // }
// }

import { program } from 'commander';
import './utils/loadTemplate.ts';
import './commands';

export const run = (argv: string[]) => {
  program.parse(argv);
}
