
function cleanNames(arr) {
    return arr.map(e =>  e.trim()
     );
     
}
 
console.log(cleanNames([' timothee', '  darth_hater', 'sassyfrassy  ', 'elton john  ']))