const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


////////////////////////////////////////////////////////////////////////////////////////////////
//For Loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
 
////////////////////////////////////////////////////////////////////////////////////////////////
//forEach
companies.forEach(function (Company) {
    console.log(Company);
});

////////////////////////////////////////////////////////////////////////////////////////////////
// filter
// filter using for loop
let canSmoke = [];
for(let i = 0;i<ages.length;i++){
    canSmoke.push(ages[i]);
}
 
// filter using ES5 functions
const canSmoke = ages.filter(function(age){
    if(age>=19){
        return true; //filter always has return statement
    }
});

// filter using ES6 Arrow function
const canSmoke = ages.filter(age => age>=19);

console.log(canSmoke);


// filter retails companies
//using ES5 functions
const retailCompanies =  companies.filter(function(Company){
    if(Company.category === 'Retail'){
        return true;
    }
});

//using ES6 Arrow functions
const retailCompanies =  companies.filter(Company=> Company.category === 'Retail');

console.log(retailCompanies);


// Get 80s Companies using filter
const eightiesCompanies = companies.filter(Company => (Company.start >= 1980 && Company.start < 1990));

console.log(eightiesCompanies);


//Get Companies that lasted for more than 10 years
const lastedTenYears = companies.filter(Company=> (Company.end - Company.start > 10));

console.log(lastedTenYears);

////////////////////////////////////////////////////////////////////////////////////////////////
//  map
// Create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
});

console.log(companyNames);

// map function using template strings
const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

// using arrow function
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

// multi map functionality
const ageMap = ages
  .map(age => Math.sqrt(age)) //first sqrt the age
  .map(age => age * 2); //then multiply by 2

console.log(ageMap);  

////////////////////////////////////////////////////////////////////////////////////////////////
// sort
// sort companies by start year using ES5 functions
const sortedcompanies = companies.sort(function(c1,c2){
    if(c1.start>c2.start){
        return 1;
    }else{
        return -1;
    }
});

//using ES6 arrow functions and terenary operator
const sortedcompanies = companies.sort((a,b)=>(a.start > b.start ? 1 : -1));

console.log(sortedcompanies);

// Sort Ages
const sortAges = ages.sort((a,b)=>(a-b));

console.log(sortAges);

////////////////////////////////////////////////////////////////////////////////////////////////
// reduce
let ageSum = 0;
for (let i = 0; i < ages.length; i++){
    ageSum += ages[i]; 
} 

// using functions
const ageSum = ages.reduce(function(total, age){
    return total + age;
},0);

// using arrow functions
const ageSum =  ages.reduce((total,age) => total + age,0);

console.log(ageSum);

// Get total years for all companies
const totalYears = companies.reduce(function(total,company){
    return total + (company.end - company.start);
},0);

// using arrow functions
const totalYears = companies.reduce((total,company) => (total + (company.end - company.start)),0);

console.log(totalYears);

////////////////////////////////////////////////////////////////////////////////////////////////
// Combine higher order Methods
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0);

console.log(combined);