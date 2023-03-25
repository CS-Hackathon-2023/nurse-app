import { useState, useEffect } from 'react'
import { type TApiResponse, useApiGet } from './useApiGet'
import { useInterval } from './useInterval'

export const usePolling = (url: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>()

  const { status, statusText, data, error, loading } = useApiGet(url)

  useEffect(() => {
    setResponse({ status, statusText, data, error, loading })
  }, [status, statusText, data, error, loading])

  useInterval(() => {
    // Call the useApiGet hook again to fetch updated data
    const { status, statusText, data, error, loading } = useApiGet(url)
    setResponse({ status, statusText, data, error, loading })
  }, pollingInterval)

  return response
}
