class Solution:
    def sequentialDigits(self, low: int, high: int) -> list[int]:
        ans = []

        for length in range(len(str(low)), len(str(high)) + 1):
            for start in range(1, 10):
                num = 0

                for digit in range(start, start + length):
                    if digit > 9:
                        break
                    num = num * 10 + digit
                else:
                    if low <= num <= high:
                        ans.append(num)

        return ans