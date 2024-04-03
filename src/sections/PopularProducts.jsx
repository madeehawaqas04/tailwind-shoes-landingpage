import { products } from "../constants";
import { PopularProductCard } from "../components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

<div className="mt-16 sm:gap-6 gap-14 ">
<Carousel responsive={responsive} arrows={true} showDots={true} keyBoardControl={true}  
      customTransition="all .5"
      transitionDuration={500}
       centerMode={true} containerClass="carousel-container">
        {products.map((product) => (
        
          <PopularProductCard key={product.name} {...product} />
          
        ))}
        </Carousel>
</div>
      {/* <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>

      <Carousel responsive={responsive} arrows={true} showDots={true} keyBoardControl={true} 
      customTransition="all .5"
      transitionDuration={500}
       centerMode={true} containerClass="carousel-item-padding-40-px flex flex-1 flex-col w-full max-sm:w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> 
   <div ><img src="" alt="Nike Air Jordan-01" />
  </div >


        {products.map((product) => (
        
          <PopularProductCard key={product.name} {...product} />
          
        ))}
        </Carousel>
      </div> */}
    </section>
  );
};

export default PopularProducts;
