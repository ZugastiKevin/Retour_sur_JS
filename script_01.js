const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log(entrepreneurs);

console.log("Startup Nation, le retour");

console.log("les prénom et les nom des entrepreneurs sont ;");
  let name = entrepreneurs.map(names => names.first + " " + names.last);
console.log(name);

console.log("Remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui");
  let now = entrepreneurs.map(nows => nows.first + " " + nows.last + " aurait " + (2021 - nows.year) + " ans");
console.log(now);

console.log("Remplace-les clés");
  var replace_key = entrepreneurs.map(({first: firstName, last: lastName, ...rest}) => ({firstName, lastName, ...rest}));
console.log(replace_key)

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;");
  let result = replace_key.filter(element => element.year > 1969 && element.year < 1980);
console.log(result);
