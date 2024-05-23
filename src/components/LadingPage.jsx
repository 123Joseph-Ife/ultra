import React from "react";
import Companies from "./Companies";

const LadingPage = () => {
  const data = [
    {
      id: 1,
      path: "netsolutions.png",
      alt: "Net Solutions",
    },
    {
      id: 2,
      path: "seacom.png",
      alt: "SEA COMS",
    },
    {
      id: 3,
      path: "wia.png",
      alt: "WIA",
    },
    {
      id: 4,
      path: "flashnet.png",
      alt: "Flah Net",
    },
    {
      id: 5,
      path: "simbanet.png",
      alt: "Simba Net",
    },
    {
      id: 6,
      path: "habari.png",
      alt: "Habari",
    }
  ];
  console.log(data);
  
  return (
    <main className="wrap-flex landing-page">
      <h1 className="landing-h1">
        Empower Yourself with <br />
        <span className="text-white">Ultra Africa</span> Community
      </h1>
      <p className="txt-ct">
        As a brand committed to equipping a million Africans with <br />
        essential knowledge, we believe in the transformative ,<br />
        power of education, collaboration, and community.
      </p>
      <img src="/group-image.png" alt="Group Image" width="800px" />
      <div className="wrap-flex gp-10">
        <h3 className="courier-family">As Seen In</h3>
        <p className="txt-ct">
          For professionals, entrepreneurs, scientists and students <br />
          in Tanzania,organized by the tech-community and <br />
          advancement of technology.
        </p>
      </div>
      <Companies data={data} />
    </main>
  );
};

export default LadingPage;
