function capitalize(str){
    let capitalizedWord = str.toLowerCase().split(" ").map((element)=>{ 
        
        return element.replace(element.charAt(0), element.charAt(0).toUpperCase());
    
    }).join(" ");


    return capitalizedWord;
}



console.log(capitalize("Help me understand"));
console.log(capitalize("How JAVASCRIPT WORKS"));
console.log(capitalize("I thinK Im GETTING better"));
console.log(capitalize("WHAt do YOU think?"));
console.log(capitalize("MAYBE I can work For GooGle"));