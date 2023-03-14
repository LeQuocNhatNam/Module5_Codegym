import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../category/category";
import {installTempPackage} from "@angular/cli/tasks/install-package";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categoryList: Category[];
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(this.categoryList)
  });

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  submit() {
    this.productService.saveProduct(this.productForm.value).subscribe(item=>{
      this.productForm.reset();
      this.router.navigateByUrl("/product/list");
    });

  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryService.getAll().subscribe(item => {
      this.categoryList = item;
    })
  }

}
