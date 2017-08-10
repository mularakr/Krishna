import {Component} from '@angular/core'
import {FormGroup,FormControl} from '@angular/forms'
import {AjaxService} from '../../services/ajax.service'
import {OnInit} from '@angular/core'
@Component({
    selector:'child-app',
    templateUrl:'./childView.html', //{{}}-->interpolations
    styles:[` 
    .classOne{color:red}
    .classTwo{color:black}`
] //internal styling
})
export class ChildComponent implements OnInit{//<==inject something(service(->uppercase)) into this where i have some common code
    
    employees:any=[];
    errorMsg:any="";
    constructor(private ajaxRef:AjaxService){// i'll inject my services here
            console.log("constructor called");
    }
       
    //override ngOnInit which is pre defined fn in OnInit interface(contract)
    
    ngOnInit(){//this function will also be called whenever this component is loaded
        //console.log(this.ajaxRef.getEmployees());
        this.ajaxRef.getEmployees()
        .subscribe(resEmployeeData => this.employees=resEmployeeData ,
              resEmployeeError => this.errorMsg = resEmployeeError);
    }
    
    
    name='Child data';
    showElement=true;
    names=["Rakesh","Vegeshwar","Aymira","Andy"];
    case="case1";
    cOne=false;
    cTwo=true;
    style='italic';
    size='10px';
    toggle(){

    }
    showElem(){
        let x =10;
        this.showElement=false;
    }

    onSubmit(value:any){
        console.log(value);
    }

    userMDForm=new FormGroup({
        name: new FormControl(),
        email:new FormControl()
    })

    mdfSubmit(){
        console.log(this.userMDForm.value)
    }
}
