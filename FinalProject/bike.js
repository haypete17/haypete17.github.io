var datathree =
{
 "currentVersion": 10.41,
 "id": 1458,
 "name": "trans_network_bike_line",
 "type": "Feature Layer",
 "description": "Transportation features including rail, trails and pedestrian walkways with address ranges & names derived from digital orthophotography and GPS.",
 "geometryType": "esriGeometryPolyline",
 "copyrightText": "King County",
 "parentLayer": null,
 "subLayers": [],
 "minScale": 0,
 "maxScale": 0,
 "drawingInfo": {
  "renderer": {
   "type": "simple",
   "symbol": {
    "type": "esriSLS",
    "style": "esriSLSSolid",
    "color": [
     130,
     78,
     0,
     255
    ],
    "width": 1
   },
   "label": "",
   "description": ""
  },
  "transparency": 0,
  "labelingInfo": null
 },
 "defaultVisibility": true,
 "extent": {
  "xmin": 1152543.2845000029,
  "ymin": -92507.87600000203,
  "xmax": 1583883,
  "ymax": 476245.4902500063,
  "spatialReference": {
   "wkid": 2926,
   "latestWkid": 2926
  }
 },
 "hasAttachments": false,
 "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
 "displayField": "NAME_L",
 "typeIdField": null,
 "fields": [
  {
   "name": "OBJECTID",
   "type": "esriFieldTypeOID",
   "alias": "OBJECTID",
   "domain": null
  },
  {
   "name": "Shape",
   "type": "esriFieldTypeGeometry",
   "alias": "Shape",
   "domain": null
  },
  {
   "name": "TLINK_ID",
   "type": "esriFieldTypeInteger",
   "alias": "TLINK_ID",
   "domain": null
  },
  {
   "name": "CREATEDATE",
   "type": "esriFieldTypeDate",
   "alias": "CREATEDATE",
   "length": 8,
   "domain": null
  },
  {
   "name": "EFFEC_DATE",
   "type": "esriFieldTypeDate",
   "alias": "EFFEC_DATE",
   "length": 8,
   "domain": null
  },
  {
   "name": "DB_MD_DATE",
   "type": "esriFieldTypeDate",
   "alias": "DB_MD_DATE",
   "length": 8,
   "domain": null
  },
  {
   "name": "END_DATE",
   "type": "esriFieldTypeDate",
   "alias": "END_DATE",
   "length": 8,
   "domain": null
  },
  {
   "name": "CFCC_ID",
   "type": "esriFieldTypeString",
   "alias": "CFCC_ID",
   "length": 4,
   "domain": null
  },
  {
   "name": "GRADE",
   "type": "esriFieldTypeInteger",
   "alias": "GRADE",
   "domain": null
  },
  {
   "name": "FR_TPOINT",
   "type": "esriFieldTypeInteger",
   "alias": "FR_TPOINT",
   "domain": null
  },
  {
   "name": "TO_TPOINT",
   "type": "esriFieldTypeInteger",
   "alias": "TO_TPOINT",
   "domain": null
  },
  {
   "name": "PREFIX_L",
   "type": "esriFieldTypeString",
   "alias": "PREFIX_L",
   "length": 2,
   "domain": null
  },
  {
   "name": "NAME_L",
   "type": "esriFieldTypeString",
   "alias": "NAME_L",
   "length": 30,
   "domain": null
  },
  {
   "name": "TYPE_L",
   "type": "esriFieldTypeString",
   "alias": "TYPE_L",
   "length": 6,
   "domain": null
  },
  {
   "name": "SUFFIX_L",
   "type": "esriFieldTypeString",
   "alias": "SUFFIX_L",
   "length": 2,
   "domain": null
  },
  {
   "name": "PREFIX_R",
   "type": "esriFieldTypeString",
   "alias": "PREFIX_R",
   "length": 2,
   "domain": null
  },
  {
   "name": "NAME_R",
   "type": "esriFieldTypeString",
   "alias": "NAME_R",
   "length": 30,
   "domain": null
  },
  {
   "name": "TYPE_R",
   "type": "esriFieldTypeString",
   "alias": "TYPE_R",
   "length": 6,
   "domain": null
  },
  {
   "name": "SUFFIX_R",
   "type": "esriFieldTypeString",
   "alias": "SUFFIX_R",
   "length": 2,
   "domain": null
  },
  {
   "name": "FULLNAME_L",
   "type": "esriFieldTypeString",
   "alias": "FULLNAME_L",
   "length": 43,
   "domain": null
  },
  {
   "name": "FULLNAME_R",
   "type": "esriFieldTypeString",
   "alias": "FULLNAME_R",
   "length": 43,
   "domain": null
  },
  {
   "name": "AP_NAME_L",
   "type": "esriFieldTypeString",
   "alias": "AP_NAME_L",
   "length": 43,
   "domain": null
  },
  {
   "name": "AP_NAME_R",
   "type": "esriFieldTypeString",
   "alias": "AP_NAME_R",
   "length": 43,
   "domain": null
  },
  {
   "name": "A_NAME_L",
   "type": "esriFieldTypeString",
   "alias": "A_NAME_L",
   "length": 43,
   "domain": null
  },
  {
   "name": "A_NAME_R",
   "type": "esriFieldTypeString",
   "alias": "A_NAME_R",
   "length": 43,
   "domain": null
  },
  {
   "name": "JURIS_L",
   "type": "esriFieldTypeInteger",
   "alias": "JURIS_L",
   "domain": null
  },
  {
   "name": "JURIS_R",
   "type": "esriFieldTypeInteger",
   "alias": "JURIS_R",
   "domain": null
  },
  {
   "name": "CITY_L",
   "type": "esriFieldTypeString",
   "alias": "CITY_L",
   "length": 50,
   "domain": null
  },
  {
   "name": "CITY_R",
   "type": "esriFieldTypeString",
   "alias": "CITY_R",
   "length": 50,
   "domain": null
  },
  {
   "name": "ZIP_L",
   "type": "esriFieldTypeInteger",
   "alias": "ZIP_L",
   "domain": null
  },
  {
   "name": "ZIP_R",
   "type": "esriFieldTypeInteger",
   "alias": "ZIP_R",
   "domain": null
  },
  {
   "name": "ROLL_LEN",
   "type": "esriFieldTypeDouble",
   "alias": "ROLL_LEN",
   "domain": null
  },
  {
   "name": "Shape_Length",
   "type": "esriFieldTypeDouble",
   "alias": "Shape_Length",
   "domain": null
  }
 ],
 "indexes": [
  {
   "name": "FDO_OBJECTID",
   "fields": "OBJECTID",
   "isAscending": true,
   "isUnique": true,
   "description": ""
  },
  {
   "name": "FDO_Shape",
   "fields": "Shape",
   "isAscending": true,
   "isUnique": false,
   "description": ""
  }
 ],
 "relationships": [],
 "canModifyLayer": false,
 "canScaleSymbols": false,
 "hasLabels": false,
 "capabilities": "Map,Query,Data",
 "maxRecordCount": 1000,
 "supportsStatistics": true,
 "supportsAdvancedQueries": true,
 "supportedQueryFormats": "JSON, AMF, geoJSON",
 "ownershipBasedAccessControlForFeatures": {"allowOthersToQuery": true},
 "useStandardizedQueries": true,
 "advancedQueryCapabilities": {
  "useStandardizedQueries": true,
  "supportsStatistics": true,
  "supportsOrderBy": true,
  "supportsDistinct": true,
  "supportsPagination": true,
  "supportsTrueCurve": true,
  "supportsReturningQueryExtent": true,
  "supportsQueryWithDistance": true
 },
 "dateFieldsTimeReference": null
}
