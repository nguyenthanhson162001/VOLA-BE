
import winston, { transports } from 'winston';
const { combine, timestamp, printf , colorize, simple, errors, json} = winston.format;
const format = winston.format;
import util from 'util';
const logFormat = format.printf(({ level, message,  timestamp }) => {
  if(typeof message ==='object'){
    return `${timestamp} ${level}: ${util.inspect(message  , { colors: true})} `;
  }
    return `${timestamp} ${level}: ${message} `;
});

const logger = winston.createLogger({
     level: 'info',
});
if (process.env.NODE_ENV === 'production') {
  var fomatcombie = combine(
    format.timestamp({format:'HH:mm:ss'}),
    json()
  )
  const consoleTransport = new transports.File({ filename: 'combined.log', format:fomatcombie })
  logger.add(consoleTransport);
}else{
  // developer
  const consoleTransport = new transports.Console({
    format: format.combine(
        format.colorize(),
        format.simple(),
        format.timestamp({format:'HH:mm:ss'}),
        format.errors({stack:true}),
        logFormat
    ),
});
logger.add(consoleTransport);
}
export default logger;
