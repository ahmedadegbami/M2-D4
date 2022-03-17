
const addToMember = function () {
        let currentLists = document.getElementById("team1")
        let newList = document.createElement("li")
        let inputNode = document.getElementById("input1")
        let inputValue = inputNode.value
        let listContent = document.createTextNode(inputValue)
        newList.classList.add("list-group-item")
        newList.appendChild(listContent)
        currentLists.appendChild(newList)
        
      };


function removeName() {
    let newInput = document.getElementsByTagName("li")
    let inputNode1 = document.getElementById("input1")
    let inPutVal = inputNode1.value
    for (i = 0; i < newInput.length; i++){
      if (newInput[i].innerText === inPutVal) {
          newInput[i].classList.add("hidden")

      }
    }
}





        



const addToMember2 = function () {
        let currentLists2 = document.getElementById("team2")
        let newList2 = document.createElement("li")
        let inputNode2 = document.getElementById("input2")
        let inputValue2 = inputNode2.value
        let listContent2 = document.createTextNode(inputValue2)
        newList2.classList.add("list-group-item")
        newList2.appendChild(listContent2)
        currentLists2.appendChild(newList2)
        
      };


function removeName2() {
    let newInput2 = document.getElementsByTagName("li")
    let inputNode2 = document.getElementById("input2")
    let inPutVal2 = inputNode2.value
    for (i = 0; i < newInput2.length; i++){
      if (newInput2[i].innerText === inPutVal2) {
          newInput2[i].classList.add("hidden")

      }
    }
}


const addToMember3 = function () {
        let currentLists3 = document.getElementById("team3")
        let newList3 = document.createElement("li")
        let inputNode3 = document.getElementById("input3")
        let inputValue3 = inputNode3.value
        let listContent3 = document.createTextNode(inputValue3)
        newList3.classList.add("list-group-item")
        newList3.appendChild(listContent3)
        currentLists3.appendChild(newList3)
        
      };


function removeName3() {
    let newInput3 = document.getElementsByTagName("li")
    let inputNode3 = document.getElementById("input3")
    let inPutVal3 = inputNode3.value
    for (i = 0; i < newInput3.length; i++){
      if (newInput3[i].innerText === inPutVal3) {
          newInput3[i].classList.add("hidden")

      }
    }
}



const addToMember4 = function () {
        let currentLists4 = document.getElementById("team4")
        let newList4 = document.createElement("li")
        let inputNode4 = document.getElementById("input4")
        let inputValue4 = inputNode4.value
        let listContent4 = document.createTextNode(inputValue4)
        newList4.classList.add("list-group-item")
        newList4.appendChild(listContent4)
        currentLists4.appendChild(newList4)
        
      };

function removeName4() {
    let newInput4 = document.getElementsByTagName("li")
    let inputNode4 = document.getElementById("input4")
    let inPutVal4 = inputNode4.value
    for (i = 0; i < newInput4.length; i++){
      if (newInput4[i].innerText === inPutVal4.toLowerCase) {
          newInput4[i].classList.add("hidden")

      }
    }
}


      
    