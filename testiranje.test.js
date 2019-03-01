test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adds 5 + 6 to equal 11', () => {
    expect(5+6).toBe(11);
});