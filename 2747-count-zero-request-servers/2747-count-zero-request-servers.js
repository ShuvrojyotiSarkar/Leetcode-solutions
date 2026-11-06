var countServers = function (n, logs, x, queries) {
    let left = 0;
    let right = 0;

    logs.sort((a, b) => a[1] - b[1]);

    let sortedQueries = queries.map((q, i) => [q, i]);
    sortedQueries.sort((a, b) => a[0] - b[0]);

    let map = new Map();
    let ans = new Array(queries.length);

    for (let [q, index] of sortedQueries) {

        while (right < logs.length && logs[right][1] <= q) {
            let id = logs[right][0];

            map.set(id, (map.get(id) || 0) + 1);

            right++;
        }

        while (left < logs.length && logs[left][1] < q - x) {
            let id = logs[left][0];

            if (map.get(id) === 1) {
                map.delete(id);
            } else {
                map.set(id, map.get(id) - 1);
            }

            left++;
        }

        ans[index] = n - map.size;
    }

    return ans;
};