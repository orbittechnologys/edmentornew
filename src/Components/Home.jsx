import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Mainbb from "../img/mainbg.png";
import "./Home.css";
import Svgbg from "../img/Svgbg2.png";
import CheckMark from "../img/check-mark.png";
import Insta from "../img/instagram.png";
import Faceb from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Bg from "../img/bg.png";

export default function Home() {
  const containerStyle = {
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  const imgContH1Style = {
    color: "#266e6e",
    fontFamily: '"Paytone One", sans-serif',
    fontSize: "2rem",
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <img src={Mainbb} alt="bg" style={imageStyle} />
      <div className="row" style={overlayStyle}>
        <div className="col-md-6 col-sm-12">
          {/* <Email /> */}
          <div className="container text-center mt-5">
            <div className="img-cont text-center ">
              <h1 className="animate-dots" style={imgContH1Style}>
                Coming Soon
              </h1>
              <p>A digital classroom redefined.</p>
              <img className="hop-animation" src={Svgbg} alt="" />
              <p>
                Join us on the path to success with our <br /> upcoming online
                training platform.
              </p>

              <div className="input-cont">
                <p>Get Notified</p>
                <input type="text" placeholder="Type in your email " />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          {/* <Content /> */}
          <div className="text-center content-container ">
            <img src={Bg} alt="" className="background-image" />
            <div className="heading my-5">
              <h1>Ed mentor</h1>
              <p>Schedule & Training at its best</p>
            </div>

            {/* first card */}
            <div className="cont-card mb-5">
              <div className="schedule-section my-3 px-2">
                <img src={CheckMark} alt="check mark" />
                <h3>Schedule Classes</h3>
              </div>
              <p className="px-2">
                Optimize your teaching with ease. Effortlessly plan and organize
                classes at your fingertips, ensuring a seamless and professional
                experience.
              </p>
            </div>
            {/* second card */}
            <div className="cont-card ">
              <div className="schedule-section my-3 px-2">
                <img src={CheckMark} alt="check mark" />
                <h3>Track Progress</h3>
              </div>
              <p className="px-2">
                Stay on top of success. Effortlessly monitor and analyze
                progress, ensuring a path to excellence. Empower your journey
                with real-time insights.
              </p>
            </div>

            <div className="socials ">
              <p>Stay Connected on</p>
              <hr />
              <div className="icons">
                <img src={Insta} alt="instagram" />
                <img src={Faceb} alt="facebook" />
                <img src={Twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
