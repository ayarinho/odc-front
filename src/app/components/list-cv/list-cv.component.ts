import { Component, OnInit } from '@angular/core';
import { ParticulierService } from 'src/app/services/particulier.service';
import  jspdf  from 'jspdf'
import html2canvas  from 'html2canvas'

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
 

  listCv:Array<any>=[];
  constructor(private service:ParticulierService) { }

  ngOnInit(): void {

    this.service.getListCv().subscribe((data:any)=>{

      console.log(data)
      this.listCv=data;
    });
  }


  deleteCv(id:any){

    console.log(id)

    this.service.deleteCv(id).subscribe(data=>{

     console.log(data)
    })
 }


 dawnolad(){

var element= document.getElementById("table")  as HTMLElement;
      

     html2canvas(element).then((canvas)=>{

      console.log(canvas)

       var imag=canvas.toDataURL("image/png");

       var doc = new jspdf();

       var imageHeight= canvas.height*208 /canvas.width;

       doc.addImage(imag,0,0,208,imageHeight);

       doc.save("image.pdf");


     })
 }

}
