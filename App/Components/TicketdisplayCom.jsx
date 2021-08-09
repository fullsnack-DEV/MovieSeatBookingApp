import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Qr code Import
import QRCode from "react-native-qrcode-svg";
import { FONTSTYLE } from "../Config/FontStyles";

export default function TicketdisplayCom({
  style,
  title,
  Date,
  Day,
  Time,
  seats,
}) {
  //text for the QR code

  const textstring = "https://github.com/fullsnack-DEV";

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.headingwrapper}>
        <Text style={styles.headingtxt}>{title}</Text>
        <Text style={styles.datetxt}>{Date} Feb</Text>
      </View>

      <View style={styles.datewrapper}>
        <Text style={styles.datetxt}>PVR</Text>
        <Text style={styles.headingtxt}>{Day}</Text>
        <Text style={styles.datetxt}>{Time}</Text>
      </View>
      <Text style={styles.seattxt}>No of Seats: {seats}</Text>
      <View style={styles.orderwrapper}>
        <Text style={styles.datetxt}>Ticket number</Text>
        <Text style={styles.ordertxt}>34255774</Text>
      </View>
      <View style={styles.qrwrapper}>
        <QRCode value={textstring} size={185} bgColor="red" fgColor="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 560,
    width: 280,
    backgroundColor: "#d9d9ff",
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 50,
  },
  headingwrapper: {
    marginTop: 40,
  },
  datewrapper: {
    marginTop: 25,
  },
  orderwrapper: { marginTop: 25 },
  headingtxt: {
    ...FONTSTYLE.heading2,
    color: "#000",
    textAlign: "center",
    fontSize: 22,
  },
  seattxt: {
    ...FONTSTYLE.heading2,
    color: "#000",
    textAlign: "center",
    fontSize: 15,
  },
  datetxt: {
    ...FONTSTYLE.heading4,
    color: "#000",
    textAlign: "center",
    marginVertical: 5,

    fontWeight: "bold",
  },
  ordertxt: {
    textAlign: "center",

    letterSpacing: 5,
    fontWeight: "bold",
    ...FONTSTYLE.heading2,
    color: "#000",
    fontSize: 25,
  },
  qrwrapper: {
    alignSelf: "center",
    marginTop: 25,
  },
});
