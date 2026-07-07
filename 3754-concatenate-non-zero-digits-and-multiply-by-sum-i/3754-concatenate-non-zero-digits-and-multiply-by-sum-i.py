class Solution:
    def sumAndMultiply(self, n: int) -> int:
        new_num = digit_sum = 0

        for ch in str(n):
            if ch != "0":
                d = ord(ch) - ord("0")
                new_num = new_num * 10 + d
                digit_sum += d

        return new_num * digit_sum