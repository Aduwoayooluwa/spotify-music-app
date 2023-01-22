import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type Props = {}

const Testing = (props: Props) => {
    const [_token, setToken] = React.useState<string | null>("")

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


    console.log(_token)
    const fetchSpot =async () => {
            return axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${_token}`
            }
            })
        }
    const { data, isLoading, isError } = useQuery({queryKey: ["app"], queryFn: fetchSpot, retry: 2})
    if (isError) return <>Error Loading Page</>
    return (
        <div>
            {
            isLoading ? (<>
                Loading....
            </>) : (
                <>
                {data.map((data: any) => (
                    <>
                        {data.display_name}
                    </>
                ))}
                </>
            )
        }
    </div>
  )
}

export default Testing
