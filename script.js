console.log("hello");

// function logThis(string) {
//     console.log(string);
// }

// logThis("logged message");

// const variable = "value";

// const logThat = (string) => {
//     console.log(string);
// }

// logThat("logged message 2");

const chairComponent = (nth) => 
    // return "<div class='chair'>" + nth + "</div>"; 
    `
        <div class="chair">
            ${nth}
         </div>
    `

const roomComponent  = (roomName, chairCount) => {

    for (let i = 0; i < chairCount; i++){
        console.log(`create chair component ${i}`);
    }
} 

roomComponent("proba", 10);

const rootElement = document.querySelector("#root");

for(let i = 1; i <= 25; i++) {
    rootElement.insertAdjacentHTML("beforeend", chairComponent(i));
}

// rootElement.insertAdjacentHTML("beforeend", chairComponent(1));