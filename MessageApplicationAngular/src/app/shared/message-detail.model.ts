import { CommentDetail } from './comment-detail.model';

export class MessageDetail {

  public MessageId: number;
  public TextMessage: string;
  public CurrentDate: Date;
  public ListOfComments: CommentDetail[];
  public UserName: string;
  public IsDeleted: boolean;
}

