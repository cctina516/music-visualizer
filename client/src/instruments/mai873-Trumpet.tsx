// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useEffect } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import { OmniOscillatorOptions } from 'tone/Tone/source/oscillator/OscillatorInterface';
import { RecursivePartial } from 'tone/Tone/core/util/Interface';
import image from './../img/trumpet-png.png';
/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Trumpet.
 ** ------------------------------------------------------------------------ */

interface TrumpetKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the Trumpet key
}

export function TrumpetKey({
  note,
  synth,
  minor,
  index,
}: TrumpetKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the Trumpet.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-black black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    />
  );
}

function Trumpet({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = () => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();
      return new Tone.Synth({
        volume: 10,
        detune: 0,
        portamento: 0,
        envelope: {
          attack: 1,
          attackCurve: 'exponential',
          decay: 1,
          decayCurve: 'exponential',
          release: 4,
          releaseCurve: 'exponential',
          sustain: 0,
        },
        oscillator: {
          partialCount: 6,
          partials: [
            1, 0.7060667438271604, 0.19753086419753096, 0.0625, 0.00390625, 0,
          ],
          phase: 14.999999999999998,
          type: 'custom',
        } as RecursivePartial<OmniOscillatorOptions>,
      }).toDestination();
    });
  };

  useEffect(setOscillator, [setSynth]);

  return (
    <div className='pv4'>
      <div className={'trumpetImage'}>
        <img src={image} alt={'Trumpet'} />
      </div>
      <div className='relative dib h4 w-100 ml4'>
        {Range(2, 7).map((octave) =>
          keys.map((key) => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave}`;
            return (
              <TrumpetKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export const TrumpetInstrument = new Instrument('Mai873', Trumpet);
