
/* eslint-disable react/prop-types */
export const DrumPad = ({ clip, onClick }) => {
  return (
    <div className="drum-pad" id={clip.key} onClick={() => onClick(clip)}>
      {clip.key}
      <audio className="clip" id={clip.key} ref={clip.audioRef} src={clip.src}></audio>
    </div>
  );
};
