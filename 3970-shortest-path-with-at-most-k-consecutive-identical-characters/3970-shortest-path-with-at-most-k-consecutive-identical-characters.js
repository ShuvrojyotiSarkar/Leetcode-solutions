var shortestPath = function(n, edges, labels, k) {
    const g = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) g[u].push([v, w]);

    const INF = 1e9;
    const dist = Array.from({length: n}, () => Array(k + 1).fill(INF));

    class MinHeap {
        constructor() { this.a = []; }
        push(x) {
            this.a.push(x);
            let i = this.a.length - 1;
            while (i > 0) {
                let p = (i - 1) >> 1;
                if (this.a[p][0] <= this.a[i][0]) break;
                [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
                i = p;
            }
        }
        pop() {
            const a = this.a, top = a[0], last = a.pop();
            if (a.length) {
                a[0] = last;
                let i = 0;
                while (true) {
                    let s = i, l = 2 * i + 1, r = l + 1;
                    if (l < a.length && a[l][0] < a[s][0]) s = l;
                    if (r < a.length && a[r][0] < a[s][0]) s = r;
                    if (s === i) break;
                    [a[i], a[s]] = [a[s], a[i]];
                    i = s;
                }
            }
            return top;
        }
        get size() { return this.a.length; }
    }

    const pq = new MinHeap();
    dist[0][1] = 0;
    pq.push([0, 0, 1]);

    while (pq.size) {
        const [d, u, cnt] = pq.pop();
        if (d > dist[u][cnt]) continue;
        if (u === n - 1) return d;

        for (const [v, w] of g[u]) {
            const c = labels[u] === labels[v] ? cnt + 1 : 1;
            if (c <= k && d + w < dist[v][c]) {
                dist[v][c] = d + w;
                pq.push([dist[v][c], v, c]);
            }
        }
    }

    return -1;
};