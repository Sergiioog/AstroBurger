import React from 'react';

const CardVideo = (props) => {
   
    const { titulo, urlVideo } = props;

    return (
        <div className="w-[30vw] h-[30vh] m-10 relative">
           <video className="w-full h-full object-cover z-0" loop autoPlay muted preload="auto">
                <source src={urlVideo} type='video/mp4' />
            </video>
            <div id="tarj" className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-1">
            <p className="bg-opacity-60 shadow-md backdrop-blur-sm backdrop-filter border border-opacity-20 rounded-md
            text-xl bg-slate-50 h-20 w-56 flex justify-center items-center text-center transform transform-origin-center transition-transform duration-300 ease-in-out hover:scale-105
            hover:cursor-pointer">{titulo}</p>

            </div>
        </div>
    );
}

export default CardVideo;

