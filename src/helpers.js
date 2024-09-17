function fetcher(config) {
  return async url => {
    const res = await fetch(url, config)

    if (res.ok) {
      const data = await res.json()
      return data
    }

    const error = new Error("An error occurred while fetching the data. 🤦🏻‍♂️")
    error.status = res.status
    throw error
  }
}

export { fetcher }
