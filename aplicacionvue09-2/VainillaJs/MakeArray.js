//This Arrays will be used by the function Simple ,SimpleProgressive , Perfect and PerfectProgressive

//Statement
var mod1=['will','going to','would','should','can','could','must','may','might'];
var mod2=['will have','going to','would have','should have','could have','must have','may have','might have'];

//negative
var modn1=['will not','going to','would not','should not','cannot','could not','must not','may not','might not'];
var modn2=['will not have','going to','would not have','should not have','could not have','must not have','may not have','might not have'];

//Short
var smod1=["'ll","going to","'d","should","can","could","must","may","might"];
var smod2=["'ll have","going to","would've","should've","could've","must've","may have","might've"];

//short negative
var modsn1=["won't","going to","wouldn't","shouldn't","can't","couldn't","mustn't","may not","mightn't"];
var modsn2=["won't have","going to","wouldn't have","shouldn't have","couldn't have","mustn't have","may not have","mightn't have"];




//This Function is the main function ,this one will be called from the File App.js because this one is the conection between vainilla javascript code and Vue javascript code inside the application , vainilla code is in the folder VainillaJS and the other one is in ComponentsVue



function Engine(key,pro,pas,pre,par){
    let table=[];
     
    switch (key) {
        case 'Statement':
            table=StatementArrays(pro,pas,pre,par,key);
        break;
        case 'Negative':
            table=NegativeArrays(pro,pas,pre,par,key); 
        break;
        case 'Short':
            table=ShortArrays(pro,pas,pre,par,key);
        break;
        case 'NegativeShort':
            table=NegativeShortArrays(pro,pas,pre,par,key);
        break;
        case 'Question':
           table=QuestionArrays(pro,pas,pre,par,key) ;
        break;
    }
    Infinitivo=pre;
    Pasado=pas;
    return table;
}

//This function creates an array with four matrices inside, this can be used to read for the ShowTable component what will show the content of the matrices, the other similar functions below will do the same but with other parameters
function StatementArrays(pro,pas,pre,par,key){
    let table=[];
    table[0]=MakeUpperArray(Simple(mod1,pro,pas,pre,key));
    table[1]=MakeUpperArray(Progressive(mod1,pro,pre,key));
    table[2]=MakeUpperArray(Perfect(mod2,pro,pre,par,key));
    table[3]=MakeUpperArray(PerfectProgressive(mod2,pro,pre,key));
    return table;
}  
//the same as the first

function NegativeArrays(pro,pas,pre,par,key){
    let table=[];
    table[0]=MakeUpperArray(Simple(modn1,pro,pas,pre,key));
    table[1]=MakeUpperArray(Progressive(modn1,pro,pre,key));
    table[2]=MakeUpperArray(Perfect(modn2,pro,pre,par,key));
    table[3]=MakeUpperArray(PerfectProgressive(modn2,pro,pre,key));  
    return table;
    }
//the same as the first
function ShortArrays(pro,pas,pre,par,key){
    let table=[];
    table[0]=MakeUpperArray(DeleteSpaces(Simple(smod1,pro,pas,pre,key)));
    table[1]=MakeUpperArray(DeleteSpaces(Progressive(smod1,pro,pre,key)));
    table[2]=MakeUpperArray(DeleteSpaces(Perfect(smod2,pro,pre,par,key)));
    table[3]=MakeUpperArray(DeleteSpaces(PerfectProgressive(smod2,pro,pre,key)));
    return table;
    }
 //the same as the first   
function NegativeShortArrays(pro,pas,pre,par,key){
    let table=[];
    table[0]=MakeUpperArray(DeleteSpaces(Simple(modsn1,pro,pas,pre,key)));
    table[1]=MakeUpperArray(DeleteSpaces(Progressive(modsn1,pro,pre,key)));
    table[2]=MakeUpperArray(DeleteSpaces(Perfect(modsn2,pro,pre,par,key)));
    table[3]=MakeUpperArray(DeleteSpaces(PerfectProgressive(modsn2,pro,pre,key)));
    return table;
    } 
