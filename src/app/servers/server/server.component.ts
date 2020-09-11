import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  id: number;
  canEdit = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.route.queryParams.subscribe((queryParams) => {
      this.canEdit = queryParams['allowEdit'] ? true : false;
    });
  }
}
