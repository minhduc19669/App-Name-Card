import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = "#D9D9D9";
  @Input() progressColor = "#4CAF50";
  @Input() width: number = 80;
  @Input() height: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
