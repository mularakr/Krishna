import { Component } from '@angular/core';
import {group,transition,animate,keyframes,trigger,state,style} from '@angular/animations'
@Component({ // @component-->decorator(angular) -->(java)annotations
  selector: 'my-app',
  templateUrl: './views/appComp.html',
  animations:[
    trigger('lightsOnOff',[
      state('off',style({
            backgroundColor:'black'
      })),
      state('on',style({
            backgroundColor:'white'
      })),
          transition('off=>on',[animate('2s')]),
          transition('on=>off',[animate('2s')])
    ])
  ]
})
export class AppComponent  { //<==inject something(service(->uppercase)) into this where i have some common code
  //class(blueprint)-->object(to create an object we needd constructor)
 
  name:string = 'Angular4... This is more easier than Angular1'; // class variable
  username:any='';
  roomState:string="off";
  hello(){
    var myName='rakesh'; //local variable
    console.log(this.username + myName);
  }
  
  welcome(){
    console.log(this.username);
  }
  toggleLights(){
    this.roomState=(this.roomState==="off")?"on":"off";
  }
}
