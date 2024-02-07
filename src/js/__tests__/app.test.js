import sortObj from "../app";

describe('testing sortObj', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    test('sort set value', () => {
        const result = sortObj(obj, ["name", "level"]);
        const expected = [
            { key: "name", value: "мечник" }, 
            { key: "level", value: 2 }, 
            { key: "attack", value: 80 }, 
            { key: "defence", value: 40 }, 
            { key: "health", value: 10 } 
        ]
        expect(result).toEqual(expected);
    })
    test('missing a key', () => {
        expect(() => sortObj(obj, ['something'])).toThrow('Not a key');
    });
})