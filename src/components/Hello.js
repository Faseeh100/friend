import React, { useState } from 'react'

function Hello() {

    const [image, SetImage] = useState(false);
    const [showbutton, SetShowButton] = useState(true);

    const paths = ['/pics/1.jpeg','/pics/fra.jpeg', '/pics/2.jpeg', '/pics/bz.jpeg', '/pics/3.jpeg', '/pics/4.jpeg',
      '/pics/o.jpeg', '/pics/6.jpeg',
       '/pics/8.jpeg', '/pics/9.jpeg', '/pics/10.jpeg', '/pics/11.jpeg',  '/pics/e.jpeg','/pics/swe.jpeg', '/pics/ger.jpeg', '/pics/b.jpeg'];

    const here = () =>{
        SetImage(true);
        SetShowButton(false);
    }



  return (
    <div className='container'>
      <h2>{image ? "Here are the Bilal's Girlfriends 💖" : "Check out Bilal's Girlfriends Click Below 💖" }</h2>
      {!image && (
      <img src="/pics/new.png" alt="Initial" className='first-pic' />
      )}
      {showbutton && <button onClick={here} className='btn'>Click Here</button>}
      {image &&
      <div className='img-container'>
        {paths.map((src,index) => (
            <img 
            key={index}
            src={src}
            alt={`index ${index + 1}`}
            className='stun-img'

            />
        ))}
      </div>
      }
    </div>
  )
}

export default Hello
