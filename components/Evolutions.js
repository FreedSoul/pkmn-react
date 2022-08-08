import useSWR from "swr"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import PrintPkmn from "./PrintPkmn"

const fetcher = (url) => {
  console.log(url)
  return fetch(url).then((res) => res.json())
}

export default function Evolutions(name, url, condition) {
  const { data, error } = useSWR(condition?`${url}${name}`:null, fetcher)

  return {
    urlimg: data?.sprites.front_default,
    isLoading: !error && !data,
    isError: error,
  }
}
