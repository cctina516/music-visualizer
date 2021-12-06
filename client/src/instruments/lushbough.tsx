// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useEffect, useState, KeyboardEvent } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */
 const pads = [
  { name: 'kick', keyInput: 'a', file: '/drumSounds/kick.wav' },
  { name: 'snare', keyInput: 's', file: '/drumSounds/snare.wav' },
  { name: 'cymbal', keyInput: 'd', file: '/drumSounds/cymbal.wav' },
  { name: 'hi-hat', keyInput: 'f', file: '/drumSounds/hi-hat.wav' },
];

const DrumPad = (props: any) => {
  const keyboard = (e: KeyboardEvent): void => {
    if ("key" in e && e.key === props.pad.keyInput) {
      (new Tone.Player(props.pad.file).toDestination().autostart = true)
    }
  }

  return (
    <button
      className='drum-button'
      id='pad-buttons'
      style={{ 
      height: 300,
      width: 200,
      backgroundColor: 'white',
      color: 'red'
    }}
    onKeyPress= {e => keyboard(e)}
    >
      {props.pad.name}
      {"\n |"} 
      {"\n"}
      {props.pad.keyInput}
    </button>
  );
};

function Drum() {
  return (
    <div className='drumkit'>
      <h1>808 Drum Pad</h1>
      <div className='map'>
        {pads.map((pad, index) => (
          <DrumPad index={index} key={pad.name} pad={pad} />
        ))}
      </div>
    </div>
  );
}

export const lushboughInstrument = new Instrument('Drums', Drum);