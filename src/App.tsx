import { Aurora } from './proposals/Aurora/Aurora';
import { CaseStudies } from './proposals/CaseStudies/CaseStudies';
import { Contour } from './proposals/Contour/Contour';
import { Dithered } from './proposals/Dithered/Dithered';
import { Editorial } from './proposals/Editorial/Editorial';
import { ProposalPicker } from './proposals/ProposalPicker/ProposalPicker';

const proposals = {
    editorial: { label: '1 · Editorial', Page: Editorial },
    aurora: { label: '2 · Aurora', Page: Aurora },
    cases: { label: '3 · Case studies', Page: CaseStudies },
    contour: { label: '4 · Contour', Page: Contour },
    dithered: { label: '5 · Dithered', Page: Dithered },
} as const;

export type ProposalId = keyof typeof proposals;

const isProposal = (id: string | null): id is ProposalId => id !== null && id in proposals;

export function App() {
    const param = new URLSearchParams(window.location.search).get('p');
    const current: ProposalId = isProposal(param) ? param : 'editorial';
    const { Page } = proposals[current];

    return (
        <>
            <Page />
            <ProposalPicker
                current={current}
                options={Object.entries(proposals).map(([id, { label }]) => ({ id, label }))}
            />
        </>
    );
}
