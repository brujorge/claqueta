import React from "react";
import classNames from "classnames";

import claquetaSound from "assets/sounds/claqueta.mp3";
import styles from "./styles.module.scss";

import { useToggleableBoolean } from "helpers/hooks";

import SoundEffect from "components/SoundEffect";

const InstructionsMessage = () => {
  return (
    <div className={styles.instructionsMessage}>
      <h1>Click anywhere</h1>
      <code>
        Made by <a href="https://github.com/brujorge/">brujorge</a>
      </code>
    </div>
  );
};

const Home = () => {
  const [isClicked, toggleIsClicked] = useToggleableBoolean(false);
  const homeClassNames = classNames({
    [styles.home]: true,
    [styles.clicked]: isClicked
  });

  return (
    <main className={homeClassNames} onClick={toggleIsClicked}>
      <InstructionsMessage />
      <SoundEffect isPlaying={isClicked} soundSrc={claquetaSound} />
    </main>
  );
};

export default Home;
