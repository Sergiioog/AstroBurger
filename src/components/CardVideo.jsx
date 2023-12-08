import React from 'react';

const CardVideo = (props) => {
   
    const { titulo, urlFoto,alt } = props;

    return (
        <div className="w-[35vw] h-[35vh] m-10 relative">
           <figure className="w-full h-full object-cover flex justify-center items-center">
                <img src={urlFoto} alt={alt} className='max-w-full max-h-full' />
            </figure>
            <h3 className='flex justify-center items-center text-3xl text-white'>{titulo}</h3>
        </div>
    );
    
}


export default CardVideo;

