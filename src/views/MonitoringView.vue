<template>
  <h1>Monitoring</h1>
  <div class="tableWrapper">
    <table class="monitoringTable">
      <thead>
        <tr>
          <th>Address</th>
          <th>Risk level</th>
          <th>Transactions list (TXs associated with a committed crime)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in initialData" :key="r.address">
          <td class="addrCell">
            <div class="address">{{ r.address }}</div>
          </td>

          <td>
            <span :class="['riskPill', 'risk' + r.risk]">
              {{ r.risk }}
            </span>
          </td>

          <td>
            <div v-if="r.transactions" class="txCard">
              <p class="txField">
                <strong>Entry ID:</strong> {{ r.transactions.entryId }}
              </p>
              <p class="txField"><strong>TX list:</strong></p>
              <ul class="txList">
                <li
                  v-for="(tx, i) in r.transactions.txList"
                  :key="i"
                  class="txEntry"
                >
                  {{ tx }}
                </li>
              </ul>
              <p class="txField">
                <strong>Case description:</strong>
                {{ r.transactions.caseDescription }}
              </p>
            </div>
            <span v-else class="dash">-</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { initialData } from "../constants/monitoringDummyData.ts";
</script>

<style lang="sass">
@use "../styles/colorpalette" as colors

$text-color: black
$background: white

.tableWrapper
  overflow-x: auto
  border-radius: 6px
  margin-top: 20px

.monitoringTable
  width: 100%
  border-collapse: collapse
  min-width: 720px

.monitoringTable thead th
  text-align: left
  padding: 12px 14px
  background: grey
  color: white
  border-bottom: 1px solid grey

.monitoringTable tbody td
  padding: 12px 14px
  vertical-align: top
  border-bottom: 1px solid #f1f5f9
  font-size: 13px
  color: $text-color
  background: $background

.addrCell .address
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  max-width: 260px
  color: black
  background: white

.riskPill
  display: inline-block
  padding: 6px 10px
  border-radius: 999px
  color: white
  font-weight: 600
  text-transform: capitalize

.riskLow
  background: colors.$uzh-apple

.riskMedium
  background: colors.$uzh-gold

.riskHigh
  background: colors.$uzh-berry

.txCard
  background: $background
  border: 1px solid #eef2f7
  padding: 10px
  border-radius: 6px
  color: $text-color
  max-width: 720px

.txField
  color: $text-color
  background: $background
  margin: 6px 0
  background: white

.txField strong
  margin-right: 6px
  color: $text-color
  background: $background
  font-weight: 700

.txList
  background: $background
  margin: 6px 0 0 18px
  padding: 0
  list-style: disc

.txEntry
  color: $text-color
  background: $background

li
  color: $text-color
  background: $background
  list-style: none

.dash
  background: $background
  color: $text-color
  font-weight: 600
</style>
