import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-ayarossa',
  templateUrl: './ayarossa.component.html',
  styleUrls: ['./ayarossa.component.css']
})
export class AyarossaComponent implements OnInit {

  constructor(private service:EmployerService) { }
 
  employer = {id:5,nom:"youssef",prenom:"ayari",dateNaissance:"1994-06-06"}
  
  nom:any;
  title:boolean=true;
  
  ngOnInit(): void {

    this.service.addEmployer(this.employer).subscribe((data:any)=>{

      console.log("hello ",data);

      this.nom=data.nom;
    })
    
  }

}
