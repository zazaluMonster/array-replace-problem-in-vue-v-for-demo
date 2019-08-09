# demo项目复现问题流程

1. git clone 或者 下载zip

2. 在项目根目录下执行`npm install`

3. 执行`npm run serve`

4. 点击首页的`change fatherItems by concat`按钮

然后问题发生, 在children.vue中的v-for
```
<p v-for="item in childItems" :key="item.id">{{item.content}}</p>
```

不会主动刷新, 即使childItems已经更新(使用模板语法`{{childItems}}`事先窥探了数据是否更新)