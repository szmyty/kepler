import { keplerGlReducer, KeplerGlState } from "@kepler.gl/reducers";

const customizedKeplerReducer = keplerGlReducer
  .initialState({
    uiState: {
      readOnly: true,
      mapControls: {
        visibleLayers: { show: false },
        mapLegend: { show: true, active: true },
        toggle3d: { show: false },
        splitMap: { show: false },
      },
    },
  })
  .plugin({
    HIDE_AND_SHOW_SIDE_PANEL: (state: KeplerGlState) => ({
      ...state,
      uiState: {
        ...state.uiState,
        readOnly: !state.uiState.readOnly,
      },
    }),
  });

export default customizedKeplerReducer;