//the same as the first
function QuestionArrays(pro,pas,pre,par,key){
    let table=[];
    table[0]=MakeUpperArray(ReverseArray(Simple(mod1,pro,pas,pre,key)));
    table[1]=MakeUpperArray(ReverseArray(Progressive(mod1,pro,pre,key)));
    table[2]=MakeUpperArray(ReverseArray(Perfect(mod2,pro,pre,par,key)));
    table[3]=MakeUpperArray(ReverseArray(PerfectProgressive(mod2,pro,pre,key)));
    return table;
    }
    


//This function makes an array with simple time what will be used by the previous functions above 
    function Simple(mod,pro,pas,pre,key){
        var Vars = [];
        
        var cadena;
        var list = [];
        let Did= '';
        let Do = '';
        var PresentToBe='';
        var VerbPast='';
        var VerbPresent='';
        var Space='';
         Vars = SetVariables(key,pro,pas,pre);
         Did= Vars[0];
         Do = Vars[1];
         PresentToBe= Vars[5];
         VerbPast=Vars[6];
         VerbPresent=Vars[7];
         Space=Vars[8];
        
        list.push(pro+Did+VerbPast);
        list.push(pro+Do+VerbPresent);
            
         for(modal of mod){
         if(modal==='going to'){
            cadena=pro+Space+PresentToBe+' '+modal+' '+pre;
         }else{
             cadena=pro+' '+modal+' '+pre;
         }    
            
         list.push(cadena);
         }
            
         return list; 
         //console.log(Simple(modales,pronombre,presente,pasado,'not'));
         };

  
    function Progressive(mod,pro,pre,key){
    //positive and negative 
        var list = [];
        var cadena;
        var pas='';
        var Vars = []; 
        Vars = SetVariables(key,pro,pas,pre);
        var PastToBe= Vars[4];
        var PresentToBe= Vars[5];
        var Space='';
        Space=Vars[8];

        list.push(pro+Space+PastToBe+MakeIng(pre));
        list.push(pro+Space+PresentToBe+MakeIng(pre));
            
        for(modal of mod){
         
            if(modal==='going to'){
           cadena=pro+Space+PresentToBe+' '+modal+' be'+' '+MakeIng(pre);
               
             }else{  cadena=pro+' '+modal+' be'+' '+MakeIng(pre);}

        list.push(cadena);
         } 
        
        return list;
        //console.log(Progressive(modales,pronombre,presente,'not'));
         };


         function Perfect(mod,pro,pre,par,key){
            var cadena;
            var list = [];
            var Vars = []; 
            var pas='';
            Vars = SetVariables(key,pro,pas,pre); 
            var Had= Vars[2];
            var Have= Vars[3];
            var PresentToBe= Vars[5];
            var Space='';
            Space=Vars[8];
            var Not=Vars[9];

           list.push(pro+Space+Had+Not+par);
           list.push(pro+Space+Have+Not+par);
             for(modal of mod){
            if(modal==='going to'){
             cadena=pro+Space+PresentToBe+' '+modal+' have '+par;}
             else{
                cadena=pro+' '+modal+'  '+par;
             }

             list.push(cadena);
            
             }
             return list; 
             //console.log(Simple(modales,pronombre,presente,pasado,'not'));
             };


