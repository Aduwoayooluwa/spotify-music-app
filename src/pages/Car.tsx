import Sectional from '@/components/Sectional'
import React from 'react'

type Props = {}
const items = [
    {
        name: 'elloew',
        id: 1
    },
    {
        name: 'elloew',
        id: 2
    },
    {
        name: 'elloew',
        id: 2
    },
    {
        name: 'elloew',
        id: 4
    },
    {
        name: 'elloew',
        id: 5
    },
    {
        name: 'elloew',
        id: 6
    }
]
const Car = (props: Props) => {
    return (
        <main className='w-[200px] bg-red-600'>
            <Sectional>
            {
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </Sectional>
        </main>

    )
}

export default Car
