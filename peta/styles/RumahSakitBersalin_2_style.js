var size = 0;
var placement = 'point';
function categories_RumahSakitBersalin_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Rumah Sakit Ibu dan Anak Care She':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(58,107,205,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Rumah Sakit Ibu dan Anak Nasana Pura':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,159,82,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Rumah Sakit Ibu dan Anak Tinatapura':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(201,113,188,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_RumahSakitBersalin_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("RSB");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("RSB") !== null) {
        labelText = String(feature.get("RSB"));
    }
    
var style = categories_RumahSakitBersalin_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
