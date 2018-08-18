import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {

  constructor() { }


  @Output()
  onFilter = new EventEmitter<string>();

    private onFilterEnter( filterValue : string){
      this.onFilter.emit(filterValue);
    }

  ngOnInit() {
  }

}
