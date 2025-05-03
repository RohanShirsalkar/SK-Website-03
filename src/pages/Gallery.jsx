import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'img1.jpeg', name: 'Truck 1' },
    { src: 'img2.jpeg', name: 'Truck 2' },
    { src: 'img3.jpeg', name: 'Truck 3' },
    { src: 'img4.jpeg', name: 'Truck 4' },
    { src: 'img5.jpeg', name: 'Truck 5' },
    { src: 'img6.jpeg', name: 'Truck 6' },
    { src: 'img7.jpeg', name: 'Truck 7' },
    { src: 'img8.jpeg', name: 'Truck 8' },
    { src: 'img9.jpeg', name: 'Truck 9' },
    { src: 'img10.jpeg', name: 'Truck 10' },
    { src: 'img11.jpeg', name: 'Truck 11' },


  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
