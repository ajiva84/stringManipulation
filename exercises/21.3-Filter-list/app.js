let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here

function filterByName (names, desire) {

var filterArray = []
    
    for (var i=0; i <= names.length; i++)
        {
            if (names[i].toLowerCase().includes(desire))
                {
                    
                    filterArray.push(names[i])
                }
        }

return filterArray;

}
console.log(filterByName(names, 'am'));
console.log(names[0].toLowerCase().includes("l"))
console.log(names.length)