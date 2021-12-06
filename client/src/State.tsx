// 3rd party
import { List, Map } from 'immutable';
import { FluteInstrument } from './instruments/Edreece-Afridi';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { lushboughInstrument } from './instruments/lushbough';
import { WaveformVisualizer } from './visualizers/Waveform';
import { CircleformVisualizer } from './visualizers/cctina516';
import { XylophoneInstrument } from './instruments/cctina516';
import { ParticleVisualizer } from './visualizers/mai873-Particles';
import { TrumpetInstrument } from './instruments/mai873-Trumpet';
import { lushboughVisualizer } from './visualizers/lushbough';
import { SinWaveVisualizer } from './visualizers/Edreece-AfridiVisualizer';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([
  PianoInstrument,
  XylophoneInstrument,
  TrumpetInstrument,
  lushboughInstrument,
  FluteInstrument,
]);
const visualizers = List([
  WaveformVisualizer,
  CircleformVisualizer,
  ParticleVisualizer,
  lushboughVisualizer,
  // SinWaveVisualizer
]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
