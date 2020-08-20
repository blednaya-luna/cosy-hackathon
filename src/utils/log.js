export const LOG_TYPE = {
  default: 'default',
  warn: 'warn',
  error: 'error',
  info: 'info',
};

export const log = (output, type = LOG_TYPE.default) => {
  switch (type) {
    case LOG_TYPE.error:
      return console.error(
        '%c Error ',
        'color: white; background-color: red',
        output,
      );
    case LOG_TYPE.warn:
      return console.warn(
        '%c Warn ',
        'color: white; background-color: yellow',
        output,
      );
    case LOG_TYPE.info:
      return console.info(
        '%c Info ',
        'color: white; background-color: blue',
        output,
      );
    default:
      return console.log(
        '%c Log ',
        'color: white; background-color: black',
        output,
      );
  }
};
