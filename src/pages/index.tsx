import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [token, setToken] = useState("")

  const fetchSpot =async () => {
    return axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'b535bd2f0af342d6a82b68b7ed645860'
      }
    })
  }
  const { data, isLoading, isError } = useQuery({queryKey: ["app"], queryFn: fetchSpot,})

  if (isError) return <>Error Loading Page</>
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>

        {
          isLoading ? (<>
            Loading....
          </>) : (
            <>
              {data}
            </>
          )
        }
      </main>
    </>
  )
}
