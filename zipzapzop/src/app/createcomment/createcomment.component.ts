import { Component, OnInit } from '@angular/core';

import {commentService } from "./commentService";

import { Comment } from "./comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent implements OnInit {

  constructor(
    public commentService: commentService,
    private route: ActivatedRoute,
  ) { }
  errorMessage: string;



  comment: Comment = {
    id: 0,

    body : "",

    creationDate: null

  };

  ngOnInit() {
  }


  submitCommentonPost() {
    if (!this.comment) {
      return;
    }

    console.log(this.comment.body.toString());
   // const id = +this.route.snapshot.paramMap.get("id");

    let commentbody= this.comment.body;

    this.commentService.submitComment(this.comment,2)


      .subscribe(comment => this.comment, error => (this.errorMessage = <any>error));
  }

}