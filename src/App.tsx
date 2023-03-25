/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import './App.css'
import React from 'react'
import { usePolling } from './hooks/usePolling'

function App (): JSX.Element {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const pollingInterval = 15000 // 15 seconds in milliseconds

  const response = usePolling(url, pollingInterval)
  if (response == null) {
    return <p>Loading...</p>
  }

  if (response.error) {
    return <p>Error: {response.error.message}</p>
  }

  return (
    <div>
      <p>Status: {response.status.toString()}</p>
      <p>Data: {JSON.stringify(response.data)}</p>
    </div>
  )
}

export default App
