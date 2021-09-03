let a = ['Toyota', 'Land Cruiser', 'BMW', 'Volvo' ], b = ['Volvo', 'Mercedes', 'Volkswagen', 'BMW']
let c = a.concat(b.filter((item) => a.indexOf(item) < 0))
console.log(a);
console.log(b);
console.log(c) 