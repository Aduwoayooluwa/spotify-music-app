import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type Props = {}

const Testing = (props: Props) => {
    const [token, setToken] = React.useState<string | null>("")
    const [userData, setUserData] = React.useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token: string | undefined | null = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash?.substring(1)?.split("&")?.find(elem => elem?.startsWith("access_token"))?.split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token!)
        }

        setToken(token!)

}, [])


    console.log('token', token)
    const fetchSpot =async () => {
            return axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
        }

    const { data, isLoading, isError } = useQuery({queryKey: ["app"], queryFn: fetchSpot, retry: 1})
    console.log(data)

    if (isError) return <>Error Loading Page</>
    return (
        <div>
            {
            isLoading ? (<>
                Loading....
            </>) : (
                <>
                    Hello World Display Name:  {data?.data?.display_name}
                </>
            )
        }
    </div>
  )
}

export default Testing
