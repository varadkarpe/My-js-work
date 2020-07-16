//Leap year detection function
function leap()
{
    if(year%4 == 0 && (year%100 != 0 || year%400 == 0 ) )
    {
        return 29;
    }
    else
    {
        return 28;
    }
        
}
var year = prompt("Enter year")
console.log(leap())


// //Age in days
// var year = prompt("Enter birth year");
// var month = prompt("Enter birth month number");
// var day = prompt("Enter birth day")
// var dob = new Date(year, month-1,day)
// console.log(dob)
// var today = new Date()
// var dd = today.getDate();
// var mm = today.getMonth()+1;
// var yyyy = today.getFullYear();
// console.log(dd+"/"+mm+"/"+yyyy)
// var flag = false 
// if(yyyy<year)
// {
//     flag = true
// }
// if( month == 2 && day >leap())
// {
//     flag = true
// }