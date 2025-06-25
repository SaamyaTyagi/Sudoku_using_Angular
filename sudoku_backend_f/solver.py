def is_valid(board, row, col, num):
    if num in board[row]: return False
    if any(board[i][col] == num for i in range(9)): return False
    box_row, box_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(box_row, box_row + 3):
        for j in range(box_col, box_col + 3):
            if board[i][j] == num:
                return False
    return True

def solve_sudoku_board(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                for num in range(1, 10):
                    if is_valid(board, row, col, num):
                        board[row][col] = num
                        if solve_sudoku_board(board):
                            return True
                        board[row][col] = 0
                return False
    return True
