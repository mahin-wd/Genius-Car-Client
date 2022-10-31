import React from 'react';
import './SliderItem.css'

const SliderItem = ({slide}) => {
    const {img, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='slider-img'>
          <img src={img} alt='' className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 border-none">❯</a>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
          <h1 className='text-7xl font-bold text-white'>
            Affordable
            <br />
          Price For Car
          <br />
          Servicing</h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
          <p className='text-xl text-white font-normal mt-20 w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/4">
        <button className="btn btn-error mr-5">Discover More</button>
        <button className="btn btn-outline btn-info">Latest Project</button>
        </div>
      </div>
    );
};

export default SliderItem;