import { Component, OnInit, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating:number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter <string>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

}
