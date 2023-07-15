async function getMenu() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
      const data = await response.json();
      const itemContainer = document.querySelector(".items__container");
  
      data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
          <img src="${item.imgSrc}" alt="product">
          <div class="title__info">
            <div class="add__info">
                <p class="name">${item.name}</p>
                <span>₹ ${item.price} /-</span>
            </div>
            <div class="add__icon">
                <i class="fa-regular fa-plus"></i>
            </div>
          </div>
        `;
  
        itemContainer.appendChild(itemDiv);
      });
    } catch (error) {
      console.log(error);
    }
}

getMenu();

//take order function

async function takeOrder() {
    const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const data = await response.json();
  
    const val = await helper();
  
    function helper() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const randomOrders = [];
          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedBurger = data[randomIndex];
            const order = {
              id: selectedBurger.id,
              imgSrc: selectedBurger.imgSrc,
              name: selectedBurger.name,
              price: selectedBurger.price
            };
            randomOrders.push(order);
          }
          resolve(randomOrders);
        }, 2500);
      });
    }
    return val;
  }
  
  async function runTakeOrder() {
    try {
      const orders = await takeOrder();
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  }
  
  runTakeOrder();

// orderPrep() function
function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  // payOrder() function
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        resolve(orderStatus);
      }, 1000);
    });
  }

  // thankyouFnc() function
function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  