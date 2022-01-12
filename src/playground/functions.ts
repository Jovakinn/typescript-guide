const cities: string[] = ["Kyiv", "Paris", "London", "Berlin", "Warsaw", "Riga"]
const f = (s: string) => s.length;

function f1() {
    const cities: string[] = ["Kyiv", "Paris"];
    const f = (s: string) => s.toUpperCase();
    console.dir({ cities });
    console.dir(cities.map(f));

    {
        const f = (s: string) => s.toLowerCase();
        console.dir({ cities });
        console.dir(cities.map(f));
    }

    {
        const cities: string[] = ['Kyiv', "Warsaw", "Riga"];
        console.dir({ cities });
        console.dir(cities.map(f));
    }
}

f1();

console.dir({ cities });
console.dir(cities.map(f));

const f2 = (...args: any[]) => {
    args.forEach(arg => {
        const type: string = typeof arg;
        console.log("Type: " + type);
        typeof arg === 'object' ? console.log("Value: " + JSON.stringify(arg)) : console.log('Value: ' + arg);
    });
};

f2(1, 'Marcus', { field: "Augustus" });
