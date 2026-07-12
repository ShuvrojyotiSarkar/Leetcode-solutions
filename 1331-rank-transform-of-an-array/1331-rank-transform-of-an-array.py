class Solution:
    def arrayRankTransform(self, nums: List[int]) -> List[int]:
        copy = sorted(nums)
        has = {}
        rank = 1
        for i in copy:
            if i not in has:
                has[i] = rank
                rank+=1
        j = 0
        for i in nums:
            nums[j] = has[i]
            j+=1
        return nums