const React = require('react');
const SequencerButton = require('./SequencerButton');

const Sequencer = function() {

  const kick = new Audio("808/snd1.wav");
  const snare = new Audio("808/snd3.wav");
  const hat = new Audio("808/snd7.wav");

  return (
    <div className="sequenceContainer">
      <SequencerButton name="Kick" onClick={() => {
        kick.currentTime = 0;
        kick.play();
      }} />
      <SequencerButton name="Snare" onClick={() => {
        snare.currentTime = 0;
        snare.play();
      }} />
      <SequencerButton name="Hat" onClick={() => {
        hat.currentTime = 0;
        hat.play();
      }} />
    </div>
  );
}

module.exports = Sequencer;