test('object assignment', () => {
  interface Data {
    one:number;
    two:number;
  }

  const data:Data = {one: 1, two:2};
    expect(data).toEqual({one: 1, two: 2});
  });