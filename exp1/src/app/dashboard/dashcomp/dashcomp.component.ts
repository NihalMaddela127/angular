import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Istudents } from './casesensitive'
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-dashcomp',
  templateUrl: './dashcomp.component.html',
  styleUrls: ['./dashcomp.component.css']
})
export class DashcompComponent implements OnInit {

  students: Istudents[];

  ngOnInit(): void {
    this.students = this.getstudents();
    console.log(this.students);
  }

  @Output('response')
change:EventEmitter <number> = new EventEmitter<number>();

display(val){
  this.change.emit(val);
}

getstudents(): Istudents [] {
  return[
    
    {"Name":"Nihal",
		"Branch":"ECM",
     "College":"Snist",
    "Percentage":".80"},
    
    {"Name":"Shravan",
		"Branch":"ECM",
		 "College":"Snist",
     "Percentage":".73"},
 
    {"Name":"Vinay",
		"Branch":"ECE",
     "College":"Snist",
     "Percentage":".85"},
     
    {"Name":"Sandeep",
		"Branch":"ECE",
		 "College":"Snist",
     "Percentage":".90"},

    {"Name":"Sai",
		"Branch":"CSE",
		 "College":"Snist",
     "Percentage":".72"},

    {"Name":"Ganesh Srv",
		"Branch":"CSE",
		 "College":"GNIT",
     "Percentage":".82"},

    {"Name":"Chaitanya",
		"Branch":"ECE",
		 "College":"Snist",
     "Percentage":".89"},

    {"Name":"Anvesh",
		"Branch":"ECE",
		 "College":"Snist",
     "Percentage":".78"},

    {"Name":"Ashish",
		"Branch":"CSE",
		 "College":"Snist",
     "Percentage":".76"},

    {"Name":"Venkatesh",
		"Branch":"ECE",
		 "College":"Snist",
     "Percentage":".81"},

    {"Name":"Pavithra",
		"Branch":"CSE",
		 "College":"GNIT",
     "Percentage":".83"},

    {"Name":"Soujanya",
		"Branch":"CSE",
		 "College":"GNIT",
     "Percentage":".72"},

    {"Name":"Anurag",
		"Branch":"CSE",
		 "College":"GNIT",
     "Percentage":".85"},

    {"Name":"Akhil",
		"Branch":"CSE",
		 "College":"GNIT",
     "Percentage":".88"}  
  ]
}
}
