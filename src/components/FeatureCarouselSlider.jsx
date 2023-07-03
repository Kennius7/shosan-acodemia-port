import { useState, useEffect } from 'react';

// import { ChevronLeft, ChevronRight } from "react-feather";




const FeatureCarouselSlider = ({ children: feedback, autoSlide=false, autoSlideInterval=10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

const prev = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? feedback.length - 1 : currentIndex - 1));

const next = () => setCurrentIndex((currentIndex) => (currentIndex === feedback.length - 1 ? 0 : currentIndex + 1));

useEffect(() => {
  if (!autoSlide) return
  const slideInterval = setInterval(next, autoSlideInterval);
  return () => clearInterval(slideInterval);

  }, [])



  return (
    <div className='flex justify-center items-center relative cursor-pointer'>
      <div key={feedback[currentIndex].id} className=''>
        <div className="flex justify-center items-center transition-transform ease-out" style={{ transform: `translateX(-${currentIndex * 100})` }}>
          { feedback[currentIndex] }
        </div>
      </div>

      {/* <div className='flex justify-between items-center absolute inset-0 -p-10'>
        <button onClick={prev} className='p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <ChevronLeft size={35} />
        </button>
        <button onClick={next} className='p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <ChevronRight size={35} />
        </button>
      </div> */}

    </div>
    
  )
}

export default FeatureCarouselSlider;