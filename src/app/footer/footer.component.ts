import { Component, OnInit } from '@angular/core';
import { TagService } from './../tag/tag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [TagService]
})
export class FooterComponent implements OnInit {

  
  public tags: string[];
  public error: string;

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.getTags();
  }

    public getTags() {
    this.tagService.getTags().subscribe(
      data => {
        this.tags = data;
        error => this.error = error.json().error;
      }
    );
  }

}
