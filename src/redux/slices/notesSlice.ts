import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISection } from '../../types/ISection';
import { IList } from '../../types/IList';

interface INotesSliceState {
  activeSection: ISection;
  activeListId: number;
  burgerMenuIsVisible: boolean;
}

const initialState: INotesSliceState = {
  activeSection: {
    id: 0,
    sectionName: '',
    sectionBody: [
      {
        id: 0,
        title: '',
        content: '',
      },
    ],
  },
  activeListId: 0,
  burgerMenuIsVisible: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<ISection>) {
      state.activeSection = action.payload;
      state.activeListId = action.payload.sectionBody[0].id;
      state.burgerMenuIsVisible = false;
    },
    changeActiveSectionName(state, action: PayloadAction<string>) {
      state.activeSection.sectionName = action.payload;
    },
    setActiveListId(state, action: PayloadAction<number>) {
      state.activeListId = action.payload;
    },
    toggleBurgerMenu(state) {
      state.burgerMenuIsVisible = !state.burgerMenuIsVisible;
    },
    addNewList(state, action: PayloadAction<IList>) {
      state.activeSection.sectionBody.push(action.payload);
    },
    deleteList(state, action: PayloadAction<number>) {
      state.activeSection.sectionBody = state.activeSection.sectionBody.filter(
        (list) => list.id !== action.payload
      );
    },
    changeListTitle(state, action: PayloadAction<string>) {
      const index = state.activeSection.sectionBody.findIndex(
        (list) => list.id === state.activeListId
      );
      if (index !== -1) {
        state.activeSection.sectionBody[index].title = action.payload;
      }
    },
    changeListContent(state, action: PayloadAction<string>) {
      const index = state.activeSection.sectionBody.findIndex(
        (list) => list.id === state.activeListId
      );
      if (index !== -1) {
        state.activeSection.sectionBody[index].content = action.payload;
      }
    },
  },
});

export const {
  setActiveSection,
  setActiveListId,
  toggleBurgerMenu,
  addNewList,
  changeListTitle,
  changeListContent,
  deleteList,
  changeActiveSectionName,
} = notesSlice.actions;

export default notesSlice.reducer;
