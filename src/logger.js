import pino from "pino";

export const logger = pino({
  prettyPrint: {
    levelFirst: true,
    colorize: true
  }
});