# :new:vue-health项目开发文档
谷歌健康项目 （基于vue-cli4的智能移动健康项目）

*技术栈采用 vue全家桶+axios+vant*

## 加载项目依赖
```
npm install
```

### 启动编译及热更新
```
npm run serve
or
npm run dev
```

### 编译与打包
```
npm run build
```
## 需求梳理

+ 登录注册
	- [ ] 登录
	- [ ] 注册
	- [ ] 忘记密码
+ 首页
	- [ ] 添加饮食
	- [ ] 添加运动
	- [ ] 自定义食物
	- [ ] 营养金字塔(搁置)
+ 体重记录
	- [ ] 7天/30天/全部记录及折线图展示
+ 推荐饮食
	- [ ] 膳食结构(金字塔图片)
	- [ ] 食谱推荐(早餐、午餐、晚餐)
+ 我的

## api相关(详细查看文档)

约定:

1. 默认权限为需要登录
2. 返回统一为 json 数据，格式为:{code:xxx,message:xxx,result:xxx,data:xxx}
3. code 为 200，表示请求成功，其他表示异常
4. 当 code 不是 200 时，message 中应说明原因
5. 登录后，所有模版都需要的数据:

## 项目日志

+ 2020.3.6 采用uni-app开发环节不顺利，正式启动项目重构工作。
+ 2020.3.7 完成项目搭建，依赖等，完成部分页面迁移工作。