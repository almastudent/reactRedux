import React from 'react'

const Home = ({wish_data}) => {
  return (
    <div className='flex justify-center p-5'>
      <div className='bg-blue-600'>
        Happy Raksha Bandhan {wish_data}
      </div>
    </div>
  )
}

export default Home
