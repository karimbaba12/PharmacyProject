import { Component, OnInit } from '@angular/core';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { PersonService } from 'src/app/core/services/person.service';
import { Person } from 'src/app/core/models/person';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';
import { PersonFormDialogComponent } from '../person-form-dialogue/person-form-dialogue.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = ['firstName', 'age', 'job'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example: {firstName: {contains: 'person 1'}}
   *
   */
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  private serviceSubscribe!: Subscription;

  constructor(private personsService: PersonService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Person>();
  }

  edit(data: Person) {
    const dialogRef = this.dialog.open(PersonFormDialogComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.personsService.edit(result);
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogueComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.personsService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.personsService.getAll();
    this.serviceSubscribe = this.personsService.persons$.subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
}

export { PersonFormDialogComponent };
