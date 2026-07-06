class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        # Sort by start ascending and end descending
        intervals.sort(key=lambda interval: (interval[0], -interval[1]))

        remaining = 0
        max_end = 0

        for start, end in intervals:
            if end > max_end:
                remaining += 1
                max_end = end

        return remaining