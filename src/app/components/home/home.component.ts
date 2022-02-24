import { Component, OnInit } from '@angular/core';
import { product } from './product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


    products: product[] = [
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta blanca', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Amarilla', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Rosa', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Amarilla', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
      {productName: 'Camiseta Negra', productPrice: 15200, productDescription: 'Camiseta Negra Duvo First, algodón 100%', productImg: './../../../assets/img/pexels-wendy-wei-1656684.jpg' },
    ]

}
