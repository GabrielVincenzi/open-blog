import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
                <div className='lg:px-4 md:px-2 px-20'>
                    <h3 className="text-xl font-bold mb-4">Open Ball</h3>
                    <p className='text-xs'>Complesso non significa incomprensibile. Facciamo un po' di chiarezza con ciò che la politica più disprezza, la buona informazione.</p>
                </div>
                <div className='lg:px-4 md:px-2 px-20'>
                    <h3 className="text-xl font-bold mb-4">Contatti</h3>
                    <p className='text-xs'>Qualche contatto utile, giusto per non farmi mancare una box nel footer.</p>
                    <div className='flex pt-4 pb-2'>
                        <MdOutlineMail className='h-4 w-4 inline mr-2 text-teal-500' />
                        <p className='text-xs'>gabriel.vincenzi01@gmail.com</p>
                    </div>
                    <div className='flex py-2'>
                        <FaInstagram className='h-4 w-4 inline mr-2 text-teal-500' />
                        <p className='text-xs'>GabrielVinz01</p>
                    </div>
                    <div className='flex py-2'>
                        <FaLinkedin className='h-4 w-4 inline mr-2 text-teal-500' />
                        <p className='text-xs'>Gabriel Vincenzi</p>
                    </div>
                </div>
                <div className='lg:px-4 md:px-2 px-20'>
                    <h3 className="text-xl font-bold mb-4">Social Media</h3>
                    <p className='text-xs'>Se ciò che vuoi è iniziare ad informare e informarti scrivendo delle tue passioni hai molti modi per raggiungermi, non ci sono scuse. </p>
                    <div className="flex mt-2 pt-4 space-x-8">
                        <FaInstagram className="text-white mr-2" size={30} />
                        <FaLinkedin className="text-white mr-2" size={30} />
                        <FaTwitter className="text-white" size={30} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;