import { useState } from "react";
import { DrumPad } from "./components/DrumPad";
import "./App.css";

const audioClips = [
  {
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Button 1",
  },
  {
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Button 2",
  },
  {
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Button 3",
  },
  {
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Button 4",
  },
  {
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Button 5",
  },
  {
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Button 6",
  },
  {
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Button 7",
  },
  {
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Button 8",
  },
  {
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Button 9",
  },
];

const App = () => {
  const [volume, setVolume] = useState(1);
  const audioRefs = {};

  const audioClipsWithRefs = audioClips.map((clip) => ({
    ...clip,
    audioRef: (ref) => (audioRefs[clip.key] = ref),
  }));

  const playSound = (clip) => {
    const audio = audioRefs[clip.key];
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
    }
  };

  return (
    <div id="drum-machine" className="App">
      <div className="drum-pads">
        {audioClipsWithRefs.map((clip) => (
          <DrumPad key={clip.key} clip={clip} onClick={playSound} />
        ))}
      </div>
      <div className="volume-control">
        <label htmlFor="volume">Volumen:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default App;
