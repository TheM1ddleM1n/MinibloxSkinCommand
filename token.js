(function() {
    const key = "session_v1";
    const token = localStorage.getItem(key);
    
    if (!token) {
        console.error(`No session token found in localStorage under key "${key}"`);
        return;
    }
    
    console.log("%cThis Is Your Token - Do NOT give it To anyone", "color:red;font-weight:bold;");
    console.log("%cToken Has Been Sent:", "color:#0f0;font-weight:bold;");
    console.log(token);
})();
