import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    dropDepthSet(state, action) {
      const { dropDepth } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.files.push({
        dropDepth,
      });
    },
    dropInZoneSet(state, action) {
      const { inDropZone } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.files.push({
        inDropZone,
      });
    },
    addJsonToList(state, action) {
      // const files = action.files.map((file) => ({
      //   ...file,
      //   ratio: file.width / file.height,
      // }));
      // return {
      //   ...state,
      //   fileList: [...state.fileList, ...files],
      // };
    },
    todoToggled(state, action) {
      // Look for the specific nested object to update.
      // In this case, `action.payload` is the default field in the action,
      // and can hold the `id` value - no need for `action.id` separately
      const matchingTodo = state.files.find(
        (todo) => todo.id === action.payload
      );

      if (matchingTodo) {
        // Can directly "mutate" the nested object
        matchingTodo.completed = !matchingTodo.completed;
      }
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions;

// Export the slice reducer as the default export
export default todosSlice.reducer;
