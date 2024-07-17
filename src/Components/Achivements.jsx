import React, { useEffect, useState } from "react";
import "./Achivements.css";
import axios from "axios";
import Carousel from "react-multi-carousel";

const Achivement = () => {
  const [Achivements, setAchivements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/teacher/getAchivement/")
      .then((response) => {
        setAchivements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Display one item at a time on mobile devices
    },
  };
  

  return (
  <div id="achivement-section">
    <div className="containerAchivement">
      <div className="row">
        <div className="page-content container note-has-grid" id="notice">
          <h1 className="Heading text-center hover-effect">Achivement</h1>
        </div>
      </div>

      {/* Achievement  card1s */}
      <div className="tab-content bg-transparent">
        <div className="row note-has-grid note-full-container">
          <Carousel responsive={responsive}>
          {Achivements.map(achivements=>(
            <div key={achivements.achivementsId}>
            <div className="card1-container">
              <article className=" card1">
                <img
                  className="card1__background  card1-img-top"
                  src={achivements.achivementsImage}
                  alt="Achivement Image"
                  
                />
                <div className="card1__content flow">
                  <div className="card1__content--container flow">
                    <h2 className="card1__title">{achivements.achivementsTitle}</h2>
                    <p className="card1__description">{achivements.achivementsContent}</p>
                  </div>
                </div>
              </article>
            </div>
            </div>
        ))} 
        </Carousel>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Achivement;
