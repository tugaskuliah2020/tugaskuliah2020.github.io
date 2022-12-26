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
            });var format_Puskesmas_2 = new ol.format.GeoJSON();
var features_Puskesmas_2 = format_Puskesmas_2.readFeatures(json_Puskesmas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Puskesmas_2.addFeatures(features_Puskesmas_2);var lyr_Puskesmas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas_2, 
                style: style_Puskesmas_2,
    title: 'Puskesmas<br />\
    <img src="styles/legend/Puskesmas_2_0.png" /> UPTD Puskesmas Bulili<br />\
    <img src="styles/legend/Puskesmas_2_1.png" /> UPTD Puskesmas Kamonji<br />\
    <img src="styles/legend/Puskesmas_2_2.png" /> UPTD Puskesmas Kawatuna<br />\
    <img src="styles/legend/Puskesmas_2_3.png" /> UPTD Puskesmas Lere<br />\
    <img src="styles/legend/Puskesmas_2_4.png" /> UPTD Puskesmas Mabelopura<br />\
    <img src="styles/legend/Puskesmas_2_5.png" /> UPTD Puskesmas Mamboro<br />\
    <img src="styles/legend/Puskesmas_2_6.png" /> UPTD Puskesmas Nosarara<br />\
    <img src="styles/legend/Puskesmas_2_7.png" /> UPTD Puskesmas Pantoloan<br />\
    <img src="styles/legend/Puskesmas_2_8.png" /> UPTD Puskesmas Sangurara<br />\
    <img src="styles/legend/Puskesmas_2_9.png" /> UPTD Puskesmas Singgani<br />\
    <img src="styles/legend/Puskesmas_2_10.png" /> UPTD Puskesmas Talise<br />\
    <img src="styles/legend/Puskesmas_2_11.png" /> UPTD Puskesmas Taweli<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KotaPalu_1.setVisible(true);lyr_Puskesmas_2.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_KotaPalu_1,lyr_Puskesmas_2];
lyr_KotaPalu_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_Puskesmas_2.set('fieldAliases', {'Puskesmas': 'Puskesmas', });
lyr_KotaPalu_1.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_Puskesmas_2.set('fieldImages', {'Puskesmas': 'TextEdit', });
lyr_KotaPalu_1.set('fieldLabels', {'Kecamatan': 'no label', });
lyr_Puskesmas_2.set('fieldLabels', {'Puskesmas': 'inline label', });
lyr_Puskesmas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});