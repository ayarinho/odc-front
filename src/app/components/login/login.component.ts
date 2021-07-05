import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticulierService } from 'src/app/services/particulier.service';

 
export function cleanString(str:any) {
  str = str.replace('"[', '[');
  str = str.replace(']"', ']');
  return str;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:any;
  submitted:boolean=false;
  user:any;
  constructor(  private formBuilder: FormBuilder,private serviceParticulier:ParticulierService,private route:Router){

  }
  get f() { return this.LoginForm.controls; }
  ngOnInit(): void {

    
this.LoginForm = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required],

});
  }


   login(){

    this.submitted=true; 

    console.log(this.f.email.value)

    this.serviceParticulier.login(this.f.email.value,this.f.password.value).subscribe(data=>{

      console.log("helooo ",data);

            if(data.critere === "particulier"){

              this.route.navigate(['/addCv']);
            }else{

              this.route.navigate(['/cv'])
            }
    });



   }

}
