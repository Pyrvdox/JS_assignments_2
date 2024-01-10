const ulList = document.querySelector(".list-group");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};


getNames()
  .then(names => {
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.classList.add("list-group-item");
    ulList.appendChild(li);
  });
  })
  .catch(err => console.log(err)) 
  
