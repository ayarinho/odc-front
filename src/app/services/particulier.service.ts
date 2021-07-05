import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  constructor(private http:HttpClient) { }


    
  login(email:any,password:any) {

    return this.http.post<any>("http://localhost:8082/login/"+email+"/"+password ,{email,password});
  }



    InscriptionParticulier(particulier:any){
      return this.http.post<any>("http://localhost:8082/InscriptionParticulier",particulier);
    }

    getListCv(){

      return this.http.get("http://localhost:8082/listCv");
    }


        addCv(particulier:any){

          return this.http.post("http://localhost:8082//AddCv1",particulier)
        }


        deleteCv(idCv:any){

          return this.http.delete("http://localhost:8082/deleteCv/"+idCv)
        }



        inscription(critere:any,entreprise:any,particulier:any){

          return this.http.post("http://localhost:8082/inscription3/"+critere,entreprise,particulier)

              
        }


        InscriptionEntreprise(entreprise:any) {

          return this.http.post<any>("http://localhost:8082/InscriptionEntreprise",entreprise);
        }
     
  }

