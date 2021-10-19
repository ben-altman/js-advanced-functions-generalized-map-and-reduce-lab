// Add your functions here
function map(source, workToDo) {
    const ritorno = [];
    for (let x of source) {
        ritorno.push(workToDo(x));
    };
    return ritorno;
};

function reduce(source, workToDo, start) {
    let total;
    if (start) {
        total = start;
        for (let i = 0; i < source.length; i++) {
            total = workToDo(source[i], total);
        }
    } else {
        total = source[0];
        for (let i = 1; i < source.length; i++) {
            total = workToDo(source[i], total);
        }
    }
    return total;
};