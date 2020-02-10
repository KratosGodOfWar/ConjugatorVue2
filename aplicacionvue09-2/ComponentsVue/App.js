//This is the principal component , here is called the component ShowTable and the function Engine what 
//recieve params "pronoun, past ,present , participle and table " finally this one returns and array with the conjugation that then will be read by the component ShowTable 


Vue.component('App',{
  template:  
  `
  <div>

<div class="input-group">







<div class="input-group-prepend">
    <span class="input-group-text" id="">Form</span>
</div>
<select v-model="Conjugation" @click="tab">
<option disabled value="" >Choose an option</option>
<option value="Statement">Statement</option>
<option value="Negative">Negative Statement</option>
<option value="Short">Short Statement</option>
<option value="NegativeShort">Negative Short Statement</option>
<option value="Question">Question</option>
</select>




<div class="input-group-prepend">
    <span class="input-group-text" id="">Pronoun</span>
</div>
<select v-model="First" @click="tab">
<option disabled value="">Choose an option</option>
<option value='I'>I</option>
<option value='you'>You</option>
<option value='he'>He</option>
<option value='she'>She</option>
<option value='it'>It</option>
<option value='we'>We</option>
<option value='they'>They</option>
</select>





  <div class="input-group-prepend">
    <span class="input-group-text" id="">Present</span>
  </div>
  <input type="text" class="form-control" v-model="Third" placeholder="Present:Take">
  
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Past</span>
  </div>
  <input type="text" class="form-control" v-model="Second" placeholder="Past:Took" >

  <div class="input-group-prepend">
    <span class="input-group-text" id="">Participle</span>
  </div>
  <input type="text" class="form-control" v-model="Fourth" placeholder="Participle:Taken">


  <button @click="tab" class="">Submit</button>
  <button @click="clean">Reset</button>
 

</div>


  <ShowTable :array="this.array"></ShowTable>

      
  </div>

  `,
  data() {
    return{
    //variables are declared here in "data" ever
    First:'I',
    Second:'took',
    Third:'take',
    Fourth:'taken',
    Conjugation:'Statement', 
    array:[]
  }
 },
 methods:{
      tab(){
      //Here engine is called!! this is a important part of app!
      this.array=Engine(this.Conjugation,this.First,this.Second,this.Third,this.Fourth);
      },
      clean(){
        this.Second='';
        this.Third='';
        this.Fourth='';
      }
 },
 mounted(){
  //when the app starts the function named engine is loaded with these arguments by default 
  this.array=Engine('Statement','I','took','take','taken');
 }
});

