import React from 'react';
import { IList } from '../types/IList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { deleteList, setActiveListId } from '../redux/slices/notesSlice';

interface IListProps {
  list: IList;
}

const List: React.FC<IListProps> = ({ list }) => {
  const activeListId = useAppSelector((state) => state.notesSlice.activeListId);
  const dispatch = useAppDispatch();

  const handleActivation = () => {
    dispatch(setActiveListId(list.id));
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const confirm = window.confirm('Вы действительно хотите удалить лист?');
    if (confirm) dispatch(deleteList(list.id));
  };

  return (
    <li
      onClick={handleActivation}
      className={list.id === activeListId ? 'active' : ''}
    >
      <p>{list.title}</p>
      <div onClick={(e) => handleDelete(e)} className="delete-list">
        X
      </div>
    </li>
  );
};

export default List;
