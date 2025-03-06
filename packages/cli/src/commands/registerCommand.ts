import { program, Command } from 'commander';

type Fn = (p: Command) => Command

/**
 * 基于插件化实现
 */
// 负责插件注册
export function registerCommand(fn: Fn) {
  // 注册命令
  // program.command(command.name).description(command.description).action(command.action)
  program.addCommand(fn(program))
}


// cli 配置文件
/**
 * {
 *    "name": "create",
 *    "description": "创建项目",
 *    "action": () => {}
 * }
 */
