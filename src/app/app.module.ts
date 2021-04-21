import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import "hammerjs";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import {
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
} from "@angular/material";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatButtonModule } from "@angular/material/button";
import { TodoComponent } from "./todo/todo.component";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "@progress/kendo-angular-charts";

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableExporterModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
