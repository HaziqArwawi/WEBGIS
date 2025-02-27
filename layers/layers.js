var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MERGE_ALL_PA_1 = new ol.format.GeoJSON();
var features_MERGE_ALL_PA_1 = format_MERGE_ALL_PA_1.readFeatures(json_MERGE_ALL_PA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERGE_ALL_PA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERGE_ALL_PA_1.addFeatures(features_MERGE_ALL_PA_1);
var lyr_MERGE_ALL_PA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERGE_ALL_PA_1, 
                style: style_MERGE_ALL_PA_1,
                popuplayertitle: 'MERGE_ALL_PA',
                interactive: true,
                title: '<img src="styles/legend/MERGE_ALL_PA_1.png" /> MERGE_ALL_PA'
            });
var format_MERGE_ALL_TS_2 = new ol.format.GeoJSON();
var features_MERGE_ALL_TS_2 = format_MERGE_ALL_TS_2.readFeatures(json_MERGE_ALL_TS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERGE_ALL_TS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERGE_ALL_TS_2.addFeatures(features_MERGE_ALL_TS_2);
var lyr_MERGE_ALL_TS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERGE_ALL_TS_2, 
                style: style_MERGE_ALL_TS_2,
                popuplayertitle: 'MERGE_ALL_TS',
                interactive: true,
                title: '<img src="styles/legend/MERGE_ALL_TS_2.png" /> MERGE_ALL_TS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MERGE_ALL_PA_1.setVisible(true);lyr_MERGE_ALL_TS_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MERGE_ALL_PA_1,lyr_MERGE_ALL_TS_2];
lyr_MERGE_ALL_PA_1.set('fieldAliases', {'FID': 'FID', 'NO LOT': 'NO LOT', 'LUAS LOT': 'LUAS LOT', 'tsp — hak': 'tsp — hak', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', 'tsp — hak milik_daerah': 'tsp — hak milik_daerah', 'tsp — hak milik_no_pa': 'tsp — hak milik_no_pa', 'tsp — pemilik_pemilik': 'tsp — pemilik_pemilik', });
lyr_MERGE_ALL_TS_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'FID': 'FID', 'vertex_p_2': 'vertex_p_2', 'path': 'path', });
lyr_MERGE_ALL_PA_1.set('fieldImages', {'FID': 'TextEdit', 'NO LOT': 'TextEdit', 'LUAS LOT': 'TextEdit', 'tsp — hak': 'TextEdit', 'tsp — ha_1': 'TextEdit', 'tsp — pemi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tsp — hak milik_daerah': 'TextEdit', 'tsp — hak milik_no_pa': 'Range', 'tsp — pemilik_pemilik': 'TextEdit', });
lyr_MERGE_ALL_TS_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'FID': '', 'vertex_p_2': '', 'path': '', });
lyr_MERGE_ALL_PA_1.set('fieldLabels', {'FID': 'hidden field', 'NO LOT': 'header label - visible with data', 'LUAS LOT': 'header label - visible with data', 'tsp — hak': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'hidden field', 'path': 'hidden field', 'tsp — hak milik_daerah': 'no label', 'tsp — hak milik_no_pa': 'no label', 'tsp — pemilik_pemilik': 'no label', });
lyr_MERGE_ALL_TS_2.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'FID': 'no label', 'vertex_p_2': 'no label', 'path': 'no label', });
lyr_MERGE_ALL_TS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});