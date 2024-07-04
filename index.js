// Code your solution here
//matching drivers, case sensitive
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  //fuzzy match
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
//match name
function matchName(drivers, query){
    return drivers.filter(driver => driver.name === query)
}