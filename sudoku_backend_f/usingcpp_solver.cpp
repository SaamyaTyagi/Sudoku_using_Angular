#include <iostream>
#include <vector>
using namespace std;

const int N = 9;


bool isValid(vector<vector<int>>& board, int row, int col, int num) {
    
    for (int i = 0; i < N; ++i) {
        if (board[row][i] == num || board[i][col] == num)
            return false;
    }

    
    int boxRow = 3 * (row / 3);
    int boxCol = 3 * (col / 3);
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (board[boxRow + i][boxCol + j] == num)
                return false;
        }
    }

    return true;
}

bool solveSudoku(vector<vector<int>>& board) {
    for (int row = 0; row < N; ++row) {
        for (int col = 0; col < N; ++col) {
            if (board[row][col] == 0) {
                for (int num = 1; num <= 9; ++num) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board))
                            return true;
                        board[row][col] = 0; // Backtrack
                    }
                }
                return false; 
            }
        }
    }
    return true;
}


void printBoard(const vector<vector<int>>& board) {
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            cout << board[i][j] << " ";
        }
        cout << endl;
    }
}
