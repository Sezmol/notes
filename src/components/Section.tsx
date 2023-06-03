import React, { useState } from 'react';
import { ISection } from '../types/ISection';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setActiveSection } from '../redux/slices/notesSlice';

interface ISectionProps {
  section: ISection;
  updateSectionName: (section: ISection, newName: string) => void;
  deleteSection: (section: ISection) => void;
}

const Section: React.FC<ISectionProps> = ({
  section,
  deleteSection,
  updateSectionName,
}) => {
  const dispatch = useAppDispatch();
  const [isChanging, setIsChanging] = useState(false);
  const [inpValue, setInpValue] = useState(section.sectionName);
  const activeSectionId = useAppSelector(
    (state) => state.notesSlice.activeSection.id
  );
  const svgColor = activeSectionId === section.id ? '#000000' : '#ffffff';

  const changingName = () => {
    setIsChanging((prev) => !prev);
  };

  return (
    <li className={`section ${activeSectionId === section.id && 'active'}`}>
      {isChanging ? (
        <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} />
      ) : (
        <p
          onClick={() => dispatch(setActiveSection(section))}
          className="section-name"
        >
          {section.sectionName}
        </p>
      )}
      <div onClick={changingName} className="section-change">
        {isChanging ? (
          <svg
            onClick={() => updateSectionName(section, inpValue)}
            width="20px"
            height="20px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill={svgColor}
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-419.000000, -640.000000)"
                fill={svgColor}
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M370.21875,484 C370.21875,483.448 370.68915,483 371.26875,483 C371.84835,483 372.31875,483.448 372.31875,484 C372.31875,484.552 371.84835,485 371.26875,485 C370.68915,485 370.21875,484.552 370.21875,484 L370.21875,484 Z M381.9,497 C381.9,497.552 381.4296,498 380.85,498 L379.8,498 L379.8,494 C379.8,492.895 378.86025,492 377.7,492 L369.3,492 C368.13975,492 367.2,492.895 367.2,494 L367.2,498 L366.15,498 C365.5704,498 365.1,497.552 365.1,497 L365.1,487.044 C365.1,486.911 365.15565,486.784 365.2533,486.691 L367.2,484.837 L367.2,486 C367.2,487.105 368.13975,488 369.3,488 L377.7,488 C378.86025,488 379.8,487.105 379.8,486 L379.8,482 L380.85,482 C381.4296,482 381.9,482.448 381.9,483 L381.9,497 Z M377.7,498 L369.3,498 L369.3,495 C369.3,494.448 369.7704,494 370.35,494 L376.65,494 C377.2296,494 377.7,494.448 377.7,495 L377.7,498 Z M369.3,482.837 L370.17885,482 L377.7,482 L377.7,485 C377.7,485.552 377.2296,486 376.65,486 L370.35,486 C369.7704,486 369.3,485.552 369.3,485 L369.3,482.837 Z M381.9,480 L369.7347,480 C369.45645,480 369.18975,480.105 368.99235,480.293 L363.30765,485.707 C363.11025,485.895 363,486.149 363,486.414 L363,498 C363,499.105 363.93975,500 365.1,500 L381.9,500 C383.06025,500 384,499.105 384,498 L384,482 C384,480.895 383.06025,480 381.9,480 L381.9,480 Z"
                    id="save_item-[#1411]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill={svgColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H14M14 5H19M14 5V19M9 19H14M14 19H19"
              stroke={svgColor}
              strokeWidth="2"
            />
            <path
              d="M11 9H4C2.89543 9 2 9.89543 2 11V15H11"
              stroke={svgColor}
              strokeWidth="2"
            />
            <path
              d="M17 15H20C21.1046 15 22 14.1046 22 13V9H17"
              stroke={svgColor}
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
      {/* <img
        onClick={() => deleteSection(section)}
        className="section-delete"
        height={21}
        width={21}
        src="/img/delete.svg"
        alt="Удалить"
      /> */}

      <svg
        onClick={() => deleteSection(section)}
        className="section-delete"
        width="20px"
        height="20px"
        viewBox="0 -0.5 21 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-179.000000, -360.000000)"
            fill={svgColor}
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                id="delete-[#1487]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </li>
  );
};

export default Section;
