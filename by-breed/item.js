import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const rating = (value) => "★".repeat(value) + "☆".repeat(5-value);


function FeatureItem({ label, value }) {
  return (
    <View style={styles.featureRow}>
      <Text style={styles.featureLabel}>{label}</Text>
      <Text style={styles.featureValue}>{rating(value)}</Text>
    </View>
  )
}

function Item({ animal }) {
  const { breed, ...features } = animal ?? {}
  const featureKeys = Object.keys(features ?? {})

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{breed}</Text>
      {featureKeys.length === 0 ? (
        <Text style={styles.emptyText}>No features listed.</Text>
      ) : (
        <View style={styles.features}>
          {featureKeys.map((key) => (
            <FeatureItem key={key} label={key} value={features[key]} />
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    color: "#111",
    marginBottom: 8,
  },
  features: {
    gap: 6,
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureLabel: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  featureValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  emptyText: {
    fontSize: 14,
    color: "#666",
  },
})
export default Item