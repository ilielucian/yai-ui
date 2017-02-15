import { Comment } from './comment';

export class Story {

  ///////////////////
  // FIELDS

  author: string;
  date: Date;
  title: string;
  description: string;
  likes: string[];
  comments: Comment[];


  ///////////////////
  // CONSTRUCTOR -- special constructor to handle named parameters
  constructor(options?: {author:string; date:Date; title:string; description:string; likes:string[]; comments:Comment[]}) {
    if (options) {
      this.author = options.author;
      this.date = options.date;
      this.title = options.title;
      this.description = options.description;
      this.likes = options.likes;
      this.comments = options.comments;
    }
  }


  ///////////////////
  // METHODS

  toggleLike(currentUser : string) {
    console.log('call toggleLike');
    
    let likeIndexOfCurrentUser = this.likes.indexOf(currentUser);

    if (likeIndexOfCurrentUser < 0) {
      this.likes.push(currentUser);
    } else {
      this.likes.splice(likeIndexOfCurrentUser, 1);
    }
  }

  getLikes() {
    console.log('call getLikes: ', this.likes);
    return this.likes;
  }

  getComments() {
    return this.comments;
  }

  addStoryComment(comment : Comment) {
    this.comments.push(comment);
  }

  // TODO should be a service
  formatDate(date: Date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}
