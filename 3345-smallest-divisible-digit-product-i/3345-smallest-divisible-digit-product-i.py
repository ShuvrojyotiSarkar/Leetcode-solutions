class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        while math.prod(map(int,str(n)))% t != 0:
            n+=1
        return n
