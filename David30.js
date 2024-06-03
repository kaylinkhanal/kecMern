 const obj={
    name:'Ram thapa',
    age:13
  }
  
  const scores={
    math:30,
    science:100
  }
  
  const markSheet={
    ...obj,
    ...location
  }
  
  const Marks= Object.assign(obj,scores)
  Marks