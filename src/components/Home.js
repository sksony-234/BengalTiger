import React from "react";
import Dot from "./Dot";
import styled from "styled-components";
import mTone from "../logo/tone1.svg";
import mTone1 from "../logo/tone2.svg";
import leftPic from "../logo/pic1.svg";
import rightPic from "../logo/pic2.svg";

const Home = () => {
  return (
    <HomeStyle>
      <div className="content">
        <div className="mid-pic">
          <div className="left">
            <img src={leftPic} alt="" />
          </div>
          <div className="right">
            <img src={rightPic} alt="" />
          </div>
        </div>
        <div className="left-content">
          <img className="tone2" src={mTone1} alt="" />
          <Btn>Get Started</Btn>
          <img className="tone3" src={mTone} alt="" />
        </div>
        <div className="right-content">
          <span className="up-text">Boost Your Revenue</span>
          <br /> <span className="mid-text">With Our</span>
          <br />
          <span className="botom-text">Exlusive Service</span>
        </div>
      </div>
      <div className="dots">
        <Dot />
        <Dot />
        <Dot />
      </div>

      {/* background icons */}
      <div className="icon">
        <img className="tone1" src={mTone} alt="" />
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.section`
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
    .left-content {
      position: relative;
      margin-left: 8rem;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 36.072px;
      line-height: 111.5%;
      text-align: right;
      color: #ffffff;

      .tone2 {
        position: absolute;
        top: 0px;
        left: -100px;
        height: 40px;
        width: 50px;
        transform: rotate(-15deg);
        z-index: -15;
        opacity: 0.6;
      }
      .tone3 {
        position: absolute;
        top: 10px;
        right: -150px;
        height: 65px;
        width: 73px;
      }
    }
    .right-content {
      text-align: right;
      margin-right: 40px;
      .up-text {
        color: #e0e1dd;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 101.5%;
        text-align: right;
      }
      .mid-text {
        color: #e0e1dd;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 100px;
        line-height: 120px;
        text-align: right;
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: #c4c4c4;
        /* border: 2.25px solid #E0E1DD; */
      }
      .botom-text {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 73px;
        text-align: right;
        color: #c4c4c4;
      }
    }
    .mid-pic {
      display: flex;
      position: absolute;
      z-index: -10;
      margin-top: 9rem;
      width: 100vw;
      overflow: hidden;
      .right {
        position: relative;
        left: -30px;
        top: -50px;
      }
    }
  }

  .dots {
    position: absolute;
    top: 0;
    left: 376px;
  }

  //Music icons
  .icon {
    .tone1 {
      height: 82px;
      width: 100px;
      position: absolute;
      right: 120px;
      top: 150px;
    }
    /* transform: matrix(-0.99, -0.15, -0.15, 0.99, 0, 0); */
  }
`;

const Btn = styled.div`
  padding: 10px 20px;
  border: 2px solid yellow;
  border-radius: 50px;
`;
