function toDegree(num, degree){
    if(degree > 1) {
       return num * toDegree(num, degree - 1); 
    }
    return num; 
    
}
console.log(toDegree(7, 3));