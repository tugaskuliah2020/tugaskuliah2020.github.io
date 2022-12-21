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
        });var format_Penduduk_1 = new ol.format.GeoJSON();
var features_Penduduk_1 = format_Penduduk_1.readFeatures(json_Penduduk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penduduk_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Penduduk_1.addFeatures(features_Penduduk_1);var lyr_Penduduk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Penduduk_1, 
                style: style_Penduduk_1,
    title: 'Penduduk<br />\
    <img src="styles/legend/Penduduk_1_0.png" /> Tidak Padat<br />\
    <img src="styles/legend/Penduduk_1_1.png" /> Cukup Padat<br />\
    <img src="styles/legend/Penduduk_1_2.png" /> Padat<br />\
    <img src="styles/legend/Penduduk_1_3.png" /> Sangat Padat<br />'
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
        });var format_Puskesmas_3 = new ol.format.GeoJSON();
var features_Puskesmas_3 = format_Puskesmas_3.readFeatures(json_Puskesmas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Puskesmas_3.addFeatures(features_Puskesmas_3);var lyr_Puskesmas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas_3, 
                style: style_Puskesmas_3,
    title: 'Puskesmas<br />\
    <img src="styles/legend/Puskesmas_3_0.png" /> UPTD Puskesmas Bulili<br />\
    <img src="styles/legend/Puskesmas_3_1.png" /> UPTD Puskesmas Kamonji<br />\
    <img src="styles/legend/Puskesmas_3_2.png" /> UPTD Puskesmas Kawatuna<br />\
    <img src="styles/legend/Puskesmas_3_3.png" /> UPTD Puskesmas Lere<br />\
    <img src="styles/legend/Puskesmas_3_4.png" /> UPTD Puskesmas Mabelopura<br />\
    <img src="styles/legend/Puskesmas_3_5.png" /> UPTD Puskesmas Mamboro<br />\
    <img src="styles/legend/Puskesmas_3_6.png" /> UPTD Puskesmas Nosarara<br />\
    <img src="styles/legend/Puskesmas_3_7.png" /> UPTD Puskesmas Pantoloan<br />\
    <img src="styles/legend/Puskesmas_3_8.png" /> UPTD Puskesmas Sangurara<br />\
    <img src="styles/legend/Puskesmas_3_9.png" /> UPTD Puskesmas Singgani<br />\
    <img src="styles/legend/Puskesmas_3_10.png" /> UPTD Puskesmas Talise<br />\
    <img src="styles/legend/Puskesmas_3_11.png" /> UPTD Puskesmas Taweli<br />'
        });var format_RumahSakit_4 = new ol.format.GeoJSON();
var features_RumahSakit_4 = format_RumahSakit_4.readFeatures(json_RumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakit_4.addFeatures(features_RumahSakit_4);var lyr_RumahSakit_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_4, 
                style: style_RumahSakit_4,
    title: 'Rumah Sakit<br />\
    <img src="styles/legend/RumahSakit_4_0.png" /> Rumah Sakit Bhayangkara<br />\
    <img src="styles/legend/RumahSakit_4_1.png" /> Rumah Sakit Budi Agung Palu<br />\
    <img src="styles/legend/RumahSakit_4_2.png" /> Rumah Sakit Madani Palu<br />\
    <img src="styles/legend/RumahSakit_4_3.png" /> Rumah Sakit Samaritan<br />\
    <img src="styles/legend/RumahSakit_4_4.png" /> Rumah Sakit Sis Aljufri<br />\
    <img src="styles/legend/RumahSakit_4_5.png" /> Rumah Sakit Umum Anutapura<br />\
    <img src="styles/legend/RumahSakit_4_6.png" /> Rumah Sakit Undata Palu<br />\
    <img src="styles/legend/RumahSakit_4_7.png" /> Rumah Sakit Wirabuana<br />\
    <img src="styles/legend/RumahSakit_4_8.png" /> Rumah Sakit Woodward<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Penduduk_1.setVisible(true);lyr_RumahSakitBersalin_2.setVisible(true);lyr_Puskesmas_3.setVisible(true);lyr_RumahSakit_4.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_Penduduk_1,lyr_RumahSakitBersalin_2,lyr_Puskesmas_3,lyr_RumahSakit_4];
lyr_Penduduk_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', '2021': '2021', '2020': '2020', '2019': '2019', });
lyr_RumahSakitBersalin_2.set('fieldAliases', {'RSB': 'RSB', });
lyr_Puskesmas_3.set('fieldAliases', {'Puskesmas': 'Puskesmas', });
lyr_RumahSakit_4.set('fieldAliases', {'RS': 'RS', });
lyr_Penduduk_1.set('fieldImages', {'Kecamatan': 'TextEdit', '2021': 'TextEdit', '2020': 'TextEdit', '2019': 'TextEdit', });
lyr_RumahSakitBersalin_2.set('fieldImages', {'RSB': 'TextEdit', });
lyr_Puskesmas_3.set('fieldImages', {'Puskesmas': 'TextEdit', });
lyr_RumahSakit_4.set('fieldImages', {'RS': 'TextEdit', });
lyr_Penduduk_1.set('fieldLabels', {'Kecamatan': 'inline label', '2021': 'inline label', '2020': 'inline label', '2019': 'inline label', });
lyr_RumahSakitBersalin_2.set('fieldLabels', {'RSB': 'inline label', });
lyr_Puskesmas_3.set('fieldLabels', {'Puskesmas': 'inline label', });
lyr_RumahSakit_4.set('fieldLabels', {'RS': 'inline label', });
lyr_RumahSakit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});