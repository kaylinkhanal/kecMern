const scores = {
    math: 30,
    science: 43,
    computer: 51
  }
  
  let sum = 0
  const newArr = Object.values(scores)
  newArr.forEach((item) => {
    sum += item
  })
  
  const totalMaxScore = 300
  const percentage = (sum / totalMaxScore) * 100
  
  console.log(percentage)