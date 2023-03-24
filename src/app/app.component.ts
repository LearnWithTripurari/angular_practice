import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Post } from './post.model';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "./counter.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  count$: Observable<number>;

  posts:Post[] = []
  constructor(
    //private commonSer: CommonService
    private store: Store<{count: number}>
    ) {
    this.count$ = store.select('count')
  }

  ngOnInit() {
    console.log('ngOnInit')

    // this.commonSer.getPost()
    // .subscribe((res:Post[]) => {
    //   console.log(res)
    //   this.posts = res
    // })
  }

  showMessage(msg: string): string {
    return msg;
  }

  increment() {
  this.store.dispatch(increment())
  }

  decrement() {
  this.store.dispatch(decrement())
  }

  reset() {
  this.store.dispatch(reset())
  }
}
