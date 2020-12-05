import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.json()
  ),
});

const errorLog = new DailyRotateFile({
  dirname: "logs",
  filename: "api-error-%DATE%.log",
  frequency: "1h",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
  level: "error",
  timestamp: true,
});
logger.add(errorLog);

const fileLog = new DailyRotateFile({
  dirname: "logs",
  filename: "api-log-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
  timestamp: true,
});
logger.add(fileLog);

const consoleLog = new winston.transports.Console({
  level: process.env.LOG_LEVEL,
});
logger.add(consoleLog);

export default logger;
