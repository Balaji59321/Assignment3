const req = new XMLHttpRequest();

req.open(
  "GET",
  "http://api.countrylayer.com/v2/currency/EUR?access_key=6a4fb4259a9df1d00cd4f42ab46a39f2"
);
req.send();

req.onload = function () {
  var response = JSON.parse(this.response);

  for (let i = 0; i < response.length; i++) {
    console.log(response[i]["name"]);
  }
};
