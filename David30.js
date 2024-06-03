 const obj={
    name:'Ram thapa',
    age:13
  }
  
  const scores={
    math:40,
    science:45
  }
  
  const markSheet={
    ...obj,
    ...location
  }
  
  const Marks= Object.assign(obj,scores)
  Marks