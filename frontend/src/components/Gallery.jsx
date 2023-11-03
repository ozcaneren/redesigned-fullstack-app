import Slider from "react-slick";

function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto text-black">
      <div className="text-black">
        <Slider {...settings}>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=1"}
            />
          </div>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=2"}
            />
          </div>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=3"}
            />
          </div>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=4"}
            />
          </div>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=5"}
            />
          </div>
          <div className="w-full">
            <img
              alt="ecommerce"
              className="block w-full object-cover object-center bg-yellow-500"
              src={"https://picsum.photos/300/200?random=6"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
