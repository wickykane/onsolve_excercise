import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  changeTab(tabData) {
    this.route.navigate(['exercise'], { queryParams: { tab: tabData.nextId }});
  }
}
