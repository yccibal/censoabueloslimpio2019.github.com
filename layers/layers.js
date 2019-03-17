var wms_layers = [];
var format_barloc_1108_2012_0 = new ol.format.GeoJSON();
var features_barloc_1108_2012_0 = format_barloc_1108_2012_0.readFeatures(json_barloc_1108_2012_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barloc_1108_2012_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_barloc_1108_2012_0.addFeatures(features_barloc_1108_2012_0);var lyr_barloc_1108_2012_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barloc_1108_2012_0, 
                style: style_barloc_1108_2012_0,
    title: 'barloc_1108_2012<br />\
    <img src="styles/legend/barloc_1108_2012_0_0.png" /> 113<br />\
    <img src="styles/legend/barloc_1108_2012_0_1.png" /> 112<br />\
    <img src="styles/legend/barloc_1108_2012_0_2.png" /> 111<br />\
    <img src="styles/legend/barloc_1108_2012_0_3.png" /> 110<br />\
    <img src="styles/legend/barloc_1108_2012_0_4.png" /> 109<br />\
    <img src="styles/legend/barloc_1108_2012_0_5.png" /> 108<br />\
    <img src="styles/legend/barloc_1108_2012_0_6.png" /> 107<br />\
    <img src="styles/legend/barloc_1108_2012_0_7.png" /> 106<br />\
    <img src="styles/legend/barloc_1108_2012_0_8.png" /> 105<br />\
    <img src="styles/legend/barloc_1108_2012_0_9.png" /> 104<br />\
    <img src="styles/legend/barloc_1108_2012_0_10.png" /> 103<br />\
    <img src="styles/legend/barloc_1108_2012_0_11.png" /> 102<br />\
    <img src="styles/legend/barloc_1108_2012_0_12.png" /> 101<br />\
    <img src="styles/legend/barloc_1108_2012_0_13.png" /> 100<br />\
    <img src="styles/legend/barloc_1108_2012_0_14.png" /> 099<br />\
    <img src="styles/legend/barloc_1108_2012_0_15.png" /> 098<br />\
    <img src="styles/legend/barloc_1108_2012_0_16.png" /> 097<br />\
    <img src="styles/legend/barloc_1108_2012_0_17.png" /> 096<br />\
    <img src="styles/legend/barloc_1108_2012_0_18.png" /> 095<br />\
    <img src="styles/legend/barloc_1108_2012_0_19.png" /> 094<br />\
    <img src="styles/legend/barloc_1108_2012_0_20.png" /> 093<br />\
    <img src="styles/legend/barloc_1108_2012_0_21.png" /> 092<br />\
    <img src="styles/legend/barloc_1108_2012_0_22.png" /> 091<br />\
    <img src="styles/legend/barloc_1108_2012_0_23.png" /> 090<br />\
    <img src="styles/legend/barloc_1108_2012_0_24.png" /> 089<br />\
    <img src="styles/legend/barloc_1108_2012_0_25.png" /> 088<br />\
    <img src="styles/legend/barloc_1108_2012_0_26.png" /> 087<br />\
    <img src="styles/legend/barloc_1108_2012_0_27.png" /> 086<br />\
    <img src="styles/legend/barloc_1108_2012_0_28.png" /> 085<br />\
    <img src="styles/legend/barloc_1108_2012_0_29.png" /> 084<br />\
    <img src="styles/legend/barloc_1108_2012_0_30.png" /> 083<br />\
    <img src="styles/legend/barloc_1108_2012_0_31.png" /> 082<br />\
    <img src="styles/legend/barloc_1108_2012_0_32.png" /> 081<br />\
    <img src="styles/legend/barloc_1108_2012_0_33.png" /> 080<br />\
    <img src="styles/legend/barloc_1108_2012_0_34.png" /> 079<br />\
    <img src="styles/legend/barloc_1108_2012_0_35.png" /> 078<br />\
    <img src="styles/legend/barloc_1108_2012_0_36.png" /> 077<br />\
    <img src="styles/legend/barloc_1108_2012_0_37.png" /> 076<br />\
    <img src="styles/legend/barloc_1108_2012_0_38.png" /> 075<br />\
    <img src="styles/legend/barloc_1108_2012_0_39.png" /> 074<br />\
    <img src="styles/legend/barloc_1108_2012_0_40.png" /> 073<br />\
    <img src="styles/legend/barloc_1108_2012_0_41.png" /> 072<br />\
    <img src="styles/legend/barloc_1108_2012_0_42.png" /> 071<br />\
    <img src="styles/legend/barloc_1108_2012_0_43.png" /> 068<br />\
    <img src="styles/legend/barloc_1108_2012_0_44.png" /> 067<br />\
    <img src="styles/legend/barloc_1108_2012_0_45.png" /> 066<br />\
    <img src="styles/legend/barloc_1108_2012_0_46.png" /> 065<br />\
    <img src="styles/legend/barloc_1108_2012_0_47.png" /> 064<br />\
    <img src="styles/legend/barloc_1108_2012_0_48.png" /> 063<br />\
    <img src="styles/legend/barloc_1108_2012_0_49.png" /> 062<br />\
    <img src="styles/legend/barloc_1108_2012_0_50.png" /> 061<br />\
    <img src="styles/legend/barloc_1108_2012_0_51.png" /> 060<br />\
    <img src="styles/legend/barloc_1108_2012_0_52.png" /> 059<br />\
    <img src="styles/legend/barloc_1108_2012_0_53.png" /> 058<br />\
    <img src="styles/legend/barloc_1108_2012_0_54.png" /> 057<br />\
    <img src="styles/legend/barloc_1108_2012_0_55.png" /> 056<br />\
    <img src="styles/legend/barloc_1108_2012_0_56.png" /> 055<br />\
    <img src="styles/legend/barloc_1108_2012_0_57.png" /> 054<br />\
    <img src="styles/legend/barloc_1108_2012_0_58.png" /> 053<br />\
    <img src="styles/legend/barloc_1108_2012_0_59.png" /> 052<br />\
    <img src="styles/legend/barloc_1108_2012_0_60.png" /> 048<br />\
    <img src="styles/legend/barloc_1108_2012_0_61.png" /> 047<br />\
    <img src="styles/legend/barloc_1108_2012_0_62.png" /> 046<br />\
    <img src="styles/legend/barloc_1108_2012_0_63.png" /> 045<br />\
    <img src="styles/legend/barloc_1108_2012_0_64.png" /> 044<br />\
    <img src="styles/legend/barloc_1108_2012_0_65.png" /> 043<br />\
    <img src="styles/legend/barloc_1108_2012_0_66.png" /> 042<br />\
    <img src="styles/legend/barloc_1108_2012_0_67.png" /> 041<br />\
    <img src="styles/legend/barloc_1108_2012_0_68.png" /> 040<br />\
    <img src="styles/legend/barloc_1108_2012_0_69.png" /> 039<br />\
    <img src="styles/legend/barloc_1108_2012_0_70.png" /> 038<br />\
    <img src="styles/legend/barloc_1108_2012_0_71.png" /> 037<br />\
    <img src="styles/legend/barloc_1108_2012_0_72.png" /> 036<br />\
    <img src="styles/legend/barloc_1108_2012_0_73.png" /> 035<br />\
    <img src="styles/legend/barloc_1108_2012_0_74.png" /> 034<br />\
    <img src="styles/legend/barloc_1108_2012_0_75.png" /> 033<br />\
    <img src="styles/legend/barloc_1108_2012_0_76.png" /> 032<br />\
    <img src="styles/legend/barloc_1108_2012_0_77.png" /> 031<br />\
    <img src="styles/legend/barloc_1108_2012_0_78.png" /> 030<br />\
    <img src="styles/legend/barloc_1108_2012_0_79.png" /> 029<br />\
    <img src="styles/legend/barloc_1108_2012_0_80.png" /> 028<br />\
    <img src="styles/legend/barloc_1108_2012_0_81.png" /> 027<br />\
    <img src="styles/legend/barloc_1108_2012_0_82.png" /> 026<br />\
    <img src="styles/legend/barloc_1108_2012_0_83.png" /> 025<br />\
    <img src="styles/legend/barloc_1108_2012_0_84.png" /> 024<br />\
    <img src="styles/legend/barloc_1108_2012_0_85.png" /> 023<br />\
    <img src="styles/legend/barloc_1108_2012_0_86.png" /> 022<br />\
    <img src="styles/legend/barloc_1108_2012_0_87.png" /> 021<br />\
    <img src="styles/legend/barloc_1108_2012_0_88.png" /> 020<br />\
    <img src="styles/legend/barloc_1108_2012_0_89.png" /> 019<br />\
    <img src="styles/legend/barloc_1108_2012_0_90.png" /> 018<br />\
    <img src="styles/legend/barloc_1108_2012_0_91.png" /> 017<br />\
    <img src="styles/legend/barloc_1108_2012_0_92.png" /> 016<br />\
    <img src="styles/legend/barloc_1108_2012_0_93.png" /> 015<br />\
    <img src="styles/legend/barloc_1108_2012_0_94.png" /> 014<br />\
    <img src="styles/legend/barloc_1108_2012_0_95.png" /> 013<br />\
    <img src="styles/legend/barloc_1108_2012_0_96.png" /> 012<br />\
    <img src="styles/legend/barloc_1108_2012_0_97.png" /> 011<br />\
    <img src="styles/legend/barloc_1108_2012_0_98.png" /> 010<br />\
    <img src="styles/legend/barloc_1108_2012_0_99.png" /> 009<br />\
    <img src="styles/legend/barloc_1108_2012_0_100.png" /> 008<br />\
    <img src="styles/legend/barloc_1108_2012_0_101.png" /> 007<br />\
    <img src="styles/legend/barloc_1108_2012_0_102.png" /> 005<br />\
    <img src="styles/legend/barloc_1108_2012_0_103.png" /> 003<br />\
    <img src="styles/legend/barloc_1108_2012_0_104.png" /> 002<br />\
    <img src="styles/legend/barloc_1108_2012_0_105.png" /> 001<br />\
    <img src="styles/legend/barloc_1108_2012_0_106.png" /> <br />\
    <img src="styles/legend/barloc_1108_2012_0_107.png" /> <br />\
    <img src="styles/legend/barloc_1108_2012_0_108.png" /> <br />\
    <img src="styles/legend/barloc_1108_2012_0_109.png" /> <br />'
        });var format_man_1108_2014_1 = new ol.format.GeoJSON();
