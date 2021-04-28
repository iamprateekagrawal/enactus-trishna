import React from 'react';
import img1 from '../about_us1.png';
import img2 from '../about_us2.png';

function AboutUs() {
    return(
        <>
        <div className='aboutus'>
            <div className='left-aboutus'>
                <div className='aboutus-head'>Who we are</div>
                <div className='aboutus-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint error necessitatibus sunt itaque vel, possimus quod facilis quam provident asperiores autem voluptates cupiditate facere debitis incidunt voluptatibus harum numquam esse excepturi similique illum officia aspernatur! Quaerat eligendi excepturi voluptas numquam autem! Eaque, dolores at explicabo officiis vero harum qui veniam consectetur fuga provident atque ducimus, vel quisquam beatae accusantium quis praesentium tempore sint? Quo vitae aperiam perferendis eveniet mollitia esse id ratione excepturi eos ut veniam natus iste placeat ipsam delectus ipsa velit fugiat laborum, minima est illum inventore. Ut ducimus placeat provident excepturi consectetur pariatur at voluptates alias.</div>
            </div>
            <div className='right-aboutus'>
                <img src={img1} alt="Pots" width='200px' className='aboutus-img1'/>
                <img src={img2} alt="Terracota" width='200px' className='aboutus-img2'/>
            </div>
        </div>
        </>
    )
}

export default AboutUs;