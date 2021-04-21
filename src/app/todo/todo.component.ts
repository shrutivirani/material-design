import { Component, OnInit, ViewChild } from "@angular/core";
import { JavatechieCovid19Service } from "../javatechie-covid19.service";
import { TodoList } from "src/todoList";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  graphValueFalse = [];
  graphValueTrue = [];
  ELEMENT_DATA: TodoList[];
  completed = ["true", "false"];
  editData: TodoList[];
  selectedgroup: any;
  id: any;
  title: any;
  userId: any;
  formVisibility: boolean = false;
  displayedColumns: string[] = ["userId", "id", "title", "completed", "action"];
  dataSource = new MatTableDataSource<TodoList>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dialog: any;
  constructor(private service: JavatechieCovid19Service) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    var countTrue = 0;
    var countFalse = 0;
    let resp = this.service.fetchTodo();
    resp.subscribe((report) => {
      this.dataSource.data = report as TodoList[];
      this.dataSource.filteredData.map((completed) => {
        if (completed.completed == true) {
          countTrue++;
        } else if (completed.completed == false) {
          countFalse++;
        }
      });
      this.graphValueFalse.push(countTrue);
      this.graphValueTrue.push(countFalse);
    });
  }

  openDialog(obj: TodoList[]) {
    this.formVisibility = true;
    this.editData = obj;
  }

  updateData() {
    this.dataSource.filteredData.filter((data) => {
      if (data.id == this.editData.id) {
        data.userId = this.userId;
        data.title = this.title;
        data.completed = this.selectedgroup;
      }
    });
  }

  getGraph() {}
}
