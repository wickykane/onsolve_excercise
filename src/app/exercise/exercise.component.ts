import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  constructor(private route: Router, private activeRoute: ActivatedRoute) {}
  @ViewChild('tabSet') tabSet: NgbTabset;

  ngOnInit() {
    this.selectDefaultTab();
  }

  changeTab(tabData) {
    this.route.navigate(['exercise'], { queryParams: { tab: tabData.nextId } });
  }

  selectDefaultTab() {
    setTimeout(() => {
      this.tabSet.select(
        String(this.activeRoute.snapshot.queryParams['tab'] || 1)
      );
    });
  }
}
