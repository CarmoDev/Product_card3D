import { useState } from "react";

import { Container } from "./styles";

import Icon360 from "../../assets/icons/360.svg";
import sofa from "../../assets/images/sofa.png";

export default function Product() {
  const [isActive, setActive] = useState(false);

  function handleActive() {
    isActive === false ? setActive(true) : setActive(false)
  }

  return (
    <Container>
      {isActive ? (
        <iframe
          title="Margot 2 Seater Sofa, Old Rose Velvet"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_ar=1&ui_help=0&ui_settings=0&ui_fullscreen=0&ui_annotations=0"
        ></iframe>
      ) : (
        <img src={sofa} alt="Sofa" />
      )}

      <button onClick={handleActive}>
        <img src={Icon360} alt="turn360" />
      </button>
    </Container>
  );
}
