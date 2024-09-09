import React from 'react'
import pic from '../assets/pick-meals-image.png'
import choose from '../assets/choose-image.png'
import delevery from '../assets/delivery-image.png'

function Work() {
    const workInfoData = [
        {
          image: pic,
          title: "Pick Meals",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: choose,
          title: "Choose How Often",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: delevery,
          title: "Fast Deliveries",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
      ];
    return (
        <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title.split(' ').splice(0,2).join(' ')}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
