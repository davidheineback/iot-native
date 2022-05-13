import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'

export enum ValidResponse {
  blob,
  json,
}

function useFetch(url: string, type: ValidResponse = ValidResponse.json) {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getImage = React.useCallback(async () => {
    setLoading(true)
    setData(null)
    setError(null)
    try {
      const res = await fetch(url)
      let obj: any = {}

      if (type === ValidResponse.blob) {
        let blob = await res.blob()
        blob = new Blob([blob], {
          type: 'text/vtt; charset=utf-8',
        })
        const fileReader = new FileReader()
        fileReader.readAsDataURL(blob)
        fileReader.onload = () => {
          setData(fileReader.result)
        }
      } else {
        obj = await res.json()
        setData(obj)
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Failed fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getImage()
  }, [getImage])

  return { data, loading, error, getImage }
}

export default useFetch
