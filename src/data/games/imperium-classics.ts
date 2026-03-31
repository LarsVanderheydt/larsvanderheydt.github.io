import type { GameDefinition } from '../types'

// Designer: Nigel Buckle & Dávid Turczi | Publisher: Osprey Games | 2021
// Deck-building civilisation game, 1–4 players (solo via bot system)
// Solo: you vs 1 automated bot driven by a die + dynasty deck + nation reference table
// Power Card: two-sided; Side B recommended for new players
// 5 solo difficulty levels (easiest → hardest):
//   Chieftain: bot starts without a card in slot 5; 3–4 actions/turn
//   Warlord: same as Chieftain + top bot deck card discarded after each turn; 3–4 actions/turn
//   Imperator: standard rules; 4–5 actions/turn
//   Sovereign: Imperator + bot starts with bonus resources; scores 1 VP per 5 resources; 4–5 actions/turn
//   Overlord: Sovereign + slot marker 6 added; 5 actions/turn
// Campaign: win 5 games before losing 4; difficulty increases by 1 after each win
//   Win → add one earned commons card to your starting deck (or remove one starting card)
//   Lose → start next game with double resources (does not stack)
//   Beat Overlord on win #5 = campaign complete
//   Supreme Ruler mode: 5 wins all at Supreme Ruler level (above Overlord)
// Nations in Classics (8): Arthurians, Celts, Egyptians, Greeks, Macedonians, Romans, Utopians, Vikings
//   NOTE: the solo rulebook covers all 16 nations across both Classics and Legends boxes.
//   The 8 listed here are based on card ID codes (1ROM, 1CEL confirmed) and thematic grouping.
//   Verify against your physical box before playing the Nation Mastery achievement.

