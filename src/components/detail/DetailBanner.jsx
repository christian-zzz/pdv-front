import React from 'react';
import bannerImg from '../../assets/bannerdetail.jpg';

const DetailBanner = () => {
    return (
        <div className="w-full">
            <img
                src={bannerImg}
                alt="Banner"
                className="w-full h-auto object-cover"
            />
        </div>
    );
};

export default DetailBanner;
