import React from 'react'

const Navigation = () => {
    return (
        <nav className='grid grid-col place-content-center'>
            <section className='flex w-full md:w-[800px] justify-between bg-[#3f3046] py-3 px-10'>
                <p className='font-medium text-lg'> Spotify </p>

                <div>
                    <select className='fonr-normal text-lg'>
                        <option>Encryption</option>
                        <option>Account</option>
                        <option>Profile</option>
                        <option>Private Session</option>
                        <option>Settings</option>
                    </select>
                </div>
            </section>
        </nav>
    )
}

export default Navigation
