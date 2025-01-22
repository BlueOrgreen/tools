

## pnpm

Pnpm 启用了 workspace，用 Pnpm 安装依赖必须指定安装的位置

`-w` 是 --workspace-root 的别名，即安装到工程根目录，作为所有子模块的公共依赖
`-r` 递归给每个子模块安装
`--filter` <package_name> 给指定子模块安装 

```bash
pnpm add @swc-ui/components @swc-ui/icons --filter docs
pnpm install --filter @swc-ui/components
```

`workspace:^，`这样可以确保依赖的是最新版本代码
当我们用 `pnpm publish` 发包的时候，`Pnpm` 会将 `workspace:^` 替换为实际的版本


```json
{
 "dependencies": {
    "@swc-ui/components": "workspace:^",
    "@swc-ui/icons": "workspace:^",
 }
}
```

限制开发者只能使用 `pnpm`

```json
{
    "script": {
        "preinstall": "npx only-allow pnpm"
    }
}
```


## Turborepo

一个高性能的 JavaScript 和 TypeScript 项目构建系统，非常擅长实现任务编排，可以大大提高monorepo项目的构建速度


### 优势

1. 多任务并行处理

Turbo支持多个任务的并行运行，我们在对多个子包，编译打包的过程中，turbo会同时进行多个任务的处理

2. 更快的增量构建

如果我们的项目过大，构建多个子包会造成时间和性能的浪费，turborepo中的缓存机制 可以帮助我们记住构建内容 并且跳过已经计算过的内容，优化打包效率。

3. 任务管道

用配置文件定义任务之间的关系，然后让Turborepo优化构建内容和时间。

4. 远程云缓存

Turbo通过其远程缓存功能，团队成员、CI/CD 共享远程构建缓存，以实现更快的构建


```bash
pnpm i turbo --save-dev -w
```

