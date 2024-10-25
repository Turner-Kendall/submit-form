export async function submitData (data) { 
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  }

  const response = await fetch(`http://localhost:3000/`, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data),
});

  console.log(response)
  // return response

}
