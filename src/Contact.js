import React from 'react';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div className='bg-dark text-wheat'>
            <div className='flex text-5xl justify-center pt-28'>
                <FontAwesomeIcon icon={faLocationDot} className='mr-10 flex self-center'/>
                <p>320 rue des Pyrénées <br /> 75020 Paris <br /> Métro Jourdain</p>
            </div>
            <div className='flex text-5xl justify-center my-36'>
                <FontAwesomeIcon icon={faClock}  className='mr-10 flex self-center'/>
                <p className='text-4xl'>OUVERT TOUS LES JOURS ! <br /> De 9h00 à 2H00</p>
            </div>
            <div className='flex text-5xl justify-center pb-24'>
                <FontAwesomeIcon icon={faPhone}  className='mr-10 flex self-center'/>
                <p>Tel: 09 83 23 39 14</p>
            </div>
        </div>
    );
};

export default Contact;