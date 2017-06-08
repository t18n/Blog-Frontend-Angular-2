import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';

let articleService: ArticleService;

describe('articleService', () => {
  let component: ArticleService;
  let fixture: ComponentFixture<ArticleService>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


})