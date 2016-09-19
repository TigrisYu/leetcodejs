var isPalindrome = function(x) {
    if(x<10&&x>=0) return true;
        var y = String(x)
                .split("")
                .reverse()
                .join("");
                if(String(x) === y){
                    return true;
                }
    return false;
};