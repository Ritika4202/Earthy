import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
   products: {name: any, desc: any,price:any,image:any}[] = [
    {name: "https://i.ibb.co/5MhR40f/ead566-be12cf35ae454264874d19841803bf17-mv2-jpg.webp", desc: "PLANT BASED REUSABLE CUPS",price:"€2.39",image:"https://i.ibb.co/55D1NvJ/Screenshot-2023-02-08-at-9-21-53-PM.png"},
    {name: "https://i.ibb.co/zh95hs5/Screenshot-2023-02-08-at-1-19-11-PM.png", desc: "BAMBOO TOOTHBRUSH",price:"€3.59",image:"https://i.ibb.co/hKJ4QyJ/Screenshot-2023-02-08-at-9-38-25-PM.png"},
    {name: "https://i.ibb.co/2sQRM3W/Screenshot-2023-02-08-at-12-16-48-PM.png", desc:"REUSABLE BAMBOO STRAWS",price:"€1.99",image:"https://i.ibb.co/NSTzfkJ/Screenshot-2023-02-08-at-9-35-12-PM.png"},
    {name: "https://i.ibb.co/9gQYQwJ/Screenshot-2023-02-08-at-1-22-27-PM.png",desc:"PLANT BASED REUSABLE CONTAINERS",price:"€2.99",image:"https://i.ibb.co/3yVxLkr/Screenshot-2023-02-08-at-9-41-46-PM.png"},
    {name:"https://i.ibb.co/vwXpQJg/Screenshot-2023-02-08-at-1-28-33-PM.png",desc:"NATURAL BAMBOO LOOFAH",price:"€2.99",image:"https://i.ibb.co/QvH5W7d/Screenshot-2023-02-08-at-9-40-05-PM.png"}
  ];
  show=false;
  data:any;
  pn:any;
  img:any;
  price:any;
  openpopup(product:any)
  {
     this.show=true;
     this.pn=product.desc;
     this.img=product.image;
     this.price=product.price;
     console.log(product.desc);
     if(product.desc=="PLANT BASED REUSABLE CUPS")
     {
      console.log("answer",product.desc);
      this.data="Every batch of cups is unique due to being natural. Lids available in different Colours. Designed in USA. ";
     }
    if(product.desc=="REUSABLE BAMBOO STRAWS"){
      console.log("answer",product.desc);
      this.data="100% natural, toxic-free, vegan ..Odorless, tasteless, washable, reusable, durable."
    }
    if(product.desc=="BAMBOO TOOTHBRUSH")
    {
      console.log("answer",product.desc);
      this.data="100% natural and toxic-free. Vegan product. Eco friendly and sustainable."
    }
    if(product.desc=="NATURAL BAMBOO LOOFAH")
    {
      console.log("answer",product.desc);
      this.data="Plant-based material. Better for the skin - No Chemicals. "
    }
    if(product.desc=="PLANT BASED REUSABLE CONTAINERS"){
      console.log("answer",product.desc);
      this.data="100% recyclable. Govt Approved, Tested and approved in TUV Rhineland Germany. Chemical Free."
    }
  }
  closepopup()
  {
    this.show=false;
  }
}
