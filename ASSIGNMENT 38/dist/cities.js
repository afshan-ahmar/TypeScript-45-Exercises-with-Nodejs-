"use strict";
// cities:write a function called describe_city()
function describe_city(city, country = "Default Country.") {
    console.log(`${city} is in  ${country}`);
}
describe_city(`karachi`, `Pakistan`);
describe_city(`tokyo`, `Japan`);
describe_city(`paris`);
