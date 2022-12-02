const tables = document.getElementById("tables");
const addModal = document.getElementById("add");
const updateModal = document.getElementById("update");
let productIdToUpdate;

async function getAll() {
  try {
    tables.innerHTML = "<p><span>Name</span><span>Cipher</span><span>Count</span><span>Producer</span></>"
    const products = await fetch(
      "http://localhost:8008/api/product/getAll"
    ).then((res) => res.json());
    console.log(products);
    products.forEach((element) => {
      const p = document.createElement("p");
      const name = document.createElement("span");
      name.innerText = element.name
      const cipher = document.createElement("span");
      cipher.innerText = element.cipher
      const count = document.createElement("span");
      count.innerText = element.count
      const producer = document.createElement("span");
      producer.innerText = element.producer
      const del = document.createElement("div");
      del.onclick = function() {deleteProduct(element.id_products)}
      del.innerText = "X"
      p.append(name)
      p.append(cipher)
      p.append(count)
      p.append(producer)
      p.append(del)
      name.onclick = function() {update(element)}
      tables.append(p)
    });
  } catch {
    console.log("error");
  }
}

function create() {
  addModal.style.display ="flex"
  document.getElementById("name").value = "";
  document.getElementById("cipher").value = "";
  document.getElementById("count").value = "";
  document.getElementById("producer").value = "";
}

function update(product) {
  updateModal.style.display ="flex"
  document.getElementById("name1").value = product.name;
  document.getElementById("cipher1").value = product.cipher;
  document.getElementById("count1").value = product.count;
  document.getElementById("producer1").value = product.producer;
  productIdToUpdate = product.id_products;
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const cipher = document.getElementById("cipher").value;
  const count = document.getElementById("count").value;
  const producer = document.getElementById("producer").value;
  const product = { name, cipher, count, producer };
  console.log(product)
  try {
    const products = await fetch("http://localhost:8008/api/product/create", {
      method: "POST",
      body: JSON.stringify(product),
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    addModal.style.display = "none"
    getAll()
  } catch {
    console.log("error");
  }
}

async function updateProduct() {
  const name = document.getElementById("name1").value;
  const cipher = document.getElementById("cipher1").value;
  const count = document.getElementById("count1").value;
  const producer = document.getElementById("producer1").value;
  const product = { name, cipher, count, producer };
  try {
    const products = await fetch("http://localhost:8008/api/product/update", {
      method: "PUT",
      body: JSON.stringify({ id: productIdToUpdate, product }),
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    updateModal.style.display = "none"
    getAll()
  } catch {
    console.log("error");
  }
}

async function deleteProduct(id) {
    try {
      const products = await fetch("http://localhost:8008/api/product/delete", {
        method: "DELETE",
        body: JSON.stringify({id}),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });
      getAll()
    } catch {
      console.log("error");
    }
  }

getAll();
