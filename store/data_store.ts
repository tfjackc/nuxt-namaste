import type { GeoJSON } from "leaflet";
import L from "leaflet";
export const useDataStore = defineStore('data_store', {
    state: () => ({
        drawer: true,
        rail: false,
        url_dialog: false,
        file_dialog: false,
        files: [],
        geojson: undefined as GeoJSON | undefined,
        form: false as boolean,
        loading: false as boolean,
        searchedValue: "" as string,
        geojson_layer: [] as any[],
        layerInfo: [] as any[],
        layerName: "" as string,
        layerCheckbox: true as boolean,
        tab: null as null | number,
        fieldNames: '' as string | [] as any[],
        fieldValues: '' as string | [] as any[],
    }),
    getters: {},
    actions: {
        async getGeoJSONWebService() {
            const geojson_url = this.searchedValue;

            try {
                const response = await fetch(geojson_url);

                if (response.ok) {
                    this.geojson = await response.json();
                    this.geojson_layer.push(this.geojson)
                    this.layerInfo.push(this.layerName)
                    // Close the v-form upon a successful data fetch
                    this.url_dialog = false;
                } else {
                    // Handle unsuccessful response (e.g., show an error message)
                    console.error('Failed to fetch data:', response.status, response.statusText);
                }
            } catch (error) {
                // Handle any other errors that might occur during the fetch
                console.error('Error during data fetch:', error);
            }
        },
    }
    });
        //     this.layerCheckbox = true;
        //
        //     // Assuming this.geojson is an object with a "features" array
        //     //@ts-ignore
        //     if (this.geojson && this.geojson.features.length > 0) {
        //         // Accessing the first feature in the features array
        //         //@ts-ignore
        //         const firstFeature = this.geojson.features[0];
        //
        //         // Ensure the first feature has properties
        //         //@ts-ignore
        //         if (this.geojson.features) {
        //             //@ts-ignore
        //             this.geojson.features.forEach((feature: any) => {
        //
        //                 const popupContent = Object.keys(feature.properties).map((fieldName, index) => {
        //
        //                    console.log(fieldName, index, Object.values(feature.properties)[index])
        //                    // return `<strong>${fieldName}</strong>: ${Object.values(feature.properties)[index]}`;
        //                 });
        //
        //               //  this.popupData.push(popupContent);
        //             });
        //             // this.fieldNames = Object.keys(firstFeature.properties);
        //             // this.fieldValues = Object.values(firstFeature.properties);
        //             //
        //             // const popupContent = this.fieldNames.map((fieldName, index) => {
        //             //     return `<strong>${fieldName}</strong>: ${this.fieldValues[index]}`;
        //             // }).join('<br>');
        //             //
        //             // this.popupData.push(popupContent);
        //             //
        //             // console.log(this.popupData);
        //         } else {
        //             console.error('The first feature does not have properties');
        //         }
        //
        //
        //     } else {
        //         console.error('GeoJSON data is missing or invalid');
        //     }
        // },


//https://services8.arcgis.com/8PAo5HGmvRMlF2eU/arcgis/rest/services/MILO/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson
//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json