import { Homework } from "@/types"
import { useEffect, useState } from "react"
import { fetcher } from "./helpers"

const BASE_URL = import.meta.env.DEV ? "http://localhost:3000" : "https://mashgh-api.liara.run"

async function newHomework(data) {
  const hw = new Homework(data)
  const fetchConfig = {
    method: "POST",
    body: JSON.stringify(hw),
    headers: { "Content-Type": "application/json" },
  }
  const result = await fetch(fetchConfig)(`${BASE_URL}/homework`)

  return result
}

const getAllHomework = async () => await fetcher()(`${BASE_URL}/homework`)

function useGetAllHomework(defaultValue = null) {
  const [homework, setHomework] = useState(defaultValue)

  useEffect(() => {
    getAllHomework()
      .then(data => setHomework(data))
      .catch(console.err)
  }, [])

  return [homework, setHomework]
}

export { useGetAllHomework, getAllHomework, newHomework }
