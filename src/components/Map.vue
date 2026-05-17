<template>
  <div>
    <h2>Layers</h2>

    <fieldset class="mapModeFieldset">
      <label class="mapMode" v-for="opt in scopeOpts" :key="opt">
        <input type="radio" name="map-mode" :value="opt" v-model="mode" />
        {{ opt }}
      </label>
    </fieldset>

    <l-map
      class="mapContainer"
      :zoom="4"
      :center="[49.8153, 6.1296]"
      style="height: 720px; width: 100%"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <l-geo-json
        :geojson="featureCollection"
        :options="geoJsonOptions"
        @ready="onGeoJsonReady"
      />
    </l-map>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { ref, computed } from "vue";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";
import type { Feature, FeatureCollection } from "geojson";
import type { Layer } from "leaflet";

import { europeGeojson } from "../constants/data/europeGeojson";
import { ScopeOptions, type ScopeType } from "../constants/data/Scope";
import { mergeComplianceIntoFeatures } from "../constants/data/dataPreparator";
import { COLOR_MAP_EU } from "../constants/data/colorMaps";
import { euCompliances } from "../constants/data/euLayerData";

const scopeOpts = [ScopeOptions.National, ScopeOptions.Eu, ScopeOptions.Global];
const mode = ref<ScopeType>(ScopeOptions.Eu);

const preparedData = mergeComplianceIntoFeatures(europeGeojson, euCompliances);
const featureCollection = {
  type: "FeatureCollection",
  features: preparedData,
} as FeatureCollection;

const getStyle = (feature: Feature) => ({
  fillColor: COLOR_MAP_EU[feature?.properties?.Total] ?? "black",
  fillOpacity: 1,
  weight: 1,
  color: "white",
});

function onGeoJsonReady(leafletLayer: typeof LGeoJson) {
  leafletLayer.setStyle((feature: any) => getStyle(feature));
}

function onEachFeature(feature: Feature, layer: Layer) {
  const props = feature.properties;
  if (props?.NAME) {
    const popup = `
      <div style="background: white">
        <p style="background: white; color: black">
          <span style="font-weight: bold; color: black"">${props.NAME}</span><br>
          MiCA: ${props.MiCA}<br>
          DLT Pilot: ${props.DLT_Pilot}<br>
          DORA: ${props.DORA}<br>
          EU RPS: ${props.EU_RPS}<br>
          AMLD5, AMLD6: ${props.AMLD5_AMLD6}<br>
          FATF TR EU: ${props.FATF_TR_EU}<br>
        </p>
      </div>
    `;
    (layer as any).bindPopup(popup);
  }

  layer.on({
    mouseover: () => {
      (layer as any).setStyle({ weight: 4 });
    },
    mouseout: () => {
      (layer as any).setStyle(getStyle(feature));
    },
  });
}

const geoJsonOptions = computed(() => ({
  style: getStyle,
  onEachFeature,
}));
</script>

<style lang="sass">
@use "../styles/colorpalette" as colors

span
  background: white
  color: black

a
  background: white
  color: black

.mapContainer
  display: flex
  height: 720px
  width: 100%
  border: 1px solid white
  color: white

.mapModeFieldset
  border: none
  display: flex
  flex-direction: column

.mapMode
  display: inline-flex
  align-items: center
  padding: 10px
  border-radius: 8px
  gap: 6px
  background: transparent
  color: colors.$light-grey-1
  cursor: pointer
  user-select: none
  transition: background .12s, color .12s

  input[type="radio"]
    position: absolute
    opacity: 0
    width: 0
    height: 0
    pointer-events: none

  &:before
    content: ""
    display: inline-block
    width: 16px
    height: 16px
    border-radius: 50%
    border: 2px solid colors.$light-grey-1
    box-sizing: border-box

  &:has(input[type="radio"]:checked)
    background: rgba(255,200,69,0.06)
    color: colors.$uzh-gold
    &:before
      background: colors.$uzh-gold
      border-color: white
</style>
