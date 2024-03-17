function calcToDegree(num, degree){
    if(degree > 1) {
       return num * calcToDegree(num, degree - 1); 
    }
    return num; 
    
}
console.log(calcToDegree(7, 3));