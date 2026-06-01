import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";

function Home() {
  return (
    <main>
      <Helmet>
        <title>Al Huriat Printing Press — Beirut, Lebanon | Since 1960</title>
        <meta
          name="description"
          content="Al Huriat Printing Press has served Lebanese and international clients since 1960. Offset and digital printing for business cards, brochures, books, packaging, and more."
        />
      </Helmet>
      <div style={{ height: "clamp(380px, 56vw, 560px)" }}>
        <Slider />
      </div>
      <section className="homeContainer" aria-labelledby="overview-heading">
        <div className="homeBox">
          <div className="overviewBox">
            <h2 id="overview-heading">Our Company Overview</h2>
            <p>
              Al Huriat Printing Press was established in 1960 in Beirut —
              Achrafieh with the aim of servicing clients and companies from all
              industries. The press continued its activities during the civil
              war period without any interruption and established itself in the
              Lebanese market first, and then executed work for international
              clients in France, Switzerland, Germany, Iraq, Egypt, and other
              countries.
            </p>
            <p>
              The press is always looking forward with a very ambitious outlook
              to expand and modernize its activities, to the best satisfaction
              of clients. The present staff is experienced and well trained to
              do any kind of printing whether offset, or other types of printing
              requested by the clients.
            </p>
            <p>
              Al Huriat leverages more than 60 years of experience in the
              printing industry to provide clients with a great customer
              experience and high quality products at competitive prices which
              can be achieved through a well trained and qualified staff and up
              to date machinery.
            </p>
          </div>
          <img
            src="/assets/printing.webp"
            className="homeImage"
            alt="Al Huriat Printing Press workshop"
            loading="lazy"
            width="600"
            height="333"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
