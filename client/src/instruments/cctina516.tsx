// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useEffect, useState } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

const KeyButton = (props: any) => {
  console.log('props', props);
  return (
    <button
      className='key-button'
      style={{ height: 200 - 15 * props.index + 'px' }}
      onClick={() =>
        (new Tone.Player(props.note.file).toDestination().autostart = true)
      }
    >
      <div className='dot' />
      {props.note.name}
      <div className='dot' />
    </button>
  );
};

function Xylophone() {
  return (
    <div className='container'>
      <div className='xylophone'>
        {notes.map((note, index) => (
          <KeyButton index={index} key={note.name} note={note} />
        ))}
      </div>
    </div>
  );
}

const notes = [
  { name: 'C', file: '/xylophoneSound/C.wav' },
  { name: 'D', file: '/xylophoneSound/D.wav' },
  { name: 'E', file: '/xylophoneSound/E.wav' },
  { name: 'F', file: '/xylophoneSound/F.wav' },
  { name: 'G', file: '/xylophoneSound/G.wav' },
  { name: 'A', file: '/xylophoneSound/A.wav' },
  { name: 'B', file: '/xylophoneSound/B.wav' },
  { name: 'C2', file: '/xylophoneSound/C2.wav' },
];

export const XylophoneInstrument = new Instrument('cctina516', Xylophone);
