const url = window.location.href;
console.log(url);

const halfUrl = url.split('?');

const urlData = halfUrl[1].split('&');

function display(requested) {
  urlData.forEach((element) => {
    if (element.startsWith(requested)) {
      elementData = element.split('=')[1].replace('%40', '@').replace(/\+/g, ' ');
    }
  })
  return (elementData);

};

const displayInfo = document.querySelector('#results');

const email = display("email");
displayInfo.innerHTML = `<p>Organization Name: ${display("org-title")}}</p>
<p> Your Name:${display("first")} ${display('last')}</p>
<p> Your Phone ${display("phone")}</p>
<p> Your Requested Membership: ${display("Membership")}</p>
<p> Your Email <a href="mailto:${email}"> ${display("email")}</a></p>`

console.log(elementData); console.log(elementData);





