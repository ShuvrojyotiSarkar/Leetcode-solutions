class Solution:
    def earliestFinishTime(self, landStartTime, landDuration, waterStartTime, waterDuration):
        land_finish = min(s + d for s, d in zip(landStartTime, landDuration))
        water_finish = min(s + d for s, d in zip(waterStartTime, waterDuration))

        ans = float("inf")

        for s, d in zip(waterStartTime, waterDuration):
            ans = min(ans, max(s, land_finish) + d)

        for s, d in zip(landStartTime, landDuration):
            ans = min(ans, max(s, water_finish) + d)

        return ans