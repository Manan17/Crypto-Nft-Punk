import React from 'react'
import wethlogo from "../../assets/weth.png";
import "./CardComponent.css";
export const CardComponent = ({id,name,image_url,price}) => {
    return (
        <div className='cardcomponent'>
            <img className='cardcomponentImage' src={image_url}/>
            <div className='cardcomponentInfo' >
                <h2 className='cardcomponentTitle'>{name}</h2>
                <p className='cardcomponentPrice'>.# {id}</p>
                <div className='cardcomponentPriceComponent' >
                    <img className='cardcomponentEthLogo' src={wethlogo} />
                    <p className='cardcomponentPriceText'>{price}</p>
                </div>
            </div>
        </div>
    )
}
