'use strict';

module.exports = function(app) {
  if (!app.config.session.httpOnly) {
    app.logger.warn(
      '[egg-session]: please set `config.session.httpOnly` to true. It is very dangerous if session can read by client JavaScript.',
    );
  }

  // delete egg-session
  const eggSessionIdx = app.config.coreMiddleware.findIndex(
    middleware => middleware === 'session',
  );
  if (eggSessionIdx !== -1) {
    app.config.coreMiddleware.splice(eggSessionIdx, 1);
  }

  // add egg-session-auth
  app.config.coreMiddleware.push('session');

  // listen on session's events
  app.on('session:missed', ({ ctx, key }) => {
    ctx.coreLogger.warn('[session][missed] key(%s)', key);
  });
  app.on('session:expired', ({ ctx, key, value }) => {
    ctx.coreLogger.warn('[session][expired] key(%s) value(%j)', key, value);
  });
  app.on('session:invalid', ({ ctx, key, value }) => {
    ctx.coreLogger.warn('[session][invalid] key(%s) value(%j)', key, value);
  });
};
