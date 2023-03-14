import {Component, OnInit} from '@angular/core';
import {Product} from "../../product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../category/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productEditForm: FormGroup;
  products: Product[] = [];
  categories: Category[] = [];
  private id: any;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProductDetail(this.id);
    });

  }

  onEdit() {
    this.productService.updateById(this.id, this.productEditForm.value).subscribe(item => {
      this.router.navigateByUrl("/product/list");
    });
  }

  getCategoryList() {
    this.categoryService.getAll().subscribe(item => {
      this.categories = item;
    });
  }

  getProductDetail(id) {
    this.productService.getProductById(id).subscribe(item => {
      this.productEditForm = new FormGroup({
        name: new FormControl(item.name, Validators.required),
        price: new FormControl(item.price, Validators.required),
        description: new FormControl(item.description, Validators.required),
        category: new FormControl(this.categories.find(c => c.id === item.category.id), Validators.required)
      })
    })
  }
  // compareCategory(item1,item2){
  //   return item1 && item2 && item1.id === item2.id;
  // }
}
