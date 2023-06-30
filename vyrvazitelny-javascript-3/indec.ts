const roads: string[] = [
  "Дом Алисы-Дом Боба",
  "Дом Алисы-Почта",
  "Дом Дарии-Дом Эрни",
  "Дом Эрни-дом Греты",
  "Дом Греты-Магазин",
  "Рынок-Почта",
  "Рынок-Ратуша",
  "Дом Алисы-Склад",
  "Дом Боба-Ратуша",
  "Дом Дарии-Ратуша",
  "Дом Греты-Ферма",
  "Рынок-Ферма",
  "Рынок-Магазин",
  "Магазин-Ратуша",
];

function buildGraph(edges: string[]) {
  let graph = Object.create(null);
  function addEdge(from: string, to: string) {
    if (graph[from] === null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

