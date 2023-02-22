import React from 'react'
import '../App.css'
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail({ detail }) {
    return (
        <div className='productItem'>
            <div>
                <img alt="product" src={detail.url} Style="height: 150px"/>
            </div>
            <div className='productDetailWrapper'>
                <h2>{detail.title} <Chip label={detail.type} /></h2>


                <Rating name="read-only" value={detail.rating} readOnly />
                <p className='color'>{detail.description}</p>
                <h3><CurrencyRupeeIcon />{detail.price}</h3>

            </div>
            <div className='productIconWrapper'>
                <div>
                    <FavoriteBorderIcon />&emsp;
                
                    <ShareIcon />&emsp;
                
                    <ShoppingCartIcon />&emsp;
                </div>
            </div>
        </div>
    )
}

export default ProductDetail