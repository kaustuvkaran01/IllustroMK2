import React from 'react';
import tachyons from "tachyons";

const Card = (props) => {
const {name,email,id} = props;
return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5'>
    <img alt='Projects' img src={`https://robohash.org/${id}?200x200`} style={{width: "10rem"}} />
    <div style={{paddingLeft:"20%"}}>
        <h2>{name}</h2>
        <p>{email}</p>

    </div>
    </div>

);
}
export default Card;
