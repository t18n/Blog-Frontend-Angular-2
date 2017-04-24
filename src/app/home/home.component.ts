import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Article } from './article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public articles: Article[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
    this.articles = JSON.parse(JSON.stringify(ARTICLESDATA));
  }
}

var ARTICLESDATA = [
      {
        "id":"1",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },{
        "id":"2",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },      {
        "id":"3",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },{
        "id":"4",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },      {
        "id":"5",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },{
        "id":"6",
        "date": "21/04/93 3:54",
        "auther": "Demo Article",
        "title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat nec leo ornare tincidunt quis eget odio. Morbi facilisis accumsan bibendum. Mauris nulla est, hendrerit quis semper ac, semper id ligula. Sed varius porttitor nulla at auctor. In aliquet ante at orci viverra, id facilisis eros dictum. Pellentesque orci ex, feugiat id nibh sed, faucibus blandit diam. Duis sit amet lacus faucibus, volutpat lorem quis, ultricies velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non enim vitae libero porta malesuada eget eget risus. Etiam dapibus ex a orci vehicula sollicitudin. Duis efficitur iaculis enim, nec malesuada nisi suscipit ut. Cras ex ipsum, vehicula a nisl placerat, ornare consequat sem. Donec volutpat venenatis sodales. Sed at venenatis libero. Vestibulum iaculis sit amet justo in lobortis. Morbi cursus sit amet ex eget iaculis. Nam elementum ante ultricies consectetur dictum. Duis sed elit eu urna consequat lacinia ultricies nec augue. ex at nisl eleifend commodo. Curabitur sit amet nisl pharetra, facilisis magna et, pellentesque ligula. Proin condimentum rutrum ullamcorper. Fusce metus purus, iaculis at nulla nec, sodales condimentum risus. Praesent cursus, nisl ac ornare convallis, leo quam vestibulum mi, eu cursus odio mauris sed odio. Donec metus odio, gravida iaculis dapibus id, ullamcorper et quam. Nullam euismod, lectus quis tincidunt porta, augue dui rhoncus magna, eu pharetra risus ex nec nulla. Cras non orci nec metus condimentum commodo vitae in odio. Phasellus efficitur interdum purus, a tempus elit scelerisque et. Etiam faucibus vulputate quam nec lobortis.",
        "tags" : "lorem, dummy text, demo article",
        "numcomments": "5",
        "numlikes": "14",
        "numdislikes": "2",
        "coverimagelink": "..."
      },
  ]