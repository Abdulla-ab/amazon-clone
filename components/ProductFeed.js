import React from 'react'

function ProductFeed({products}) {
  return (
    <div className='relative'>
        {products?.map(product => (
            <><p>{product.id}</p><p className='text-black'>{product.title}</p></>
        ))}
    </div>
  )
}

export default ProductFeed;
