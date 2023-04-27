import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
	MovieContainer: {
		flexDirection: "row",
		width: "90%",
		backgroundColor: colors.blue,
		justifyContent: "space-around",
		padding: 15,
		margin: 15,
		borderRadius: 10,
	},
	Image: {
		width: "40%",
		height: "90%",
		backgroundColor: "blue",
		margin: 15,
		borderRadius: 10,
	},
	Description: {},
	Title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	TextContainer: {
		width: "60%",
		marginRight: 10,
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
