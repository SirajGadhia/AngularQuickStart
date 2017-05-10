import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';
import { fadeIn, fadeInUp, fadeInDown } from '../../animations';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  animations: [ fadeIn, fadeInUp, fadeInDown ]
})
export class AboutComponent {
public title:String = "About this application"
  
  constructor(
      private globalState: GlobalState

  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }


  
}
