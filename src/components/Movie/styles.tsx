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
		height: 30,
		backgroundColor: "blue",
		marginRight: 10,
		borderRadius: 10,
	},
	Description: {},
	Title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		marginBottom: 10,
	},
	TextContainer: {
		width: "60%",
	},
	BuyBtn: {
		backgroundColor: colors.darkGray,
		color: colors.white,
		borderRadius: 10,
	},
});
export default styles;
