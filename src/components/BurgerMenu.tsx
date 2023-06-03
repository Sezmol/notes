import React from 'react';
import Section from './Section';
import { ISection } from '../types/ISection';
import { notesAPI } from '../redux/services/NotesService';

interface BurgerMenuProps {
  isVisible: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isVisible }) => {
  const { data: sections } = notesAPI.useFetchAllNotesQuery(null);
  const [createSection, {}] = notesAPI.useCreateSectionMutation();
  const [deleteSection, {}] = notesAPI.useDeleteSectionMutation();
  const [updateSection, {}] = notesAPI.useUpdateSectionMutation();

  const handleCreateSection = async () => {
    const newSection: ISection = {
      id: sections ? sections[sections?.length - 1].id + 1 : 1,
      sectionName: 'Новая секция',
      sectionBody: [
        {
          id: 1,
          title: 'Моя первая заметка',
          content: '',
        },
      ],
    };
    await createSection(newSection);
  };

  const handleDeleteSection = async (section: ISection) => {
    await deleteSection(section);
  };

  const handleUpdateName = async (section: ISection, newName: string) => {
    const newSection = { ...section, sectionName: newName };
    await updateSection(newSection);
  };

  return (
    <div className={`burger-menu ${isVisible && 'burger-menu__active'}`}>
      <h2>Секции</h2>
      <div onClick={handleCreateSection} className="add-section">
        Добавить секцию
      </div>
      <ul className="sections">
        {sections &&
          sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              updateSectionName={handleUpdateName}
              deleteSection={handleDeleteSection}
            />
          ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
