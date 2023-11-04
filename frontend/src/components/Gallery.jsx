import Slider from "react-slick";

function Card() {
  return (
    <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
      <img
        src="https://picsum.photos/300/200?random=1"
        alt="Img by Meriç Dağlı https://unsplash.com/@meric"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

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
      <div className="">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
