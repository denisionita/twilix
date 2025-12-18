import bannerImg from '../../../public/assets/img/home-06/banner.jpg';
import bannerImg2 from '../../../public/assets/img/home-06/bannertwilix.webp';
import Image from 'next/image';

const CreativeAgencyBanner = () => {
    return (
        <div className="studio-hero-banner-area">
            <div className="studio-hero-banner mb-20">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" data-speed=".8" src={bannerImg2} alt="banner-image" />
            </div>
            <div className="container container-1830">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="studio-hero-banner-text d-flex justify-content-start justify-content-md-between align-items-center">
                            <span>A</span>
                            <span>Strategic</span>
                            <span>Partner</span>
                            <span>For</span>
                            <span>Bold</span>
                            <span>Ambitious</span>
                            <span>Modern</span>
                            <span>Brands</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyBanner;