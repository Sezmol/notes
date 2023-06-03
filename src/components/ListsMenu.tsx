import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { notesAPI } from '../redux/services/NotesService';
import { addNewList } from '../redux/slices/notesSlice';
import { IList } from '../types/IList';
import List from './List';
import Spinner from './Spinner';

const ListsMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = notesAPI.useFetchAllNotesQuery(null);
  const [searchValue, setSearchValue] = useState('');
  const activeSection = useAppSelector(
    (state) => state.notesSlice.activeSection
  );

  const handleAddNewList = () => {
    const lastListId =
      activeSection.sectionBody[activeSection.sectionBody.length - 1]?.id || 1;
    const newList: IList = {
      id: lastListId + 1,
      title: 'Новый лист',
      content: '',
    };
    dispatch(addNewList(newList));
  };

  const filteredLists = activeSection?.sectionBody?.filter((list) => {
    const searchInput = searchValue.toLowerCase();
    const title = list.title.toLowerCase();
    const content = list.content.toLowerCase();

    return title.includes(searchInput) || content.includes(searchInput);
  });

  return (
    <div className="lists-menu">
      <div className="lists-menu__header">
        <div className="seacrh">
          <img src="/img/search.svg" alt="Search" height={30} width={20} />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Поиск листов..."
          />
        </div>
        <img
          onClick={handleAddNewList}
          className="add-new-list"
          src="/img/add.svg"
          alt="Add"
          height={30}
          width={30}
        />
      </div>
      <ul className="lists-menu__container">
        {isLoading ? (
          <Spinner width={40} height={40} />
        ) : filteredLists.length ? (
          filteredLists.map((list) => <List key={list.id} list={list} />)
        ) : (
          <div>Листы не найдены...</div>
        )}
      </ul>
    </div>
  );
};

export default ListsMenu;
