import {Component} from '@angular/core';
import { fadeIn, fadeInUp, fadeInDown } from '../../animations';


@Component({
  selector: 'product',
  templateUrl: './product.html',
   animations: [ fadeIn, fadeInUp, fadeInDown ]
})
export class ProductComponent{

  constructor() {
   
  }


}
