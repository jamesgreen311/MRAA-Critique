
const unique = (value, index, self) => {
    return self.indexOf(value) === index;
}

const ages = [26, 27, 26, 28, 28, 29, 30, 29];
const uniqueAges = ages.filter(unique);

console.log(uniqueAges);