import { Modal, ScrollView, Text, View } from "react-native";
import { Button, IconElement, Input, Radio } from "@ui-kitten/components";
import { useState } from "react";
import React from "react";

import DateTimePicker from "react-native-ui-datepicker";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

//nama, umur, berat, tinggi, kelamin

export default function Stunting() {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const CalendarIcon = (props: any): IconElement => (
    <Ionicons
      {...props}
      name="calendar"
      size={20}
      onPress={() => setShow(!show)}
    />
  );

  return (
    <ScrollView>
      <View
        style={{
          rowGap: 25,
        }}
      >
        <Input
          label={"Nama"}
          value={value}
          placeholder="Nama"
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{
            backgroundColor: "#fafeff",
            borderWidth: 1,
          }}
        />
        <View>
          <Input
            label={"Tanggal Lahir"}
            value={moment(new Date(date)).format("DD-MM-YYYY")}
            readOnly
            style={{
              backgroundColor: "#fafeff",
              borderWidth: 1,
            }}
            accessoryRight={() => <CalendarIcon />}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
              setShow(!show);
            }}
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                display: "flex",
                position: "absolute",
                zIndex: 10,
                paddingTop: 50,
                backgroundColor: "white",
              }}
            >
              <DateTimePicker
                date={date}
                mode="single"
                onChange={(nextDate: any) => {
                  setDate(nextDate.date);
                  setShow(!show);
                }}
              />
            </View>
          </Modal>
        </View>
        <Input
          label={"Umur"}
          value={value}
          placeholder="Umur"
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{
            backgroundColor: "#fafeff",
            borderWidth: 1,
          }}
        />
        <Input
          label={"Berat"}
          value={value}
          placeholder="Berat"
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{
            backgroundColor: "#fafeff",
            borderWidth: 1,
          }}
        />
        <Input
          label={"Tinggi"}
          value={value}
          placeholder="Tinggi"
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{
            backgroundColor: "#fafeff",
            borderWidth: 1,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Radio checked={true}>Laki-laki</Radio>
          <Radio checked={false}>Perempuan</Radio>
        </View>
        <Button status="basic">
          <Text style={{ color: "black" }}>HITUNG</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
