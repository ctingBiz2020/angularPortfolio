import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binarytree',
  templateUrl: './binarytree.component.html',
  styleUrls: ['./binarytree.component.css']
})
export class BinarytreeComponent implements OnInit {
  tree: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(value: number){
    this.tree.push(value);
  }

}
