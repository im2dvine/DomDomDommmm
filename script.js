// document.addEventListener("DOMContentLoaded", (function () {

//     let addSquareBtn = document.createElement("button");
//     let btnText = document.createTextNode("Add Square");
    

//     addSquareBtn.appendChild(btnText);
//     document.body.appendChild(addSquareBtn);
//     button.className = "button";

//     /***************************************************/

//     // addSquareBtn.addEventListener("click", function () {
//     //     let square = document.createElement("div");
//     //     document.body.appendChild(square);
    


//         addSquareBtn.addEventListener("click", function () {
//             let square = document.createElement("div");
//             let sqrText = document.createElement("h1");
//             square.classList.add("square");
//             sqrText.classList.add("square-text");

//     });
// }));
/******************************************************/

// let addSquareBtn = document.createElement("button");
// let btnText = document.createTextNode("Add Square");
// addSquareBtn.appendChild(btnText);
// document.body.appendChild(addSquareBtn);
// let flexDiv = document.createElement("div");
// flexDiv.classList.add("container");
// document.body.appendChild(flexDiv);
// let counter = 1;

// addSquareBtn.addEventListener("click", function () {
//     let div = document.createElement("div");
//     counter++;
//     div.id = counter;
//     div.classList.add("square");
//     flexDiv.appendChild(div);
//     div.addEventListener("mouseenter", function () {
//         let h2Text = document.createTextNode(div.id);
//         h2.appendChild(h2Text);
//         div.appendChild(h2);
//         let h2 = document.createElement("h2");
//         h2.id = counter;
//     })
//     div.addEventListener("mouseleave", function () {
//         var elem = document.getElementById(counter);
//         elem.parentNode.removeChild(elem);
//     })

//     div.addEventListener("dblclick", function () {
//         if (div.id % 2 === 0) {
//             if (div.nextSibling === null) {
//                 alert("There is nothing after this square");
//             } else {
//                 flexDiv.removeChild(div.nextSibling);
//             }
//             console.log("even");
//         } else {
//             if (div.previousSibling === null) {
//                 alert("There is nothing before this square");
//             } else {
//                 console.log("odd");
//                 flexDiv.removeChild(div.previousSibling);
//             }
//         }
//     })

// });

// /****************************************************************/

// document.addEventListener("DOMContentLoaded", function () {
//     let addSquareBtn = document.createElement("button");
//     let sqrText = document.createTextNode("Add Square");
//     let container = document.createElement("div");
//     let sqrId = 1;
//     addSquareBtn.appendChild(sqrText);
//     document.body.appendChild(addSquareBtn);
//     document.body.appendChild(container);
  
//     addSquareBtn.addEventListener("click", function () {
//       let square = document.createElement("div");
//       let sqrText = document.createElement("h1");
//       square.classList.add("square");
//       sqrText.classList.add("square-text");
  
//       container.appendChild(square);
//       square.id = sqrId++;
//       sqrText.appendChild(document.createTextNode(`${square.id}`));
//       square.appendChild(sqrText);
  
//       square.addEventListener("click", function () {
//         let colors = [
//           "red",
//           "blue",
//           "green",
//           "orange",
//           "brown",
//           "yellow",
//           "pink",
//         ];
//         let randomNum = Math.floor(Math.random() * colors.length);
//         square.style.backgroundColor = colors[randomNum];
//       });
  
//       square.addEventListener("dblclick", function () {
//         if (square.nextSibling && square.id % 2 == 0) {
//           square.nextSibling.remove();
//         } else if (!square.nextSibling && square.id % 2 == 0) {
//           alert("Nothing after this to remove!");
//         } else if (square.previousSibling && square.id % 2 !== 0) {
//           square.previousSibling.remove();
//         } else if (!square.previousSibling && square.id % 2 !== 0) {
//           alert("Nothing before this to remove!");
//         }
//       });
  
//       sqrText.style.display = "none";
  
//       square.addEventListener("mouseover", function () {
//         sqrText.style.display = "flex";
//         sqrText.style.justifyContent = "center";
//       });
//       square.addEventListener("mouseout", function () {
//         sqrText.style.display = "none";
//       });
//     });
//   });

  /****************************************************************/
  document.addEventListener("DOMContentLoaded", function () {

let button = document.createElement('button');
let btnText = document.createTextNode('Add Square');
let container = document.createElement('div');
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(container);

   
let id = '1';
button.addEventListener('click', function(){
    let div = document.createElement('div');
    container.appendChild(div);
    div.style.backgroundColor = 'black';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.cssFloat = 'left';
    div.className = 'box';
    div.setAttribute('id', id);
    id++;
    
    div.addEventListener('mouseenter', function(){
        console.log(this.id);
        let divText = document.createTextNode(this.id);
        div.appendChild(divText);  
  
    })

    div.addEventListener('mouseleave', function(){
        div.innerText = ''; 

    });
    div.addEventListener('click', function() {
        let randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    })

    let color = [
        "purple",
        "blue",
        "green",
        "silver",
        "brown",
    ];
    
    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random()*color.length)];
        return randomColor;
        
    }

    div.addEventListener('dblclick', remove);
    function remove() {

        if (this.id %2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('The square is not there');
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('The square is not there');
            }
        }
    }
 });

});
