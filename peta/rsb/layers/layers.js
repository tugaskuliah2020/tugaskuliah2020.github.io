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
            });var format_RumahSakitBersalin_2 = new ol.format.GeoJSON();
var features_RumahSakitBersalin_2 = format_RumahSakitBersalin_2.readFeatures(json_RumahSakitBersalin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitBersalin_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitBersalin_2.addFeatures(features_RumahSakitBersalin_2);var lyr_RumahSakitBersalin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitBersalin_2, 
                style: style_RumahSakitBersalin_2,
    title: 'Rumah Sakit Bersalin<br />\
    <img src="styles/legend/RumahSakitBersalin_2_0.png" /> Rumah Sakit Ibu dan Anak Care She<br />\
    <img src="styles/legend/RumahSakitBersalin_2_1.png" /> Rumah Sakit Ibu dan Anak Nasana Pura<br />\
    <img src="styles/legend/RumahSakitBersalin_2_2.png" /> Rumah Sakit Ibu dan Anak Tinatapura<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KotaPalu_1.setVisible(true);lyr_RumahSakitBersalin_2.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_KotaPalu_1,lyr_RumahSakitBersalin_2];
lyr_KotaPalu_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_RumahSakitBersalin_2.set('fieldAliases', {'RSB': 'RSB', });
lyr_KotaPalu_1.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_RumahSakitBersalin_2.set('fieldImages', {'RSB': 'TextEdit', });
lyr_KotaPalu_1.set('fieldLabels', {'Kecamatan': 'no label', });
lyr_RumahSakitBersalin_2.set('fieldLabels', {'RSB': 'inline label', });
lyr_RumahSakitBersalin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});