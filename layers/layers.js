ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([111.388705, -7.355715, 114.490937, -5.578101]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_1_0.png" /> Lahan Tidak bervegetasi<br />\
    <img src="styles/legend/NDVI_1_1.png" /> Kehijauan Sangat Rendah<br />\
    <img src="styles/legend/NDVI_1_2.png" /> Kehijauan Rendah<br />\
    <img src="styles/legend/NDVI_1_3.png" /> Kehijauan Sedang<br />\
    <img src="styles/legend/NDVI_1_4.png" /> Kehijauan Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_NDBI_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDBI<br />\
    <img src="styles/legend/NDBI_2_0.png" /> Non Bangunan<br />\
    <img src="styles/legend/NDBI_2_1.png" /> Kerapatan Bangunan Rendah<br />\
    <img src="styles/legend/NDBI_2_2.png" /> kerapatan bangunan Sedang<br />\
    <img src="styles/legend/NDBI_2_3.png" /> kerapan bangunan Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDBI_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_LST_2_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_2<br />\
    <img src="styles/legend/LST_2_3_0.png" /> Suhu Sangat Rendah <br />\
    <img src="styles/legend/LST_2_3_1.png" /> Suhu Rendah<br />\
    <img src="styles/legend/LST_2_3_2.png" /> Suhu Sedang<br />\
    <img src="styles/legend/LST_2_3_3.png" /> Suhu Tinggi<br />\
    <img src="styles/legend/LST_2_3_4.png" /> Suhu Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_2_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });
var lyr_UHI_2_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'UHI_2<br />\
    <img src="styles/legend/UHI_2_4_0.png" /> Low Temperature<br />\
    <img src="styles/legend/UHI_2_4_1.png" /> Moderate Temperature<br />\
    <img src="styles/legend/UHI_2_4_2.png" /> High Temperature<br />\
    <img src="styles/legend/UHI_2_4_3.png" /> Very High Temperature<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/UHI_2_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [112.366845, -7.408676, 112.778633, -5.715711]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_NDBI_2.setVisible(true);lyr_LST_2_3.setVisible(true);lyr_UHI_2_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NDVI_1,lyr_NDBI_2,lyr_LST_2_3,lyr_UHI_2_4];
