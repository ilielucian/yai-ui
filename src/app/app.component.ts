import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
})
export class AppComponent {
  name = 'Lucian';

  currentUser = 'Lucian';

  storyBy = 'Vlad';
  storyDate = this.formatDate(new Date());
  storyTitle = 'What a goal!';
  storyDescription = 'Hey gaiz, luc uat a gol!!';
  storyLikes = ['Lucian', 'Georgiana'];
  storyLiked = this.storyLikes.indexOf(this.currentUser) > -1;

  storyCommentUser = 'Lucian';
  storyComment = 'Que porqueria!!';


  toggleLike() {
    let likeIndexOfCurrentUser = this.storyLikes.indexOf(this.currentUser);

    if (likeIndexOfCurrentUser < 0) {
      this.storyLikes.push(this.currentUser);
    } else {
      this.storyLikes.splice(likeIndexOfCurrentUser, 1);
    }
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