var features_man_1108_2014_1 = format_man_1108_2014_1.readFeatures(json_man_1108_2014_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_man_1108_2014_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_man_1108_2014_1.addFeatures(features_man_1108_2014_1);var lyr_man_1108_2014_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_man_1108_2014_1, 
                style: style_man_1108_2014_1,
                title: '<img src="styles/legend/man_1108_2014_1.png" /> man_1108_2014'
            });var format_ser_1108_2013_2 = new ol.format.GeoJSON();
var features_ser_1108_2013_2 = format_ser_1108_2013_2.readFeatures(json_ser_1108_2013_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ser_1108_2013_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ser_1108_2013_2.addFeatures(features_ser_1108_2013_2);var lyr_ser_1108_2013_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ser_1108_2013_2, 
                style: style_ser_1108_2013_2,
    title: 'ser_1108_2013<br />\
    <img src="styles/legend/ser_1108_2013_2_0.png" />  2.0000 - 7.8000 <br />\
    <img src="styles/legend/ser_1108_2013_2_1.png" />  7.8000 - 13.6000 <br />\
    <img src="styles/legend/ser_1108_2013_2_2.png" />  13.6000 - 19.4000 <br />\
    <img src="styles/legend/ser_1108_2013_2_3.png" />  19.4000 - 25.2000 <br />\
    <img src="styles/legend/ser_1108_2013_2_4.png" />  25.2000 - 31.0000 <br />'
        });var format_viv_1108_2013_3 = new ol.format.GeoJSON();
