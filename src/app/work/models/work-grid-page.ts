///////////////////////////////////////////////////////////////////////////////
//            A simple interface for describing a page of projects           //
///////////////////////////////////////////////////////////////////////////////
import { Project } from './project';

export interface WorkGridPage {
    page: number,
    totalWeight: number,
    tabletRows: number,   // Number of grid rows to be used for a 2 column layout
    work: Project[],
    personal: Project[],
    other: Project[]
}
