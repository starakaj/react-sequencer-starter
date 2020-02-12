const React = require('react');

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const SequencerButton = function({ name, onClick }) {
  return (
    <div className="sequencerButton" onClick={onClick} >
      {name}
    </div>
  );
}

module.exports = SequencerButton;