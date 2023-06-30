import React from "react";

export default function DisplayAccessibility({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Display & Accessibility
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
      <label htmlFor="darkOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="dark" id="darkOff" />
      </label>
      <label htmlFor="darkOn" className="hover1">
        <span>On</span>
        <input type="radio" name="dark" id="darkOn" />
      </label>
      <div className="mmenu_item hover1">
        <div className="small_circle">
          <i className="compact_icon"></i>
        </div>
        <div className="mmenu_col">
          <div className="mmenu_span1">Compact Mode</div>
          <div className="mmenu_span2">
            Make your font size smaller so more content can fit on your screen.
          </div>
        </div>
      </div>
      <label htmlFor="compactOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="compact" id="compactOff" />
      </label>
      <label htmlFor="compactOn" className="hover1">
        <span>On</span>
        <input type="radio" name="compact" id="compactOn" />
      </label>
      <div
        className="mmenu_item hover1"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="small_circle">
            <i className="keyboard_icon"></i>
          </div>
          <span>Keyboard</span>
        </div>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
}
