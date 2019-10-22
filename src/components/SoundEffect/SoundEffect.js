import React from "react";

const SoundEffect = ({ isPlaying, soundSrc }) => {
  const ref = React.createRef();
  if (isPlaying) {
    return <audio ref={ref} src={soundSrc} autoPlay></audio>;
  }
  return null;
};

export default SoundEffect;
