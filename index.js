
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

    