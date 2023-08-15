import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Drawer = ({ open, handleOpen, data }) => {
  const openShare = async (link) => {
    try {
      await Share.share({
        message: link,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const openBrowser = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  return (
    <Modal
      visible={open}
      animationType="slide"
      transparent
      onRequestClose={handleOpen}
    >
      <StatusBar backgroundColor={open ? "rgba(0, 0, 0, 0.5)" : "#fff"} />
      <View style={styles.modalContainer}>
        <View style={[styles.modal, { height: windowHeight * 0.7 }]}>
          <View style={styles.topBar}>
            <Ionicons
              onPress={handleOpen}
              name="close-circle"
              size={35}
              color={"rgb(0,0,0)"}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image source={data.icon} style={styles.logo} />
            <Text style={styles.title}>{data.name}</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              marginVertical: 20,
              paddingHorizontal: 20,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 17, fontWeight: 600, marginVertical: 5 }}
              >
                About us:
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  textAlign: "justify",
                  paddingEnd: 8,
                }}
              >
                {data.about}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ fontSize: 17, fontWeight: 600, marginVertical: 5 }}
              >
                Follow us:
              </Text>
              <View style={styles.socialMediaContainer}>
                {data.socialMedias.map((item, idx) => {
                  return (
                    <TouchableOpacity
                      key={idx + item.link}
                      onPress={() => openBrowser(item.link)}
                    >
                      <Image
                        source={item.icon}
                        style={{
                          objectFit: "contain",
                          width: 30,
                          height: 30,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.btn, styles.shareBtn]}
              onPress={() => openShare(data.link)}
            >
              <Text style={[styles.btnText, { color: "rgb(13, 110, 253)" }]}>
                Share
              </Text>
              <Ionicons
                color={"rgb(13, 110, 253)"}
                name="share-social-outline"
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, styles.visitBtn]}
              onPress={() => openBrowser(data.link)}
            >
              <Text style={[styles.btnText, { color: "#ffffff" }]}>Visit</Text>
              <Ionicons color={"#fff"} name="open-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
  },
  topBar: {
    paddingTop: 23,
    paddingHorizontal: 25,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  logo: {
    width: 90,
    height: 90,
  },
  logoContainer: {
    alignItems: "center",
    flexDirection: "column",
    width: windowWidth,
    rowGap: 5,
    top: -15,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
  },
  btnContainer: {
    width: "100%",
    marginVertical: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  socialMediaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    gap: 15,
    justifyContent: "center",
    marginVertical: 15,
    paddingBottom: 20,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "48%",
    borderRadius: 25,
    borderColor: "#0d6efd",
    color: "rgba(13, 110, 253,0.2)",
    borderWidth: 2,
  },
  visitBtn: {
    backgroundColor: "#0d6efd",
  },
  shareBtn: {
    backgroundColor: "rgba(13, 110, 253,0.2)",
  },
  btnText: { fontSize: 15, fontWeight: 500 },
});

export default Drawer;
