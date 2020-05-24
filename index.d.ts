interface KoaSessionAuthConfig {
  useToken?: boolean /** (boolean) use token-session or not (default true) */;
  useCookie?: boolean /** (boolean) use cookie-session or not (default true) */;
  key?: string /** (string) cookie and token key (default is KoaToken) */;
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge?: number;
  autoCommit?: boolean /** (boolean) automatically commit headers (default true) */;
  overwrite?: boolean /** (boolean) can overwrite or not (default true) */;
  httpOnly?: boolean /** (boolean) httpOnly or not (default true) */;
  signed?: boolean /** (boolean) signed or not (default true) */;
  rolling?: boolean /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */;
  renew?: boolean /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/;
}

declare module 'egg' {
  interface EggAppConfig {
    session: KoaSessionAuthConfig;
  }
}
