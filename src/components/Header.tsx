import React from 'react';
import BurgerMenu from './BurgerMenu';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleBurgerMenu } from '../redux/slices/notesSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeSection, burgerMenuIsVisible } = useAppSelector(
    (state) => state.notesSlice
  );

  return (
    <header>
      <BurgerMenu isVisible={burgerMenuIsVisible} />
      <div
        onClick={() => dispatch(toggleBurgerMenu())}
        className="burger-button"
      >
        <div className="burger-slice"></div>
        <div className="burger-slice"></div>
        <div className="burger-slice"></div>
      </div>
      <h1>{activeSection.sectionName}</h1>
    </header>
  );
};

export default Header;
