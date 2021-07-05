import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticulierService } from 'src/app/services/particulier.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  registerForm:any;
  Change:boolean=false;

  constructor(private formBuilder:FormBuilder,private service :ParticulierService,private route:Router) { }
  get M() { return this.registerForm.controls; }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numTel :['',[Validators.required,Validators.maxLength(8)]],
      addresse: ['', Validators.required],
      email: ['', Validators.required],
      formation: ['', [Validators.required]],
      niveauEtude: ['', [Validators.required]],

    });
  }

  addCv(){

    this.Change=true;

    this.service.addCv(this.registerForm.value).subscribe(data=>{

      console.log(data)

      this.route.navigate(['/cv'])
    })

  }

 

}
