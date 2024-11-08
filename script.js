function getDirections(code) {
    var list = ["0", "1", "R", "r", "L", "l", "a", "A", "b", "B", "c", "C", "d", "D", "e", "s"];
    const directions = {
        '0': 'first left',
        '1': 'first right',
        'R': 'end right',
        'r': 'right skip 1',
        'L': 'end left',
        'l': 'left skip 1',
        'a': 'left right',
        'A': 'left right left',
        'b': 'right left',
        'B': 'right left right',
        'c': 'left right right',
        'C': 'left right right left',
        'd': 'right left left',
        'D': 'right left left right',
        'e': 'end',
        's': 'skip',
    };
    return code.split('').map(letter => directions[letter]).join(', ');
}

console.log(getDirections("01RrLlaABcdD"));