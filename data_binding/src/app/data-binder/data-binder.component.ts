import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binder',
  templateUrl: './data-binder.component.html',
  styleUrls: ['./data-binder.component.css']
})
export class DataBinderComponent {
  username :string='';
  checker=true;
  onEnteringData(event:Event){
    this.checker=false;
    return this.username=(<HTMLInputElement>event.target).value
   
  }
  
  OnClickEmptySet(){

     this.username='';
     this.checker=true;
     console.log(this.username);
     return this.username;

  }
}
