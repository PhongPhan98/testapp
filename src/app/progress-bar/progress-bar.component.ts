import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if ("progress" in changes) {
      const value = changes["progress"].currentValue;
      if (typeof value !== "number") {
        const progress = Number(value);
        if (Number.isNaN(progress)) {
          this.progress = 0
        }
        else {
          this.progress = progress;
        }

      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
