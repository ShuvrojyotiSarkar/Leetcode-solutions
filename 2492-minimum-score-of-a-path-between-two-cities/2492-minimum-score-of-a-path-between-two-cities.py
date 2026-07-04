from collections import defaultdict

class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        graph = defaultdict(list)

        for u, v, w in roads:
            graph[u].append((v, w))
            graph[v].append((u, w))

        visited = [False] * (n + 1)
        ans = float('inf')

        def dfs(node):
            nonlocal ans
            visited[node] = True

            for nei, wt in graph[node]:
                ans = min(ans, wt)
                if not visited[nei]:
                    dfs(nei)

        dfs(1)
        return ans