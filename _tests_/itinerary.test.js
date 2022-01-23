/* eslint-disable no-undef */
const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
  it('instantiates itinerary', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('ports', () => {
    const dublin = jest.fn();
    const liverpool = jest.fn();
    const itinerary = new Itinerary([dublin, liverpool]);

    expect(itinerary.ports).toStrictEqual([dublin, liverpool]);
  });
});
