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
        scale: "60 60 60",
        render: false,
        rotation: "0 180 0"
      }
    ],
    points: [
      new L.LatLng(25.26001, 82.984468),
      new L.LatLng(25.26009, 82.984446),
      new L.LatLng(25.260609, 82.986391),
      new L.LatLng(25.26106, 82.986753),
      new L.LatLng(25.262606, 82.986494),
      new L.LatLng(25.262613, 82.986639),
      new L.LatLng(25.261356, 82.986819),
      new L.LatLng(25.260883, 82.987518),
      new L.LatLng(25.26126, 82.989204),
      new L.LatLng(25.26113, 82.989282),
      new L.LatLng(25.260681, 82.987215),
      new L.LatLng(25.260251, 82.987063),
      new L.LatLng(25.25902, 82.987606),
      new L.LatLng(25.258964, 82.987503),
      new L.LatLng(25.260396, 82.986903),
      new L.LatLng(25.260505, 82.986483)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 270 0"
      }
    ],
    points: [
      new L.LatLng(25.258341, 82.987868),
      new L.LatLng(25.258363, 82.98794),
      new L.LatLng(25.258513, 82.987921),
      new L.LatLng(25.259732, 82.990583),
      new L.LatLng(25.2598, 82.990553),
      new L.LatLng(25.258578, 82.987883),
      new L.LatLng(25.258609, 82.987796),
      new L.LatLng(25.260582, 82.98693),
      new L.LatLng(25.260568, 82.986871),
      new L.LatLng(25.258589, 82.987721),
      new L.LatLng(25.258499, 82.987715),
      new L.LatLng(25.257222, 82.985022),
      new L.LatLng(25.257171, 82.985048),
      new L.LatLng(25.258428, 82.987746)
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
        scale: "60 60 60",
        render: false,
        rotation: " 0 90 0"
      }
    ],
    points: [
      new L.LatLng(25.262657, 82.98295),
      new L.LatLng(25.260484, 82.983358),
      new L.LatLng(25.259989, 82.983358),
      new L.LatLng(25.259581, 82.983465),
      new L.LatLng(25.259465, 82.983765),
      new L.LatLng(25.25733, 82.98471),
      new L.LatLng(25.257495, 82.985064),
      new L.LatLng(25.25962, 82.984184),
      new L.LatLng(25.259824, 82.984355),
      new L.LatLng(25.260396, 82.986694),
      new L.LatLng(25.260784, 82.986512),
      new L.LatLng(25.26028, 82.984205),
      new L.LatLng(25.260536, 82.983787),
      new L.LatLng(25.262822, 82.983415)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.257011, 82.984177),
      new L.LatLng(25.257263, 82.984628),
      new L.LatLng(25.257593, 82.984585),
      new L.LatLng(25.259611, 82.983662),
      new L.LatLng(25.259611, 82.983662),
      new L.LatLng(25.257739, 82.984949),
      new L.LatLng(25.257525, 82.985325),
      new L.LatLng(25.258583, 82.98746),
      new L.LatLng(25.258224, 82.987664),
      new L.LatLng(25.257234, 82.985625),
      new L.LatLng(25.256875, 82.985336),
      new L.LatLng(25.256002, 82.985851),
      new L.LatLng(25.255895, 82.985486),
      new L.LatLng(25.256739, 82.984992),
      new L.LatLng(25.256865, 82.984649),
      new L.LatLng(25.256652, 82.984338)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 180 0"
      }
    ],
    points: [
      new L.LatLng(25.263086, 82.98665),
      new L.LatLng(25.263175, 82.98926),
      new L.LatLng(25.262862, 82.989571),
      new L.LatLng(25.259885, 82.990467),
      new L.LatLng(25.260026, 82.990825),
      new L.LatLng(25.263055, 82.989831),
      new L.LatLng(25.263217, 82.990016),
      new L.LatLng(25.263374, 82.992638),
      new L.LatLng(25.263666, 82.992603),
      new L.LatLng(25.263536, 82.990137),
      new L.LatLng(25.263739, 82.989814),
      new L.LatLng(25.265466, 82.990027),
      new L.LatLng(25.265446, 82.989693),
      new L.LatLng(25.263908, 82.989471),
      new L.LatLng(25.263516, 82.98916),
      new L.LatLng(25.263375, 82.986681)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 180 0"
      }
    ],
    points: [
      new L.LatLng(25.263232, 82.984621),
      new L.LatLng(25.262976, 82.984656),
      new L.LatLng(25.263075, 82.986139),
      new L.LatLng(25.262827, 82.986396),
      new L.LatLng(25.26125, 82.986605),
      new L.LatLng(25.261272, 82.986975),
      new L.LatLng(25.262954, 82.986621),
      new L.LatLng(25.263047, 82.9869),
      new L.LatLng(25.263183, 82.989401),
      new L.LatLng(25.263502, 82.989342),
      new L.LatLng(25.263399, 82.986801),
      new L.LatLng(25.263632, 82.986592),
      new L.LatLng(25.266432, 82.986998),
      new L.LatLng(25.266519, 82.986616),
      new L.LatLng(25.263513, 82.986275),
      new L.LatLng(25.263361, 82.985976)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.263188, 82.9899),
      new L.LatLng(25.263268, 82.992122),
      new L.LatLng(25.262823, 82.992574),
      new L.LatLng(25.261169, 82.993105),
      new L.LatLng(25.261312, 82.993537),
      new L.LatLng(25.26301, 82.992977),
      new L.LatLng(25.26333, 82.993184),
      new L.LatLng(25.263517, 82.995602),
      new L.LatLng(25.263872, 82.995582),
      new L.LatLng(25.26373, 82.993537),
      new L.LatLng(25.264093, 82.992867),
      new L.LatLng(25.264319, 82.992902),
      new L.LatLng(25.264345, 82.992612),
      new L.LatLng(25.263851, 82.992569),
      new L.LatLng(25.263667, 82.992331),
      new L.LatLng(25.263581, 82.989863)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.259711, 82.990903),
      new L.LatLng(25.26076, 82.993125),
      new L.LatLng(25.260618, 82.993508),
      new L.LatLng(25.259382, 82.994393),
      new L.LatLng(25.259676, 82.994747),
      new L.LatLng(25.260654, 82.993911),
      new L.LatLng(25.261089, 82.993911),
      new L.LatLng(25.262067, 82.996103),
      new L.LatLng(25.262396, 82.995907),
      new L.LatLng(25.261561, 82.99399),
      new L.LatLng(25.261747, 82.993439),
      new L.LatLng(25.263357, 82.992967),
      new L.LatLng(25.263357, 82.992495),
      new L.LatLng(25.261596, 82.992869),
      new L.LatLng(25.261009, 82.992741),
      new L.LatLng(25.260103, 82.990804)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 0 0"
      }
    ],
    points: [
      new L.LatLng(25.258727, 82.987886),
      new L.LatLng(25.259826, 82.990265),
      new L.LatLng(25.260306, 82.990265),
      new L.LatLng(25.26317, 82.989418),
      new L.LatLng(25.263219, 82.989979),
      new L.LatLng(25.260541, 82.990612),
      new L.LatLng(25.260327, 82.991213),
      new L.LatLng(25.261162, 82.993165),
      new L.LatLng(25.260861, 82.993337),
      new L.LatLng(25.259881, 82.991331),
      new L.LatLng(25.259473, 82.991127),
      new L.LatLng(25.258493, 82.991846),
      new L.LatLng(25.258289, 82.991561),
      new L.LatLng(25.259338, 82.990785),
      new L.LatLng(25.259365, 82.990264),
      new L.LatLng(25.258458, 82.988042)
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
        scale: "60 60 60",
        render: false,
        rotation: "0 270 0"
      }
    ],
    points: [
      new L.LatLng(25.26582, 82.983605),
      new L.LatLng(25.265859, 82.983196),
      new L.LatLng(25.263488, 82.983023),
      new L.LatLng(25.263182, 82.982828),
      new L.LatLng(25.26281, 82.982776),
      new L.LatLng(25.262587, 82.983013),
      new L.LatLng(25.260153, 82.983434),
      new L.LatLng(25.260148, 82.98386),
      new L.LatLng(25.262669, 82.983402),
      new L.LatLng(25.262889, 82.983575),
      new L.LatLng(25.263028, 82.985859),
      new L.LatLng(25.263307, 82.985784),
      new L.LatLng(25.263168, 82.983561),
      new L.LatLng(25.263354, 82.983435)
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
                // icon.setAttribute("scale", "30 30 30");
                icon.setAttribute("rotation", object.rotation);
                icon.setAttribute("id", object.name);
                // icon.setAttribute("position", "0 200 0");
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
