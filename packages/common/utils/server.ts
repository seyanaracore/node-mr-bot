import { AxiosError as AError, isAxiosError } from 'axios'

export const handleServerResponse = <T>(resp: T) => ({ response: resp, error: null })

function createError<T>(error: AError): ServerReturnType<null, T> {
  const { code, status, response } = error

  const normalizedError = {
    code,
    status: response?.status ?? status,
    data: response?.data,
    originalError: error,
  } as T

  return { response: null, error: normalizedError as T }
}

function isProcessedError(error: Error): error is AError {
  return 'originalError' in error && 'code' in error
}

export function handleServerError<T extends ResponseError = ResponseError>(
  error: Error,
): ServerReturnType<null, T | AxiosError> {
  /** если ошибка уже была обработана контроллером */
  if (isProcessedError(error)) {
    return {
      response: null,
      // @ts-expect-error ошибка возникает из-за неправильной интерпритации
      error: error as T,
    }
  }

  if (!isAxiosError<T>(error)) {
    console.error('В handleServerError попала не axios ошибка', error)

    throw error
  }

  if (error.code === AError.ECONNABORTED || error.code === AError.ETIMEDOUT) {
    return createError<AxiosError>(error)
  }

  return createError<T>(error)
}

export type ServerReturnType<R, E> = {
  response: R
  error: E
}

export type AxiosError = {
  code: (typeof AError)['ECONNABORTED'] | (typeof AError)['ETIMEDOUT']
  status?: never
  /** ответ сервера */
  data: undefined
  /** оригинал ошибки */
  originalError: Error
}

export type ResponseError<S = number, R = unknown> = {
  code: (typeof AError)['ERR_BAD_REQUEST']
  status: S
  /** ответ сервера */
  data: R
  /** оригинал ошибки */
  originalError: unknown
}

export type ServerError = ReturnType<typeof handleServerError<ResponseError>>['error']
