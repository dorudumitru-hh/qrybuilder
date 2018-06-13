//////////////////////////////////////////
////////// -- EDIT THIS CODE -- //////////

const mandatory = [
  'a',
  'b',
  'c'
];

const regular = [
  '1',
  '2',
  '3'
];

const optional = [
  'x',
  'y',
  'z'
];

///////////////////////////////////////////////////
////////// -- DO NOT TOUCH THIS CODE -- //////////

const mandatoryJoined = mandatory.join(' ');

const results = regular.map((regEl) => {
  const partial = optional.map(optEl => `${mandatoryJoined} ${regEl} ${optEl}`);
  return partial;
});

results.map(res => console.log(res.join(' or ')));
