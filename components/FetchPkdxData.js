import useSWR from "swr"

const fetcher = (url) => {
  console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function FetchPkdxData(name, url, condition) {
  const { data, error } = useSWR(condition ? `${url}${name}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  // console.log({data})

  return {
    pkdx: data,
    isLoading: !error && !data,
    isError: error,
  }
}
