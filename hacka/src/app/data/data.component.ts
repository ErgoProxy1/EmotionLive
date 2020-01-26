import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() { }

	title;
	type;
    data;
    columnNames;
    options;
    width;
	height;
	
  ngOnInit() {
    this.title = 'Emotions throughout the Day';
    this.type = 'BarChart';
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
    ];
    this.columnNames = ['Browser', 'Percentage'];
    this.options = {   
		chartArea: {width:'75%', height:'75%'},
		top: 100,
		animation:{
			startup: true,
			easing: 'in',
			duration: 1000,
		}
    };
    this.width = 500;
    this.height = 500;
  }
  	

}
