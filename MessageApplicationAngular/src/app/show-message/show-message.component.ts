import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMessageComponent } from '../add-message/add-message.component';
import { DetailService } from '../shared/detail.service';
import { ToastrService } from 'ngx-toastr';
import { CommentsComponent } from '../comments/comments.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})

export class ShowMessageComponent implements OnInit {
  userDetails;
  searchText;
  deleteForm: any;
  showcountmessages: boolean;
 constructor(public dialog: MatDialog, public service: DetailService, public toastr: ToastrService,
             public router: Router, private formBuilder: FormBuilder, public serviceAuthentication: UserService) {
             }
  ngOnInit() {

    this.serviceAuthentication.getUserProfile().subscribe(
       res => {
         this.userDetails = res;
         console.log(this.userDetails);
       },
       err => {
         console.log(err);
       },
     );

      this.service.refreshMessageList();

      this.deleteForm = this.formBuilder.group({
        IsDeleted: 'true',
      });
}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMessageComponent, {
      width: '800px',
      height: '300px',
    });
  }
  openCommentDialog(MessageId: number): void {
    let listOfComments = this.service.messages.find(x => x.MessageId === MessageId).ListOfComments;
    const dialogRef = this.dialog.open(CommentsComponent, {
      width: '800px',
      height: '600px',
      data: {
        MessageId,
        listOfComments,
     },
   });
  }

onDelete(MessageId, TextMessage, Email, Group) {
    let deleted = {
      MessageId,
      Email,
      TextMessage,
      IsDeleted: this.deleteForm.value.IsDeleted,
    };
    this.service.putMessageDetail(MessageId, deleted).subscribe(
      res => {
        this.service.refreshMessageList();
        this.toastr.warning('Sadržaj nije odobren');
      },
      err => {
        this.toastr.error('Pokušajte ponovo', 'Došlo je do greške', );
      }
    );
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  onLogoClick() {
    location.reload();
  }
}
