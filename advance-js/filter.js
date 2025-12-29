const data = [
    { id: 23, name: "Sanjeev" },
    { id: 24, name: "Shres" },
    { id: 22, name: "Harsh" },
    { id: 2, name: "Ansh" },
];

const res = data.map((item) => {
    if (item.id === 2) {
        return { ...item, name: "Kumar" };
    }
    return item;
});

console.log(res);
