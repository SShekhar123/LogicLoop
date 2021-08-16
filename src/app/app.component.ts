import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gutenberg';
  appshow = true;
  books = "";
  data : any[] = [];
  id : string[] = [];
  name : string[] = [];
  constructor(private http: HttpClient) {
    if(String(window.location.href).indexOf('fiction') >= 0)
      this.appshow = false;
  }

  ngOnInit() {
    this.http.get("http://skunkworks.ignitesol.com:8000/books/").subscribe((data)=>{
      this.books = JSON.stringify(data);
      for(let i=0; i< JSON.parse(this.books).results.length; i++){
        if(JSON.parse(this.books).results[i].authors[0].name)
          this.id.push(JSON.parse(this.books).results[i].authors[0].name);
          this.name.push(JSON.parse(this.books).results[i].title);
      }
    })
    this.data = [
      { type : 1, text: "How Did Van Gogh`s Turbulent Mind Depict One of the Most Complex Concepts in Physics?", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/assests/b1.jpg", prfile: "http://localhost:4200/assets/assests/p1.jpg"}, 
      { type : 1, text: "How Did Van Gogh`s Turbulent Mind Depict One of the Most Complex Concepts in Physics?", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/assests/b2.jpg", prfile: "http://localhost:4200/assets/assests/p2.jpg"}, 
      { type : 1, text: "How Did Van Gogh`s Turbulent Mind Depict One of the Most Complex Concepts in Physics?", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/assests/b3.jpg", prfile: "http://localhost:4200/assets/assests/p1.jpg"}, 
      { type : 2, text: "How Did Van Gogh`s Turbulent Mind Depict One of the Most Complex Concepts in Physics?", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/assests/b4.jpg", prfile: "http://localhost:4200/assets/assests/p2.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
        name: "Lora Plammer", date: "on Sep 29, 2017 at 9:48am"
      }, 
      {type : 1, text: "How Did Van Gogh`s Turbulent Mind Depict One of the Most Complex Concepts in Physics?", likes: 57, comment: 6, views: 138, asset: "http://localhost:4200/assets/assests/b5.jpg", prfile: "http://localhost:4200/assets/assests/p1.jpg"}
    ];
  }

  show(){
    this.appshow = false;
  }

}
