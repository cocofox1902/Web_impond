import React from 'react';

const Reservation = () => {
    return (
        <div className='h-screen'>
            <div>
                <img src="PHOTO-1.jpg" alt="photo_bar" className='-z-50 absolute h-screen w-screen' />
            </div>
            <div className='bg-zinc-900 text-white w-1/2 h-4/5 text-center pt-20'>
                <p className='text-6xl text-left px-10 font-semibold'>Dans une ambiance conviviale du 20 découvrez nos vins, cocktails, tapas, burgers & plats ...</p>
                <div className='flex justify-center'>
                    <img src="COUTEAU.png" alt="couteau" className='w-3/4' />
                </div>
                <button className='mx-7 mb-5 px-10 text-3xl border-2 border-blue-500 rounded-full bg-blue-500 hover:bg-zinc-900 text-white transition duration-300'>RESERVER</button>
                <p className='text-blue-500 text-3xl font-semibold'>Tel: 09 83 23 39 14</p>
            </div>
        </div>
    );
};

export default Reservation;