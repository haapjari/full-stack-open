const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
    greet: function() {
      console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {    
        console.log(a + b)  
    },
  }

  arto.doAddition(1, 4)

  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)  // tulostuu 25
  
  arto.growOlder = function() {  this.age += 1}
  console.log(arto.age)   // tulostuu 35
  arto.growOlder()
  console.log(arto.age)   // tulostuu 36