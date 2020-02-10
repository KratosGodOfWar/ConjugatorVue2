
    
    //POINT 
    //this function receives the pronoun and a verb and return a Third person conjugation or without conjugation depending of the pronoun
    function PointToVerb(key,verb){
        var PresentVerb;
                switch (key) {
                    case 'I': case 'we': case 'you': case 'they':
                    PresentVerb=verb;
                    break;
        
                    case 'he': case 'she': case 'it':
                    PresentVerb=MakeThirdPerson(verb); 
                    break;
                }
        return PresentVerb;        
        }  
        
       //this function receives the pronoun and return the verb to be 
        function PointToBe(key){
        var PresentToBe;
                switch (key) {
                    case 'I':
                    PresentToBe='am';
                    break;
        
                    case 'he': case 'she': case 'it':
                    PresentToBe='is'; 
                    break;
        
                    case 'we': case 'you': case 'they':
                    PresentToBe='are'; 
                    break;
                }
        return PresentToBe;        
        }
        
        function PointPastToBe(key){
        var PastToBe;
                switch (key) {
                    case 'he': case 'she': case 'it': case 'I':
                    PastToBe='was'; 
                    break;
        
                    case 'we': case 'you': case 'they':
                    PastToBe='were'; 
                    break;
                }
        return PastToBe;        
        }
        
        function PointToHave(key){
            var PointToHave;
                    switch (key) {
                        case 'he': case 'she': case 'it':
                        PointToHave='has'; 
                        break;
        
                        case 'we': case 'you': case 'they': case 'I':
                        PointToHave='have'; 
                        break;
                    }
        return PointToHave;         
        }
        
        
    
        
    /*
        function MakeUpperCase(string){
            return string.charAt(1).toUpperCase() + string.slice(2);
        }
    
        function trimar(a,b){
            var c= a.trim();
            var d= b.trim();
            var f=c+d;
        
            if(f=="cann't"){
                f="can't";
                return f;
            }else {
                return f;
            }
        
            }
        */

       function PointShortToBe(key){
        var PresentToBe;
                switch (key) {
                    case 'I':
                    PresentToBe="'m";
                    break;
        
                    case 'he': case 'she': case 'it':
                    PresentToBe="'s"; 
                    break;
        
                    case 'we': case 'you': case 'they':
                    PresentToBe="'re"; 
                    break;
                }
        return PresentToBe;        
        }

        function PointShortToHave(key){
            var PointToHave;
                    switch (key) {
                        case 'he': case 'she': case 'it':
                        PointToHave="'s"; 
                        break;
        
                        case 'we': case 'you': case 'they': case 'I':
                        PointToHave="'ve"; 
                        break;
                    }
        return PointToHave;         
        }