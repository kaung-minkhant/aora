interface ICustomeError extends Error {
  data?: any;
}
export function throwErrorWithData(message: string, data: any) {
  const error: ICustomeError = new Error(message)
  error.data = data
  throw error;
}