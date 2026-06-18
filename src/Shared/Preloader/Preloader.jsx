import { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
useEffect(() => {
const timeout = setTimeout(() => {
const loadingScreen = document.querySelector("#loading-screen");

  if (loadingScreen) {
    loadingScreen.style.opacity = 0;

    setTimeout(() => {
      loadingScreen.remove();
    }, 300);
  }
}, 1000);

return () => clearTimeout(timeout);

}, []);

const title = "ĐÔNG HIẾU";

return ( <div className="loading-screen" id="loading-screen"> <span className="bar top-bar"></span> <span className="bar down-bar"></span>

```
  <div className="animation-preloader">
    <div className="spinner"></div>
    <div className="loader"></div>

    <div className="txt-loading">
      {title.split("").map((char, index) => (
        <span
          key={index}
          data-text-preloader={char}
          className="letters-loading"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  </div>
</div>

);
};

export default Preloader;
