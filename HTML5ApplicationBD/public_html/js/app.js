/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Calculadora = (function(){
    
    var anterior =0;
    var operacion="0";
    var resul=0;
    return {
        numeros: {
            clicked: function(value) {
               
            
    
    var antes = document.getElementById("display").innerHTML;
    if(antes.length<8){
        
   
    if(antes!=="0"){
        document.getElementById("display").innerHTML =antes+value;
   
    }else    document.getElementById("display").innerHTML =value;
   }
   
 
}
           ,borrar: function(){
                   document.getElementById("display").innerHTML=0;
            }
           ,punto: function(){
            var cadena=  document.getElementById("display").innerHTML;
            if(cadena.includes(".")){
                
            }else{
                if(cadena.length<8){
                      document.getElementById("display").innerHTML=cadena +".";
   
                }
                       }
            }
        },
        operaciones: {
           
            suma: function() {
                 if(resul===0){
                   if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)- parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="suma";
            }else{
                anterior=0;
                operacion=0;
                   if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)- parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="suma";
            }
                 
                resul=0;
                
            },  
            division: function() {
                if(resul===0){
              
                     if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)- parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="division";
                }
                else {
                          anterior=0;
                          operacion='0';
                     if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)- parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="division";
                }
                   
                   resul=0;
            },   
            multiplicacion: function() {
                if(resul===0){
                 
                     if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)-parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
                 operacion="multiplicacion";
                }else {
                       anterior=0;
                       operacion='0';
                     if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)-parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
                 operacion="multiplicacion";
                }
                   
                   resul=0;
            },   
            resta: function() {
                if(resul===0){
                   
                      if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)-parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="resta";
                }else {
                          anterior=0;
                          operacion='0';
                      if( operacion==="suma"){
                  
                          anterior = parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                        
             }else if(operacion==="resta"){
                        anterior = parseFloat(anterior)- parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="multiplicacion"){
                         anterior = parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
        
             }else if (operacion==="division"){
                           anterior = parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
        
             }else   {
                    anterior = parseFloat(anterior)+parseFloat(document.getElementById("display").innerHTML);
                   }
                
                 document.getElementById("display").innerHTML=0;
             operacion="resta";
                }
                  
                  resul=0; 
            },
            igual: function() {
                   
              if( operacion==="suma"){
                  
                    var resultado=    parseFloat(anterior)+ parseFloat(document.getElementById("display").innerHTML);
                    if(resul===0){
                             anterior= (parseFloat(document.getElementById("display").innerHTML));
        
                    }
              }else if(operacion==="resta"){
                      if(resul===0){
                         var resultado=   parseFloat(anterior)-parseFloat(document.getElementById("display").innerHTML);
            anterior= (parseFloat(document.getElementById("display").innerHTML));
                    
                    } else   var resultado=  parseFloat(document.getElementById("display").innerHTML)- parseFloat(anterior);
      
             }else if (operacion==="multiplicacion"){
                 
                    var resultado=    parseFloat(anterior)* parseFloat(document.getElementById("display").innerHTML);
             if(resul===0){
                             anterior= (parseFloat(document.getElementById("display").innerHTML));
        
                    }
             }else if (operacion==="division"){
                    var resultado=    parseFloat(anterior)/ parseFloat(document.getElementById("display").innerHTML);
              if(resul===0){
                             anterior= (parseFloat(document.getElementById("display").innerHTML));
        
                    }
             }
           resul++;
                document.getElementById("display").innerHTML=resultado.toString();
         //        anterior=0;
           //  operacion='0';
            }
          , signo: function(){
              if(document.getElementById("display").innerHTML==="0"){
                  
              }else{
                   var num =  (-1)* parseFloat(document.getElementById("display").innerHTML);
                     document.getElementById("display").innerHTML =num.toString();     
              }
                   }
        },efecto:{
            mousedown:function(id){
               
               document.getElementById(id).style="height:52.91;";
                document.getElementById(id).style="width:19%;";
            },
              mouseup:function(id){
                document.getElementById(id).style="height:62.91;";
                document.getElementById(id).style="width:23%;";
      
    
            },
              mousedown2:function(id){
               
               document.getElementById(id).style="height:52.91;";
                document.getElementById(id).style="width:23%;";
            },
              mouseup2:function(id){
                document.getElementById(id).style="height:62.91;";
                document.getElementById(id).style="width:29%;";
      
    
            },
            mousedownmas:function(){
               
               document.getElementById("mas").style="height:95%;";
                document.getElementById("mas").style="width:85%;";
            },
              mouseupmas:function(){
                document.getElementById("mas").style="height:100%;";
                document.getElementById("mas").style="width:90%;";
      
    
            },
             mousedownigual:function(){
               
               document.getElementById("igual").style="height:52.91;";
                document.getElementById("igual").style="width:23%;";
            },
              mouseupigual:function(){
                document.getElementById("igual").style="height:62.91;";
                document.getElementById("igual").style="width:29%;";
      
    
            },
            
            mousedownon:function(){
               
               document.getElementById("on").style="height:52.91;";
                document.getElementById("on").style="width:19%;";
            },
              mouseupon:function(){
                document.getElementById("on").style="height:62.91;";
                document.getElementById("on").style="width:23%;";
      
    
            },
             mousedownsgn:function(){
               
               document.getElementById("sign").style="height:52.91;";
                document.getElementById("sign").style="width:19%;";
            },
              mouseupsgn:function(){
                document.getElementById("sign").style="height:62.91;";
                document.getElementById("sign").style="width:23%;";
      
    
            },
             mousedownpunto:function(){
               
               document.getElementById("punto").style="height:52.91;";
                document.getElementById("punto").style="width:23%;";
            },
              mouseuppunto:function(){
                document.getElementById("punto").style="height:62.91;";
                document.getElementById("punto").style="width:29%;";
      
    
            },
             mousedownmenos:function(){
               
               document.getElementById("menos").style="height:52.91;";
                document.getElementById("menos").style="width:19%;";
            },
              mouseupmenos:function(){
                document.getElementById("menos").style="height:62.91;";
                document.getElementById("menos").style="width:23%;";
      
    
            },
             mousedownmult:function(){
               
               document.getElementById("por").style="height:52.91;";
                document.getElementById("por").style="width:19%;";
            },
              mouseupmult:function(){
                document.getElementById("por").style="height:62.91;";
                document.getElementById("por").style="width:23%;";
      
    
            },
             mousedownsng:function(){
               
               document.getElementById("dividido").style="height:52.91;";
                document.getElementById("dividido").style="width:19%;";
            },
              mouseupsng:function(){
                document.getElementById("dividido").style="height:62.91;";
                document.getElementById("dividido").style="width:23%;";
      
    
            }
        }
        
    };
})();