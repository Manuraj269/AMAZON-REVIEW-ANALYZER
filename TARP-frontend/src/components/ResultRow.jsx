import React from "react";
import ReactStars from "react-rating-stars-component";

const ResultRow = (props) => {
  //   Title: "Title",
  //   Review_Text: "Review Text",
  //   Rating: "Rating",
  //   Location_and_Date: "Location and Date",
  //   Verified: "Verified",
  return (
    <>
      <div className="col-1 text-center border p-3 c">{props.sno}</div>
      <div className="col-3 border text-wrap p-3 c">{props.title}</div>
      <div className="col-4 border text-wrap p-3 c">{props.text}</div>
      <div className="col-1 d-flex py-3 text-center border justify-content-center c">
        {/* {props.rating} */}
        <ReactStars
          count={5}
          size={18}
          value={parseFloat(props.rating)}
          edit={false}
          activeColor="#ffd700"
        />
      </div>
      <div className="col-2 text-center text-wrap border p-3 c">
        {props.loc}
      </div>
      <div className="col-1 text-center border p-3 c">{props.ver}</div>
    </>
  );
};

export default ResultRow;
