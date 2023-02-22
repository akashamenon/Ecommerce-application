import React from 'react'
import ProductDetail from './ProductDetail'

function ProductListing({lists}) {
  return (
    <div>
        {
            lists.map(item => <ProductDetail detail = {item} key = {item.title}/>)
        }
        
    </div>
  )
}

export default ProductListing