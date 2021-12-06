// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { lushboughInstrument } from './instruments/lushbough';
import { WaveformVisualizer } from './visualizers/Waveform';
import { lushboughVisualizer } from './visualizers/lushbough';

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

const instruments = List([PianoInstrument, lushboughInstrument]); //ADD CORE HERE
const visualizers = List([WaveformVisualizer, lushboughVisualizer]); //add core here


export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
