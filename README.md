# egg-koa-session-auth

该插件基于 [koa-session-auth](https://github.com/GoDotDotDot/koa-session-auth)，同时支持 cookie-session/token-session 模式，对于业务无侵入，能够同时支持保留 web 和 非 web 应用 session 会话。

## 特性

- 支持 [koa-session](https://github.com/koajs/session) 所有特性
- 能够同时使用 token-based/cookie-based sessions 模式

## 如何使用

### 启用插件

要想启用该插件，需要在 `config/plugin.ts` 文件中开启。

```js
session: {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-koa-session-auth')
},
```

### 配置插件

插件默认支持 [koa-session-auth](https://github.com/GoDotDotDot/koa-session-auth) 的所有配置项，请参考 https://github.com/GoDotDotDot/koa-session-auth/blob/master/example.js#L8

如需配置，请在 `config/config.env.ts` 文件中配置，如下所示：

```js
session: {
  key: 'EGG_SESS',
  maxAge: 2 * 3600 * 1000, // 2 小时
  httpOnly: true,
  useToken: true
},
```

## Tips

When you use token-based sessions, please be careful with the key of the config and must be a valid HTTP header name. When you request the resource of server and you want keep sessions, you must be set HTTP header name that same as the key of the sessions config, like:

```javascript
request('http://localhost:3000', {
  headers: {
    KoaToken: 'eyJ2aWV3cyI6MSwiX2V4cGlyZSI', // read from local storage engine,like localStorage
  },
});
```

Cookie-based session, please skip.
