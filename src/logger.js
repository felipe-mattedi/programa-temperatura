import pino from 'pino';

const logger = pino({
  prettyPrint: {
    levelFirst: true,
    colorize: true,
  },
});

export default logger;