var features_viv_1108_2013_3 = format_viv_1108_2013_3.readFeatures(json_viv_1108_2013_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viv_1108_2013_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_viv_1108_2013_3.addFeatures(features_viv_1108_2013_3);var lyr_viv_1108_2013_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_viv_1108_2013_3, 
                style: style_viv_1108_2013_3,
                title: '<img src="styles/legend/viv_1108_2013_3.png" /> viv_1108_2013'
            });

lyr_man_1108_2014_1.setVisible(true);lyr_ser_1108_2013_2.setVisible(true);lyr_viv_1108_2013_3.setVisible(true);
var layersList = [lyr_barloc_1108_2012_0,lyr_man_1108_2014_1,lyr_ser_1108_2013_2,lyr_viv_1108_2013_3];
lyr_barloc_1108_2012_0.set('fieldAliases', {'DPTO': 'DPTO', 'DPTO_DESC': 'DPTO_DESC', 'DISTRITO': 'DISTRITO', 'DIST_DESC': 'DIST_DESC', 'AREA': 'AREA', 'BAR_LOC': 'BAR_LOC', 'BARLO_DESC': 'BARLO_DESC', 'ORDEN': 'ORDEN', });
lyr_man_1108_2014_1.set('fieldAliases', {'ID': 'ID', 'DISTRITO': 'DISTRITO', 'AREA': 'AREA', 'MANZANA': 'MANZANA', 'DPTO': 'DPTO', 'DPTO_DESC': 'DPTO_DESC', 'DIST_DESC': 'DIST_DESC', 'BAR_LOC': 'BAR_LOC', 'BARLO_DESC': 'BARLO_DESC', 'Nro': 'Nro', });
lyr_ser_1108_2013_2.set('fieldAliases', {'DPTO': 'DPTO', 'DPTO_DESC': 'DPTO_DESC', 'DISTRITO': 'DISTRITO', 'DIST_DESC': 'DIST_DESC', 'AREA': 'AREA', 'BAR_LOC': 'BAR_LOC', 'BARLO_DESC': 'BARLO_DESC', 'MANZANA': 'MANZANA', 'SECTOR': 'SECTOR', 'ORDEN': 'ORDEN', 'TIPO_EDIF': 'TIPO_EDIF', 'CALLE': 'CALLE', 'NRO_VIV': 'NRO_VIV', 'PISO': 'PISO', 'NRO_DPTO': 'NRO_DPTO', 'SITUACION': 'SITUACION', 'VARONES': 'VARONES', 'MUJERES': 'MUJERES', 'TOTAL_POB': 'TOTAL_POB', 'NOMBRE': 'NOMBRE', 'OBS': 'OBS', 'TIPO_SER': 'TIPO_SER', 'AT': 'AT', 'AE': 'AE', 'PUESTO': 'PUESTO', 'CEN': 'CEN', 'PRECENSIST': 'PRECENSIST', 'SUPERVISOR': 'SUPERVISOR', 'DIGITADOR': 'DIGITADOR', });
lyr_viv_1108_2013_3.set('fieldAliases', {'DPTO': 'DPTO', 'DPTO_DESC': 'DPTO_DESC', 'DISTRITO': 'DISTRITO', 'DIST_DESC': 'DIST_DESC', 'AREA': 'AREA', 'BAR_LOC': 'BAR_LOC', 'BARLO_DESC': 'BARLO_DESC', 'MANZANA': 'MANZANA', 'SECTOR': 'SECTOR', 'TIPO_EDIF': 'TIPO_EDIF', 'CALLE': 'CALLE', 'NRO_VIV': 'NRO_VIV', 'PISO': 'PISO', 'NRO_DPTO': 'NRO_DPTO', 'SITUACION': 'SITUACION', 'VARONES': 'VARONES', 'MUJERES': 'MUJERES', 'TOTAL_POB': 'TOTAL_POB', 'NOMBRE': 'NOMBRE', 'OBS': 'OBS', 'TIPO_SER': 'TIPO_SER', 'AT': 'AT', 'AE': 'AE', 'PUESTO': 'PUESTO', 'CEN': 'CEN', 'ORDEN': 'ORDEN', 'PRECENSIST': 'PRECENSIST', 'SUPERVISOR': 'SUPERVISOR', 'DIGITADOR': 'DIGITADOR', });
lyr_barloc_1108_2012_0.set('fieldImages', {'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DISTRITO': 'TextEdit', 'DIST_DESC': 'TextEdit', 'AREA': 'TextEdit', 'BAR_LOC': 'TextEdit', 'BARLO_DESC': 'TextEdit', 'ORDEN': 'TextEdit', });
lyr_man_1108_2014_1.set('fieldImages', {'ID': 'Range', 'DISTRITO': 'TextEdit', 'AREA': 'TextEdit', 'MANZANA': 'TextEdit', 'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DIST_DESC': 'TextEdit', 'BAR_LOC': 'TextEdit', 'BARLO_DESC': 'TextEdit', 'Nro': 'TextEdit', });
lyr_ser_1108_2013_2.set('fieldImages', {'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DISTRITO': 'TextEdit', 'DIST_DESC': 'TextEdit', 'AREA': 'TextEdit', 'BAR_LOC': 'TextEdit', 'BARLO_DESC': 'TextEdit', 'MANZANA': 'TextEdit', 'SECTOR': 'TextEdit', 'ORDEN': 'Range', 'TIPO_EDIF': 'Range', 'CALLE': 'TextEdit', 'NRO_VIV': 'Range', 'PISO': 'Range', 'NRO_DPTO': 'TextEdit', 'SITUACION': 'Range', 'VARONES': 'Range', 'MUJERES': 'Range', 'TOTAL_POB': 'Range', 'NOMBRE': 'TextEdit', 'OBS': 'TextEdit', 'TIPO_SER': 'Range', 'AT': 'TextEdit', 'AE': 'TextEdit', 'PUESTO': 'TextEdit', 'CEN': 'TextEdit', 'PRECENSIST': 'TextEdit', 'SUPERVISOR': 'TextEdit', 'DIGITADOR': 'TextEdit', });
lyr_viv_1108_2013_3.set('fieldImages', {'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DISTRITO': 'TextEdit', 'DIST_DESC': 'TextEdit', 'AREA': 'TextEdit', 'BAR_LOC': 'TextEdit', 'BARLO_DESC': 'TextEdit', 'MANZANA': 'TextEdit', 'SECTOR': 'TextEdit', 'TIPO_EDIF': 'Range', 'CALLE': 'TextEdit', 'NRO_VIV': 'Range', 'PISO': 'Range', 'NRO_DPTO': 'TextEdit', 'SITUACION': 'Range', 'VARONES': 'Range', 'MUJERES': 'Range', 'TOTAL_POB': 'Range', 'NOMBRE': 'TextEdit', 'OBS': 'TextEdit', 'TIPO_SER': 'Range', 'AT': 'TextEdit', 'AE': 'TextEdit', 'PUESTO': 'TextEdit', 'CEN': 'TextEdit', 'ORDEN': 'Range', 'PRECENSIST': 'TextEdit', 'SUPERVISOR': 'TextEdit', 'DIGITADOR': 'TextEdit', });
lyr_barloc_1108_2012_0.set('fieldLabels', {'DPTO': 'no label', 'DPTO_DESC': 'no label', 'DISTRITO': 'no label', 'DIST_DESC': 'no label', 'AREA': 'no label', 'BAR_LOC': 'no label', 'BARLO_DESC': 'no label', 'ORDEN': 'no label', });
lyr_man_1108_2014_1.set('fieldLabels', {'ID': 'no label', 'DISTRITO': 'no label', 'AREA': 'no label', 'MANZANA': 'no label', 'DPTO': 'no label', 'DPTO_DESC': 'no label', 'DIST_DESC': 'no label', 'BAR_LOC': 'no label', 'BARLO_DESC': 'no label', 'Nro': 'no label', });
lyr_ser_1108_2013_2.set('fieldLabels', {'DPTO': 'no label', 'DPTO_DESC': 'no label', 'DISTRITO': 'no label', 'DIST_DESC': 'no label', 'AREA': 'no label', 'BAR_LOC': 'no label', 'BARLO_DESC': 'no label', 'MANZANA': 'no label', 'SECTOR': 'no label', 'ORDEN': 'no label', 'TIPO_EDIF': 'no label', 'CALLE': 'no label', 'NRO_VIV': 'no label', 'PISO': 'no label', 'NRO_DPTO': 'no label', 'SITUACION': 'no label', 'VARONES': 'no label', 'MUJERES': 'no label', 'TOTAL_POB': 'no label', 'NOMBRE': 'no label', 'OBS': 'no label', 'TIPO_SER': 'no label', 'AT': 'no label', 'AE': 'no label', 'PUESTO': 'no label', 'CEN': 'no label', 'PRECENSIST': 'no label', 'SUPERVISOR': 'no label', 'DIGITADOR': 'no label', });
lyr_viv_1108_2013_3.set('fieldLabels', {'DPTO': 'no label', 'DPTO_DESC': 'no label', 'DISTRITO': 'no label', 'DIST_DESC': 'no label', 'AREA': 'no label', 'BAR_LOC': 'no label', 'BARLO_DESC': 'no label', 'MANZANA': 'no label', 'SECTOR': 'no label', 'TIPO_EDIF': 'no label', 'CALLE': 'no label', 'NRO_VIV': 'no label', 'PISO': 'no label', 'NRO_DPTO': 'no label', 'SITUACION': 'no label', 'VARONES': 'no label', 'MUJERES': 'no label', 'TOTAL_POB': 'no label', 'NOMBRE': 'no label', 'OBS': 'no label', 'TIPO_SER': 'no label', 'AT': 'no label', 'AE': 'no label', 'PUESTO': 'no label', 'CEN': 'no label', 'ORDEN': 'no label', 'PRECENSIST': 'no label', 'SUPERVISOR': 'no label', 'DIGITADOR': 'no label', });
lyr_viv_1108_2013_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});