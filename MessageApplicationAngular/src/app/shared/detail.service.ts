import { Injectable } from '@angular/core';
import { MessageDetail } from './message-detail.model';
import { HttpClient } from '@angular/common/http';
import { CommentDetail } from './comment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
   fromDataMessage: MessageDetail;
   fromDataComment: CommentDetail;
  readonly rootURL = 'https://localhost:54277/api';
  messages: MessageDetail[];
  comments: CommentDetail[];

  constructor(private http: HttpClient) { }
  postMessageDetail(fromDataMessage: MessageDetail) {
    return this.http.post(this.rootURL + '/Messages', fromDataMessage);
  }
  postCommentDetail(fromDataComment) {
    return this.http.post<CommentDetail[]>(this.rootURL + '/Comments', fromDataComment);
  }
  getCommentDetail() {
    this.http.get(this.rootURL + '/Comments').toPromise().then(res =>
      this.comments = res as CommentDetail[]);
  }
  deleteMessageDetail(id) {
    return this.http.delete(this.rootURL + '/Messages/' + id);
  }
  refreshMessageList() {
    this.http.get(this.rootURL + '/Messages').toPromise().then(res =>
      this.messages = res as MessageDetail[]);
  }
  putMessageDetail(id, approved) {
    return this.http.put(this.rootURL + '/Messages/' + id, approved);
  }
}
