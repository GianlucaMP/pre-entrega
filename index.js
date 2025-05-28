import Api from "./ApiService.js";

const textoDeAyuda = `Comando no reconocido. Usa uno de los siguientes formatos:

  Consultar todos los productos:
    npm run start GET products

  Consultar un producto específico (reemplaza <id>):
    npm run start GET products/<id>

  Crear un nuevo producto (reemplaza <title> <price> <category>):
    npm run start POST products <title> <price> <category>

  Eliminar un producto (reemplaza <id>):
    npm run start DELETE products/<id>
`;

async function main() {
const [methodInput, url, title, price, category] = process.argv.slice(2);
const method = methodInput?.toUpperCase();

  if (!["GET", "POST", "DELETE"].includes(method)) {
    return console.log(textoDeAyuda);
  }

  const body = method === "POST"
    ? { title, price, category }
    : undefined;

  try {
    const response = await Api.executeRequest(url, method, body);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

main();
