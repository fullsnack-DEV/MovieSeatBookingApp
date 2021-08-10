import React from "react";
import { View, Text, StyleSheet } from "react-native";
//redux
import { useSelector } from "react-redux";
import Screen from "../Components/Screen";
import TicketdisplayCom from "../Components/TicketdisplayCom";
import { FONTSTYLE } from "../Config/FontStyles";

export default function TicketScreen() {
  //data

  const seatdata = useSelector((state) => state.seat);
  const datesdata = useSelector((state) => state.dates);
  const timedata = useSelector((state) => state.time);

  const date = datesdata[0];
  const seat = seatdata[0];
  const time = timedata[0];
  return (
    <Screen style={styles.container}>
      {seatdata[0] ? (
        <Text style={styles.ticketxt}>No Ticket</Text>
      ) : (
        <Text style={styles.ticketxt}> Your Tickets</Text>
      )}
      {seatdata[0] ? null : (
        <TicketdisplayCom
          title={seat.title}
          Date={date.date}
          Day={date.day}
          Time={time.time}
          seats={seat.seat}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  ticketxt: {
    ...FONTSTYLE.heading3,
    textAlign: "center",
    marginTop: 15,
  },
});
