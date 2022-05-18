import { Product } from './../product.module';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product:Product={
  name:'Digite aqui seu nome',
  price:125.50
}
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
 
  }
createProduct():void{
  this.productService.create(this.product).subscribe(()=>{


  this.productService.showMensager('--------------------'+'Atenção Produto criado!')
  this.router.navigate(['/product'])

})

}
deleteProduct():void{
  this.router.navigate(['/product'])
}
}
