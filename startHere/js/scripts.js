const url = window.location.href;
console.log(url);

const halfUrl = url.split('?');

const urlData = halfUrl[1].split('&');

function display(requested) {
  urlData.forEach((element) => {
    if (element.startsWith(requested)) {
      elementData = element.split('=')[1].replace('%40', '@');
    }
  })
  return (elementData);

};

const displayInfo = document.querySelector('#results');

const email = display("email");
displayInfo.innerHTML = `<p>Appointment for ${display("first")} ${display("last")}</p>
<p> Proxy ${display("ordinance")} on ${display('fecha')} in the ${display('location')}</p>
<p> Your Phone ${display("phone")}</p>
<p> Your Name ${display("name")}</p>
<p> Your Email <a href="mailto:${email}"> ${display("email")}</a></p>`

console.log(elementData); console.log(elementData);






