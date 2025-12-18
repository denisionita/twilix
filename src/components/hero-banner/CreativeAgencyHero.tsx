import React from 'react';

// Import all images
import img1 from '../../../public/assets/img/photoshop.png';
import img2 from '../../../public/assets/img/eyes.png';
import img3 from '../../../public/assets/img/figma.png';
import img4 from '../../../public/assets/img/webflow.png';
import img5 from '../../../public/assets/img/figma.png';
import img6 from '../../../public/assets/img/figma.png';
import img7 from '../../../public/assets/img/figma.png';
import img9 from '../../../public/assets/img/9.webp';
import ImageTrail from '@/utils/ImageTrail';
import Link from 'next/link';

const CreativeAgencyHero = ({ title = "Twilix", fontStyle = "" }) => {
    // Create an array of image data
    const images = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 },
        { id: 9, src: img9 },
    ];

    return (
        <div className="studio-hero-area p-relative fix pb-80">
            {/* <ImageTrail images={images} /> */}
            <div className="container container-1830">
                <div className="studio-hero-bg">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="studio-hero-info z-index-5 d-flex justify-content-md-between justify-content-center align-items-center">
                                <Link href="mailto:@twilix.agency">@twilix.agency</Link>
                                <span>Creative Marketing <br /> Agency</span>
                                <Link href="mailto:@twilix.agency">@twilix.agency</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="studio-hero-content text-center tp-text-perspective" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <h2 className={`studio-hero-title ${fontStyle}`}>{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyHero;