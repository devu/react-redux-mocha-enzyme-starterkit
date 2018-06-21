export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }

  const error = {
    statusCode: response.status,
    statusText: response.statusText,
    response: response.json()
  }

  throw error
}

export const fetchLib = async (url, options) => {
  const result = await fetch(url, options)

  return checkStatus(result)
}
