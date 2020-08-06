let classes = [
  { id: 01, slot: 3, subject: 'Grade 10 English', group: 1, classroom: 'A1' },
  { id: 02, slot: 2, subject: 'Grade 10 English', group: 2, classroom: 'C1' },
  { id: 03, slot: 1, subject: 'Grade 10 Afrikaans', group: 1, classroom: 'A2' },
  { id: 04, slot: 5, subject: 'Grade 10 Afrikaans', group: 2, classroom: 'C2' },
  { id: 05, slot: 4, subject: 'Grade 10 History', group: 1, classroom: 'Hall' },
  {
    id: 06,
    slot: 2,
    subject: 'Grade 10 Mathematics',
    group: 1,
    classroom: 'B1',
  },
  {
    id: 07,
    slot: 6,
    subject: 'Grade 10 Physical Science',
    group: 1,
    classroom: 'Lab',
  },
  { id: 08, slot: 1, subject: 'Grade 10 Biology', group: 1, classroom: 'Lab' },
  {
    id: 09,
    slot: 5,
    subject: 'Grade 10 Accounting',
    group: 1,
    classroom: 'Hall',
  },
  {
    id: 10,
    slot: 4,
    subject: 'Grade 10 Life Orientation',
    group: 1,
    classroom: 'B3',
  },
  { id: 11, slot: 1, subject: 'Grade 11 English', group: 1, classroom: 'A1' },
  { id: 12, slot: 6, subject: 'Grade 11 English', group: 2, classroom: 'C1' },
  { id: 13, slot: 3, subject: 'Grade 11 Afrikaans', group: 1, classroom: 'A2' },
  { id: 14, slot: 2, subject: 'Grade 11 Afrikaans', group: 2, classroom: 'C2' },
  { id: 15, slot: 1, subject: 'Grade 11 History', group: 1, classroom: 'Hall' },
  {
    id: 16,
    slot: 2,
    subject: 'Grade 11 Mathematics',
    group: 1,
    classroom: 'B1',
  },
  {
    id: 17,
    slot: 3,
    subject: 'Grade 11 Physical Science',
    group: 1,
    classroom: 'Lab',
  },
  { id: 18, slot: 4, subject: 'Grade 11 Biology', group: 1, classroom: 'Lab' },
  {
    id: 19,
    slot: 5,
    subject: 'Grade 11 Accounting',
    group: 1,
    classroom: 'Hall',
  },
  {
    id: 20,
    slot: 6,
    subject: 'Grade 11 Life Orientation',
    group: 1,
    classroom: 'B3',
  },
  { id: 21, slot: 4, subject: 'Grade 12 English', group: 1, classroom: 'A1' },
  { id: 22, slot: 5, subject: 'Grade 12 English', group: 2, classroom: 'C1' },
  { id: 23, slot: 6, subject: 'Grade 12 Afrikaans', group: 1, classroom: 'A2' },
  { id: 24, slot: 1, subject: 'Grade 12 Afrikaans', group: 2, classroom: 'C2' },
  { id: 25, slot: 2, subject: 'Grade 12 History', group: 1, classroom: 'Hall' },
  {
    id: 26,
    slot: 3,
    subject: 'Grade 12 Mathematics',
    group: 1,
    classroom: 'B1',
  },
  {
    id: 27,
    slot: 5,
    subject: 'Grade 12 Physical Science',
    group: 1,
    classroom: 'Lab',
  },
  { id: 28, slot: 6, subject: 'Grade 12 Biology', group: 1, classroom: 'Lab' },
  {
    id: 29,
    slot: 6,
    subject: 'Grade 12 Accounting',
    group: 1,
    classroom: 'Hall',
  },
  { id: 30, slot: 3, subject: 'Grade 12 Life Orientation', classroom: 'B3' },
];

let slots = [
  {
    slot: 1,
    times: [
      { day: 'Mon', period: 2 },
      { day: 'Tue', period: 4 },
      { day: 'Wed', period: 3 },
      { day: 'Thu', period: 5 },
      { day: 'Fri', period: 1 },
    ],
  },
  {
    slot: 2,
    times: [
      { day: 'Mon', period: 4 },
      { day: 'Tue', period: 3 },
      { day: 'Wed', period: 4 },
      { day: 'Thu', period: 1 },
      { day: 'Fri', period: 2 },
    ],
  },
  {
    slot: 3,
    times: [
      { day: 'Mon', period: 5 },
      { day: 'Tue', period: 5 },
      { day: 'Wed', period: 2 },
      { day: 'Thu', period: 6 },
      { day: 'Fri', period: 3 },
    ],
  },
  {
    slot: 4,
    times: [
      { day: 'Mon', period: 1 },
      { day: 'Tue', period: 2 },
      { day: 'Wed', period: 6 },
      { day: 'Thu', period: 3 },
      { day: 'Fri', period: 6 },
    ],
  },
  {
    slot: 5,
    times: [
      { day: 'Mon', period: 6 },
      { day: 'Tue', period: 6 },
      { day: 'Wed', period: 1 },
      { day: 'Thu', period: 4 },
      { day: 'Fri', period: 4 },
    ],
  },
  {
    slot: 6,
    times: [
      { day: 'Mon', period: 3 },
      { day: 'Tue', period: 1 },
      { day: 'Wed', period: 5 },
      { day: 'Thu', period: 2 },
      { day: 'Fri', period: 5 },
    ],
  },
];

let teachers = [
  {
    id: 01,
    name: 'Mr Hunt',
    email: 'hunt@highschool.com',
    password: '1234',
    classes: [1, 2, 11, 12, 21, 22],
  },
  {
    id: 02,
    name: 'Mr Mclaughlin',
    email: 'mclaughlin@highschool.com',
    password: '2345',
    classes: [6, 7, 26, 27],
  },
  {
    id: 03,
    name: 'Ms Berger',
    email: 'berger@highschool.com',
    password: '3456',
    classes: [3, 4, 13, 14, 23],
  },
  {
    id: 04,
    name: 'Ms Murray',
    email: 'murray@highschool.com',
    password: '4567',
    classes: [8, 9, 29, 30],
  },
  {
    id: 05,
    name: 'Mr Simpson',
    email: 'simpson@highschool.com',
    password: '5678',
    classes: [5, 15, 25, 30],
  },
];

let learners = [
  { id: 01, name: 'Ian Reid', classes: [1, 3, 5, 6, 7, 9] },
  { id: 02, name: 'Lynne Brock', classes: [12, 13, 15, 16, 18, 19] },
  { id: 03, name: 'Jeffery Medina', classes: [21, 24, 25, 27, 28, 30] },
];

module.exports = {
  classes: classes,
  slots: slots,
  teachers: teachers,
  learners: learners,
};
