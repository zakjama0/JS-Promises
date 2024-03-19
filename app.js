
const getData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data= await response.json();
    return data;
}

const getAllWainwrights = async () =>{
    
    wainwrights = await getData();

    for(i=0 ; i< wainwrights.length; i++){
        const unorderedList = document.querySelector("ul")
        const name = document.createElement("li")
        unorderedList.appendChild(name)
        const height = document.createElement("li")
        unorderedList.appendChild(height)
        const area = document.createElement("li")
        unorderedList.appendChild(area)
        const brk = document.createElement("br")
        unorderedList.appendChild(brk)
    
        name.innerText = wainwrights[i].name;
        height.innerText = wainwrights[i].heightMetres +"m"
        area.innerText = wainwrights[i].area.areaName;
    }
    
    // return await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
    // .then(response => response.json()
    // .then(data => name.innerText = data[0].name).then(data => height.innerText = data[0].heightFeet+"m").then(data => area.innerText = data[0].area))

}
getAllWainwrights()

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    wainwrights = await getData();
    console.log(e.target["input"].value);

    const inputValue = e.target["input"].value.toLowerCase();

    const filteredList = wainwrights.filter(element => {
        return element["name"].toLowerCase().includes(inputValue);
    });

    const replaceWainwrights = (wainwrights) => {
        const unorderedList = document.querySelector("ul")
        const name = document.createElement("li")
        unorderedList.appendChild(name)
        const height = document.createElement("li")
        unorderedList.appendChild(height)
        const area = document.createElement("li")
        unorderedList.appendChild(area)
        const brk = document.createElement("br")
        unorderedList.appendChild(brk)

        name.innerText = wainwrights[i].name;
        height.innerText = wainwrights[i].heightMetres +"m"
        area.innerText = wainwrights[i].area.areaName;
    }

    replaceWainwrights(filteredList)

    
})