function PerfectProgressive(mod,pro,pre,key){
    
    
    var listas = [];
    var cadena;
    var Vars = []; 
    var pas='';
    Vars = SetVariables(key,pro,pas,pre);
    var Had= Vars[2];
    var Have= Vars[3];
    var PresentToBe= Vars[5];
    var Space=Vars[8];
    var Not=Vars[9];
    
     listas.push(pro+Space+Had+Not+' been '+MakeIng(pre));
     listas.push(pro+Space+Have+Not+' been '+MakeIng(pre));
        
     for(modal of mod){
   
        if(modal==='going to'){
            
            cadena=pro+Space+PresentToBe+' '+modal+' have been '+MakeIng(pre);
         }else{cadena=pro+' '+modal+' been '+MakeIng(pre);}
     
           listas.push(cadena);
        }    
     
    
     return listas; 
     //console.log(Simple(modales,pronombre,presente,pasado,'not'));
     };


     // This function Setup the variables that will be used by Simple, Progressive ,Perfect and Perfect Progressive in context by the Statement ,Negative , Short, ShortNegative and Question
     function SetVariables(key,pro,pas,pre){
     let ArrayVars=[];
      switch (key) {
          //statement //negative // question
          case 'Statement': 
            
            ArrayVars[0]= ''; //did 
            ArrayVars[1]= ''; //do 
            ArrayVars[2]= ' had ';  //had
            ArrayVars[3]= ' '+PointToHave(pro)+' ';  //have
            ArrayVars[4]= ' '+PointPastToBe(pro)+' ';  //past tobe
            ArrayVars[5]= ' '+PointToBe(pro)+' ';  //present tobe
            ArrayVars[6]= ' '+pas+' ';  //past verb
            ArrayVars[7]= ' '+PointToVerb(pro,pre)+' ';  // present verb
            ArrayVars[8]= ' ';
            ArrayVars[9]= '';
          break;
          case 'Negative':
            ArrayVars[0]= ' did not '; //did 
            ArrayVars[1]= ' '+MakeDo(pro)+' not '; //do 
            ArrayVars[2]= ' had not ';  //had
            ArrayVars[3]= ' '+PointToHave(pro)+' not ';  //have
            ArrayVars[4]= ' '+PointPastToBe(pro)+' not ';  //past tobe
            ArrayVars[5]= ' '+PointToBe(pro)+' not ';  //present tobe
            ArrayVars[6]= ' '+pre+' ';  //past verb
            ArrayVars[7]= ' '+pre+' ';  // present verb  
            ArrayVars[8]= ' ';
            ArrayVars[9]= '';
          break;
          //short
          case 'Short':
            ArrayVars[0]= ''; //did 
            ArrayVars[1]= ''; //do 
            ArrayVars[2]= "'d ";  //had
            ArrayVars[3]= ' '+PointShortToHave(pro)+' ';  //have
            ArrayVars[4]= ' '+PointPastToBe(pro)+' ';  //past tobe
            ArrayVars[5]= ' '+PointShortToBe(pro)+' ';  //present tobe
            ArrayVars[6]= ' '+pas+' ';  //past verb
            ArrayVars[7]= ' '+PointToVerb(pro,pre)+' ';  // present verb
            ArrayVars[8]= '';
            ArrayVars[9]= '';
          break;
          //short negative
          case 'NegativeShort':
            ArrayVars[0]= " didn't "; //did 
            ArrayVars[1]= ' '+MakeDo(pro)+"n't "; //do
            ArrayVars[2]= "'d ";  //had
            ArrayVars[3]= ' '+PointShortToHave(pro)+' ';  //have
            ArrayVars[4]= ' '+PointPastToBe(pro)+"n't ";  //past tobe
            ArrayVars[5]= ' '+PointShortToBe(pro)+" not ";  //present tobe 
            ArrayVars[6]= pre;  //past verb
            ArrayVars[7]= pre;  // present verb
            ArrayVars[8]= '';
            ArrayVars[9]= 'not ';
          break;
          case 'Question':
            ArrayVars[0]= ' did '; //did 
            ArrayVars[1]= ' '+MakeDo(pro)+' '; //do 
            ArrayVars[2]= 'had ';  //had
            ArrayVars[3]= PointToHave(pro)+' ';  //have
            ArrayVars[4]= PointPastToBe(pro)+' ';  //past tobe
            ArrayVars[5]= PointToBe(pro)+' ';  //present tobe
            ArrayVars[6]= pre;  //past verb
            ArrayVars[7]= pre;  // present verb  
            ArrayVars[8]= ' ';
            ArrayVars[9]= '';
          break;
      }
     
return ArrayVars;
     }