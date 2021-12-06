// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { lushboughInstrument } from './instruments/lushbough';
import { WaveformVisualizer } from './visualizers/Waveform';
<<<<<<< HEAD
import { lushboughVisualizer } from './visualizers/lushbough';
=======
import { CircleformVisualizer } from './visualizers/cctina516-Visualizer';
import { XylophoneInstrument } from './instruments/cctina516-Instrument';
import { ParticleVisualizer } from './visualizers/mai873-Particles';
import { TrumpetInstrument } from './instruments/mai873-Trumpet';
>>>>>>> 1b82e76e09ea66937339940bf334c7c9f9b1f294

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

<<<<<<< HEAD
const instruments = List([PianoInstrument, lushboughInstrument]); //ADD CORE HERE
const visualizers = List([WaveformVisualizer, lushboughVisualizer]); //add core here


=======
const instruments = List([
  PianoInstrument,
  XylophoneInstrument,
  TrumpetInstrument,
]);
const visualizers = List([
  WaveformVisualizer,
  CircleformVisualizer,
  ParticleVisualizer,
]);
>>>>>>> 1b82e76e09ea66937339940bf334c7c9f9b1f294
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
