import React from "react";

export default function HelpSupport({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Help Support
      </div>
      <div className="mmenu_item hover1">
        <div className="small_circle">
          <i className="dark_filled_icon"></i>
        </div>
        <div className="mmenu_col">
          <div className="mmenu_span1">Dark Mode</div>
          <div className="mmenu_span2">
            Adjust the appearance of Facebook to reduce the glare and give your
            eyes break.
          </div>
        </div>
      </div>
    </div>
  );
}
