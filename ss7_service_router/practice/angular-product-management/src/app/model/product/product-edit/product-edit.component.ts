import {Component, OnInit} from '@angular/core';
import {Product} from "../../product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  message: string = '';
  check: boolean;
  product: Product = null;
  productEdit: FormGroup;
  products: Product[] = [];
  private id: any;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.product = this.productService.getDetail(this.id);
      this.productEdit = new FormGroup({
        id: new FormControl(this.product.id, Validators.required),
        name: new FormControl(this.product.name, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
        description: new FormControl(this.product.description, Validators.required)
      })
    });
  }

  onEdit(){
    this.productService.updateById(this.id,this.productEdit.value);
    this.productEdit.reset();
    this.message = "Successfully";
    this.router.navigateByUrl("/product/list")
  }

  getAll() {
    this.products = this.productService.getAll();
  }

}
