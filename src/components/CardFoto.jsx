import React from 'react';

const CardFoto = (props) => {
   
    const { titulo, urlFoto,alt } = props;

    return (
        <div className="w-[40vw] h-[20vh] sm:w-[45vw] sm:h-[25vh] md:w-[50vw] md:h-[30vw] xl:w-[30vw] xl:h-[35vh] m-10 relative">
           <figure className="w-full h-full object-cover flex justify-center items-center">
                <img src={urlFoto} alt={alt} className='max-w-full max-h-full' />
            </figure>
            <h3 className='flex justify-center items-center text-xl
            sm:text-2xl   text-white'>{titulo}</h3>
        </div>
    );
    
}


export default CardFoto;

