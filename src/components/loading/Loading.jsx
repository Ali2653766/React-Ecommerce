import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0",
      }}
      className="layout-loading"
    >
      <BeatLoader
        color="#00abff"
        cssOverride={{}}
        margin={5}
        size={20}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
