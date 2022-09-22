import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className="destinations">
      <h3>Now available in 28 states!</h3>
      <div className="grid">
        <div>
          <img src={image1} alt="destination-1" />
          <h3>Move to Darjeeling</h3>
          <p>Enjoy the comfort of train journey. Experience a new thrill.</p>
        </div>

        <div>
          <img src={image2} alt="destination-2" />
          <h3>Experience Jammu Kashmir</h3>
          <p>Feel the nature with us. Start a nice vacation.</p>
        </div>

        <div>
          <img src={image3} alt="destination-3" />
          <h3>Feel South India </h3>
          <p>Just relax. Enjoy a wonderful ride with us.</p>
        </div>
      </div>
    </section>
  );
}

export default Destinations
