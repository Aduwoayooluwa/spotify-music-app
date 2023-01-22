import React from 'react'

type Props = {
    children?: React.ReactNode
}

const Sectional = (props: Props) => {
    return (
        <div className='overflow overflow-x-scroll w-fit flex h-[300px] p-10'>{
            props.children
        }</div>
    )
}

export default Sectional
