import { Text, View } from "react-native";

export default function HomeScreen() {
  const Header = () => {
    return (
      <View
        style={{
          paddingTop: "15%",
          height: "15%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
            marginRight: 15,
            backgroundColor: "black",
          }}
        />
        <View
          style={{
            height: 50,
            width: "auto",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Hello Administrator
          </Text>
          <Text style={{ fontStyle: "italic" }}>How do you feel today?</Text>
        </View>
      </View>
    );
  };

  const Banner = () => {
    return (
      <View
        style={{
          height: "25%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "75%",
            width: "90%",
            backgroundColor: "grey",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Banner</Text>
        </View>
      </View>
    );
  };

  const Menus = () => {
    return (
      <View
        style={{
          height: "10%",
          padding: 10,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "30%",
            backgroundColor: "red",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Menu 1</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "30%",
            backgroundColor: "blue",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Menu 2</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "30%",
            backgroundColor: "purple",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Menu 3</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <Banner />
      <Menus />
      <View
        style={{ height: "35%", width: "100%", backgroundColor: "yellow" }}
      />
    </View>
  );
}
