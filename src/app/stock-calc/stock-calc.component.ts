import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-calc',
  templateUrl: './stock-calc.component.html',
  styleUrls: ['./stock-calc.component.scss']
})
export class StockCalcComponent implements OnInit {
  values: any = {};
  totalHoldValue: number = 0;
  totalAvgValue: number = 0;
  totalAverage: number = 0;
  totalPL: number = 0;
  totalUnits: number = -1;
  tab: string = 'add';
  disabled: boolean = false;
  percDiff: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(valueName: string, event: any) {
    this.values[valueName] = Math.fround(event?.target?.value);
    if (this.values?.avgValues) {
      this.calculateResult(this.tab);
    }
  }
  
  calculateResult(tab: string) {
    const holdUnits = this.values.holdUnits;
    const holdValue = this.values.holdValue;
    const avgUnits = this.values.avgUnits;
    const avgValues = this.values.avgValues;
    this.disabled = holdUnits < avgUnits || holdUnits < 1;

    this.totalHoldValue = Number((holdUnits * holdValue).toFixed(2));
    this.totalAvgValue = Number((avgUnits * avgValues).toFixed(2));
    this.percDiff = ((this.totalHoldValue - this.totalAvgValue)/this.totalAvgValue) * 100;
    this.tab = tab;
    this.totalUnits = this.addSubValues(holdUnits, avgUnits)
    this.calculateTotalAverage(this.totalUnits);
  }

  calculateTotalAverage(totalUnits: number) {
    let total = this.addSubValues(this.totalAvgValue, this.totalHoldValue);
    if (totalUnits > 0 && this.tab == 'add') {
      this.totalAverage = (total / totalUnits);
    } else {
      this.totalAverage = total;
    }
    this.totalAverage = Number(this.totalAverage.toFixed(2));
  }

  addSubValues(num1: number, num2: number) {
    let result: number;
    if (this.tab === 'add') {
      result = num1 + num2;
    } else {
      result = num1 - num2;
    }

    return Number(result.toFixed(2));
  }

}
