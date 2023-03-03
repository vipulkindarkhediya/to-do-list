let btnInsert = document.getElementById("btnInsert");

getupdate = () => {
  let title = document.getElementById("title").value;
  let language = document.getElementById("language").value;
  let task = document.getElementById("task").value;

  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([title, language, task]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([title, language, task]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  }
  update();
};

update = () => {
  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  let tableData = document.getElementById("tableData");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
    <tr>
    <td>${index + 1}</td>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[2]}</td>
    <td><button class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
     </tr>`;
  });
  tableData.innerHTML = str;
};
btnInsert.addEventListener("click", getupdate);
update();

deleted = (index) => {
  itemJsonArrayStr = localStorage.getItem("itemJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  itemJsonArray.splice(index, 1);
  localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));

  update();
};

function clearTab() {
  localStorage.clear();
  update();
}
