(async function() {
    // Configuration
    const TOKEN = "your_token_goes_here"; // Replace with YOUR TOKEN. ONLY REPLACE THIS HERE. REMEMBER DO NOT SHARE THIS!
    const SKIN_ID = "remlin"; // Change this to any skin ID you want
    
    // Validation
    if (TOKEN === "your_token_goes_here") {
        console.error("%c❌ ERROR: Token not set!", 
                     "color:red;font-weight:bold;font-size:14px;");
        console.log("%c1. Run token.js first to get your token\n2. Replace 'your_token_goes_here' with your actual token\n3. Run this script again", 
                   "color:yellow;font-size:12px;");
        return;
    }
    
    console.log("%c🎨 Applying Skin...", "color:cyan;font-weight:bold;font-size:14px;");
    console.log(`%cSkin ID: ${SKIN_ID}`, "color:white;");
    
    try {
        const response = await fetch("https://session.coolmathblox.ca/accounts/set_cosmetic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": TOKEN
            },
            body: JSON.stringify({
                type: "skin",
                id: SKIN_ID // u dont have to put the ID here.
            })
        });
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        console.log("%c✅ SUCCESS!", "color:lime;font-weight:bold;font-size:14px;");
        console.log("%cResponse:", "color:cyan;font-weight:bold;");
        console.log(data);
        console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:gray;");
        console.log("%cSkin applied successfully! Refresh the page to see changes.", 
                   "color:white;font-size:12px;");
        
    } catch (err) {
        console.error("%c❌ ERROR:", "color:red;font-weight:bold;font-size:14px;");
        console.error(err);
        console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:gray;");
        console.log("%cPossible issues:\n• Invalid token (run token.js again)\n• Invalid skin ID\n• Network connection problem\n• Server is down", 
                   "color:yellow;font-size:12px;");
    }
})();
