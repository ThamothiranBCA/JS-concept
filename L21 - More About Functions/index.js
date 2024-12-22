/*
Higher-Order Function:
Function that take others functions as arguments or return them as results.
*/
function startEngine(){
    return `Engine is Started!`;
}

//Higher-order function
function drive(driverName,engine){
    const message = engine();

    console.log(`${message} ${driverName}`);
}
drive('Thamu',startEngine);