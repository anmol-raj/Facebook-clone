import { useEffect, useRef, useState } from "react";
import { Return, Search } from "../../svg";
import useClickOutside from "../../helpers/clickOutside";

export default function SearchMenu({ color, setShowSearchMenu }) {
  const menu = useRef(null);
  const inputRef = useRef(null);
  const [iconVisible, setIconVisible] = useState(true);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => {
              setShowSearchMenu(false);
            }}
          >
            <Return color={color} />
          </div>
          <div
            className="search"
            ref={inputRef}
            onClick={() => inputRef.current.focus()}
          >
            {iconVisible && (
              <div>
                <Search color={color} />
              </div>
            )}

            <input
              type="text"
              placeholder="Search Facebook"
              onFocus={() => {
                setIconVisible(false);
              }}
              onBlur={() => {
                setIconVisible(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a href="/">Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
}
