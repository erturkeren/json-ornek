// Working with JSON

document.querySelector("#GetEmployee").addEventListener("click", loadEmployee);
function loadEmployee() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "employees.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let employees = JSON.parse(this.responseText);

      let html = " ";

      employees.forEach((employee) => {
        html += `<tr>
                 <td> ${employee.firstName}</td>
                 <td> ${employee.lastName}</td>
                 <td> ${employee.Age}</td>
                 <td> ${employee.Retired}</td>
                </tr>`;
      });

      document.querySelector("#employees").innerHTML = html;
    }
  };
  xhr.send();
}
