(function(window, undefined) {
  var dictionary = {
    "s-bddc2745-88a8-4e4b-8d30-a068009f024e s-Slice_1": [ ["Slice 1@1x.png", "3ad6d408-fbdf-40d9-9b23-d725a1849be5_1517424372.png"] ],
    "s-5038cf78-69fc-44a4-bbc1-428ecc4060cc s-Slice_1": [ ["Slice 1@1x.png", "83aae848-ced8-483c-ae3c-3b186a246447_1517424372.png"] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);