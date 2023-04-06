//Async Await
console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

//Async function always returns a promise. NOTE!!
const preMovie = async() =>{
    const promiseWifeBringsTickets = new Promise((reslove, reject)=>{
        setTimeout(()=>reslove("ticket"), 3000);
    });
    const getPopcorn = new Promise((reslove, reject)=> reslove(`popcorn`));

    const getCandy = new Promise((reslove, reject)=>reslove(`Candy`));

    const getColdDrinks = new Promise((reslove, reject)=> reslove("ColdDrinks"));
    // Await function can only be used inside async function body!!
    let ticket;
    try{
        ticket = await promiseWifeBringsTickets;
    }catch(e){
        ticket = "Sad Face :("
    }
    
    
    return ticket;
    
}

preMovie().then((m)=>console.log(`Person 3:  ${m}`)); 

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");