import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  constructor(){}
  count :number=0;
  buttonClicks :Date[]=[];
  displayButton:boolean=false;
  onClick(){
    this.count++;
    this.buttonClicks.push(new Date());
    this.displayButton=!this.displayButton;
    
  }
  backColor(){
    return "blue";
  }
  

}
