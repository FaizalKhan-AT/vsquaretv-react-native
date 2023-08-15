import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Share,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Drawer from "../Drawers/Drawer";
const ItemCard = ({ data }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleShare = async (link) => {
    try {
      await Share.share({
        message: link,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpenBrowser = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Drawer data={data} handleOpen={handleOpenDrawer} open={openDrawer} />
      <TouchableNativeFeedback onPress={handleOpenDrawer}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Image source={data.icon} style={styles.logo} />
            <Text style={{ fontWeight: 500 }}>{data.name}</Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => handleShare(data.link)}
              style={styles.icon.share}
            >
              <Ionicons
                name="share-outline"
                size={25}
                // color={"rgba(0,225,0,.9)"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon.open}
              onPress={() => handleOpenBrowser(data.link)}
            >
              <Ionicons
                name="open-outline"
                size={25}
                // color={"rgba(0,221,221,.9)"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "88%",
    height: 73,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
      },
      android: {
        shadowRadius: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 10,
      },
    }),
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    width: "74%",
  },
  logo: {
    width: 40,
    height: 40,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginEnd: 10,
  },
  icon: {
    share: {
      // backgroundColor: "rgba(0,218,0,.2)",
      padding: 5,
      borderRadius: 8,
    },
    open: {
      // backgroundColor: "rgba(0,220,220,.2)",
      padding: 5,
      borderRadius: 8,
    },
  },
});
export default ItemCard;
