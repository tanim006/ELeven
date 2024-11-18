import React from 'react';
import '../Banner/Banner.css';
import bannerImg from '../../assets/assets/banner-main.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = ({ handleCoin }) => {
    // Toast notification function
    const notify = () => toast("Rewards Claim Successful");

    // Function to handle both actions: updating coins and showing the toast
    const handleClick = () => {
        handleCoin();  // Update the coin state
        notify();      // Show the notification
    };

    return (
        <div>
            <div className='bg-img p-20 space-y-7 flex flex-col justify-center items-center mt-5'>
                <img src={bannerImg} alt="Banner" />
                <h2 className='text-5xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-white text-2xl'>Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#E7FE29]" onClick={handleClick}>Claim Free Credit</button>
            </div>

            {/* Toast container for displaying notifications */}
            <ToastContainer />
        </div>
    );
};

export default Banner;
