/* Implement your solution here */

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      data: [
        {name: 'Knatte'},
        {name: 'Fnatte'},
        {name: 'Tjatte'},
      ],
    }));
  });
}
