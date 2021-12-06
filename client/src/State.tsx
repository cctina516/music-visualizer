// 3rd party
import { List, Map } from 'immutable';
import { FluteInstrument } from './instruments/Edreece-Afridi';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
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

const instruments = List([PianoInstrument, FluteInstrument]);
const visualizers = List([WaveformVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
