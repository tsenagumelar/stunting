import useHooks from "@/app/utils/hooks";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const { datas } = useHooks();

  const Header = () => {
    return (
      <View
        style={{
          height: "12.5%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <StatusBar style="auto" translucent={false} />
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
            marginRight: 15,
            borderWidth: 1,
            borderColor: Colors[colorScheme ?? "light"].tint,
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
          height: "22.5%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            height: "90%",
            width: "100%",
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.5,
            backgroundColor: "white",
            borderColor: Colors[colorScheme ?? "light"].tint,
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>Banner</Text>
        </View>
      </View>
    );
  };

  const Menus = () => {
    return (
      <View
        style={{
          height: "25%",
          paddingHorizontal: 10,
          width: "100%",
          display: "flex",
        }}
      >
        <View
          style={{
            height: "80%",
            marginTop: 10,
            width: "100%",
            display: "flex",
            borderWidth: 0.5,
            backgroundColor: "white",
            borderRadius: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderColor: Colors[colorScheme ?? "light"].tint,
          }}
        >
          {datas.Menus.map((item) => (
            <Link href={`/${item.name}`} key={item.name}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "25%",
                }}
              >
                <View
                  key={item.name}
                  style={{
                    width: 60,
                    height: 60,
                    borderWidth: 1,
                    display: "flex",
                    marginBottom: 5,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: Colors[colorScheme ?? "light"].tint,
                  }}
                >
                  <TabBarIcon
                    name={item.icon1.value.name}
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                </View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </View>
            </Link>
          ))}
        </View>
      </View>
    );
  };

  const Article = () => {
    return (
      <View
        style={{
          height: "40%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            height: "40%",
            width: "100%",
            borderRadius: 20,
            display: "flex",
            borderWidth: 0.5,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            borderColor: Colors[colorScheme ?? "light"].tint,
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>Article</Text>
        </View>
        <View
          style={{
            height: "40%",
            width: "100%",
            borderRadius: 20,
            display: "flex",
            borderWidth: 0.5,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            borderColor: Colors[colorScheme ?? "light"].tint,
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>Article</Text>
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
      <Article />
    </View>
  );
}
