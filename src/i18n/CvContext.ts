import { createContext, useContext } from 'react';

import { cvs } from '../content/cv';
import type { Cv } from '../content/cv';

// Every section reads the active language's copy; a context saves threading it through each component.
export const CvContext = createContext<Cv>(cvs.en);

export const useCv = (): Cv => useContext(CvContext);
