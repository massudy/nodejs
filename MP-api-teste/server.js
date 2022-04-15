import http from "http"

const port = 3000;
const server = http.createServer((req,res) => {
res.writeHead(200,{'Content-Type': 'application/json'})
const retornokkk = {
    "Teste": "Testando",
    "Lista": "kkkk"
}
res.end(JSON.stringify(retornokkk))
})

server.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

