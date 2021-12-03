// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { CircleformVisualizer } from './visualizers/cctina516-Visualizer';
import { XylophoneInstrument } from './instruments/cctina516-Instrument';

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

const instruments = List([PianoInstrument, XylophoneInstrument]);
const visualizers = List([WaveformVisualizer, CircleformVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
