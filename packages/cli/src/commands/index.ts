import { build } from "./base/build";
import { create } from "./base/create";
import { greet } from "./base/greet";
import { info } from "./base/info";
import { preview } from "./base/preview";
import { serve } from "./base/serve";
import { registerCommand } from "./registerCommand";


// vue.ues(vueRouter)
// babel 插件

/**
 * 注册命令
 */

registerCommand(build)
registerCommand(create)
registerCommand(greet)
registerCommand(info)
registerCommand(serve)
registerCommand(preview)
