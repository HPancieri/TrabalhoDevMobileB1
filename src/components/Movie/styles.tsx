import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

const maxWidth = Dimensions.get("window").width * 0.9;
const maxHeight = Dimensions.get("window").height * 0.8;

const styles = StyleSheet.create({
	MovieContainer: {
		width: maxWidth,
		height: maxHeight,
		backgroundColor: colors.blue,
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 10,
		margin: 15,
		borderRadius: 10,
	},
	Image: {
		width: "90%",
		height: "60%",
		margin: 10,
		borderRadius: 10,
		resizeMode: "cover",
	},
	Description: {},
	Title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	TextContainer: {
		width: "90%",
		// justifyContent: "space-around",
	},
	BuyBtn: {
		backgroundColor: colors.darkBlue,
		color: colors.white,
		borderRadius: 10,
		textAlign: "center",
		padding: 10,
		margin: 10,
	},
	BuyText: {
		fontSize: 18,
		fontWeight: "bold",
		color: colors.green,
		justifyContent: "center",
		alignItems: "center",
	},
	ShowMoreText: {
		textAlign: "center",
		color: colors.darkerBlue,
		fontWeight: "bold",
		marginTop: 5,
	},
	Subtitle: {
		textAlign: "center",
		fontWeight: "bold",
	},
	TitleSubtitleContainer: {
		margin: 10,
	},
});
export default styles;
