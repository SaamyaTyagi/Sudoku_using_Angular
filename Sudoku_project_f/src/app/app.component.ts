import { Component } from '@angular/core';
import { SudokuComponent } from './sudoku/sudoku.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SudokuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sudoku_project_f';
}
