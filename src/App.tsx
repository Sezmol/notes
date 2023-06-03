import React, { useEffect } from 'react';
import { notesAPI } from './redux/services/NotesService';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Header from './components/Header';
import ListsMenu from './components/ListsMenu';
import ListContent from './components/ListContent';
import { setActiveSection } from './redux/slices/notesSlice';

const Notes: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = notesAPI.useFetchAllNotesQuery(null);
  const sectionId = useAppSelector(
    (state) => state.notesSlice.activeSection.id
  );

  useEffect(() => {
    if (data) {
      if (sectionId === 0) dispatch(setActiveSection(data[0]));
    }
  }, [data]);

  return (
    <div className="app">
      <Header />
      <div className="list">
        <ListsMenu />
        <ListContent />
      </div>
    </div>
  );
};

export default Notes;
