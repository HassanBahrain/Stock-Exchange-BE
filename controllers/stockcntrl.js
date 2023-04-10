// class StocksController {
//     constructor(model) {
//       this.model = model;
//     }
  
//     addStock(name, quantity, price) {
//       this.model.addStock(name, quantity, price);
//       this.render();
//     }
  
//     render() {
//       const stocks = this.model.getStocks();
//       const stockList = document.getElementById('stocks');
//       stockList.innerHTML = '';
//       for (const stock of stocks) {
//         const li = document.createElement('li');
//         li.textContent = `${stock.name}: ${stock.quantity} x $${stock.price}`;
//         stockList.appendChild(li);
//       }
//     }
//   }
  
//   const stocksModel = new StocksModel();
//   const stocksController = new StocksController(stocksModel);
  
//   function addStock() {
//     const name = document.getElementById('name').value;
//     const quantity = parseInt(document.getElementById('quantity').value);
//     const price = parseFloat(document.getElementById('price').value);
//     stocksController.addStock(name, quantity, price);
//   }
  
// //   change the codes if doesnot work