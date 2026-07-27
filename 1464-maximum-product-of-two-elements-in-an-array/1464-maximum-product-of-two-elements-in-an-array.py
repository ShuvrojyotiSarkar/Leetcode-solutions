class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort()
        num1, num2 = nums[-1], nums[-2]
        return (num1 - 1) * (num2 - 1)