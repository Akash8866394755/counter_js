window.onload = function() {

    
    setTimeout(function() {

        var main = document.getElementById("main");
        main.style.display = "none";

    }, 2500);

    setTimeout(start, 2700);
    function start() {
        
        function first() {
            
            var stopCounter;
            var x = 0;
            var happyFriennd = document.getElementById("count-result-happy-friend");
            stopCounter = setInterval(cal, 100);
            
            function cal() {
                happyFriennd.innerHTML = ++x;
                if(x == 100) {
                    clearInterval(stopCounter);
                    happyFriennd.innerHTML = x+ "+";
                
                }
            }
            
        }
        first();
        function second() {
            var stopCounter;
            var x = 0;
            var technology = document.getElementById("count-result-technologies");
            stopCounter = setInterval(cal, 450);
            
            function cal() {
                technology.innerHTML = ++x;
                
                if(x == 12) {
                    clearInterval(stopCounter);
                    technology.innerHTML = x+ "+";
                    
                }
                
            }
        }
        second();
        
        function third() {
            var stopCounter;
            var x = 0;
            var project = document.getElementById("count-result-project");
            
            stopCounter = setInterval(cal, 500)
            function cal() {
                project.innerHTML = ++x;
                if(x == 20) {
                    clearInterval(stopCounter);
                    project.innerHTML = x+ "+";
                    
                }
            }
            
        }
        third();
        
    }

}