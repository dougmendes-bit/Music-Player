/*function brilhar(){
    document.querySelector(".profileAtividade").style.opacity = "1"
    document.querySelector(".albunsNumeros").style.opacity = "1"
}       
    function desbrilhar(){
    document.querySelector(".profileAtividade").style.opacity = "0.5"
    document.querySelector(".albunsNumeros").style.opacity = "0.5"
    }*/

    document.querySelectorAll('.albunsNumeros').forEach(function(item) {
      // add event to each of the element
      item.addEventListener('mouseover', function(e) {
        this.style.opacity = "0.5"
      })
    })
    
    document.querySelectorAll('.albunsNumeros').forEach(function(item) {
      // add event to each of the element
      item.addEventListener('mouseout', function(e) {
        this.style.opacity = "1"
      })
    })