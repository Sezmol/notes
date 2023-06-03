import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { notesAPI } from '../redux/services/NotesService';
import { changeListContent, changeListTitle } from '../redux/slices/notesSlice';
import Spinner from './Spinner';

const ListContent: React.FC = () => {
  const [updateSection, { isLoading, isSuccess }] =
    notesAPI.useUpdateSectionMutation();
  const dispatch = useAppDispatch();
  const { activeSection, activeListId } = useAppSelector(
    (state) => state.notesSlice
  );
  const list = activeSection.sectionBody.find(
    (list) => list.id === activeListId
  );

  const handleChangeTitle = (value: string) => {
    dispatch(changeListTitle(value));
  };

  const handleChangeContent = (value: string) => {
    dispatch(changeListContent(value));
  };

  return (
    <div className="list-content">
      <div className="list-content__header">
        <input
          value={list ? list.title : ''}
          onChange={(e) => handleChangeTitle(e.target.value)}
          type="text"
        />
        <button onClick={() => updateSection(activeSection)}>
          <div>
            {isLoading ? (
              <Spinner />
            ) : isSuccess ? (
              <img
                height={20}
                width={20}
                src="/img/check-mark.svg"
                alt="Сохранено"
              />
            ) : (
              <img height={20} width={20} src="/img/save.svg" alt="Сохранить" />
            )}
          </div>
          <p>Сохранить</p>
        </button>
      </div>
      <div className="list-content__body">
        <textarea
          value={list ? list.content : ''}
          placeholder="Сюда можете вводить свой текст..."
          onChange={(e) => handleChangeContent(e.target.value)}
          name="Text Content"
        ></textarea>
      </div>
    </div>
  );
};

export default ListContent;
