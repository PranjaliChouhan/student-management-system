import React from "react";
import vg from "../assets/2.webp";
import {
  SiCoursera,
  SiUnacademy,
  SiByjus,
  SiUdemy,
} from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>students guidance program</h1>
          <p>Information of all e-learning platforms is here</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution for problems you face
            every day. We are here to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            You can enroll here and take guidance for your future.
            we are with every student connected with big e-learning platforms.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Platforms</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <SiCoursera />
              <p>Coursera</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <SiUnacademy />
              <p>Unacademy</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <SiByjus/>
              <p>Byjus</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <SiUdemy />
              <p>Udemy</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
