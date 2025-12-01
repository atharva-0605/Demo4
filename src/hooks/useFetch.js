import React, { useState, useEffect } from "react"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) {
      setData(null)
      setLoading(false)
      return
    }

    const abortController = new AbortController()
    const signal = abortController.signal
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(url)
        const result = await response.json()
        if (!signal.aborted) {
          setData(result)
          setError(null)
        }} 

      catch (err) {
        if (!signal.aborted) {
          setError('Failed to Fetch')
          setData(null)
        }} 

      finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }}
    fetchData()
  }, [url])
  return { data, loading, error }
}

export default useFetch
