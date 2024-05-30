import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sn-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit{

  @Input() currentStep: number = 1;
  @Input() numSteps: number = 1;
  @Input() title: string = '';
  steps: number[] = [];

  ngOnInit(): void {
    for (let index = 0; index < this.numSteps; index++) {
      this.steps.push(this.currentStep - 1);
    }
  }

}
