import axios from "axios";
import { React, useState } from "react";

export default function EmailSubmit() {
  const { index, _id, registryType, email, registryReport, reportSummary } =
    useSelector((state) => {
      return {
        index: state.index.index,
        _id: state.index.registry._id,
        registry: state.index.registry,
        email: state.index.registry.email,
        registryType: state.index.registry.registryType,
        registryReport: state.index.registry.registryReport,
        reportSummary: state.index.registry.reportSummary,
      };
    });

  const handleEmailSubmit = async () => {
    console.log("email sent");
    setLoader(true);
    const response = await axios.post(
      `https://dvaa-smtp.onrender.com/contactEmail`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        // registryReport: registryReport,
        email: email,
      }
    );
    console.log("Report has been submitted");
  };

  return (
    <div>
      <div className="signin-start-registry mt-5">
        <button>Contact</button>
      </div>
    </div>
  );
}
