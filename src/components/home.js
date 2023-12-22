
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeWorkRounded from '@mui/icons-material/HomeWorkRounded';
import BikeScooterRounded from '@mui/icons-material/BikeScooterRounded';
import ChairRounded from '@mui/icons-material/ChairRounded';
import { Link } from 'react-router-dom';
import backgroundImage from './bgi.png';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
  const homeWorkRef = useRef(null);
  const bikeScooterRef = useRef(null);
  const chairRef = useRef(null);

  const commonButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  };

  const iconContainerStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const handleMouseEnter = (ref) => {
    ref.current.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = 'scale(1)';
  };

  const pageStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  const searchBarStyle = {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    marginRight: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  };

  const searchButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: '#99ccff',
    color: 'white',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '16px',
  };

  const buttonTextStyle = {
    textAlign: 'center',
  marginTop: '8px',
  fontSize: '16px',
  color: '#333',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '2px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <div key={i} >
          <div style={{ width: '300px', height: '200px', margin: '0 4px' ,padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
            {/* Placeholder content */}
            <h3>Card {i + 1}</h3>
            {/* You can add more placeholders or any content here */}
          </div>
        </div>
      );
    }
    return cards;
  };
  return (
    <div style={pageStyle}>
      
      <div>
      <Link to="/rentals">
          <button
            style={{ ...commonButtonStyle, marginRight: '10px' }}
            onMouseEnter={() => handleMouseEnter(homeWorkRef)}
            onMouseLeave={() => handleMouseLeave(homeWorkRef)}
          >
            <div style={{ ...iconContainerStyle }} ref={homeWorkRef}>
              <HomeWorkRounded sx={{ fontSize: '50px' }} />
            </div>
            <p style={buttonTextStyle}>RENTALS</p>
          </button>
        </Link>
        <button
            style={{ ...commonButtonStyle, marginRight: '10px' }}
            onMouseEnter={() => handleMouseEnter(bikeScooterRef)}
            onMouseLeave={() => handleMouseLeave(bikeScooterRef)}
          >
            <div style={{ ...iconContainerStyle }} ref={bikeScooterRef}>
              <BikeScooterRounded sx={{ fontSize: '50px' }} />
            </div>
            <p style={buttonTextStyle}>VEHICLES</p>
          </button>

          <button
            style={{ ...commonButtonStyle }}
            onMouseEnter={() => handleMouseEnter(chairRef)}
            onMouseLeave={() => handleMouseLeave(chairRef)}
          >
            <div style={{ ...iconContainerStyle }} ref={chairRef}>
              <ChairRounded sx={{ fontSize: '50px' }} />
            </div>
            <p style={buttonTextStyle}>FURNITURES</p>
          </button>
      </div>

        {/* Search Bar */}
      <div style={searchBarStyle}>
        <input type="text" placeholder="Search..." style={inputStyle} />
        <button style={searchButtonStyle}>
          <SearchIcon />
        </button>
      </div>
       {/* Product Slider */}
       <div style={{ width: '75%', margin: '20px auto' }}>
      <Slider {...settings}>
        {generateCards()}
      </Slider>
    </div>
    {/* Product Slider */}
    <div style={{ width: '75%', margin: '20px auto' }}>
      <Slider {...settings}>
        {generateCards()}
      </Slider>
    </div>
    {/* Product Slider */}
    <div style={{ width: '75%', margin: '20px auto' }}>
      <Slider {...settings}>
        {generateCards()}
      </Slider>
    </div>
    </div>
  );
};

export default Home;


