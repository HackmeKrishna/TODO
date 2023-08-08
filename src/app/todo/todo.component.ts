import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent {
  title='ToDo Work List';
list:any[]=[];
  addList(item:string){

this.list.push({id:this.list.length,name:item});
console.warn(this.list)
  }

}
