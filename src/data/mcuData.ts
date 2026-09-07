export interface MCUItem {
  id: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  releaseOrder: number;
  chronologicalOrder: number;
  type: 'film' | 'series' | 'one-shot';
  onDisneyPlus: boolean;
  phase: number;
}

export const mcuData: MCUItem[] = [
  // --- PHASE 1 ---
  {
    id: 'captain-america-the-first-avenger-2011',
    title: 'Captain America: The First Avenger',
    releaseDate: '2011-07-22',
    releaseOrder: 5,
    chronologicalOrder: 1,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'agent-carter-one-shot-2013',
    title: 'Agent Carter (One-Shot)',
    releaseDate: '2013-09-03',
    releaseOrder: 8,
    chronologicalOrder: 2,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'captain-marvel-2019',
    title: 'Captain Marvel',
    releaseDate: '2019-03-08',
    releaseOrder: 21,
    chronologicalOrder: 3,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'iron-man-2008',
    title: 'Iron Man',
    releaseDate: '2008-05-02',
    releaseOrder: 1,
    chronologicalOrder: 4,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'iron-man-2-2010',
    title: 'Iron Man 2',
    releaseDate: '2010-05-07',
    releaseOrder: 3,
    chronologicalOrder: 5,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'the-incredible-hulk-2008',
    title: 'The Incredible Hulk',
    releaseDate: '2008-06-13',
    releaseOrder: 2,
    chronologicalOrder: 6,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'the-consultant-2011',
    title: 'The Consultant (One-Shot)',
    releaseDate: '2011-09-13',
    releaseOrder: 6,
    chronologicalOrder: 7,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'a-funny-thing-happened-2011',
    title: 'A Funny Thing Happened on the Way to Thor\'s Hammer (One-Shot)',
    releaseDate: '2011-10-25',
    releaseOrder: 7,
    chronologicalOrder: 8,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'thor-2011',
    title: 'Thor',
    releaseDate: '2011-05-06',
    releaseOrder: 4,
    chronologicalOrder: 9,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'the-avengers-2012',
    title: 'The Avengers',
    releaseDate: '2012-05-04',
    releaseOrder: 9,
    chronologicalOrder: 10,
    type: 'film',
    onDisneyPlus: true,
    phase: 1
  },
  {
    id: 'item-47-2012',
    title: 'Item 47 (One-Shot)',
    releaseDate: '2012-09-25',
    releaseOrder: 10,
    chronologicalOrder: 11,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 1
  },

  // --- PHASE 2 ---
  {
    id: 'thor-the-dark-world-2013',
    title: 'Thor: The Dark World',
    releaseDate: '2013-11-08',
    releaseOrder: 12,
    chronologicalOrder: 12,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'iron-man-3-2013',
    title: 'Iron Man 3',
    releaseDate: '2013-05-03',
    releaseOrder: 11,
    chronologicalOrder: 13,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'all-hail-the-king-2014',
    title: 'All Hail the King (One-Shot)',
    releaseDate: '2014-02-04',
    releaseOrder: 13,
    chronologicalOrder: 14,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'captain-america-the-winter-soldier-2014',
    title: 'Captain America: The Winter Soldier',
    releaseDate: '2014-04-04',
    releaseOrder: 14,
    chronologicalOrder: 15,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'guardians-of-the-galaxy-2014',
    title: 'Guardians of the Galaxy',
    releaseDate: '2014-08-01',
    releaseOrder: 15,
    chronologicalOrder: 16,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'guardians-of-the-galaxy-vol-2-2017',
    title: 'Guardians of the Galaxy Vol. 2',
    releaseDate: '2017-05-05',
    releaseOrder: 17,
    chronologicalOrder: 17,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'i-am-groot-s1-2022',
    title: 'I Am Groot (Season 1)',
    releaseDate: '2022-08-10',
    releaseOrder: 38,
    chronologicalOrder: 18,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'i-am-groot-s2-2023',
    title: 'I Am Groot (Season 2)',
    releaseDate: '2023-09-06',
    releaseOrder: 46,
    chronologicalOrder: 19,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'avengers-age-of-ultron-2015',
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015-05-01',
    releaseOrder: 16,
    chronologicalOrder: 20,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },
  {
    id: 'ant-man-2015',
    title: 'Ant-Man',
    releaseDate: '2015-07-17',
    releaseOrder: 18,
    chronologicalOrder: 21,
    type: 'film',
    onDisneyPlus: true,
    phase: 2
  },

  // --- PHASE 3 ---
  {
    id: 'captain-america-civil-war-2016',
    title: 'Captain America: Civil War',
    releaseDate: '2016-05-06',
    releaseOrder: 19,
    chronologicalOrder: 22,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'black-widow-2021',
    title: 'Black Widow',
    releaseDate: '2021-07-09',
    releaseOrder: 27,
    chronologicalOrder: 23,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'black-panther-2018',
    title: 'Black Panther',
    releaseDate: '2018-02-16',
    releaseOrder: 22,
    chronologicalOrder: 24,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'spider-man-homecoming-2017',
    title: 'Spider-Man: Homecoming',
    releaseDate: '2017-07-07',
    releaseOrder: 20,
    chronologicalOrder: 25,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'doctor-strange-2016',
    title: 'Doctor Strange',
    releaseDate: '2016-11-04',
    releaseOrder: 23,
    chronologicalOrder: 26,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'thor-ragnarok-2017',
    title: 'Thor: Ragnarok',
    releaseDate: '2017-11-03',
    releaseOrder: 24,
    chronologicalOrder: 27,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'ant-man-and-the-wasp-2018',
    title: 'Ant-Man and the Wasp',
    releaseDate: '2018-07-06',
    releaseOrder: 25,
    chronologicalOrder: 28,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'avengers-infinity-war-2018',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseOrder: 26,
    chronologicalOrder: 29,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'avengers-endgame-2019',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseOrder: 28,
    chronologicalOrder: 30,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },

  // --- PHASE 4 ---
  {
    id: 'loki-s1-2021',
    title: 'Loki (Season 1)',
    releaseDate: '2021-06-09',
    releaseOrder: 30,
    chronologicalOrder: 31,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'what-if-s1-2021',
    title: 'What If...? (Season 1)',
    releaseDate: '2021-08-11',
    releaseOrder: 32,
    chronologicalOrder: 32,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'wandavision-2021',
    title: 'WandaVision',
    releaseDate: '2021-01-15',
    releaseOrder: 29,
    chronologicalOrder: 33,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'the-falcon-and-the-winter-soldier-2021',
    title: 'The Falcon and the Winter Soldier',
    releaseDate: '2021-03-19',
    releaseOrder: 31,
    chronologicalOrder: 34,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'spider-man-far-from-home-2019',
    title: 'Spider-Man: Far From Home',
    releaseDate: '2019-07-02',
    releaseOrder: 33,
    chronologicalOrder: 35,
    type: 'film',
    onDisneyPlus: true,
    phase: 3
  },
  {
    id: 'shang-chi-2021',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    releaseDate: '2021-09-03',
    releaseOrder: 34,
    chronologicalOrder: 36,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'eternals-2021',
    title: 'Eternals',
    releaseDate: '2021-11-05',
    releaseOrder: 35,
    chronologicalOrder: 37,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'spider-man-no-way-home-2021',
    title: 'Spider-Man: No Way Home',
    releaseDate: '2021-12-17',
    releaseOrder: 36,
    chronologicalOrder: 38,
    type: 'film',
    onDisneyPlus: false,
    phase: 4
  },
  {
    id: 'doctor-strange-in-the-multiverse-of-madness-2022',
    title: 'Doctor Strange in the Multiverse of Madness',
    releaseDate: '2022-05-06',
    releaseOrder: 37,
    chronologicalOrder: 39,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'hawkeye-2021',
    title: 'Hawkeye',
    releaseDate: '2021-11-24',
    releaseOrder: 39,
    chronologicalOrder: 40,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'moon-knight-2022',
    title: 'Moon Knight',
    releaseDate: '2022-03-30',
    releaseOrder: 40,
    chronologicalOrder: 41,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'black-panther-wakanda-forever-2022',
    title: 'Black Panther: Wakanda Forever',
    releaseDate: '2022-11-11',
    releaseOrder: 41,
    chronologicalOrder: 42,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'echo-2024',
    title: 'Echo',
    releaseDate: '2024-01-09',
    releaseOrder: 48,
    chronologicalOrder: 43,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'she-hulk-attorney-at-law-2022',
    title: 'She-Hulk: Attorney at Law',
    releaseDate: '2022-08-18',
    releaseOrder: 42,
    chronologicalOrder: 44,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'ms-marvel-2022',
    title: 'Ms. Marvel',
    releaseDate: '2022-06-08',
    releaseOrder: 43,
    chronologicalOrder: 45,
    type: 'series',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'thor-love-and-thunder-2022',
    title: 'Thor: Love and Thunder',
    releaseDate: '2022-07-08',
    releaseOrder: 44,
    chronologicalOrder: 46,
    type: 'film',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'werewolf-by-night-2022',
    title: 'Werewolf by Night',
    releaseDate: '2022-10-07',
    releaseOrder: 45,
    chronologicalOrder: 47,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 4
  },
  {
    id: 'the-guardians-of-the-galaxy-holiday-special-2022',
    title: 'The Guardians of the Galaxy Holiday Special',
    releaseDate: '2022-11-25',
    releaseOrder: 47,
    chronologicalOrder: 48,
    type: 'one-shot',
    onDisneyPlus: true,
    phase: 4
  },

  // --- PHASE 5 ---
  {
    id: 'ant-man-and-the-wasp-quantumania-2023',
    title: 'Ant-Man and the Wasp: Quantumania',
    releaseDate: '2023-02-17',
    releaseOrder: 49,
    chronologicalOrder: 49,
    type: 'film',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'guardians-of-the-galaxy-vol-3-2023',
    title: 'Guardians of the Galaxy Vol. 3',
    releaseDate: '2023-05-05',
    releaseOrder: 50,
    chronologicalOrder: 50,
    type: 'film',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'secret-invasion-2023',
    title: 'Secret Invasion',
    releaseDate: '2023-06-21',
    releaseOrder: 51,
    chronologicalOrder: 51,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'the-marvels-2023',
    title: 'The Marvels',
    releaseDate: '2023-11-10',
    releaseOrder: 52,
    chronologicalOrder: 52,
    type: 'film',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'loki-s2-2023',
    title: 'Loki (Season 2)',
    releaseDate: '2023-10-05',
    releaseOrder: 53,
    chronologicalOrder: 53,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'what-if-s2-2023',
    title: 'What If...? (Season 2)',
    releaseDate: '2023-12-22',
    releaseOrder: 54,
    chronologicalOrder: 54,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'deadpool-and-wolverine-2024',
    title: 'Deadpool & Wolverine',
    releaseDate: '2024-07-26',
    releaseOrder: 55,
    chronologicalOrder: 55,
    type: 'film',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'agatha-all-along-2024',
    title: 'Agatha All Along',
    releaseDate: '2024-09-18',
    releaseOrder: 56,
    chronologicalOrder: 56,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'what-if-s3-2024',
    title: 'What If...? (Season 3)',
    releaseDate: '2024-12-22',
    releaseOrder: 57,
    chronologicalOrder: 57,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'captain-america-brave-new-world-2025',
    title: 'Captain America: Brave New World',
    releaseDate: '2025-02-14',
    releaseOrder: 58,
    chronologicalOrder: 58,
    type: 'film',
    onDisneyPlus: false,
    phase: 5
  },
  {
    id: 'daredevil-born-again-2025',
    title: 'Daredevil: Born Again',
    releaseDate: '2025-03-04',
    releaseOrder: 59,
    chronologicalOrder: 59,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'thunderbolts-2025',
    title: 'Thunderbolts*',
    releaseDate: '2025-05-02',
    releaseOrder: 60,
    chronologicalOrder: 60,
    type: 'film',
    onDisneyPlus: false,
    phase: 5
  },
  {
    id: 'ironheart-2025',
    title: 'Ironheart',
    releaseDate: '2025-06-24',
    releaseOrder: 61,
    chronologicalOrder: 61,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'eyes-of-wakanda-2025',
    title: 'Eyes of Wakanda',
    releaseDate: '2025-08-06',
    releaseOrder: 62,
    chronologicalOrder: 62,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'marvel-zombies-2025',
    title: 'Marvel Zombies',
    releaseDate: '2025-10-03',
    releaseOrder: 63,
    chronologicalOrder: 63,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },
  {
    id: 'wonder-man-2025',
    title: 'Wonder Man',
    releaseDate: '2025-12-01',
    releaseOrder: 64,
    chronologicalOrder: 64,
    type: 'series',
    onDisneyPlus: true,
    phase: 5
  },

  // --- PHASE 6 & BEYOND (THE MULTIVERSE SAGA FINALE) ---
  {
    id: 'the-fantastic-four-first-steps-2025',
    title: 'The Fantastic Four: First Steps',
    releaseDate: '2025-07-25',
    releaseOrder: 65,
    chronologicalOrder: 65,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'spider-man-brand-new-day-2026',
    title: 'Spider-Man 4: Brand New Day',
    releaseDate: '2026-07-24',
    releaseOrder: 66,
    chronologicalOrder: 66,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'vision-quest-2026',
    title: 'Vision Quest',
    releaseDate: '2026-10-14',
    releaseOrder: 67,
    chronologicalOrder: 67,
    type: 'series',
    onDisneyPlus: true,
    phase: 6
  },
  {
    id: 'avengers-doomsday-2026',
    title: 'Avengers: Doomsday',
    releaseDate: '2026-12-18',
    releaseOrder: 68,
    chronologicalOrder: 68,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'avengers-secret-wars-2027',
    title: 'Avengers: Secret Wars',
    releaseDate: '2027-05-07',
    releaseOrder: 69,
    chronologicalOrder: 69,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'blade-future',
    title: 'Blade',
    releaseDate: '2027-11-05',
    releaseOrder: 70,
    chronologicalOrder: 70,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'armor-wars-future',
    title: 'Armor Wars',
    releaseDate: '2028-02-18',
    releaseOrder: 71,
    chronologicalOrder: 71,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  },
  {
    id: 'shang-chi-2-future',
    title: 'Shang-Chi 2 (Untitled Sequel)',
    releaseDate: '2028-05-05',
    releaseOrder: 72,
    chronologicalOrder: 72,
    type: 'film',
    onDisneyPlus: false,
    phase: 6
  }
];

// Phase meta details for styling & filtering
export const MCU_PHASES = [
  { phase: 1, label: 'Phase One: Avengers Assembled', years: '2008–2012' },
  { phase: 2, label: 'Phase Two', years: '2013–2015' },
  { phase: 3, label: 'Phase Three: The Infinity Saga Finale', years: '2016–2019' },
  { phase: 4, label: 'Phase Four: The Multiverse Begins', years: '2021–2022' },
  { phase: 5, label: 'Phase Five', years: '2023–2025' },
  { phase: 6, label: 'Phase Six: Multiverse Saga Climax', years: '2025–2028' }
];
