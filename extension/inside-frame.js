var devMode = true
var devLog = function(str, obj){
    if (devMode){
        console.log("unpaywall: " + str, obj)
    }
}

window.addEventListener("message", receiveMessage, false);
function receiveMessage(msg){
    if  (msg.data.unpaywall == "success"){
        devLog("success")
        $(".button.success")
            .fadeIn()
            .click(function(){
                devLog("click!", msg.data.unpaywall.url)
                parent.postMessage({
                    unpaywall: "go-to-pdf"
                }, "*")
            })
    }

    //if (msg.data.unpaywall == "failure") {
    //    $(".button")
    //        .addClass("failure")
    //        .addClass("finished")
    //        .removeClass("loading")
    //        .click(function(){
    //            devLog("click! on failure button", msg.data.unpaywall.url)
    //        })
    //}



}