fetch("https://session.coolmathblox.ca/accounts/set_cosmetic", {
          method: "POST",
          headers: {
           "Content-Type": "application/json",
          "authorization": "your_token_goes_here"
        },
        body: JSON.stringify({
          type: "skin",
          id: "remlin"
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log("☑️ Response:",data);
   })
    .catch(err => {
    console.error("Error:",err);
});
