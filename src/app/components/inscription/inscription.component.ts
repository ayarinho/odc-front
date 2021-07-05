import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticulierService } from 'src/app/services/particulier.service';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registerForm:any;
  critere:any;
  Change:boolean=false;
  
  constructor(private formBuilder:FormBuilder,private service:ParticulierService,private route:Router) { }
  get M() { return this.registerForm.controls; }

  get k() { return this.critere.controls; }


  ngOnInit(): void {

    this.critere = this.formBuilder.group({

      critere: ['', [Validators.required]],
    });

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numTel :['',[Validators.required,Validators.maxLength(8)]],
      addresse: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    
    
    });
  }


  onSubmit(){
    this.Change=true;

    console.log(this.registerForm.value)
    console.log(this.critere.value)

     if(this.critere.value.critere === 'particulier'){
 
    this.service.InscriptionParticulier(this.registerForm.value).subscribe(data=>{
           
      console.log("particulier",data);
      
    })
  
  }else{

    this.service.InscriptionEntreprise(this.registerForm.value).subscribe(data=>{

      console.log("entreprise",data)
    })     
}
  }
}
