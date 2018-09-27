# vue-refresh-the-current-page
> vue 刷新当前页面的一种实现(还有其他的思路...暂时没想到...)
>
> 1. 跳转一个空页面去除include里面的不需要缓存的指定页面
>
> 2. 然后在跳回指定页面的时候 在keep-alive里面添加指定页面到include实现缓存

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
