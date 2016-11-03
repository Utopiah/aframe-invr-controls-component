    // Component to change to position and scale in VR
    // then re-use those value outside of VR

    function buttonInterfaceSkin(el){
      el.setAttribute("radius-bottom","2");
      el.setAttribute("radius-top","0.5");
      el.setAttribute("scale", "0.2 0.2 0.2");
      el.setAttribute("opacity", "0.5");
      el.setAttribute("color", "black"); //somehow makes a type e error yet works
      //el.setAttribute("material", "color:black"); // same
    }
    
    /* */
AFRAME.registerComponent('invr-widget', {
  init: function () {
    var step = 0.1;
    /* Todo
    
    define step size as parameter in schema, stay coherent with speech component
       cf https://github.com/Utopiah/aframe-speech-controls-component
    if controller detected, disable gaze and replace by grab
    relative position and size as parameters
    
    */
    var interface = document.createElement("a-entity");
    interface.setAttribute("class","invr-interface");
    
    var top = document.createElement("a-cone");
    buttonInterfaceSkin(top);
    top.setAttribute("position", "0 1 0.5");
    interface.appendChild(top);
    top.addEventListener('click', function () {
      var node = this.parentNode.parentNode;
      var pos = node.getAttribute("position");
      node.setAttribute("position", {x:pos.x, y:pos.y+step, z:pos.z});
    });
    
    var bottom = document.createElement("a-cone");
    buttonInterfaceSkin(bottom);
    bottom.setAttribute("rotation", "180 0 0");
    bottom.setAttribute("position", "0 -1 0.5");
    interface.appendChild(bottom);
    bottom.addEventListener('click', function () {
      var node = this.parentNode.parentNode;
      var pos = node.getAttribute("position");
      node.setAttribute("position", {x:pos.x, y:pos.y-step, z:pos.z});
    });
    
    var left = document.createElement("a-cone");
    buttonInterfaceSkin(left);
    left.setAttribute("rotation", "0 0 90");
    left.setAttribute("position", "-1 0 0.5");
    interface.appendChild(left);
    left.addEventListener('click', function () {
      var node = this.parentNode.parentNode;
      var pos = node.getAttribute("position");
      node.setAttribute("position", {x:pos.x-step, y:pos.y, z:pos.z});
    });
    
    var right = document.createElement("a-cone");
    buttonInterfaceSkin(right);
    right.setAttribute("rotation", "0 0 -90");
    right.setAttribute("position", "1 0 0.5");
    interface.appendChild(right);
    right.addEventListener('click', function () {
      var node = this.parentNode.parentNode;
      var pos = node.getAttribute("position");
      node.setAttribute("position", {x:pos.x+step, y:pos.y, z:pos.z});
    });
    
    var closeAndSave = document.createElement("a-sphere");
    buttonInterfaceSkin(closeAndSave);
    closeAndSave.setAttribute("color", "red");
    closeAndSave.setAttribute("position", "1 1 0.5");
    interface.appendChild(closeAndSave);
    closeAndSave.addEventListener('click', function () {
      
      var node = this.parentNode.parentNode;
      var pos = node.getAttribute("position");
      console.log(pos);
      
      var node = this.parentNode;
      node.setAttribute("visible", "false");
    });
    
    
    this.el.appendChild(interface);
  }
});
