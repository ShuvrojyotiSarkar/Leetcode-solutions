class Solution:
    def pathsWithMaxScore(self, board: List[str]) -> List[int]:
        n = len(board)
        MOD = 10**9 + 7

        score = [[-1] * n for _ in range(n)]
        ways = [[0] * n for _ in range(n)]

        score[0][0] = 0
        ways[0][0] = 1

        for i in range(n):
            for j in range(n):

                if board[i][j] == 'X':
                    continue

                if i == 0 and j == 0:
                    continue

                best = -1
                count = 0

                for x, y in [(i - 1, j), (i, j - 1), (i - 1, j - 1)]:
                    if x < 0 or y < 0:
                        continue

                    if score[x][y] == -1:
                        continue

                    if score[x][y] > best:
                        best = score[x][y]
                        count = ways[x][y]
                    elif score[x][y] == best:
                        count = (count + ways[x][y]) % MOD

                if best == -1:
                    continue

                value = 0
                if board[i][j] not in ('E', 'S'):
                    value = int(board[i][j])

                score[i][j] = best + value
                ways[i][j] = count

        if ways[n - 1][n - 1] == 0:
            return [0, 0]

        return [score[n - 1][n - 1], ways[n - 1][n - 1]]
