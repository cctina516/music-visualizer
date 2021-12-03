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
/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

// interface SaxophoneKeyProps {
//   note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
//   duration?: string;
//   synth?: Tone.Synth; // Contains library code for making sound
//   minor?: boolean; // True if minor key, false if major key
//   octave: number;
//   index: number; // octave + index together give a location for the piano key
//   sound: Tone.Player;
// }

// export function SaxophoneKey({
//   note,
//   synth,
//   minor,
//   index,
//   sound,
// }: SaxophoneKeyProps): JSX.Element {
//   /**
//    * This React component corresponds to either a major or minor key in the piano.
//    * See `PianoKeyWithoutJSX` for the React component without JSX.
//    */
//   return (
//     // Observations:
//     // 1. The JSX refers to the HTML-looking syntax within TypeScript.
//     // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
//     // 3. The curly braces `{` and `}` should remind you of string interpolation.
//     <div
//       onMouseDown={() => sound.start()} // Question: what is `onMouseDown`?
//       //onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
//       //onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
//       onMouseUp={() => sound.stop('+0.25')} // Question: what is `onMouseUp`?
//       className={classNames('ba pointer absolute dim', {
//         'bg-black black h3': minor, // minor keys are black
//         'black bg-white h4': !minor, // major keys are white
//       })}
//       style={{
//         // CSS
//         top: 0,
//         //left: `${index}rem`,
//         left: `${index * 2}rem`,
//         zIndex: 0,
//         width: '2rem',
//         marginLeft: 0,
//         // zIndex: minor ? 1 : 0,
//         // width: minor ? '1.5rem' : '2rem',
//         // marginLeft: minor ? '0.25rem' : 0,
//       }}
//     ></div>
//   );
// }

// function SaxophoneType({ title, onClick, active }: any): JSX.Element {
//   return (
//     <div
//       onClick={onClick}
//       className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
//         'b--black black': active,
//         'gray b--light-gray': !active,
//       })}
//     >
//       {title}
//     </div>
//   );
// }

// //const buffer = new Tone.Buffer('/C.wav');

// function Saxophone() {
//   const keys = List([
//     { note: 'C', idx: 0 },
//     { note: 'Dd', idx: 0.5 },
//     { note: 'D', idx: 1 },
//     { note: 'Eb', idx: 1.5 },
//     { note: 'E', idx: 2 },
//     { note: 'F', idx: 3 },
//     { note: 'Gb', idx: 3.5 },
//     { note: 'G', idx: 4 },
//     { note: 'Ab', idx: 4.5 },
//     { note: 'A', idx: 5 },
//     { note: 'Bb', idx: 5.5 },
//     { note: 'B', idx: 6 },
//   ]);

//   const play = [
//     '/C.wav',
//     '/D.wav',
//     '/C.wav',
//     '/C.wav',
//     '/C.wav',
//     '/C.wav',
//     '/C.wav',
//     '/C.wav',
//     '/D.wav',
//     '/C.wav',
//     '/C.wav',
//     '/D.wav',
//   ];
//   // const name = ['C', 'D'];
//   // const ind = ['/C.wav', '/D.wav'];

//   // const setOscillator = () => {
//   //   // setSynth((oldSynth) => {
//   //   //   oldSynth.disconnect();

//   //     return new Tone.Synth({
//   //       portamento: 0.03,
//   //       envelope: {
//   //         attack: 0.06,
//   //         decay: 0.2,
//   //         sustain: 0.4,
//   //         release: 1.4,
//   //         attackCurve: 'linear',
//   //         releaseCurve: 'exponential',
//   //       },
//   //       oscillator: {
//   //         partials: [1, 0.2, 0.01],
//   //         phase: 180,
//   //         type: 'custom',
//   //       } as Tone.OmniOscillatorOptions,
//   //     }).toDestination();
//   //   });
//   // };

//   //useEffect(setOscillator, [setSynth]);

//   return (
//     <div className='pv4'>
//       <div className={'SaxophoneImage'}>
//         <img src={image} alt={'SaxophoneImage'} />
//       </div>
//       <div className='relative dib h4 w-100 ml4'>
//         {Range(2, 7).map(
//           (octave) =>
//             keys.map((key) => {
//               play.map((p) => {
//                 const note = `${key.note}${octave}`;
//                 let n = `${key.note}`;
//                 let sound = new Tone.Player(p).toDestination();

//                 return (
//                   <SaxophoneKey
//                     key={note} //react key
//                     note={n}
//                     //synth={synth}
//                     //minor={isMinor}
//                     octave={octave}
//                     index={(octave - 2) * 7 + key.idx}
//                     sound={sound}
//                     //index={key.idx}
//                   />
//                 );
//               });
//             })
//           // keys.map((key) => {
//           //   const isMinor = key.note.indexOf('b') !== -1;
//           //   const note = `${key.note}${octave}`;
//           //   let n = `${key.note}`;
//           //   console.log('test n', n);
//           //   let s = key.sound;
//           //   console.log('test s', s);

//           //   const sound = new Tone.Players({ n: s }).toDestination();
//           //   console.log('test n after', n);
//           //   console.log('sound', sound);

//           //   return (
//           //     <SaxophoneKey
//           //       key={note} //react key
//           //       note={n}
//           //       //synth={synth}
//           //       minor={isMinor}
//           //       octave={octave}
//           //       index={(octave - 2) * 7 + key.idx}
//           //       sound={sound}
//           //       //index={key.idx}
//           //     />
//           //   );
//           // })
//         )}
//       </div>
//     </div>
//   );
// }

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);
