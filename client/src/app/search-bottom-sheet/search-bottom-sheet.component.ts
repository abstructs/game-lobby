import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-search-bottom-sheet',
  templateUrl: './search-bottom-sheet.component.html',
  styleUrls: ['./search-bottom-sheet.component.scss']
})
export class SearchBottomSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<SearchBottomSheetComponent>) { }
  
}
