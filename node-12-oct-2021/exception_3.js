function safeDiv(num1, num2){
    if(num2 == 0){
        throw "Denominator is zero";
    }
    return num1 / num2;
}