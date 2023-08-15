import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  constructor(){}
  count :number=0;
  buttonClicks:number[]=[];
  displayButton:boolean=false;
  onClick(){
    this.count++;
    this.buttonClicks.push(this.buttonClicks.length+1);
    this.displayButton=!this.displayButton;
    
  }
  backColor(){
    return "blue";
  }
  textColor(){
    return "white";
  }

}
