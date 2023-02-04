import { Component, AfterViewInit, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Invertor } from 'src/interface/inventor';
import { IProduct } from 'src/entities/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

  title = 'FPT POLYTECHNIC';
  student = {
    hoten: 'Nguyen Thi  A',
    gioitinh: 'Nu',
    ngaysinh: '25/08/1999',
    anh: 'poly.jpeg',
    diemTB: 8.9
  }
  // bai 3
  inventors: Invertor[] = [

    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Issac', last: 'Newton', year: 1643, passed: 1937 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1942 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1930 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1473, passed: 1934 },
    { id: 6, first: 'Albert', last: 'Einstein', year: 1897, passed: 1953 },
    { id: 7, first: 'Nicolaus', last: 'Copernicus', year: 1868, passed: 1915 }

  ]
  // bai 4:
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ]
}
