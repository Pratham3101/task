import {create} from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(immer((set) => ({
  cells: Array(1000).fill("").map(() => Array(1000).fill("")),
  history: [],
  future: [],
  updateCell: (row, col, value) => set((state) => {
    state.history.push(state.cells);
    state.cells[row][col] = value;
    state.future = [];
  }),
  undo: () => set((state) => {
    if (state.history.length) {
      state.future.push(state.cells);
      state.cells = state.history.pop();
    }
  }),
  redo: () => set((state) => {
    if (state.future.length) {
      state.history.push(state.cells);
      state.cells = state.future.pop();
    }
  }),
})));

export default useStore;
