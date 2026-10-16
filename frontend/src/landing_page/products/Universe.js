
import React from "react";

function Universe() {
  const platforms = [
    {
      name: "Zerodha Fund House",
      logo: "/images/zerodhaFundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      name: "Sensibull",
      logo: "/images/sensibullLogo.svg",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      name: "Tijori",
      logo: "/images/tijori.svg",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      name: "Streak",
      logo: "/images/streakLogo.png",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      name: "smallcase",
      logo: "/images/smallcaseLogo.png",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.",
    },
    {
      name: "ditto",
      logo: "/images/dittoLogo.png",
      description:
        "Personalised advice on life and health insurance.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12 mb-4">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further
            with our partner platforms.
          </p>
        </div>

        {platforms.map((platform) => (
          <div
            className="col-12 col-sm-6 col-lg-4 p-4"
            key={platform.name}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{ height: "65px" }}
            >
              <img
                src={platform.logo}
                alt={`${platform.name} logo`}
                style={{
                  maxWidth: "220px",
                  maxHeight: "55px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  console.error("Logo not found:", platform.logo);
                }}
              />
            </div>

            <p className="text-muted small">
              {platform.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universe;
