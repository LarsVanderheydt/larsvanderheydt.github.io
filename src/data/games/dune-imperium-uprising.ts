import type { GameDefinition } from '../types'

// Designer: Paul Dennen | Publisher: Dire Wolf Digital / Gale Force Nine | 2023
// Deck-building worker placement, 1–4 players (solo via Rivals system)
// Solo: you vs 2 automated Rivals driven by the House Hagal deck
// Each Rival card has a Swordmaster value — lower = harder Rival
//   Recommended first solo: Rivals with Swordmaster value 8 or higher
// 4 solo difficulty levels:
//   Mercenary (Novice): Rivals start with no garrison troops; you start with 1 Intrigue card
//   Sardaukar (Veteran): No adjustments — standard play
//   Mentat (Expert): Adds Brutal Escalation + Expert Deployment + Smart Politics variants
//   Kwisatz Haderach (Expert+): As Mentat, plus you cannot gain a Swordmaster during the game
// Leaders (non-CHOAM): Lady Margot Fenring (●), Gurney Halleck (●), Princess Irulan (●●),
//   Lady Jessica / Reverend Mother Jessica (●●), Feyd-Rautha Harkonnen (●●●), + others
// Shaddam Corrino IV requires the CHOAM module — not used in standard solo
// Solo variant: Dice-Based Imperium Row Churn (optional) — roll 2d6 after each Reveal turn
//   to remove cards from the Imperium Row, simulating Rivals buying from the row

