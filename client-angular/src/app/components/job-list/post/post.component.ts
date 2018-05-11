import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  @Input() job;
  isFollowed: boolean = false;
  action: string = "follow";
  target: string = "job";
  targetID: string;
  remainingDay: number;
  jobContent: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.jobContent = shortenJobContent(this.job.content, 300);
    this.remainingDay = calculateDiffDays(this.job);
    this.targetID = this.job.jobID;
  }

  onFollow() {
    this.postService.follow(this.action, this.target, this.targetID)
      .then(res => {
        this.isFollowed = !this.isFollowed;
        if (this.isFollowed) {
          this.action = "unfollow";
        } else {
          this.action = "follow";
        }
      })
      .catch(err => console.log(err));
  }
}

function shortenJobContent(content:string, length:number) {
  if (content.length > length) {
    return content.substring(1, length) + "...";
  }
  return content;
}

function calculateDiffDays(job) {
  var jobDate = job.endDate.split("-");
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
  var today = new Date();
  var diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
  return diffDays;
}
