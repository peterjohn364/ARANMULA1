var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Aranmula_1 = new ol.format.GeoJSON();
var features_Aranmula_1 = format_Aranmula_1.readFeatures(json_Aranmula_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula_1.addFeatures(features_Aranmula_1);
var lyr_Aranmula_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula_1, 
                style: style_Aranmula_1,
                popuplayertitle: 'Aranmula',
                interactive: false,
    title: 'Aranmula<br />\
    <img src="styles/legend/Aranmula_1_0.png" /> Aranmula East<br />\
    <img src="styles/legend/Aranmula_1_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/Aranmula_1_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/Aranmula_1_3.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/Aranmula_1_4.png" /> Erumakkadu<br />\
    <img src="styles/legend/Aranmula_1_5.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/Aranmula_1_6.png" /> KALARIKKODU<br />\
    <img src="styles/legend/Aranmula_1_7.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/Aranmula_1_8.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/Aranmula_1_9.png" /> KOTTA EAST<br />\
    <img src="styles/legend/Aranmula_1_10.png" /> KOTTA WEST<br />\
    <img src="styles/legend/Aranmula_1_11.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/Aranmula_1_12.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/Aranmula_1_13.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/Aranmula_1_14.png" /> MALAKKARA<br />\
    <img src="styles/legend/Aranmula_1_15.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/Aranmula_1_16.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/Aranmula_1_17.png" /> VALLANA<br />\
    <img src="styles/legend/Aranmula_1_18.png" /> <br />' });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_2, 
                style: style_road_2,
                popuplayertitle: 'road',
                interactive: false,
                title: '<img src="styles/legend/road_2.png" /> road'
            });
var format_Anganawadi_3 = new ol.format.GeoJSON();
var features_Anganawadi_3 = format_Anganawadi_3.readFeatures(json_Anganawadi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anganawadi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anganawadi_3.addFeatures(features_Anganawadi_3);
var lyr_Anganawadi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anganawadi_3, 
                style: style_Anganawadi_3,
                popuplayertitle: 'Anganawadi',
                interactive: false,
                title: '<img src="styles/legend/Anganawadi_3.png" /> Anganawadi'
            });
var format_locations_4 = new ol.format.GeoJSON();
var features_locations_4 = format_locations_4.readFeatures(json_locations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locations_4.addFeatures(features_locations_4);
var lyr_locations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_locations_4, 
                style: style_locations_4,
                popuplayertitle: 'locations',
                interactive: false,
                title: '<img src="styles/legend/locations_4.png" /> locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Aranmula_1.setVisible(true);lyr_road_2.setVisible(true);lyr_Anganawadi_3.setVisible(true);lyr_locations_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Aranmula_1,lyr_road_2,lyr_Anganawadi_3,lyr_locations_4];
lyr_Aranmula_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_road_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Anganawadi_3.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', 'Photo2': 'Photo2', 'NEAR_FID': 'NEAR_FID', 'NEAR_DIST': 'NEAR_DIST', });
lyr_locations_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_Aranmula_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_road_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Anganawadi_3.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Photo2': 'TextEdit', 'NEAR_FID': 'TextEdit', 'NEAR_DIST': 'TextEdit', });
lyr_locations_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Aranmula_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_road_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Anganawadi_3.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'no label', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', 'Photo2': 'no label', 'NEAR_FID': 'no label', 'NEAR_DIST': 'no label', });
lyr_locations_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_locations_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});