import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PercentageChart } from 'src/app/core/models/percentageChart';


@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss'],
})
export class ChartFormComponent {
  formInstance: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChartFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PercentageChart
  ) {
    this.formInstance = new FormGroup({
      y: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
              
    });

    this.formInstance.setValue(data);
  }

  ngOnInit(): void {}

  save(): void {
    this.dialogRef.close(
      Object.assign(new PercentageChart(), this.formInstance.value)
    );
  }
}
