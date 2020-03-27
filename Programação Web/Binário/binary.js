
function getGaps (BinaryArray, gaps) {
    
    const primeiro = BinaryArray.indexOf("1");
    if (primeiro > -1) {
         
        let NewArrayB = BinaryArray.slice(firstOne + 1);
         
        const segundo = NewArrayB.indexOf("1");
        if (segundo > 0) {
              
              gaps.push(secondOne);
        }
     
        return getGaps(NewArray.slice(segundo +1), gaps); 
    }
    
    return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
 
function verificaInteiro (N) {
    
    if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
         const Binary = N.toString(2).split('');
         
         return getGaps(Binary, []);
    }
     
    return 0;
}
