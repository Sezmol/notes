import { IList } from './IList';

export interface ISection {
  id: number;
  sectionName: string;
  sectionBody: IList[];
}
