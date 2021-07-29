# blog

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Vue3 安装tailwind

```bash
vue add tailwind
```

如果报错

```bash
Syntax Error: Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

解决办法（先卸载 再安装）

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```



在main.ts中引入assets文件夹生成的tailwind.css

```
import "./assets/tailwind.css"
```



