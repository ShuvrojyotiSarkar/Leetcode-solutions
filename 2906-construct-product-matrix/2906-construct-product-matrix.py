
class Solution:
    def constructProductMatrix(self, grid: List[List[int]]) -> List[List[int]]:
        MOD = 12345

        nums = []
        for row in grid:
            nums.extend(row)

        n = len(nums)

        ans = [1] * n

        prefix = 1
        for i in range(n):
            ans[i] = prefix
            prefix = (prefix * nums[i]) % MOD

        suffix = 1
        for i in range(n - 1, -1, -1):
            ans[i] = (ans[i] * suffix) % MOD
            suffix = (suffix * nums[i]) % MOD

        rows = len(grid)
        cols = len(grid[0])

        result = []
        idx = 0

        for _ in range(rows):
            result.append(ans[idx:idx + cols])
            idx += cols

        return result