export const imperiumClassics: GameDefinition = {
  id: 'imperium-classics',
  name: 'Imperium: Classics',
  theme: { id: 'imperium-classics' },
  achievements: [
    {
      id: 'nation-mastery',
      title: 'Nation Mastery',
      description:
        'Win solo at Chieftain difficulty with each of the eight Classics nations. Use Power Card Side B (recommended for new players) and let each nation\'s unique mechanic shine without the pressure of harder bot behaviour.',
      steps: [
        {
          id: 'nation-romans',
          label: 'Romans',
          hint: 'The most combat-forward nation. Julius Caesar and the Roman military engine reward aggressive expansion into the market. Break through early and often — the Romans snowball hard once they hit Empire status.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Romans' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-greeks',
          label: 'Greeks',
          hint: 'A prosperity-focused civilisation. Greeks reward building a wide card engine and accumulating multiple glory cards. Don\'t overcommit to combat — the Greek path to victory runs through cultural dominance.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Greeks' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-egyptians',
          label: 'Egyptians',
          hint: 'Egyptians can garrison cards for later retrieval — a unique hand-management mechanic. Use garrison strategically to protect high-value cards from discard cycles and replay them at exactly the right moment.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Egyptians' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-macedonians',
          label: 'Macedonians',
          hint: 'A conquest-heavy deck with strong breakthrough potential. Macedonians build toward a powerful late game — focus on thinning your deck of barbarians early and accelerating through your development area.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Macedonians' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-celts',
          label: 'Celts',
          hint: 'The Celts play differently from their neighbours — their exhaust ability triggers when you acquire or break through, generating resources for other players (and yourself). In solo, that self-synergy is yours to exploit without sharing.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Celts' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-vikings',
          label: 'Vikings',
          hint: 'Vikings use a Zenith/Nadir cycle instead of a standard accession card and win by placing Harald Hardrada into their discard. Build toward that specific win condition from the start — it\'s a race against the bot\'s dynasty deck.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Vikings' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
          ],
        },
        {
          id: 'nation-arthurians',
          label: 'Arthurians',
          hint: 'The most unique Classics deck — quest cards replace standard development cards, King Arthur\'s Court is a permanent fixture, and the Graal card triggers game end when played. Win by completing quests, not by scoring VP through conventional means.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Arthurians' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
            { label: 'Note', value: 'Place King Arthur\'s Court face up below your power card during setup' },
          ],
        },
        {
          id: 'nation-utopians',
          label: 'Utopians',
          hint: 'No nation deck, no development cards — Utopians win by accumulating 24 journey tokens and triggering Shangri-La during a solstice. A completely different win condition from every other nation. The game end is entirely in your hands.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Nation', value: 'Utopians' },
            { label: 'Power Card', value: 'Side B (recommended)' },
            { label: 'Difficulty', value: 'Chieftain' },
            { label: 'Note', value: 'Place Visions of Shangri-La on top of Gates of Shangri-La during setup' },
          ],
        },
      ],
    },
    {
      id: 'difficulty-ascension',
      title: 'Difficulty Ascension',
      description:
        'Win solo at each of the five difficulty levels. The bot takes more actions and gains more resources at higher tiers — your deck efficiency and action economy must scale to match.',
      steps: [
        {
          id: 'difficulty-chieftain',
          label: 'Chieftain',
          hint: 'Slot 5 starts empty — the bot effectively has one fewer card active at game start. Use this window to establish your engine before the bot reaches Empire status. Power Card Side B recommended.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Chieftain' },
            { label: 'Bot adjustment', value: 'Slot 5 starts empty; 3–4 actions per turn' },
          ],
        },
        {
          id: 'difficulty-warlord',
          label: 'Warlord',
          hint: 'The bot now discards the top of its deck after each refill — its deck cycles faster, reaching the dynasty deck sooner. Prioritise triggering game end conditions on your schedule, not the bot\'s.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Warlord' },
            { label: 'Bot adjustment', value: 'Slot 5 starts empty + discards top bot deck card each turn; 3–4 actions per turn' },
          ],
        },
        {
          id: 'difficulty-imperator',
          label: 'Imperator',
          hint: 'Standard rules — no setup adjustments. The bot now reliably takes 4–5 actions per turn, making it meaningfully more aggressive than Warlord. Your deck must be consistent; a hand of dead cards is punishing at this tier.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Imperator' },
            { label: 'Bot adjustment', value: 'No adjustments; 4–5 actions per turn' },
          ],
        },
        {
          id: 'difficulty-sovereign',
          label: 'Sovereign',
          hint: 'The bot starts with bonus resources (3 materials, 2 gold, 1 VP) and scores 1 VP per 5 combined resources instead of per 10. It converts its resource pile into VP twice as efficiently — pressure it before it reaches that threshold.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Sovereign' },
            { label: 'Bot adjustment', value: 'Starts with 3 materials + 2 gold + 1 VP; 1 VP per 5 resources; 4–5 actions per turn' },
          ],
        },
        {
          id: 'difficulty-overlord',
          label: 'Overlord',
          hint: 'Slot marker 6 is added — the bot has a sixth active card slot and takes exactly 5 actions per turn. Its resource efficiency from Sovereign level remains. This is the ceiling of the standard solo mode and the final hurdle of a campaign.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Difficulty', value: 'Overlord' },
            { label: 'Bot adjustment', value: 'Slot 6 added; 5 actions per turn; all Sovereign rules apply' },
          ],
        },
      ],
    },
    {
      id: 'the-campaign',
      title: 'The Campaign',
      description:
        'Win 5 games before losing 4. Choose one nation and play as it for every game. After each win, add one earned commons card to your permanent starting deck (or remove one). Difficulty increases by 1 after each win. Beat Overlord on win #5 to complete the campaign.',
      steps: [
        {
          id: 'campaign-win-1',
          label: 'Campaign Win 1 — vs Chieftain',
          hint: 'Your opening game. Choose a nation you know well — this is not the place to experiment. Record your score and the card you add (or remove) from your starting deck. Your choice here shapes the rest of the campaign.',
          setup: [
            { label: 'Mode', value: 'Solo — Campaign' },
            { label: 'Difficulty', value: 'Chieftain' },
            { label: 'After win', value: 'Add or remove one commons card; record in campaign log' },
          ],
        },
        {
          id: 'campaign-win-2',
          label: 'Campaign Win 2 — vs Warlord',
          hint: 'Your deck now includes one extra starting card. Consider how that card interacts with your nation\'s core strategy. The bot cycles faster at Warlord — push your win condition harder than at Chieftain.',
          setup: [
            { label: 'Mode', value: 'Solo — Campaign' },
            { label: 'Difficulty', value: 'Warlord' },
            { label: 'After win', value: 'Add or remove one commons card; record in campaign log' },
          ],
        },
        {
          id: 'campaign-win-3',
          label: 'Campaign Win 3 — vs Imperator',
          hint: 'The midpoint. Your starting deck has evolved over two wins — assess whether it\'s more consistent or bloated. The bot now takes 4–5 actions; sloppy play gets punished. This is where failed campaigns most often end.',
          setup: [
            { label: 'Mode', value: 'Solo — Campaign' },
            { label: 'Difficulty', value: 'Imperator' },
            { label: 'After win', value: 'Add or remove one commons card; record in campaign log' },
          ],
        },
        {
          id: 'campaign-win-4',
          label: 'Campaign Win 4 — vs Sovereign',
          hint: 'One game from the end. The bot starts with bonus resources and converts them to VP at double efficiency. Speed matters — the longer this game runs, the more the bot\'s resource advantage compounds.',
          setup: [
            { label: 'Mode', value: 'Solo — Campaign' },
            { label: 'Difficulty', value: 'Sovereign' },
            { label: 'After win', value: 'Add or remove one commons card; record in campaign log' },
          ],
        },
        {
          id: 'campaign-win-5',
          label: 'Campaign Win 5 — vs Overlord',
          hint: 'The final game. Your starting deck has been refined across four wins. The bot has slot 6, 5 guaranteed actions, and Sovereign-level efficiency. Win this and the campaign is complete.',
          setup: [
            { label: 'Mode', value: 'Solo — Campaign' },
            { label: 'Difficulty', value: 'Overlord' },
            { label: 'Win condition', value: 'Campaign complete!' },
          ],
        },
      ],
    },
  ],
}
