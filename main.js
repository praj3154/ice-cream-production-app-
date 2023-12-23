let stock = {
    fruits : [ "apple",  "mango", "banana" , "graps"],
    liquids : [ "water", "ice "],
    holders : [ "cone","cup", "stick"],
    toppings : [ "chocolte" , "peanuts"]   
};

let is_shop_open = false;
 // time and work function 
let order = (time, work )=> {
    return new Promise ( ( resolve , reject ) => {
        if(is_shop_open) {
           
            setTimeout ( ()=> {
                resolve (work())
            }, time )
        }
        else{
            reject( console.log ("shop is close"))
        }
    })
}

order(2000,()=>console.log (` ${stock.fruits[0]} was selected `))

// promise chaining 

.then(()=>{
    return order(0, ()=> console.log ("proction has starte"))
})

.then(()=>{
    return order (2000, ()=> console.log( " the friuts was chop"))
})

.then (()=> order( 1000 , () => console.log (`${stock.liquids[0]} was added and ${stock.liquids[1]}`)))

.then ( ()=> order(1000 , ()=> console.log ("start machine")))

.then ( ()=> order (2000, () => console.log(`${stock.holders[0]} are seleted `)))

.then (()=> order ( 3000, ()=> console.log(`${stock.toppings[0]} are put `)))
.then ( ()=> order (1000, ()=> console.log ("ice cream has served ") )) 

// error handling 

.catch(()=> console.log("customer has left ") )

.finally(()=> console.log ("day ended shop is closed"))