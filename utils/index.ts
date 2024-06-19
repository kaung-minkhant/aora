interface TErrorData {
  type?: string;
  data?: any;
}
export interface TCustomError extends Error {
  data?: TErrorData;
}
export function throwErrorWithData(message: string, data: TErrorData) {
  const error: TCustomError = new Error(message)
  error.data = data
  throw error;
}