(function(window, undefined) {
  var dictionary = {
    "8157f2b6-e8d2-4e4e-ae99-94aab630e726": "Funda de diferencial",
    "80d3a85d-bafc-4bb9-b9ea-0f7497e5cf51": "Pieza 3D funda de diferencial",
    "cd089e5d-b338-4cc2-987c-7d2314a1a9b0": "Fundamentos teoricos 5",
    "fd3059f2-fe4a-426f-97f1-e14a68736ef8": "Fundamentos teoricos 4",
    "9205ae73-0461-4f24-94de-f1c71b793fad": "Fundamentos teoricos",
    "b12a1e64-937a-4296-81cc-7771c80616b4": "Funcion en curva ",
    "05147548-c327-4d07-8294-6cc030d25275": "Fundamentos teoricos 3",
    "2724fb23-5df5-48de-a9bb-35ecd81af56e": "Fundamentos teoricos 2",
    "bddc2745-88a8-4e4b-8d30-a068009f024e": "menu principal",
    "4c9848a6-0f53-4d3d-8a5d-f2c6597d6ca9": "Funcion en linea recta",
    "8f5586f0-33e2-473e-9959-e727ea4e543e": "engranes",
    "ee0cd0e9-281e-4b60-a9de-566526f7db32": "Pieza 3D porta engranes",
    "e3ac8eaf-4688-4290-816a-0d581dc1b638": "Piezas 3D tapa ",
    "6497e249-715e-49ca-864f-fd6ba2dd8405": "evaluacion",
    "1ec8b370-fdca-48e8-8428-69131e8f5f82": "Menu de piezas",
    "d9548ec6-de57-4a0a-897c-5176ad32fd58": "Tapa de diferencial",
    "dd0b4dce-353b-4729-8f05-9409507881fa": "Pieza 3D Fechas",
    "2ebd5278-ebf5-4b19-a682-c79973fa865d": "Fundamentos teoricos 6",
    "01649acc-3fd4-4117-af30-418f48949c4d": "lubricacion",
    "b3efe96b-a39c-4bd6-88d6-8a73909bcad2": "Porta engranes",
    "5038cf78-69fc-44a4-bbc1-428ecc4060cc": "paso del diferencial",
    "962cb156-9f50-4287-909a-c571fdfbbfb1": "Piezas 3D engranes",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "pantalal de inicio",
    "e6bdf866-5fb1-4c26-a1a5-7c10a0330c7f": "Flechas",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);