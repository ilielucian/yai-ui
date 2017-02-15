import { Component } from '@angular/core';
import { Story } from './models/story';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
})
export class AppComponent {

  currentUser = 'Lucian';
  stories = [
    new Story({
      author: 'Vlad',
      date: new Date(),
      title: 'What a goal!',
      description: 'Hey gaiz, luc uat a gol!!',
      likes: ['Lucian', 'Georgiana'],
      comments: [
        {
          user: 'Lucian',
          content: 'Cool man ;)',
          date: new Date()
        },
        {
          user: 'Georgiana',
          content: 'Niiiice :D',
          date: new Date()
        }
      ]
    }),
    new Story({
      author: 'Georgiana',
      date: new Date(),
      title: 'Bambiiii',
      description: 'Bunaaa, eu sunt Bambiii',
      likes: ['Lucian'],
      comments: [
        {
          user: 'Lucian',
          content: '<3',
          date: new Date()
        },
        {
          user: 'Georgiana',
          content: ':D',
          date: new Date()
        }
      ]
    })
  ];

  getStories() : Story[] {
    return this.stories;
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
