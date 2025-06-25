import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent {
  board: number[][] = Array(9).fill(null).map(() => Array(9).fill(0));
  solution: number[][] | null = null;
  error: string = '';

  constructor(private sudokuService: SudokuService) {}

  solve(): void {
    this.error = '';
    this.sudokuService.solveSudoku(this.board).subscribe({
      next: (data) => this.solution = data.solution,
      error: (err) => this.error = err.error?.error || 'Solving error.'
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}