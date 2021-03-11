var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var x = people.slice() // clone the array 
    x.forEach(function(item, index, arr){
        if(x[index] === personName)
        {
            x.splice(index,1)
        }
    })
  return x
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