export const duneImperiumUprising: GameDefinition = {
  id: 'dune-imperium-uprising',
  name: 'Dune: Imperium — Uprising',
  theme: { id: 'dune-imperium-uprising' },
  achievements: [
    {
      id: 'learning-the-spice-trade',
      title: 'Learning the Spice Trade',
      description:
        'Win solo with each of the core leaders at Mercenary difficulty. Use Rivals with Swordmaster values of 8 or higher — the goal is to learn each leader\'s unique mechanics without fighting the hardest Rivals at the same time.',
      steps: [
        {
          id: 'leader-margot',
          label: 'Lady Margot Fenring',
          hint: 'The simplest leader to learn on. Her ability triggers when reaching 2 Influence with any Faction — including when passing 2 in a single gain. Focus on Faction Influence early to unlock board spaces and compound your Victory Point gains.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Leader', value: 'Lady Margot Fenring (● — 1 icon)' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rivals', value: 'Swordmaster value 8 or higher (recommended)' },
          ],
        },
        {
          id: 'leader-gurney',
          label: 'Gurney Halleck',
          hint: 'Gurney\'s ability references your military strength during your Reveal turn. Build a deck with consistent sword output to maximise his bonus. A strong opening Combat run locks down Conflict rewards that compound into late-game VP.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Leader', value: 'Gurney Halleck (● — 1 icon)' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rivals', value: 'Swordmaster value 8 or higher (recommended)' },
          ],
        },
        {
          id: 'leader-irulan',
          label: 'Princess Irulan',
          hint: 'The reverse side of the Lady Margot Fenring card — a distinct playstyle at higher complexity. Irulan leans into political connections and the Landsraad. Use Mercenary difficulty to understand how her abilities chain before adding Rival pressure.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Leader', value: 'Princess Irulan (●● — 2 icons, back of Margot card)' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rivals', value: 'Swordmaster value 8 or higher (recommended)' },
          ],
        },
        {
          id: 'leader-jessica',
          label: 'Lady Jessica',
          hint: 'Start with this side face up (not Reverend Mother Jessica). Lady Jessica flips mid-game — learn when to flip for maximum effect. Her Bene Gesserit synergies reward building a tight card engine around Influence and spy placement.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Leader', value: 'Lady Jessica / Reverend Mother Jessica (●● — 2 icons)' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rivals', value: 'Swordmaster value 8 or higher (recommended)' },
          ],
        },
        {
          id: 'leader-feyd',
          label: 'Feyd-Rautha Harkonnen',
          hint: 'Place the Feyd token on the leftmost Training track space during setup. Advancing the track unlocks increasingly powerful abilities — the most complex leader in the core set. Even at Mercenary difficulty, mastering the Training track takes several games.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Leader', value: 'Feyd-Rautha Harkonnen (●●● — 3 icons)' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rivals', value: 'Swordmaster value 8 or higher (recommended)' },
            { label: 'Note', value: 'Place Feyd token on leftmost Training track space during setup' },
          ],
        },
      ],
    },
    {
      id: 'difficulty-ascension',
      title: 'Difficulty Ascension',
      description:
        'Win solo at each of the four difficulty levels. Use any leader and any Rival combination — the focus is on adapting to escalating Rival behaviour at each tier.',
      steps: [
        {
          id: 'difficulty-mercenary',
          label: 'Mercenary — First Win',
          hint: 'Rivals start with no garrison troops and you begin with a bonus Intrigue card. Use this to learn how the House Hagal deck drives Rival decisions — understand which board spaces they contest before climbing to higher difficulties.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Mercenary (Novice)' },
            { label: 'Rival Garrison', value: 'None (Rivals start with 0 troops)' },
            { label: 'Bonus', value: 'You start with 1 Intrigue card' },
          ],
        },
        {
          id: 'difficulty-sardaukar',
          label: 'Sardaukar — Veteran',
          hint: 'No setup adjustments — this is the baseline difficulty. Rivals start with a full garrison and contest Conflicts from round 1. Deck construction decisions matter more here; a slow start against a garrisoned Rival is very hard to recover from.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Sardaukar (Veteran)' },
            { label: 'Adjustments', value: 'None — standard play' },
          ],
        },
        {
          id: 'difficulty-mentat',
          label: 'Mentat — Expert',
          hint: 'Three variants are now required: Brutal Escalation (Rivals flip 2 combat cards in Conflict III), Expert Deployment (Rivals hold back troops when already winning), and Smart Politics (Rivals ignore Faction spaces where they\'re already dominant). Read all three rules before starting.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Mentat (Expert)' },
            { label: 'Variant 1', value: 'Brutal Escalation — Rivals flip 2 Hagal cards in Conflict III' },
            { label: 'Variant 2', value: 'Expert Deployment — Rivals conserve troops when leading' },
            { label: 'Variant 3', value: 'Smart Politics — Rivals skip dominated Faction spaces' },
          ],
        },
        {
          id: 'difficulty-kwisatz-haderach',
          label: 'Kwisatz Haderach — Expert+',
          hint: 'The hardest difficulty: all Mentat variants apply, and you cannot gain a Swordmaster at any point during the game. Your third Agent is permanently locked — plan your entire strategy around two Agents only. Every Agent placement must count twice as much.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Kwisatz Haderach (Expert+)' },
            { label: 'Restriction', value: 'You cannot gain your Swordmaster this game' },
            { label: 'Includes', value: 'All three Mentat variants' },
          ],
        },
      ],
    },
    {
      id: 'advanced-play',
      title: 'Advanced Play',
      description:
        'Three challenges that push beyond standard difficulty rules. Each adds a layer of constraint or complexity on top of the difficulty setting.',
      steps: [
        {
          id: 'dice-churn',
          label: 'Dice-Based Imperium Row Churn',
          hint: 'After each of your Reveal turns, roll 2d6 and remove the corresponding Imperium Row card (position counted left to right; ignore 6s; remove only one card on doubles). The row churns faster — plan your acquisitions earlier and don\'t assume a card will still be available next turn.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Variant', value: 'Dice-Based Imperium Row Churn' },
            { label: 'Trigger', value: 'Roll 2d6 after each of your Reveal turns' },
            { label: 'Difficulty', value: 'Sardaukar or higher (recommended)' },
          ],
        },
        {
          id: 'hard-rivals',
          label: 'Hard Rivals',
          hint: 'Select two Rivals with the lowest available Swordmaster values — lower values mean the Rival gains its Swordmaster faster and begins spending resources on Victory Points sooner. The race to 10 VP compresses dramatically.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Rivals', value: 'Both with the lowest Swordmaster values you have available' },
            { label: 'Difficulty', value: 'Sardaukar or higher' },
          ],
        },
        {
          id: 'ultimate-challenge',
          label: 'Kwisatz Haderach + Hard Rivals + Dice Churn',
          hint: 'All constraints at once: hardest difficulty (no Swordmaster for you), two low-value Rivals gaining their Swordmasters fast, and the Imperium Row churning after every turn. This is the ceiling of the solo mode. Bring your sharpest deck and tightest play.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Kwisatz Haderach (Expert+)' },
            { label: 'Rivals', value: 'Both with the lowest Swordmaster values available' },
            { label: 'Variant', value: 'Dice-Based Imperium Row Churn active' },
          ],
        },
      ],
    },
  ],
}
