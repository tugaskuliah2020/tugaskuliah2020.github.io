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
        });var format_Penduduk2021_1 = new ol.format.GeoJSON();
var features_Penduduk2021_1 = format_Penduduk2021_1.readFeatures(json_Penduduk2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penduduk2021_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Penduduk2021_1.addFeatures(features_Penduduk2021_1);var lyr_Penduduk2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Penduduk2021_1, 
                style: style_Penduduk2021_1,
    title: 'Penduduk 2021<br />\
    <img src="styles/legend/Penduduk2021_1_0.png" /> Tidak Padat<br />\
    <img src="styles/legend/Penduduk2021_1_1.png" /> Cukup Padat<br />\
    <img src="styles/legend/Penduduk2021_1_2.png" /> Padat<br />\
    <img src="styles/legend/Penduduk2021_1_3.png" /> Sangat Padat<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Penduduk2021_1.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_Penduduk2021_1];
lyr_Penduduk2021_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Penduduk': 'Penduduk', });
lyr_Penduduk2021_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Penduduk': 'TextEdit', });
lyr_Penduduk2021_1.set('fieldLabels', {'Kecamatan': 'header label', 'Penduduk': 'header label', });
lyr_Penduduk2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});