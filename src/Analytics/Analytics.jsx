import React, { useEffect } from "react";

import ReactGA from "react-ga4";

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-RTL5SMKXQH");

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title,
    });
  }, []);
  return null;
};

export default Analytics;
