var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_KotaPalu_1 = new ol.format.GeoJSON();
var features_KotaPalu_1 = format_KotaPalu_1.readFeatures(json_KotaPalu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPalu_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KotaPalu_1.addFeatures(features_KotaPalu_1);var lyr_KotaPalu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaPalu_1, 
                style: style_KotaPalu_1,
                title: '<img src="styles/legend/KotaPalu_1.png" /> Kota Palu'
            });var format_RumahSakit_2 = new ol.format.GeoJSON();
var features_RumahSakit_2 = format_RumahSakit_2.readFeatures(json_RumahSakit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakit_2.addFeatures(features_RumahSakit_2);var lyr_RumahSakit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_2, 
                style: style_RumahSakit_2,
    title: 'Rumah Sakit<br />\
    <img src="styles/legend/RumahSakit_2_0.png" /> Rumah Sakit Bhayangkara<br />\
    <img src="styles/legend/RumahSakit_2_1.png" /> Rumah Sakit Budi Agung Palu<br />\
    <img src="styles/legend/RumahSakit_2_2.png" /> Rumah Sakit Madani Palu<br />\
    <img src="styles/legend/RumahSakit_2_3.png" /> Rumah Sakit Samaritan<br />\
    <img src="styles/legend/RumahSakit_2_4.png" /> Rumah Sakit Sis Aljufri<br />\
    <img src="styles/legend/RumahSakit_2_5.png" /> Rumah Sakit Umum Anutapura<br />\
    <img src="styles/legend/RumahSakit_2_6.png" /> Rumah Sakit Undata Palu<br />\
    <img src="styles/legend/RumahSakit_2_7.png" /> Rumah Sakit Wirabuana<br />\
    <img src="styles/legend/RumahSakit_2_8.png" /> Rumah Sakit Woodward<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KotaPalu_1.setVisible(true);lyr_RumahSakit_2.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_KotaPalu_1,lyr_RumahSakit_2];
lyr_KotaPalu_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_RumahSakit_2.set('fieldAliases', {'RS': 'RS', 'Gambar': 'Gambar', });
lyr_KotaPalu_1.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_RumahSakit_2.set('fieldImages', {'RS': 'TextEdit', 'Gambar': 'TextEdit', });
lyr_KotaPalu_1.set('fieldLabels', {'Kecamatan': 'no label', });
lyr_RumahSakit_2.set('fieldLabels', {'RS': 'inline label', 'Gambar': 'no label', });
lyr_RumahSakit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});