const main = document.querySelector("main");

const addTemplates = (main) => {
  let j = 1;
  for (let i = 0; i < 14; i++) {
    const temp = document.createElement("div");
    const imgTemp = document.createElement("img");
    const imgButton = document.createElement("button");
    imgTemp.src = `./img/${String(j)}.jpg`;
    temp.appendChild(imgTemp);
    imgButton.textContent = "Adote aqui";
    temp.appendChild(imgButton);
    temp.classList.add("img-block");
    main.appendChild(temp);
    j++;
  }
};

onload(addTemplates(main));
