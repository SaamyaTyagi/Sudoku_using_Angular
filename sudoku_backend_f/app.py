from flask import Flask, request, jsonify
from flask_cors import CORS
from solver import solve_sudoku_board

app = Flask(__name__)
CORS(app)  # Allow requests from Angular

@app.route('/solve', methods=['POST'])
def solve():
    data = request.get_json()
    board = data.get('board')
    if board is None:
        return jsonify({'error': 'Missing board'}), 400

    if solve_sudoku_board(board):
        return jsonify({'solution': board})
    else:
        return jsonify({'error': 'No solution exists'}), 400

if __name__ == '__main__':
    app.run(debug=True)
