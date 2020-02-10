
Vue.component('ShowTable',{
    template:
      `
      <div>

      <div  style="display:none"> {{ComputedProperty}}</div>
      <table class="table table-dark">
      <tr>
        <td><h4>Simple</h4><div v-for="value of array[0]">{{value}}</div></td>
        <td><h4>Progressive</h4><div v-for="value of array[1]">{{value}}</div></td>
      </tr></br>
      <tr>
        <td><h4>Perfect</h4><div v-for="value of array[2]">{{value}}</div></td>
        <td><h4>Perfect Progressive</h4><div v-for="value of array[3]">{{value}}</div></td>
      </tr>
    </table>

      </div>
    
      `,
      data() {
          return{
          one:'',
          two:'', 
          three:'', 
          four:'',
          lists:[]
        }
      },
      //computed properties are used to listening the changes in the interface 
      computed:{
         //each computed property goes in a function what then will be called with {{ComputedProperty}} inside the "Template" , the user interface is actualized all the time {{content actualized here}}
        ComputedProperty(){
          lists=this.array
          return lists
        }
        //Props is used to receiving data from outside the component 
      },props:['array']          
              
    });
    
  