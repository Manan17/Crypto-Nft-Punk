import React from 'react'
import "./TopComponent.css";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import moreLogo from "../../assets/more.png";
const TopComponent = ({address,image_url}) => {
    return (
        <div className='topcomponent'>
            <img className='topcomponent__image' src="https://i.insider.com/61a7a6965d47cc0018e8ce17?width=600&format=jpeg&auto=webp" />
            <div className='topcomponent__info' >
                <h1 className='topcomponent__infoTitle' >Bored Ape Punk 
                    <span>.#7</span>
                </h1>
                <div className='topcomponent__userInfoContainer'>
                    <img className='topcomponent__userImage' src={image_url} />
                    <div className='topcomponent__userInfoContainerInfo'>
                        <p className='topcomponent__userInfoContainerAddress' >{address}</p>
                        <p className='topcomponent__userInfoContainerUserName'>@mananshah</p>
                    </div>
                </div>                
            </div>
            <div className='topcomponent__socialmedia'>
                <div className='topcomponent__socialmediaImageContainer' >
                    <img className='topcomponent__socialmediaImage' src={instagramLogo} />
                </div>
                <div className='topcomponent__socialmediaImageContainer'>   
                    <img className='topcomponent__socialmediaImage' src={twitterLogo} />
                </div>
                <div className='topcomponent__socialmediaImageContainer'>
                     <img className='topcomponent__socialmediaImage' src={moreLogo} />
                </div>
            </div>
        </div>
    )
}

export default TopComponent
