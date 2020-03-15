var centre = new L.LatLng(25.260644, 82.986878);
var map = null;

var data = [
  {
    placeArea: "limdicorner",
    color: "#d09f5f",
    name: "lc",
    objects: [
      {
        name: "lcdirection",
        center: { lat: 25.260654, long: 82.986879 },
        model: "./models/lc.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 180 0"
      },
      {
        name: "Welcomelc",
        center: { lat: 25.260654, long: 82.986879 },
        model: "./models/Welcome.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0",
        animation: true
      }
    ],
    points: [
      new L.LatLng(25.263607, 82.986999),
      new L.LatLng(25.261482, 82.987321),
      new L.LatLng(25.261909, 82.990014),
      new L.LatLng(25.261172, 82.990239),
      new L.LatLng(25.260396, 82.987482),
      new L.LatLng(25.258591, 82.988297),
      new L.LatLng(25.258232, 82.987503),
      new L.LatLng(25.260212, 82.986613),
      new L.LatLng(25.259513, 82.983823),
      new L.LatLng(25.26028, 82.983491),
      new L.LatLng(25.260978, 82.986409),
      new L.LatLng(25.263346, 82.986023)
    ]
  },
  {
    placeArea: "advroad",
    color: "#92AA83",
    area: "nandacorner",
    objects: [
      {
        name: "ccd",
        center: { lat: 25.258502, long: 82.987814 },
        model: "./models/ccd.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 270 0"
      },
      {
        name: "Adv welcome",
        center: { lat: 25.259153, long: 82.989267 },
        model: "./models/Welcome.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0",
        animation: true
      }
    ],
    points: [
      new L.LatLng(25.260793, 82.986527),
      new L.LatLng(25.258756, 82.987214),
      new L.LatLng(25.257621, 82.984596),
      new L.LatLng(25.256767, 82.985025),
      new L.LatLng(25.257941, 82.987675),
      new L.LatLng(25.257553, 82.987932),
      new L.LatLng(25.257999, 82.988759),
      new L.LatLng(25.258348, 82.988523),
      new L.LatLng(25.259474, 82.991033),
      new L.LatLng(25.260347, 82.990615),
      new L.LatLng(25.25927, 82.98805),
      new L.LatLng(25.260958, 82.98731)
    ]
  },
  {
    placeArea: "gtac",
    color: "#C1B2AB",
    area: "gtac",
    objects: [
      {
        name: "gtac",
        center: { lat: 25.259897, long: 82.983791 },
        model: "./models/gtac.gltf",
        scale: "30 30 30",
        render: false,
        rotation: " 0 90 0"
      }
    ],
    points: [
      new L.LatLng(25.263315, 82.982914),
      new L.LatLng(25.260183, 82.983314),
      new L.LatLng(25.260115, 82.982595),
      new L.LatLng(25.259271, 82.982767),
      new L.LatLng(25.259505, 82.983508),
      new L.LatLng(25.256922, 82.984684),
      new L.LatLng(25.257179, 82.98533),
      new L.LatLng(25.259704, 82.984361),
      new L.LatLng(25.260405, 82.987127),
      new L.LatLng(25.261071, 82.986984),
      new L.LatLng(25.260639, 82.984258),
      new L.LatLng(25.263326, 82.98356)
    ]
  },
  {
    placeArea: "karma",
    color: "#74121D",
    area: "karmacorner",
    objects: [
      {
        name: "karma",
        center: { lat: 25.257157, long: 82.984955 },
        model: "./models/karma.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.260183, 82.984154),
      new L.LatLng(25.257951, 82.985214),
      new L.LatLng(25.258932, 82.987747),
      new L.LatLng(25.258184, 82.988134),
      new L.LatLng(25.256922, 82.985615),
      new L.LatLng(25.256738, 82.984853),
      new L.LatLng(25.256408, 82.984135),
      new L.LatLng(25.257214, 82.983748),
      new L.LatLng(25.257427, 82.984478),
      new L.LatLng(25.259949, 82.983437)
    ]
  },
  {
    placeArea: "lotuslake",
    color: "#559CAD",
    area: "lotuslake",
    objects: [
      {
        name: "lake",
        center: { lat: 25.263332, long: 82.989657 },
        model: "./models/iit.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 180 0"
      },
      {
        name: "lake welcome",
        center: { lat: 25.262, long: 82.989869 },
        model: "./models/Welcome.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0",
        animation: true
      }
    ],
    points: [
      new L.LatLng(25.266072, 82.98951),
      new L.LatLng(25.263908, 82.989048),
      new L.LatLng(25.263899, 82.986323),
      new L.LatLng(25.262676, 82.986302),
      new L.LatLng(25.26287, 82.989134),
      new L.LatLng(25.259435, 82.990422),
      new L.LatLng(25.259814, 82.991183),
      new L.LatLng(25.263006, 82.990153),
      new L.LatLng(25.26322, 82.9929),
      new L.LatLng(25.263941, 82.992892),
      new L.LatLng(25.263887, 82.990118),
      new L.LatLng(25.266568, 82.990666)
    ]
  },
  {
    placeArea: "dgcorner",
    color: "#4A5899",
    area: "dgcorner",
    objects: [
      {
        name: "dg",
        center: { lat: 25.263211, long: 82.986463 },
        model: "./models/dg.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 180 0"
      }
    ],
    points: [
      new L.LatLng(25.266858, 82.986313),
      new L.LatLng(25.263811, 82.985991),
      new L.LatLng(25.263588, 82.983094),
      new L.LatLng(25.262472, 82.983094),
      new L.LatLng(25.262812, 82.986023),
      new L.LatLng(25.260474, 82.986484),
      new L.LatLng(25.2606, 82.98731),
      new L.LatLng(25.262841, 82.986946),
      new L.LatLng(25.262948, 82.989799),
      new L.LatLng(25.263734, 82.98981),
      new L.LatLng(25.263724, 82.986988),
      new L.LatLng(25.267227, 82.987514)
    ]
  },
  {
    placeArea: "civildep",
    color: "#8C5383",
    area: "civildep",
    objects: [
      {
        name: "civildep",
        center: { lat: 25.263479, long: 82.992751 },
        model: "./models/civil.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.265291, 82.992477),
      new L.LatLng(25.263837, 82.992431),
      new L.LatLng(25.263777, 82.989561),
      new L.LatLng(25.262987, 82.989548),
      new L.LatLng(25.263167, 82.992419),
      new L.LatLng(25.26078, 82.993023),
      new L.LatLng(25.261169, 82.993832),
      new L.LatLng(25.263208, 82.993138),
      new L.LatLng(25.263434, 82.996343),
      new L.LatLng(25.26409, 82.996291),
      new L.LatLng(25.263813, 82.992998),
      new L.LatLng(25.265139, 82.993148)
    ]
  },
  {
    placeArea: "sb",
    color: "#210124",
    area: "sb",
    objects: [
      {
        name: "sb",
        center: { lat: 25.261059, long: 82.993406 },
        model: "./models/sb.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.263646, 82.992324),
      new L.LatLng(25.261377, 82.992601),
      new L.LatLng(25.260338, 82.99033),
      new L.LatLng(25.259383, 82.990884),
      new L.LatLng(25.260494, 82.993221),
      new L.LatLng(25.258654, 82.995017),
      new L.LatLng(25.259204, 82.995638),
      new L.LatLng(25.26088, 82.9942),
      new L.LatLng(25.262225, 82.996824),
      new L.LatLng(25.262917, 82.99655),
      new L.LatLng(25.261718, 82.993639),
      new L.LatLng(25.263684, 82.993174)
    ]
  },
  {
    placeArea: "lt1",
    color: "#74121D",
    area: "lt1",
    objects: [
      {
        name: "lt1",
        center: { lat: 25.259807, long: 82.990731 },
        model: "./models/lt1.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.263456, 82.989154),
      new L.LatLng(25.260173, 82.990011),
      new L.LatLng(25.259042, 82.987273),
      new L.LatLng(25.257998, 82.987821),
      new L.LatLng(25.25915, 82.990511),
      new L.LatLng(25.25789, 82.991654),
      new L.LatLng(25.258375, 82.992321),
      new L.LatLng(25.259656, 82.991297),
      new L.LatLng(25.260811, 82.993827),
      new L.LatLng(25.261582, 82.993316),
      new L.LatLng(25.2604, 82.990882),
      new L.LatLng(25.263483, 82.989963)
    ]
  },
  {
    placeArea: "sriyaroad",
    color: "#B3DEC1",
    area: "sriyaroad",
    objects: [
      {
        name: "sryia",
        center: { lat: 25.263026, long: 82.983826 },
        model: "./models/sryia.gltf",
        scale: "30 30 30",
        render: false,
        rotation: "0 270 0"
      }
    ],
    points: [
      new L.LatLng(25.266049, 82.983818),
      new L.LatLng(25.263747, 82.983676),
      new L.LatLng(25.26363, 82.986661),
      new L.LatLng(25.262847, 82.986713),
      new L.LatLng(25.262649, 82.983663),
      new L.LatLng(25.259902, 82.98418),
      new L.LatLng(25.259692, 82.983547),
      new L.LatLng(25.262847, 82.982849),
      new L.LatLng(25.262554, 82.982163),
      new L.LatLng(25.263631, 82.982034),
      new L.LatLng(25.263397, 82.982849),
      new L.LatLng(25.266236, 82.983108)
    ]
  }
];

var options = {
  enableHighAccuracy: true
};

window.onload = () => {
  const scene = document.querySelector("a-scene");
  // map = new MapmyIndia.Map("map", {
  //   center: centre,
  //   zoomControl: true,
  //   hybrid: true
  // });

  function createPolygon(area) {
    area.name = new L.polygon(area.points, { color: area.color });
    // map.addLayer(area.name);
  }
  function isPointInLayer(user, layer) {
    var within = false;
    var x = user.latitude;
    var y = user.longitude;
    for (var ii = 0; ii < layer.getLatLngs().length; ii++) {
      var polyPoints = layer.getLatLngs()[ii];
      for (
        var i = 0, j = polyPoints.length - 1;
        i < polyPoints.length;
        j = i++
      ) {
        var xi = polyPoints[i].lat,
          yi = polyPoints[i].lng;
        var xj = polyPoints[j].lat,
          yj = polyPoints[j].lng;

        var intersect =
          yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) within = !within;
      }
    }
    return within;
  }

  function renderplace() {
    navigator.geolocation.getCurrentPosition(postion => {
      // console.log("calling here", postion);
      data.forEach(area => {
        if (isPointInLayer(postion.coords, area.name)) {
          // console.log(area.placeArea);
          if (area.objects.length > 0) {
            area.objects.forEach(object => {
              if (!object.render) {
                const icon = document.createElement("a-entity");
                icon.setAttribute(
                  "gps-entity-place",
                  `latitude: ${object.center.lat}; longitude: ${object.center.long};`
                );
                icon.setAttribute("name", object.name);
                icon.setAttribute("gltf-model", object.model);
                icon.setAttribute("scale", object.scale);
                icon.setAttribute("rotation", object.rotation);
                icon.setAttribute("id", object.name);
                if (object.animation) {
                  icon.setAttribute("animation-mixer", "");
                  icon.setAttribute(
                    "animation",
                    "property: rotation; to: 0 360 0;loop:true; dur: 8000"
                  );
                }

                // icon.setAttribute("position", "0 200 0");
                // icon.setAttribute(
                //   ("animation",
                //   "property: rotation; dur: 10000; to: 0 360 0; loop: true")
                // );
                scene.appendChild(icon);
                object.render = !object.render;
              }
            });
          }
        } else {
          if (area.objects.length > 0) {
            area.objects.forEach(object => {
              if (object.render) {
                object.render = !object.render;
                var element = document.getElementById(object.name);
                element.parentNode.removeChild(element);
              }
            });
          }
        }
      });
    });
  }

  data.forEach(area => {
    createPolygon(area);
  });
  renderplace();
  setInterval(() => {
    renderplace();
  }, 5000);
};
