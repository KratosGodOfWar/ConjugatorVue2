

//this function becomes the lowercase string to uppercase string inside the all array
function MakeUpperArray(strings){
    var Output=[];
    var aux;
        for(string of strings){
        aux=string.charAt(0).toUpperCase() + string.slice(1);
        Output.push(aux);
        }
        return Output;
    }

//This function converts a verb from the infinitive form to that of the third person
    function MakeThirdPerson(strinX){
        //Remove the last character and convert it to lowercase
        
                var Last = strinX[strinX.length - 1];
                var BeforeLast = strinX[strinX.length - 2];
            
           

            var twolast=BeforeLast+Last;
            var gerund=''; 
            
            
            if(twolast==="es"|| twolast==="sh" || twolast==="ch" || Last==="o"|| Last==="x"){
            gerund= strinX+"es";  
            }else{
               if(Last==="y"){
                gerund=strinX.slice(0,-1)+"ies"; 
               }else{
                if(!strinX || !strinX.length){
                 gerund="";      
                }else{
                  gerund= strinX+"s";   
                }}}
              
            return gerund;
        }


        
                     
       
         
function MakeIng(stringX){
    var vocales = ["a","e", "i", "o", "u" ,"w" ,"x" ,"y"] ;    
    // Remove the last character and convert it to lowercase
    
    var last = stringX[stringX.length - 1];
    var BeforeLast = stringX[stringX.length - 2];
    if(stringX.length>2){
    var BBLast = stringX[stringX.length - 3];}
    var gerund=''; 
    var key=0;          
    
    // Check if there is no string or it is empty...
    if(!stringX || !stringX.length) {
    key = 0;
    }else{
    
    if(last=="e"){
    //Take→ taking  //e	
    if(BeforeLast=="i"){
    //tie→ tying 	//ie
       key = 2;
    }else{
    key = 1;}
    }
    else{
    
    if(vocales.indexOf(last) === -1){
        //if the last is vocal
        if(vocales.indexOf(BeforeLast) !== -1){
            //if the antepenultimate is consonant
            if(vocales.indexOf(BBLast) === -1){
                //check with the verb "stop"
                key = 3;
            }else{
                //check with the verb "eat"
                key = 4;
            }
        }else{
            key = 4;
        }
    }
    else{
        //vowel is no e 
        key = 4;
    
    }}}
    
 //this switch case select an option depending of the end of de word    
    switch (key) {
    case 0:
    gerund="";   
    break;
    case 1:
    gerund=stringX.slice(0,-1)+"ing";
    break;
    case 2:
    gerund=stringX.slice(0,-2)+"ying";
    break;                  
    case 3:
    gerund=stringX+stringX.slice(-1)+"ing";	
    break;
    case 4:
    gerund= stringX+"ing";   
    default:
    gerund= stringX+"ing";    
    break;
    }
                                   
    return gerund;
                    
    }

//this function takes the string and exchange 
  //the first word by the second word  
    function ReverseString(str){
        //We get the text of the field
    var Output='';
    // splits becomes a string in a array
    const words = str.split(' ');
    
    Output=words[1]+' '+words[0];
    
    //this loop add the last of the string
    for (let index = 2; index < words.length; index++) {
        Output +=' '+words[index];
        
    }	
        return Output;
    }
    
    //this function reads each value of the array and execute the function ReverseString 
    function ReverseArray(arr){
    var result=[];
        for (let index = 0; index < arr.length; index++) {
            result.push(ReverseString(arr[index]+' ?'));
        }	
    return result;
    }

//This function checks the pronoun and return
// do or does     
function MakeDo(key){
let DoDoes='';
switch (key) {
    case 'he':case 'she':case 'it':
     DoDoes='does' ;  
    break;
     default:
    DoDoes='do' ; 
    break;
}
return DoDoes;
}

//Delete empty spaces before 'something 
function DeleteSpaces(arr){
 
    var a;
    var b;
    
    for (let index = 0; index < arr.length; index++) {
    
      a=arr[index];
      if(a.indexOf(" '")!==-1){
          b=a.replace(" '","'");
           arr[index]=b;
            }
         }
     return arr; 
    }