class Solution:
    def maxSumTrionic(self, nums: List[int]) -> int:
        NEG = -10**30
        inc = dec = tri = NEG
        ans = NEG

        for i in range(1, len(nums)):
            ni, nd, nt = NEG, NEG, NEG

            if nums[i] > nums[i - 1]:
                ni = max(nums[i - 1] + nums[i], inc + nums[i])
                nt = max(dec + nums[i], tri + nums[i])

            elif nums[i] < nums[i - 1]:
                nd = max(inc + nums[i], dec + nums[i])

            inc, dec, tri = ni, nd, nt
            ans = max(ans, tri)

        return ans