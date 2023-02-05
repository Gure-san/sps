import React from 'react'

export function SkeletonMap() {
  return (
    <div className='bg-gray-300 flex items-center justify-center animate-pulse h-80 rounded-md'>
      <p>Loading Map...</p>
    </div>
  )
}
