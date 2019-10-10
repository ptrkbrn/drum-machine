import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function DrumPads(props) {
  const { fireSample } = props;
  return (
    <div className="drum-pad-grid" role="presentation" onClick={fireSample} onKeyUp={fireSample}>
      <button type="button" id="sample-q" className="drum-pad">
        Q
        <audio src="./assets/sounds/q.wav" className="clip" id="Q"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-w" className="drum-pad">
        W
        <audio src="/assets/sounds/w.wav" className="clip" id="W"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-e" className="drum-pad">
        E
        <audio src="/assets/sounds/e.wav" className="clip" id="E"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-a" className="drum-pad">
        A
        <audio src="/assets/sounds/a.wav" className="clip" id="A"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-s" className="drum-pad">
        S
        <audio src="/assets/sounds/s.wav" className="clip" id="S"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-d" className="drum-pad">
        D
        <audio src="/assets/sounds/d.wav" className="clip" id="D"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-z" className="drum-pad">
        Z
        <audio src="/assets/sounds/z.wav" className="clip" id="Z"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-x" className="drum-pad">
        X
        <audio src="/assets/sounds/x.wav" className="clip" id="X"><track kind="captions" /></audio>
      </button>
      <button type="button" id="sample-c" className="drum-pad">
        C
        <audio src="/assets/sounds/c.wav" className="clip" id="C"><track kind="captions" /></audio>
      </button>
    </div>
  );
}
DrumPads.propTypes = {
  fireSample: PropTypes.func.isRequired,
};

function Display(props) {
  const { lastSample } = props;
  return <h1 id="display">{lastSample}</h1>;
}
Display.propTypes = {
  lastSample: PropTypes.string.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSample: <>&nbsp;</>,
    };
    this.fireSample = this.fireSample.bind(this);
  }

  fireSample(e) {
    const descriptions = {
      Q: 'cowbell',
      W: 'high hat',
      E: 'wood block',
      A: 'hand clap',
      S: 'ride cymbal',
      D: 'high bump',
      Z: 'low bump',
      X: 'mid bump',
      C: 'snare hit',
    };
    let sample = '';
    if (e.target !== e.currentTarget) {
      if (e.type === 'keyup') {
        sample = document.getElementById(String.fromCharCode(e.keyCode));
      } else {
        sample = e.target.querySelector('audio');
      }
      sample.play();
      this.setState({
        lastSample: descriptions[sample.id],
      });
    }
    e.stopPropagation();
  }

  render() {
    const { lastSample } = this.state;
    return (
      <div className="App" id="drum-machine">
        <Display lastSample={lastSample} />
        <DrumPads fireSample={this.fireSample} />
      </div>
    );
  }
}

export default App;
