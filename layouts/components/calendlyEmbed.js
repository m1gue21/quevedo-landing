"use client";

import React from "react";

const CalendlyPopup = ({ url, text = "Schedule time with me" }) => {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      ></script>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          Calendly.initPopupWidget({ url });
          return false;
        }}
        className="btn btn-primary mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {text}
      </a>
    </>
  );
};

export default CalendlyPopup;
