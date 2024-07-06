import React from 'react';
import { Carousel } from 'react-bootstrap';

const AutoCarousel = () => {
  return (
    <Carousel interval={3000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Homepage_DesktopHeroTemplate_3000x1200_1._CB580021402_.jpg " style={{ maxWidth: '100%', height: '380px' }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/unrec/hero/Under_1499_Tallhero_3000x1200._CB581597259_.jpg" style={{ maxWidth: '100%', height: '380px' }}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mendeserve.com/cdn/shop/files/MD_Web_Banner_1923.jpg?v=1704174572" style={{ maxWidth: '100%', height: '380px' }}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Watches2024/Jan/GW/Unrec/U4_3000._CB584848069_.jpg" style={{ maxWidth: '100%', height: '380px' }}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GATEWAY/BXGY/Feb/BXGY_2X_PC._CB581582274_.jpg" style={{ maxWidth: '100%', height: '380px' }}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.freekaamaal.com/store_desc_images/1518092191.jpg" style={{ maxWidth: '100%', height: '380px' }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default AutoCarousel;
