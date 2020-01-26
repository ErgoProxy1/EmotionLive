import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() { }

	titleD;
	typeD;
    dataD;
    columnNamesD;
    optionsD;
    widthD;
	heightD;

	titleW;
	typeW;
    dataW;
    columnNamesW;
    optionsW;
    widthW;
	heightW;
	
	titleM;
	typeM;
    dataM;
    columnNamesM;
    optionsM;
    widthM;
	heightM;
	
  ngOnInit() {

	// Graph for the day
    this.titleD = 'Emotions throughout the Day';
    this.typeD = 'ColumnChart';
    this.dataD = [
		['Joy', 45.0, 'rgb(160, 228, 147)'],
		['Anger', 26.8, 'rgb(230, 113, 113)'],
		['Sadness', 12.8, 'rgb(49, 64, 196)'],
		['Disgust', 8.5, 'rgb(128, 77, 128)'],
		['Fear', 6.2, 'rgb(235, 145, 61)'],
		['Surprise', 0.7, 'rgb(236, 222, 142)'] 
    ];
    this.columnNamesD = ['Emotion', 'Frequency', {role: 'style'}];
    this.optionsD = {   
		chartArea: {width:'75%', height:'75%'},
		top: 100,
		animation:{
			startup: true,
			easing: 'in',
			duration: 1000,
		},
		legend: {position: "none"},
		bar: {groupWidth: "90%"}

    };
    this.widthD = 600;
	this.heightD = 600;
	

	// Graph for the week
	this.titleW = 'Emotions throughout the Week';
    this.typeW = 'ColumnChart';
    this.dataW = [
		['Joy', 45.0, 'rgb(160, 228, 147)'],
		['Anger', 26.8, 'rgb(230, 113, 113)'],
		['Sadness', 12.8, 'rgb(49, 64, 196)'],
		['Disgust', 8.5, 'rgb(128, 77, 128)'],
		['Fear', 6.2, 'rgb(235, 145, 61)'],
		['Surprise', 0.7, 'rgb(236, 222, 142)'] 
    ];
    this.columnNamesW = ['Emotion', 'Frequency', {role: 'style'}];
    this.optionsW = {   
		chartArea: {width:'75%', height:'75%'},
		top: 100,
		animation:{
			startup: true,
			easing: 'in',
			duration: 1000,
		},
		legend: {position: "none"},
		bar: {groupWidth: "90%"}

    };
    this.widthW = 600;
	this.heightW = 600;
	

	//Graph for the Month
	this.titleM = 'Emotions throughout the Month';
    this.typeM = 'ColumnChart';
    this.dataM = [
		['Joy', 45.0, 'rgb(160, 228, 147)'],
		['Anger', 26.8, 'rgb(230, 113, 113)'],
		['Sadness', 12.8, 'rgb(49, 64, 196)'],
		['Disgust', 8.5, 'rgb(128, 77, 128)'],
		['Fear', 6.2, 'rgb(235, 145, 61)'],
		['Surprise', 0.7, 'rgb(236, 222, 142)'] 
    ];
    this.columnNamesM = ['Emotion', 'Frequency', {role: 'style'}];
    this.optionsM = {   
		chartArea: {width:'75%', height:'75%'},
		top: 100,
		animation:{
			startup: true,
			easing: 'in',
			duration: 1000,
		},
		legend: {position: "none"},
		bar: {groupWidth: "90%"}

    };
    this.widthM = 600;
	this.heightM = 600;
  }
  	

}
