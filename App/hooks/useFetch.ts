import { useState, useEffect } from 'react'
import { Alert } from 'react-native'

export enum ValidResponse {
  blob,
  json,
}

function useFetch(url: string, type: ValidResponse = ValidResponse.json) {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    const getImage = async () => {
      try {
        const res = await fetch(url)
        let obj = {}
        if (type === ValidResponse.blob) {
          const blob = await res.blob()
          obj = URL.createObjectURL(blob)
        } else {
          obj = await res.json()
        }
        setData(obj)
      } catch (error) {
        console.log(error)
        Alert.alert('Error', 'Failed fetch')
      } finally {
        setLoading(false)
      }
    }

    getImage()
  }, [url])

  return { data, loading, error }
}

export default useFetch
